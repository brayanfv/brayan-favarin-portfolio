import { ExperienceTimeline } from "@/components/experience/experience-timeline";
import { Container } from "@/components/layout/container";
import { AnimatedSection } from "@/components/shared/animated-section";
import { SectionHeading } from "@/components/shared/section-heading";
import { experiences, experienceSectionData } from "@/data/experiences";

export function ExperienceSection() {
  return (
    <section
      aria-labelledby="experience-heading"
      className="anchor-target border-b border-border bg-background-secondary py-[var(--space-section)]"
      id="experiencia"
    >
      <Container>
        <AnimatedSection>
          <SectionHeading
            description={experienceSectionData.description}
            eyebrow={experienceSectionData.eyebrow}
            title={experienceSectionData.title}
            titleId="experience-heading"
          />
        </AnimatedSection>

        <div className="mt-14 sm:mt-16">
          <ExperienceTimeline experiences={experiences} />
        </div>
      </Container>
    </section>
  );
}
