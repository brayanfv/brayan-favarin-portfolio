import { Mail } from "lucide-react";

import { Container } from "@/components/layout/container";
import { AnimatedSection } from "@/components/shared/animated-section";
import { SectionHeading } from "@/components/shared/section-heading";
import { SocialLinks } from "@/components/shared/social-links";
import { PrimaryButton } from "@/components/ui/primary-button";
import { contactSectionData } from "@/data/contact";
import { personalData } from "@/data/personal";
import { socialLinks } from "@/data/social-links";

export function ContactSection() {
  const emailHref = socialLinks.find(
    (link) => link.label === "E-mail" && link.href?.startsWith("mailto:"),
  )?.href;

  return (
    <section
      aria-labelledby="contact-heading"
      className="anchor-target border-b border-border bg-background-secondary py-[var(--space-section)]"
      id="contato"
    >
      <Container>
        <div className="relative isolate min-w-0 overflow-hidden rounded-[1.25rem] border border-border bg-card/75 p-6 shadow-[0_32px_100px_rgb(0_0_0/0.22)] sm:p-10 lg:p-14">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgb(255_255_255/0.02)_1px,transparent_1px),linear-gradient(90deg,rgb(255_255_255/0.02)_1px,transparent_1px)] bg-[size:48px_48px] opacity-60"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-32 -right-32 size-96 rounded-full bg-primary/12 blur-3xl"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute right-5 -bottom-12 font-mono text-[8rem] font-semibold tracking-[-0.1em] text-primary/[0.035] sm:right-10 sm:text-[11rem]"
          >
            {personalData.brand}
          </span>

          <div className="relative grid min-w-0 gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(18rem,0.8fr)] lg:items-end lg:gap-16">
            <AnimatedSection>
              <SectionHeading
                eyebrow={contactSectionData.eyebrow}
                title={contactSectionData.title}
                titleId="contact-heading"
              />

              <div className="mt-6 max-w-2xl space-y-4">
                {contactSectionData.description.map((paragraph) => (
                  <p
                    className="text-base leading-7 text-foreground-secondary sm:text-lg sm:leading-8"
                    key={paragraph}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection className="min-w-0" delay={0.12}>
              <div className="border-t border-border pt-6 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10">
                <p className="inline-flex items-center gap-2 font-mono text-xs text-foreground-secondary">
                  <span
                    aria-hidden="true"
                    className="size-1.5 rounded-full bg-success"
                  />
                  {personalData.availability}
                </p>

                {emailHref ? (
                  <PrimaryButton
                    aria-label={`Enviar e-mail para ${personalData.name}`}
                    className="mt-6 w-full sm:w-auto"
                    href={emailHref}
                  >
                    <Mail aria-hidden="true" size={17} strokeWidth={1.8} />
                    {contactSectionData.primaryActionLabel}
                  </PrimaryButton>
                ) : null}

                <address className="mt-7 not-italic">
                  <p className="mb-3 font-mono text-[0.6875rem] tracking-[0.14em] text-foreground-muted uppercase">
                    {contactSectionData.channelsLabel}
                  </p>
                  <SocialLinks variant="labeled" />
                </address>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </Container>
    </section>
  );
}
