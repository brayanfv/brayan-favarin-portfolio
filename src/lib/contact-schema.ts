import { z } from "zod";

import type { ContactFormCopy } from "@/i18n/types";

export const contactFields = ["name", "email", "message"] as const;
export type ContactField = (typeof contactFields)[number];
export type ContactFieldErrors = Partial<Record<ContactField, string>>;

export function getContactFormSchema(copy: ContactFormCopy) {
  return z.object({
    name: z.string().trim().min(2, copy.validation.nameMin).max(80, copy.validation.nameMax),
    email: z.string().trim().email(copy.validation.emailInvalid).max(254, copy.validation.emailMax),
    message: z.string().trim().min(10, copy.validation.messageMin).max(2000, copy.validation.messageMax),
    website: z.string().max(120),
    turnstileToken: z.string().trim().min(1, copy.turnstile.pending).max(2048, copy.turnstile.failed),
  });
}

export function getContactClientSchema(copy: ContactFormCopy) {
  return getContactFormSchema(copy).omit({ turnstileToken: true });
}

export type ContactFormValues = z.infer<ReturnType<typeof getContactClientSchema>>;

export function getContactFieldErrors(error: z.ZodError): ContactFieldErrors {
  const fieldErrors: ContactFieldErrors = {};
  for (const issue of error.issues) {
    const field = issue.path[0];
    if (typeof field === "string" && contactFields.includes(field as ContactField) && !fieldErrors[field as ContactField]) {
      fieldErrors[field as ContactField] = issue.message;
    }
  }
  return fieldErrors;
}
