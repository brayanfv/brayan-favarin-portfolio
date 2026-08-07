import { BriefcaseBusiness, Clock3, Sparkles } from "lucide-react";

import { ContactForm } from "@/components/contact/contact-form";
import { Container } from "@/components/layout/container";
import { AnimatedSection } from "@/components/shared/animated-section";
import { SectionHeading } from "@/components/shared/section-heading";
import { SocialLinks } from "@/components/shared/social-links";
import { contactHighlights, contactSectionData } from "@/data/contact";
import { personalData } from "@/data/personal";

const contactHighlightIcons = {
  briefcase: BriefcaseBusiness,
  clock: Clock3,
  sparkles: Sparkles,
} as const;

export function ContactSection() {
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

          <div className="relative grid min-w-0 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(25rem,0.92fr)] lg:items-start lg:gap-14 xl:gap-20">
            <AnimatedSection className="min-w-0">
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

              <ul className="mt-10 border-t border-border/90 sm:mt-12">
                {contactHighlights.map((highlight) => {
                  const Icon = contactHighlightIcons[highlight.icon];

                  return (
                    <li
                      className="grid grid-cols-[2.25rem_minmax(0,1fr)] gap-4 border-b border-border/90 py-5 sm:grid-cols-[2.5rem_minmax(0,1fr)] sm:gap-5 sm:py-6"
                      key={highlight.title}
                    >
                      <span
                        aria-hidden="true"
                        className="flex size-9 items-center justify-center rounded-md border border-border bg-background/55 text-primary-light"
                      >
                        <Icon size={17} strokeWidth={1.7} />
                      </span>
                      <div className="min-w-0 border-l border-primary/35 pl-4 sm:pl-5">
                        <h3 className="text-sm font-medium text-foreground sm:text-base">
                          {highlight.title}
                        </h3>
                        <p className="mt-1.5 max-w-lg text-sm leading-6 text-foreground-secondary">
                          {highlight.description}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </AnimatedSection>

            <AnimatedSection className="min-w-0" delay={0.12}>
              <div className="rounded-xl border border-border bg-background/55 p-5 shadow-[0_20px_60px_rgb(0_0_0/0.2)] sm:p-7 lg:p-8">
                <p className="inline-flex items-center gap-2 font-mono text-xs text-foreground-secondary">
                  <span
                    aria-hidden="true"
                    className="size-1.5 rounded-full bg-success"
                  />
                  {personalData.availability}
                </p>

                <ContactForm />

                <address className="mt-8 border-t border-border pt-6 not-italic">
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
