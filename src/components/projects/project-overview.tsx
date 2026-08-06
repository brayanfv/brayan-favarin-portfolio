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
  const details: OverviewDetail[] = [
    ...(project.category
      ? [{ label: "Tipo de projeto", value: project.category }]
      : []),
    ...(project.role ? [{ label: "Papel", value: project.role }] : []),
    { label: "Status", value: project.status },
    ...(project.year ? [{ label: "Ano", value: project.year }] : []),
    {
      label: "Stack principal",
      value: project.technologies.slice(0, 4).join(" · "),
    },
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
                {project.overview}
              </p>
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
