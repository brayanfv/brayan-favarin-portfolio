import { Code2, ExternalLink } from "lucide-react";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { ProjectStatus } from "@/components/projects/project-status";
import { AnimatedSection } from "@/components/shared/animated-section";
import { TechnologyTag } from "@/components/shared/technology-tag";
import { PrimaryButton } from "@/components/ui/primary-button";
import { SecondaryButton } from "@/components/ui/secondary-button";
import type { Project } from "@/types/project";

interface ProjectHeroProps {
  project: Project;
}

export function ProjectHero({ project }: ProjectHeroProps) {
  return (
    <header
      className="anchor-target relative overflow-hidden border-b border-border pt-28 pb-20 sm:pt-32 sm:pb-24"
      id="inicio"
    >
      <div
        aria-hidden="true"
        className="hero-grid pointer-events-none absolute inset-0"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-28 left-1/2 size-[36rem] -translate-x-1/2 opacity-80"
        style={{ background: "var(--gradient-glow)" }}
      />

      <Container className="relative">
        <AnimatedSection>
          <nav aria-label="Breadcrumb">
            <ol className="flex min-w-0 flex-wrap items-center gap-x-2 gap-y-1 font-mono text-xs text-foreground-muted">
              <li>
                <Link
                  className="inline-flex min-h-11 items-center rounded-sm transition-colors hover:text-primary-light focus-visible:outline-offset-2"
                  href="/#inicio"
                >
                  Início
                </Link>
              </li>
              <li className="inline-flex items-center gap-2">
                <span aria-hidden="true">/</span>
                <Link
                  className="inline-flex min-h-11 items-center rounded-sm transition-colors hover:text-primary-light focus-visible:outline-offset-2"
                  href="/#projetos"
                >
                  Projetos
                </Link>
              </li>
              <li className="inline-flex min-w-0 items-center gap-2 text-foreground-secondary">
                <span aria-hidden="true">/</span>
                <span
                  aria-current="page"
                  className="inline-flex min-h-11 items-center break-words"
                >
                  {project.title}
                </span>
              </li>
            </ol>
          </nav>
        </AnimatedSection>

        <div className="mt-12 max-w-5xl">
          <AnimatedSection delay={0.05}>
            <div className="flex flex-wrap items-center gap-3">
              {project.category ? (
                <span className="font-mono text-xs tracking-[0.14em] text-primary-light uppercase">
                  {project.category}
                </span>
              ) : null}
              <ProjectStatus status={project.status} />
              {project.year ? (
                <span className="font-mono text-xs text-foreground-muted">
                  {project.year}
                </span>
              ) : null}
            </div>

            <h1 className="mt-7 max-w-5xl text-[clamp(2.6rem,7vw,5rem)] leading-[0.96] font-semibold tracking-[-0.055em] text-balance break-words text-foreground">
              {project.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 font-medium text-primary-light sm:text-xl">
              {project.subtitle}
            </p>
            <p className="mt-5 max-w-3xl text-base leading-7 text-foreground-secondary sm:text-lg sm:leading-8">
              {project.description}
            </p>
          </AnimatedSection>

          <AnimatedSection className="mt-8" delay={0.11}>
            <ul
              aria-label={`Tecnologias utilizadas em ${project.title}`}
              className="flex flex-wrap gap-2"
            >
              {project.technologies.map((technology) => (
                <li key={technology}>
                  <TechnologyTag label={technology} />
                </li>
              ))}
            </ul>
          </AnimatedSection>

          {project.repositoryUrl || project.demoUrl ? (
            <AnimatedSection
              className="mt-9 flex flex-col gap-3 sm:flex-row"
              delay={0.16}
            >
              {project.demoUrl ? (
                <PrimaryButton
                  aria-label={`Ver demonstração de ${project.title} em uma nova aba`}
                  className="sm:w-auto"
                  href={project.demoUrl}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Ver demonstração
                  <ExternalLink
                    aria-hidden="true"
                    size={16}
                    strokeWidth={1.8}
                  />
                </PrimaryButton>
              ) : null}

              {project.repositoryUrl ? (
                <SecondaryButton
                  aria-label={`Ver código de ${project.title} no GitHub em uma nova aba`}
                  className="sm:w-auto"
                  href={project.repositoryUrl}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Code2 aria-hidden="true" size={17} strokeWidth={1.8} />
                  Ver código
                  <ExternalLink
                    aria-hidden="true"
                    size={14}
                    strokeWidth={1.8}
                  />
                </SecondaryButton>
              ) : null}
            </AnimatedSection>
          ) : null}
        </div>
      </Container>
    </header>
  );
}
