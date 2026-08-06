import { Container } from "@/components/layout/container";
import { ProjectGrid } from "@/components/projects/project-grid";
import { AnimatedSection } from "@/components/shared/animated-section";
import { SectionHeading } from "@/components/shared/section-heading";
import { projects, projectsSectionData } from "@/data/projects";

export function ProjectsSection() {
  return (
    <section
      aria-labelledby="projects-heading"
      className="anchor-target border-b border-border py-[var(--space-section)]"
      id="projetos"
    >
      <Container>
        <AnimatedSection>
          <SectionHeading
            description={projectsSectionData.description}
            eyebrow={projectsSectionData.eyebrow}
            title={projectsSectionData.title}
            titleId="projects-heading"
          />
        </AnimatedSection>

        <div className="mt-14 sm:mt-16">
          <ProjectGrid projects={projects} />
        </div>
      </Container>
    </section>
  );
}
