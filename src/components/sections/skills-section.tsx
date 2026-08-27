import { Container } from "@/components/layout/container";
import { AnimatedSection } from "@/components/shared/animated-section";
import { SectionHeading } from "@/components/shared/section-heading";
import { TechnologyGroup } from "@/components/technologies/technology-group";
import { TechnologyItem } from "@/components/technologies/technology-item";
import {
  technologiesSectionData,
  technologyGroups,
} from "@/data/technologies";

export function SkillsSection() {
  const mainGroups = technologyGroups.filter(
    (group) => group.category !== "Práticas",
  );
  const practicesGroup = technologyGroups.find(
    (group) => group.category === "Práticas",
  );

  return (
    <section
      aria-labelledby="technologies-heading"
      className="anchor-target border-b border-border py-[var(--space-section)]"
      id="tecnologias"
    >
      <Container>
        <AnimatedSection>
          <SectionHeading
            description={technologiesSectionData.description}
            eyebrow={technologiesSectionData.eyebrow}
            title={technologiesSectionData.title}
            titleId="technologies-heading"
          />
        </AnimatedSection>

        <p className="mt-6 max-w-2xl text-sm leading-6 text-foreground-secondary">
          <span className="mr-2 font-mono text-[0.6875rem] tracking-[0.12em] text-primary-light uppercase">
            Foco
          </span>
          {technologiesSectionData.focusDescription}
        </p>

        <div className="mt-12 grid gap-x-12 gap-y-12 lg:grid-cols-2">
          {mainGroups.map((group, index) => (
            <AnimatedSection delay={0.05 + index * 0.06} key={group.category}>
              <TechnologyGroup
                group={group}
                index={index}
              />
            </AnimatedSection>
          ))}
        </div>

        {practicesGroup ? (
          <AnimatedSection className="mt-14" delay={0.18}>
            <div className="border-t border-border/70 pt-7">
              <div className="grid gap-6 lg:grid-cols-[15rem_minmax(0,1fr)]">
                <div>
                  <p className="font-mono text-[0.625rem] text-primary-light">
                    05
                  </p>
                  <h3 className="mt-2 font-mono text-sm font-medium text-foreground">
                    Práticas
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-foreground-secondary">
                    {technologiesSectionData.practicesDescription}
                  </p>
                </div>

                <ul className="grid content-start gap-2 sm:grid-cols-2 xl:grid-cols-3">
                  {practicesGroup.items.map((technology) => (
                    <TechnologyItem
                      key={`${technology.category}-${technology.name}`}
                      technology={technology}
                      variant="practice"
                    />
                  ))}
                </ul>
              </div>
            </div>
          </AnimatedSection>
        ) : null}
      </Container>
    </section>
  );
}
