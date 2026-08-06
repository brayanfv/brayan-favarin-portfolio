import { BookOpen, Code2, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { ProjectPlaceholder } from "@/components/projects/project-placeholder";
import { ProjectStatus } from "@/components/projects/project-status";
import { TechnologyTag } from "@/components/shared/technology-tag";
import { joinClassNames } from "@/lib/utils";
import type { Project } from "@/types/project";

export type ProjectCardVariant = "featured" | "default";

interface ProjectCardProps {
  project: Project;
  variant?: ProjectCardVariant;
}

const defaultTechnologyLimit = 5;

export function ProjectCard({
  project,
  variant = "default",
}: ProjectCardProps) {
  const isFeatured = variant === "featured";
  const technologyLimit = isFeatured
    ? project.technologies.length
    : defaultTechnologyLimit;
  const visibleTechnologies = project.technologies.slice(0, technologyLimit);
  const remainingTechnologies =
    project.technologies.length - visibleTechnologies.length;

  return (
    <article
      aria-labelledby={`project-${project.slug}-title`}
      className={joinClassNames(
        "group h-full overflow-hidden rounded-[1.125rem] border border-border bg-card transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_20px_60px_rgb(0_0_0/0.24)] motion-reduce:transform-none motion-reduce:transition-none",
        isFeatured && "xl:grid xl:grid-cols-[1.15fr_0.85fr]",
      )}
    >
      <div
        className={joinClassNames(
          "relative overflow-hidden border-b border-border xl:min-h-[27rem]",
          isFeatured ? "xl:border-r xl:border-b-0" : "min-h-64",
        )}
      >
        <div className="absolute inset-0 transition-transform duration-300 group-hover:scale-[1.015] motion-reduce:transform-none motion-reduce:transition-none">
          {project.image ? (
            <Image
              alt={project.imageAlt}
              className="object-cover"
              fill
              sizes={
                isFeatured
                  ? "(min-width: 1280px) 55vw, 100vw"
                  : "(min-width: 768px) 50vw, 100vw"
              }
              src={project.image}
            />
          ) : (
            <ProjectPlaceholder
              alt={project.imageAlt}
              visual={project.visual}
            />
          )}
        </div>
      </div>

      <div
        className={joinClassNames(
          "flex flex-col p-6 sm:p-8",
          isFeatured && "xl:justify-center",
        )}
      >
        <div className="flex flex-wrap items-center justify-between gap-3">
          <ProjectStatus status={project.status} />
          <span className="font-mono text-[0.625rem] tracking-[0.14em] text-foreground-muted uppercase">
            {isFeatured ? "Projeto em destaque" : "Projeto selecionado"}
          </span>
        </div>

        <h3
          className={joinClassNames(
            "mt-6 font-semibold tracking-[-0.035em] text-foreground",
            isFeatured ? "text-3xl sm:text-4xl" : "text-2xl sm:text-3xl",
          )}
          id={`project-${project.slug}-title`}
        >
          {project.title}
        </h3>
        <p className="mt-3 text-sm font-medium leading-6 text-primary-light">
          {project.subtitle}
        </p>
        <p className="mt-5 text-sm leading-7 text-foreground-secondary sm:text-base">
          {project.description}
        </p>

        <div
          aria-label={`Tecnologias utilizadas em ${project.title}`}
          className="mt-6 flex flex-wrap gap-2"
        >
          {visibleTechnologies.map((technology) => (
            <TechnologyTag key={technology} label={technology} />
          ))}
          {remainingTechnologies > 0 ? (
            <TechnologyTag
              ariaLabel={`${remainingTechnologies} tecnologias adicionais`}
              label={`+${remainingTechnologies}`}
            />
          ) : null}
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
          {project.repositoryUrl ? (
            <a
              aria-label={`Ver código de ${project.title} no GitHub`}
              className="inline-flex min-h-11 items-center gap-2 rounded-md text-sm font-medium text-foreground transition-colors hover:text-primary-light focus-visible:outline-offset-2"
              href={project.repositoryUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Code2 aria-hidden="true" size={17} strokeWidth={1.8} />
              Ver código
              <ExternalLink aria-hidden="true" size={14} strokeWidth={1.8} />
            </a>
          ) : null}

          {project.demoUrl ? (
            <a
              aria-label={`Ver demonstração de ${project.title}`}
              className="inline-flex min-h-11 items-center gap-2 rounded-md text-sm font-medium text-foreground transition-colors hover:text-primary-light focus-visible:outline-offset-2"
              href={project.demoUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              Ver demonstração
              <ExternalLink aria-hidden="true" size={14} strokeWidth={1.8} />
            </a>
          ) : null}

          <Link
            aria-label={`Ver detalhes de ${project.title}`}
            className="inline-flex min-h-11 items-center gap-2 rounded-md font-mono text-xs text-foreground-secondary transition-colors hover:text-primary-light focus-visible:outline-offset-2"
            href={`/projetos/${project.slug}`}
          >
            <BookOpen aria-hidden="true" size={15} strokeWidth={1.6} />
            Ver detalhes
          </Link>
        </div>
      </div>
    </article>
  );
}
