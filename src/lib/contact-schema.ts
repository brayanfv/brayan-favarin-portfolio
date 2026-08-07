import { z } from "zod";

export const contactFields = ["name", "email", "message"] as const;

export type ContactField = (typeof contactFields)[number];
export type ContactFieldErrors = Partial<Record<ContactField, string>>;

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Informe um nome com pelo menos 2 caracteres.")
    .max(80, "O nome deve ter no máximo 80 caracteres."),
  email: z
    .string()
    .trim()
    .email("Informe um endereço de e-mail válido.")
    .max(254, "O e-mail deve ter no máximo 254 caracteres."),
  message: z
    .string()
    .trim()
    .min(10, "A mensagem deve ter pelo menos 10 caracteres.")
    .max(2000, "A mensagem deve ter no máximo 2000 caracteres."),
  website: z.string().max(120),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export function getContactFieldErrors(error: z.ZodError): ContactFieldErrors {
  const fieldErrors: ContactFieldErrors = {};

  for (const issue of error.issues) {
    const field = issue.path[0];

    if (
      typeof field === "string" &&
      contactFields.includes(field as ContactField) &&
      !fieldErrors[field as ContactField]
    ) {
      fieldErrors[field as ContactField] = issue.message;
    }
  }

  return fieldErrors;
}
