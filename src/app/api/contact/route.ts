import { Resend } from "resend";

import {
  contactFormSchema,
  getContactFieldErrors,
  type ContactFieldErrors,
} from "@/lib/contact-schema";

const MAX_REQUEST_BYTES = 10_000;
const GENERIC_ERROR_MESSAGE =
  "Não foi possível enviar sua mensagem agora. Tente novamente ou entre em contato pelos links disponíveis.";
const SUCCESS_MESSAGE = "Mensagem enviada com sucesso. Obrigado pelo contato!";

export const runtime = "nodejs";

function jsonResponse(
  body: { success: boolean; message: string; fieldErrors?: ContactFieldErrors },
  status: number,
) {
  return Response.json(body, { status });
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function createEmailHtml(name: string, email: string, message: string): string {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message).replaceAll("\n", "<br />");

  return `
    <h1>Nova mensagem recebida pelo portfólio</h1>
    <p><strong>Nome:</strong> ${safeName}</p>
    <p><strong>E-mail:</strong> ${safeEmail}</p>
    <p><strong>Mensagem:</strong><br />${safeMessage}</p>
    <p><strong>Origem:</strong> Portfólio profissional</p>
  `;
}

export async function POST(request: Request) {
  const contentType = request.headers.get("content-type")?.toLowerCase() ?? "";

  if (!contentType.includes("application/json")) {
    return jsonResponse(
      { success: false, message: "Não foi possível processar sua mensagem." },
      415,
    );
  }

  let payload: unknown;

  try {
    const rawBody = await request.text();

    if (new TextEncoder().encode(rawBody).byteLength > MAX_REQUEST_BYTES) {
      return jsonResponse(
        { success: false, message: "Não foi possível processar sua mensagem." },
        413,
      );
    }

    payload = JSON.parse(rawBody) as unknown;
  } catch {
    return jsonResponse(
      { success: false, message: "Não foi possível processar sua mensagem." },
      400,
    );
  }

  const validation = contactFormSchema.safeParse(payload);

  if (!validation.success) {
    return jsonResponse(
      {
        success: false,
        message: "Confira os dados informados e tente novamente.",
        fieldErrors: getContactFieldErrors(validation.error),
      },
      400,
    );
  }

  const { name, email, message, website } = validation.data;

  if (website.trim().length > 0) {
    return jsonResponse({ success: true, message: SUCCESS_MESSAGE }, 200);
  }

  const apiKey = process.env.RESEND_API_KEY?.trim();
  const toEmail = process.env.CONTACT_TO_EMAIL?.trim();
  const fromEmail = process.env.CONTACT_FROM_EMAIL?.trim();

  if (!apiKey || !toEmail || !fromEmail) {
    return jsonResponse({ success: false, message: GENERIC_ERROR_MESSAGE }, 503);
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      subject: `Nova mensagem pelo portfólio — ${name}`,
      text: [
        "Nova mensagem recebida pelo portfólio",
        "",
        `Nome: ${name}`,
        `E-mail: ${email}`,
        "",
        "Mensagem:",
        message,
        "",
        "Origem: Portfólio profissional",
      ].join("\n"),
      html: createEmailHtml(name, email, message),
      replyTo: email,
    });

    if (error) {
      return jsonResponse({ success: false, message: GENERIC_ERROR_MESSAGE }, 502);
    }
  } catch {
    return jsonResponse({ success: false, message: GENERIC_ERROR_MESSAGE }, 502);
  }

  return jsonResponse({ success: true, message: SUCCESS_MESSAGE }, 200);
}
