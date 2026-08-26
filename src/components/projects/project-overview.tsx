import { Container } from "@/components/layout/container";
import { AnimatedSection } from "@/components/shared/animated-section";
import type { Project } from "@/types/project";

interface ProjectOverviewProps {
  project: Project;
}

interface OverviewDetail {
  label: string;
  value: string;
}

export function ProjectOverview({ project }: ProjectOverviewProps) {
  const details: readonly OverviewDetail[] = [
    { label: "Tipo de projeto", value: project.category },
    { label: "Papel", value: project.roleSummary },
    { label: "Status", value: project.status },
    { label: "Ano", value: project.year },
  ];

  return (
    <section
      aria-labelledby="project-overview-heading"
      className="border-b border-border bg-background-secondary"
    >
      <Container className="py-16 sm:py-20">
        <AnimatedSection>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(22rem,0.9fr)] lg:items-start lg:gap-20">
            <div>
              <p className="font-mono text-xs tracking-[0.16em] text-primary-light uppercase">
                Visão geral
              </p>
              <h2
                className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-foreground sm:text-4xl"
                id="project-overview-heading"
              >
                O projeto em perspectiva.
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-7 text-foreground-secondary sm:text-lg sm:leading-8">
                {project.overview.description}
              </p>
              <dl className="mt-8 grid gap-6 border-t border-border pt-6 sm:grid-cols-2">
                <div>
                  <dt className="font-mono text-[0.6875rem] tracking-[0.12em] text-foreground-muted uppercase">
                    Objetivo
                  </dt>
                  <dd className="mt-2 text-sm leading-6 text-foreground-secondary">
                    {project.overview.objective}
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-[0.6875rem] tracking-[0.12em] text-foreground-muted uppercase">
                    Contexto
                  </dt>
                  <dd className="mt-2 text-sm leading-6 text-foreground-secondary">
                    {project.overview.context}
                  </dd>
                </div>
              </dl>
            </div>

            <dl className="grid gap-x-8 sm:grid-cols-2">
              {details.map((detail) => (
                <div
                  className="border-t border-border py-5"
                  key={detail.label}
                >
                  <dt className="font-mono text-[0.6875rem] tracking-[0.12em] text-foreground-muted uppercase">
                    {detail.label}
                  </dt>
                  <dd className="mt-2 text-sm leading-6 text-foreground">
                    {detail.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
