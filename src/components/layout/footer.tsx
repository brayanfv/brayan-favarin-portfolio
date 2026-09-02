import { ArrowUp } from "lucide-react";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { SocialLinks } from "@/components/shared/social-links";
import type { Locale } from "@/i18n/config";
import { getSectionHref } from "@/i18n/routing";
import type { LocaleContent } from "@/i18n/types";

interface FooterProps {
  content: LocaleContent;
  locale: Locale;
}

export function Footer({ content, locale }: FooterProps) {
  const homeHref = getSectionHref(locale, "home");

  return (
    <footer className="bg-background">
      <Container className="py-10 sm:py-12">
        <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
          <div>
            <Link aria-label={`${content.personal.name} — ${content.ui.footer.backToTop.toLowerCase()}`} className="inline-flex min-h-11 items-center font-mono text-lg font-semibold tracking-[-0.08em] text-foreground transition-colors hover:text-primary-light focus-visible:rounded-sm" href={homeHref}>
              {content.personal.brand}
            </Link>
            <p className="mt-3 max-w-md text-sm leading-6 text-foreground-secondary">
              {content.ui.footer.builtWith}
            </p>
          </div>
          <address className="not-italic md:justify-self-end">
            <SocialLinks className="md:justify-end" content={content} />
          </address>
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-xs text-foreground-muted">
            {content.ui.footer.copyright.replace("{name}", content.personal.name)}
          </p>
          <Link className="inline-flex min-h-11 items-center gap-2 rounded-sm font-mono text-xs text-foreground-muted transition-colors hover:text-primary-light focus-visible:outline-offset-2" href={homeHref}>
            {content.ui.footer.backToTop}
            <ArrowUp aria-hidden="true" size={15} strokeWidth={1.8} />
          </Link>
        </div>
      </Container>
    </footer>
  );
}
