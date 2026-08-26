import { ArrowRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import { ProjectArchitecture } from "@/components/projects/project-architecture";
import { ProjectDetailGrid } from "@/components/projects/project-detail-grid";
import { ProjectGallery } from "@/components/projects/project-gallery";
import { ProjectHero } from "@/components/projects/project-hero";
import { ProjectLinks } from "@/components/projects/project-links";
import { ProjectNavigation } from "@/components/projects/project-navigation";
import { ProjectOverview } from "@/components/projects/project-overview";
import { ProjectSection } from "@/components/projects/project-section";
import { ProjectStack } from "@/components/projects/project-stack";
import { AnimatedSection } from "@/components/shared/animated-section";
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
  return (
    <article>
      <ProjectHero project={project} />
      <ProjectOverview project={project} />

      <Container>
        <div className="mx-auto max-w-5xl">
          <ProjectSection
            id="o-que-este-projeto-demonstra"
            index="01"
            title="O que este projeto demonstra"
          >
            <ProjectDetailGrid items={project.demonstrates} />
          </ProjectSection>

          <ProjectSection id="meu-papel" index="02" title="Meu papel">
            <ProjectDetailGrid items={project.roles} />
          </ProjectSection>

          <ProjectSection id="funcionalidades" index="03" title="Funcionalidades">
            <ProjectDetailGrid items={project.features} />
          </ProjectSection>

          <ProjectGallery index="04" project={project} />

          <ProjectSection id="arquitetura" index="05" title="Arquitetura">
            <ProjectArchitecture architecture={project.architecture} />
          </ProjectSection>

          <ProjectSection id="stack-tecnica" index="06" title="Stack técnica">
            <ProjectStack groups={project.stack} />
          </ProjectSection>

          <ProjectSection
            id="decisoes-tecnicas"
            index="07"
            title="Decisões técnicas"
          >
            <ProjectDetailGrid items={project.decisions} />
          </ProjectSection>

          <ProjectSection id="aprendizados" index="08" title="Aprendizados">
            <ul className="grid gap-x-8 gap-y-4 md:grid-cols-2">
              {project.learnings.map((learning) => (
                <li
                  className="grid grid-cols-[0.5rem_minmax(0,1fr)] gap-3 text-sm leading-6 text-foreground-secondary sm:text-base"
                  key={learning}
                >
                  <span
                    aria-hidden="true"
                    className="mt-[0.65rem] size-1 rounded-full bg-primary"
                  />
                  <span>{learning}</span>
                </li>
              ))}
            </ul>
          </ProjectSection>

          <ProjectSection id="resultado" index="09" title="Resultado">
            <p className="max-w-3xl text-base leading-7 text-foreground-secondary sm:text-lg sm:leading-8">
              {project.result.description}
            </p>
            <ul className="mt-7 grid gap-x-8 gap-y-4 md:grid-cols-2">
              {project.result.highlights.map((highlight) => (
                <li
                  className="grid grid-cols-[0.5rem_minmax(0,1fr)] gap-3 text-sm leading-6 text-foreground-secondary sm:text-base"
                  key={highlight}
                >
                  <span
                    aria-hidden="true"
                    className="mt-[0.65rem] size-1 rounded-full bg-primary"
                  />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </ProjectSection>

          <ProjectSection id="links" index="10" title="Links">
            <ProjectLinks project={project} />
          </ProjectSection>

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
