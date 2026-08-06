import { ArrowUp } from "lucide-react";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { SocialLinks } from "@/components/shared/social-links";
import { personalData } from "@/data/personal";

export function Footer() {
  return (
    <footer className="bg-background">
      <Container className="py-10 sm:py-12">
        <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
          <div>
            <Link
              aria-label={`${personalData.name} — voltar ao início`}
              className="inline-flex min-h-11 items-center font-mono text-lg font-semibold tracking-[-0.08em] text-foreground transition-colors hover:text-primary-light focus-visible:rounded-sm"
              href="#inicio"
            >
              {personalData.brand}
            </Link>
            <p className="mt-3 max-w-md text-sm leading-6 text-foreground-secondary">
              Desenvolvido com Next.js, TypeScript e Tailwind CSS.
            </p>
          </div>

          <address className="not-italic md:justify-self-end">
            <SocialLinks className="md:justify-end" />
          </address>
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-xs text-foreground-muted">
            © 2026 {personalData.name}.
          </p>
          <Link
            className="inline-flex min-h-11 items-center gap-2 rounded-sm font-mono text-xs text-foreground-muted transition-colors hover:text-primary-light focus-visible:outline-offset-2"
            href="#inicio"
          >
            Voltar ao topo
            <ArrowUp aria-hidden="true" size={15} strokeWidth={1.8} />
          </Link>
        </div>
      </Container>
    </footer>
  );
}
