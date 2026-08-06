import { Container } from "@/components/layout/container";
import { AnimatedSection } from "@/components/shared/animated-section";
import { SectionHeading } from "@/components/shared/section-heading";
import { aboutQuickFacts, personalData } from "@/data/personal";

export function AboutSection() {
  return (
    <section
      aria-labelledby="about-heading"
      className="anchor-target border-b border-border bg-background-secondary py-[var(--space-section)]"
      id="sobre"
    >
      <Container>
        <AnimatedSection>
          <SectionHeading
            eyebrow={personalData.about.eyebrow}
            title={personalData.about.title}
            titleId="about-heading"
          />
        </AnimatedSection>

        <div className="mt-14 grid gap-14 lg:grid-cols-[minmax(0,1.4fr)_minmax(17rem,0.6fr)] lg:gap-20">
          <AnimatedSection className="max-w-3xl space-y-5" delay={0.06}>
            {personalData.about.paragraphs.map((paragraph) => (
              <p
                className="text-base leading-7 text-foreground-secondary sm:text-lg sm:leading-8"
                key={paragraph}
              >
                {paragraph}
              </p>
            ))}
          </AnimatedSection>

          <aside aria-label={`Informações rápidas sobre ${personalData.name}`}>
            <dl>
              {aboutQuickFacts.map((fact, index) => (
                <AnimatedSection delay={0.08 + index * 0.05} key={fact.label}>
                  <div className="grid grid-cols-[2rem_1fr] gap-3 border-t border-border py-5">
                    <span
                      aria-hidden="true"
                      className="pt-0.5 font-mono text-[0.625rem] text-primary-light"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <dt className="font-mono text-[0.6875rem] tracking-[0.12em] text-foreground-muted uppercase">
                        {fact.label}
                      </dt>
                      <dd className="mt-2 text-sm leading-6 text-foreground sm:text-base">
                        {fact.value}
                      </dd>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </dl>
          </aside>
        </div>
      </Container>
    </section>
  );
}
