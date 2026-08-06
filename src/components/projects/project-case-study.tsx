import { ArrowRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import { ProjectGallery } from "@/components/projects/project-gallery";
import { ProjectHero } from "@/components/projects/project-hero";
import { ProjectNavigation } from "@/components/projects/project-navigation";
import { ProjectOverview } from "@/components/projects/project-overview";
import { ProjectSection } from "@/components/projects/project-section";
import { AnimatedSection } from "@/components/shared/animated-section";
import { TechnologyTag } from "@/components/shared/technology-tag";
import { PrimaryButton } from "@/components/ui/primary-button";
import { contactSectionData } from "@/data/contact";
import type { Project } from "@/types/project";

interface ProjectCaseStudyProps {
  nextProject?: Project;
  previousProject?: Project;
  project: Project;
}

export function ProjectCaseStudy({
  nextProject,
  previousProject,
  project,
}: ProjectCaseStudyProps) {
  let visibleSectionIndex = 0;
  const getNextSectionIndex = () =>
    String(++visibleSectionIndex).padStart(2, "0");

  return (
    <article>
      <ProjectHero project={project} />
      <ProjectOverview project={project} />

      <Container>
        <div className="mx-auto max-w-5xl">
          {project.context ? (
            <ProjectSection
              description={project.context}
              id="contexto"
              index={getNextSectionIndex()}
              title="Contexto"
            />
          ) : null}

          {project.problem ? (
            <ProjectSection
              description={project.problem}
              id="problema"
              index={getNextSectionIndex()}
              title="O problema"
            />
          ) : null}

          {project.solution ? (
            <ProjectSection
              description={project.solution}
              id="solucao"
              index={getNextSectionIndex()}
              title="A solução"
            />
          ) : null}

          {project.features && project.features.length > 0 ? (
            <ProjectSection
              id="funcionalidades"
              index={getNextSectionIndex()}
              items={project.features}
              title="Principais funcionalidades"
            />
          ) : null}

          <ProjectSection
            id="tecnologias"
            index={getNextSectionIndex()}
            title="Tecnologias"
          >
            <ul
              aria-label={`Stack completa de ${project.title}`}
              className="flex flex-wrap gap-2"
            >
              {project.technologies.map((technology) => (
                <li key={technology}>
                  <TechnologyTag label={technology} />
                </li>
              ))}
            </ul>
          </ProjectSection>

          {project.architecture && project.architecture.length > 0 ? (
            <ProjectSection
              id="arquitetura"
              index={getNextSectionIndex()}
              items={project.architecture}
              title="Arquitetura"
            />
          ) : null}

          {project.decisions && project.decisions.length > 0 ? (
            <ProjectSection
              id="decisoes"
              index={getNextSectionIndex()}
              items={project.decisions}
              title="Decisões técnicas"
            />
          ) : null}

          {project.challenges && project.challenges.length > 0 ? (
            <ProjectSection
              id="desafios"
              index={getNextSectionIndex()}
              items={project.challenges}
              title="Desafios"
            />
          ) : null}

          {project.learnings && project.learnings.length > 0 ? (
            <ProjectSection
              id="aprendizados"
              index={getNextSectionIndex()}
              items={project.learnings}
              title="Aprendizados"
            />
          ) : null}

          {project.nextSteps && project.nextSteps.length > 0 ? (
            <ProjectSection
              id="proximos-passos"
              index={getNextSectionIndex()}
              items={project.nextSteps}
              title="Próximos passos"
            />
          ) : null}

          <ProjectGallery
            index={getNextSectionIndex()}
            project={project}
          />
          <ProjectNavigation
            nextProject={nextProject}
            previousProject={previousProject}
          />

          <AnimatedSection className="pb-[var(--space-section)]">
            <section
              aria-labelledby="project-contact-heading"
              className="relative overflow-hidden rounded-[1.25rem] border border-border bg-card p-6 sm:p-10"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-28 -right-24 size-72 rounded-full bg-primary/10 blur-3xl"
              />
              <div className="relative max-w-3xl">
                <p className="font-mono text-xs tracking-[0.16em] text-primary-light uppercase">
                  Próximo passo
                </p>
                <h2
                  className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-foreground sm:text-4xl"
                  id="project-contact-heading"
                >
                  {contactSectionData.title}
                </h2>
                <p className="mt-5 text-base leading-7 text-foreground-secondary sm:text-lg sm:leading-8">
                  {contactSectionData.description[0]}
                </p>
                <PrimaryButton className="mt-7 w-full sm:w-auto" href="/#contato">
                  Entrar em contato
                  <ArrowRight
                    aria-hidden="true"
                    size={17}
                    strokeWidth={1.8}
                  />
                </PrimaryButton>
              </div>
            </section>
          </AnimatedSection>
        </div>
      </Container>
    </article>
  );
}
