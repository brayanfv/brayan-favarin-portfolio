import { Resend } from "resend";

import { getLocaleContentFromUnknown } from "@/i18n/content";
import { getContactFieldErrors, getContactFormSchema, type ContactFieldErrors } from "@/lib/contact-schema";

const MAX_REQUEST_BYTES = 10_000;
const TURNSTILE_VERIFY_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify";
export const runtime = "nodejs";

function jsonResponse(body: { success: boolean; message: string; fieldErrors?: ContactFieldErrors }, status: number) {
  return Response.json(body, { status });
}

function escapeHtml(value: string): string {
  return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#39;");
}

function createEmailHtml(name: string, email: string, message: string, copy: ReturnType<typeof getLocaleContentFromUnknown>["contact"]["form"]) {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message).replaceAll("\n", "<br />");
  return `<h1>${copy.email.heading}</h1><p><strong>${copy.email.nameLabel}:</strong> ${safeName}</p><p><strong>${copy.email.emailLabel}:</strong> ${safeEmail}</p><p><strong>${copy.email.messageLabel}:</strong><br />${safeMessage}</p><p><strong>${copy.email.originLabel}:</strong> ${copy.email.originValue}</p>`;
}

function getStringProperty(payload: unknown, property: string): string | undefined {
  if (typeof payload !== "object" || payload === null || !(property in payload)) return undefined;
  const value = (payload as Record<string, unknown>)[property];
  return typeof value === "string" ? value : undefined;
}

function hasFilledHoneypot(payload: unknown): boolean {
  return getStringProperty(payload, "website")?.trim().length ? true : false;
}

function isTurnstileSuccess(value: unknown): boolean {
  return typeof value === "object" && value !== null && "success" in value && (value as Record<string, unknown>).success === true;
}

async function verifyTurnstileToken(token: string): Promise<"invalid" | "unavailable" | "valid"> {
  const secret = process.env.TURNSTILE_SECRET_KEY?.trim();
  if (!secret) return "unavailable";

  const body = new URLSearchParams({ response: token, secret });
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 8_000);
  try {
    const response = await fetch(TURNSTILE_VERIFY_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
      cache: "no-store",
      signal: controller.signal,
    });
    if (!response.ok) return "unavailable";
    return isTurnstileSuccess(await response.json()) ? "valid" : "invalid";
  } catch {
    return "unavailable";
  } finally {
    clearTimeout(timeout);
  }
}

export async function POST(request: Request) {
  const fallbackContent = getLocaleContentFromUnknown(undefined);
  const contentType = request.headers.get("content-type")?.toLowerCase() ?? "";
  if (!contentType.includes("application/json")) return jsonResponse({ success: false, message: fallbackContent.contact.form.feedback.processingError }, 415);

  let payload: unknown;
  try {
    const rawBody = await request.text();
    if (new TextEncoder().encode(rawBody).byteLength > MAX_REQUEST_BYTES) return jsonResponse({ success: false, message: fallbackContent.contact.form.feedback.processingError }, 413);
    payload = JSON.parse(rawBody) as unknown;
  } catch {
    return jsonResponse({ success: false, message: fallbackContent.contact.form.feedback.processingError }, 400);
  }

  const locale = typeof payload === "object" && payload !== null && "locale" in payload ? payload.locale : undefined;
  const content = getLocaleContentFromUnknown(locale);
  if (hasFilledHoneypot(payload)) return jsonResponse({ success: true, message: content.contact.form.feedback.success }, 200);

  const turnstileToken = getStringProperty(payload, "turnstileToken")?.trim();
  if (!turnstileToken) return jsonResponse({ success: false, message: content.contact.form.turnstile.pending }, 400);

  const turnstileVerification = await verifyTurnstileToken(turnstileToken);
  if (turnstileVerification === "unavailable") return jsonResponse({ success: false, message: content.contact.form.turnstile.unavailable }, 503);
  if (turnstileVerification === "invalid") return jsonResponse({ success: false, message: content.contact.form.turnstile.failed }, 403);

  const validation = getContactFormSchema(content.contact.form).safeParse(payload);
  if (!validation.success) return jsonResponse({ success: false, message: content.contact.form.feedback.invalidFields, fieldErrors: getContactFieldErrors(validation.error) }, 400);

  const { name, email, message } = validation.data;

  const apiKey = process.env.RESEND_API_KEY?.trim();
  const toEmail = process.env.CONTACT_TO_EMAIL?.trim();
  const fromEmail = process.env.CONTACT_FROM_EMAIL?.trim();
  if (!apiKey || !toEmail || !fromEmail) return jsonResponse({ success: false, message: content.contact.form.feedback.genericError }, 503);

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      subject: `${content.contact.form.email.subjectPrefix} — ${name}`,
      text: [content.contact.form.email.heading, "", `${content.contact.form.email.nameLabel}: ${name}`, `${content.contact.form.email.emailLabel}: ${email}`, "", `${content.contact.form.email.messageLabel}:`, message, "", `${content.contact.form.email.originLabel}: ${content.contact.form.email.originValue}`].join("\n"),
      html: createEmailHtml(name, email, message, content.contact.form),
      replyTo: email,
    });
    if (error) return jsonResponse({ success: false, message: content.contact.form.feedback.genericError }, 502);
  } catch {
    return jsonResponse({ success: false, message: content.contact.form.feedback.genericError }, 502);
  }
  return jsonResponse({ success: true, message: content.contact.form.feedback.success }, 200);
}
