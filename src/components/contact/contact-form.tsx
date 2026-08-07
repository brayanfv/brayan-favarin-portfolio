"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";

import { contactSectionData } from "@/data/contact";
import {
  contactFields,
  contactFormSchema,
  getContactFieldErrors,
  type ContactField,
  type ContactFieldErrors,
  type ContactFormValues,
} from "@/lib/contact-schema";

const initialValues: ContactFormValues = {
  name: "",
  email: "",
  message: "",
  website: "",
};

const genericErrorMessage =
  "Não foi possível enviar sua mensagem agora. Tente novamente ou entre em contato pelos links disponíveis.";

type Feedback = {
  message: string;
  type: "error" | "success";
};

interface ContactApiResponse {
  fieldErrors?: ContactFieldErrors;
  message?: string;
  success?: boolean;
}

function readContactApiResponse(value: unknown): ContactApiResponse {
  if (typeof value !== "object" || value === null) {
    return {};
  }

  const record = value as Record<string, unknown>;
  const fieldErrors: ContactFieldErrors = {};

  for (const field of contactFields) {
    if (typeof record.fieldErrors === "object" && record.fieldErrors !== null) {
      const fieldError = (record.fieldErrors as Record<string, unknown>)[field];

      if (typeof fieldError === "string") {
        fieldErrors[field] = fieldError;
      }
    }
  }

  return {
    fieldErrors,
    message: typeof record.message === "string" ? record.message : undefined,
    success: typeof record.success === "boolean" ? record.success : undefined,
  };
}

export function ContactForm() {
  const [values, setValues] = useState<ContactFormValues>(initialValues);
  const [fieldErrors, setFieldErrors] = useState<ContactFieldErrors>({});
  const [feedback, setFeedback] = useState<Feedback | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const feedbackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (feedback?.type === "success") {
      feedbackRef.current?.focus();
    }
  }, [feedback]);

  function validateField(field: ContactField) {
    const validation = contactFormSchema.shape[field].safeParse(values[field]);

    setFieldErrors((currentErrors) => {
      const nextErrors = { ...currentErrors };

      if (validation.success) {
        delete nextErrors[field];
      } else {
        nextErrors[field] = validation.error.issues[0]?.message;
      }

      return nextErrors;
    });
  }

  function updateValue(field: keyof ContactFormValues, value: string) {
    setValues((currentValues) => ({ ...currentValues, [field]: value }));

    if (field !== "website") {
      setFieldErrors((currentErrors) => {
        if (!currentErrors[field]) {
          return currentErrors;
        }

        const nextErrors = { ...currentErrors };
        delete nextErrors[field];
        return nextErrors;
      });
    }

    setFeedback(null);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    const validation = contactFormSchema.safeParse(values);

    if (!validation.success) {
      const nextErrors = getContactFieldErrors(validation.error);
      setFieldErrors(nextErrors);
      setFeedback({
        type: "error",
        message: "Confira os campos destacados e tente novamente.",
      });

      const firstInvalidField = contactFields.find((field) => nextErrors[field]);
      document.getElementById(`contact-${firstInvalidField ?? "name"}`)?.focus();
      return;
    }

    setIsSubmitting(true);
    setFeedback(null);

    try {
      const response = await fetch("/api/contact", {
        body: JSON.stringify(values),
        headers: { "Content-Type": "application/json" },
        method: "POST",
      });
      const payload = readContactApiResponse(await response.json().catch(() => null));

      if (!response.ok || payload.success !== true) {
        setFieldErrors(payload.fieldErrors ?? {});
        setFeedback({
          type: "error",
          message: payload.message ?? genericErrorMessage,
        });
        return;
      }

      setValues(initialValues);
      setFieldErrors({});
      setFeedback({
        type: "success",
        message: payload.message ?? "Mensagem enviada com sucesso. Obrigado pelo contato!",
      });
    } catch {
      setFeedback({ type: "error", message: genericErrorMessage });
    } finally {
      setIsSubmitting(false);
    }
  }

  const inputClassName =
    "w-full rounded-md border border-border bg-background/70 px-3.5 py-3 text-base text-foreground outline-none transition-[border-color,box-shadow] placeholder:text-foreground-muted focus:border-primary focus:ring-2 focus:ring-primary/25";

  return (
    <form className="mt-7 space-y-5" noValidate onSubmit={handleSubmit}>
      <div>
        <label className="mb-2 block text-sm font-medium text-foreground" htmlFor="contact-name">
          Nome
        </label>
        <input
          aria-describedby={fieldErrors.name ? "contact-name-error" : undefined}
          aria-invalid={Boolean(fieldErrors.name)}
          autoComplete="name"
          className={inputClassName}
          id="contact-name"
          maxLength={80}
          name="name"
          onBlur={() => validateField("name")}
          onChange={(event) => updateValue("name", event.target.value)}
          required
          type="text"
          value={values.name}
        />
        {fieldErrors.name ? (
          <p className="mt-2 text-sm text-error" id="contact-name-error">
            {fieldErrors.name}
          </p>
        ) : null}
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-foreground" htmlFor="contact-email">
          E-mail
        </label>
        <input
          aria-describedby={fieldErrors.email ? "contact-email-error" : undefined}
          aria-invalid={Boolean(fieldErrors.email)}
          autoComplete="email"
          className={inputClassName}
          id="contact-email"
          maxLength={254}
          name="email"
          onBlur={() => validateField("email")}
          onChange={(event) => updateValue("email", event.target.value)}
          required
          type="email"
          value={values.email}
        />
        {fieldErrors.email ? (
          <p className="mt-2 text-sm text-error" id="contact-email-error">
            {fieldErrors.email}
          </p>
        ) : null}
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-foreground" htmlFor="contact-message">
          Mensagem
        </label>
        <textarea
          aria-describedby={fieldErrors.message ? "contact-message-error" : undefined}
          aria-invalid={Boolean(fieldErrors.message)}
          className={`${inputClassName} min-h-36 resize-y`}
          id="contact-message"
          maxLength={2000}
          name="message"
          onBlur={() => validateField("message")}
          onChange={(event) => updateValue("message", event.target.value)}
          required
          value={values.message}
        />
        {fieldErrors.message ? (
          <p className="mt-2 text-sm text-error" id="contact-message-error">
            {fieldErrors.message}
          </p>
        ) : null}
      </div>

      <div aria-hidden="true" className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden">
        <label htmlFor="contact-website">Website</label>
        <input
          autoComplete="off"
          id="contact-website"
          name="website"
          onChange={(event) => updateValue("website", event.target.value)}
          tabIndex={-1}
          type="text"
          value={values.website}
        />
      </div>

      <button
        className="inline-flex min-h-11 w-full items-center justify-center rounded-md bg-primary px-4 py-2 font-medium text-background transition-[background-color,transform] duration-200 hover:bg-primary-light focus-visible:outline-offset-2 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70 motion-reduce:transition-none sm:w-auto"
        disabled={isSubmitting}
        type="submit"
      >
        {isSubmitting ? "Enviando..." : contactSectionData.primaryActionLabel}
      </button>

      {feedback ? (
        <div
          aria-live="polite"
          className={`rounded-md border px-3.5 py-3 text-sm ${
            feedback.type === "success"
              ? "border-success/40 bg-success/10 text-foreground"
              : "border-error/40 bg-error/10 text-foreground"
          }`}
          ref={feedbackRef}
          role={feedback.type === "error" ? "alert" : "status"}
          tabIndex={-1}
        >
          {feedback.message}
        </div>
      ) : null}
    </form>
  );
}
