"use client";

import Script from "next/script";
import { useEffect, useRef, useState } from "react";

import type { Locale } from "@/i18n/config";
import type { ContactFormCopy } from "@/i18n/types";

interface TurnstileApi {
  remove: (widgetId: string) => void;
  render: (container: HTMLElement, options: TurnstileRenderOptions) => string;
  reset: (widgetId: string) => void;
}

interface TurnstileRenderOptions {
  callback: (token: string) => void;
  "error-callback": () => boolean;
  "expired-callback": () => void;
  language: TurnstileLanguage;
  "response-field": false;
  sitekey: string;
  size: TurnstileSize;
  "timeout-callback": () => void;
  theme: "dark";
}

type TurnstileSize = "compact" | "flexible";
type TurnstileLanguage = "en" | "pt-br";

declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

const turnstileLanguage: Record<Locale, TurnstileLanguage> = {
  "pt-BR": "pt-br",
  en: "en",
};

interface TurnstileWidgetProps {
  copy: ContactFormCopy["turnstile"];
  locale: Locale;
  onTokenChange: (token: string) => void;
  onVerificationError: () => void;
  resetKey: number;
  verified: boolean;
}

export function TurnstileWidget({ copy, locale, onTokenChange, onVerificationError, resetKey, verified }: TurnstileWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sizeContainerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  const previousResetKeyRef = useRef(resetKey);
  const handlersRef = useRef({ onTokenChange, onVerificationError });
  const [scriptState, setScriptState] = useState<"error" | "loading" | "ready">(() => (typeof window !== "undefined" && window.turnstile ? "ready" : "loading"));
  const [widgetSize, setWidgetSize] = useState<TurnstileSize>(() => (typeof window !== "undefined" && window.innerWidth >= 640 ? "flexible" : "compact"));

  useEffect(() => {
    handlersRef.current = { onTokenChange, onVerificationError };
  }, [onTokenChange, onVerificationError]);

  useEffect(() => {
    const container = sizeContainerRef.current;
    if (!container) return;

    const updateWidgetSize = () => {
      setWidgetSize(window.innerWidth >= 640 && container.clientWidth >= 300 ? "flexible" : "compact");
    };

    updateWidgetSize();
    const observer = new ResizeObserver(updateWidgetSize);
    observer.observe(container);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!siteKey || scriptState !== "ready" || !containerRef.current || widgetIdRef.current) return;

    const turnstile = window.turnstile;
    if (!turnstile) return;

    handlersRef.current.onTokenChange("");

    const resetAfterChallengeFailure = () => {
      handlersRef.current.onTokenChange("");
      handlersRef.current.onVerificationError();
      const widgetId = widgetIdRef.current;
      if (widgetId) turnstile.reset(widgetId);
    };

    widgetIdRef.current = turnstile.render(containerRef.current, {
      sitekey: siteKey,
      theme: "dark",
      size: widgetSize,
      language: turnstileLanguage[locale],
      "response-field": false,
      callback: (token) => handlersRef.current.onTokenChange(token),
      "error-callback": () => {
        handlersRef.current.onTokenChange("");
        handlersRef.current.onVerificationError();
        return true;
      },
      "expired-callback": resetAfterChallengeFailure,
      "timeout-callback": resetAfterChallengeFailure,
    });

    return () => {
      const widgetId = widgetIdRef.current;
      if (widgetId) turnstile.remove(widgetId);
      widgetIdRef.current = null;
    };
  }, [locale, scriptState, widgetSize]);

  useEffect(() => {
    if (previousResetKeyRef.current === resetKey) return;
    previousResetKeyRef.current = resetKey;
    const widgetId = widgetIdRef.current;
    if (widgetId) window.turnstile?.reset(widgetId);
  }, [resetKey]);

  if (!siteKey || scriptState === "error") {
    return <p className="text-sm leading-6 text-error" id="contact-turnstile-status" role="alert">{copy.unavailable}</p>;
  }

  return (
    <div aria-describedby="contact-turnstile-status" aria-label={copy.label} className="min-w-0 max-w-full space-y-2" role="group">
      <p className="text-sm font-medium text-foreground">{copy.label}</p>
      {scriptState === "loading" ? <p aria-live="polite" className="text-sm text-foreground-secondary" id="contact-turnstile-status">{copy.loading}</p> : <span className="sr-only" id="contact-turnstile-status">{verified ? copy.label : copy.pending}</span>}
      <div className="min-w-0 w-full max-w-full sm:max-w-[21rem]" ref={sizeContainerRef}>
        <div className="flex min-w-0 max-w-full justify-center sm:justify-start" ref={containerRef} />
      </div>
      <Script id="cloudflare-turnstile" onError={() => setScriptState("error")} onLoad={() => setScriptState("ready")} src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit" strategy="afterInteractive" />
    </div>
  );
}
