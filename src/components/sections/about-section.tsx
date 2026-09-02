import { Container } from "@/components/layout/container";
import { AnimatedSection } from "@/components/shared/animated-section";
import { SectionHeading } from "@/components/shared/section-heading";
import type { Locale } from "@/i18n/config";
import { getSectionId } from "@/i18n/routing";
import type { LocaleContent } from "@/i18n/types";

export function AboutSection({ content, locale }: { content: LocaleContent; locale: Locale }) {
  return (
    <section aria-labelledby="about-heading" className="anchor-target border-b border-border bg-background-secondary py-[var(--space-section)]" id={getSectionId(locale, "about")}>
      <Container>
        <AnimatedSection><SectionHeading eyebrow={content.personal.about.eyebrow} title={content.personal.about.title} titleId="about-heading" /></AnimatedSection>
        <div className="mt-14 grid gap-14 lg:grid-cols-[minmax(0,1.4fr)_minmax(17rem,0.6fr)] lg:gap-20">
          <AnimatedSection className="max-w-3xl space-y-5" delay={0.06}>
            {content.personal.about.paragraphs.map((paragraph) => <p className="text-base leading-7 text-foreground-secondary sm:text-lg sm:leading-8" key={paragraph}>{paragraph}</p>)}
          </AnimatedSection>
          <aside aria-label={content.ui.aboutAsideLabel.replace("{name}", content.personal.name)}>
            <dl>{content.quickFacts.map((fact, index) => <AnimatedSection delay={0.08 + index * 0.05} key={fact.label}><div className="grid grid-cols-[2rem_1fr] gap-3 border-t border-border py-5"><span aria-hidden="true" className="pt-0.5 font-mono text-[0.625rem] text-primary-light">{String(index + 1).padStart(2, "0")}</span><div><dt className="font-mono text-[0.6875rem] tracking-[0.12em] text-foreground-muted uppercase">{fact.label}</dt><dd className="mt-2 text-sm leading-6 text-foreground sm:text-base">{fact.value}</dd></div></div></AnimatedSection>)}</dl>
          </aside>
        </div>
      </Container>
    </section>
  );
}
