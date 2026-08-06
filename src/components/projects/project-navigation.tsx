import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";

import { joinClassNames } from "@/lib/utils";
import type { Project } from "@/types/project";

interface ProjectNavigationProps {
  nextProject?: Project;
  previousProject?: Project;
}

export function ProjectNavigation({
  nextProject,
  previousProject,
}: ProjectNavigationProps) {
  return (
    <nav
      aria-label="Navegação entre projetos"
      className="border-t border-border py-12 sm:py-14"
    >
      <Link
        className="inline-flex min-h-11 items-center rounded-sm font-mono text-xs text-foreground-muted transition-colors hover:text-primary-light focus-visible:outline-offset-2"
        href="/#projetos"
      >
        Voltar para projetos
      </Link>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {previousProject ? (
          <Link
            aria-label={`Projeto anterior: ${previousProject.title}`}
            className="group flex min-h-28 items-center gap-4 rounded-xl border border-border bg-card p-5 transition-[border-color,background-color] duration-200 hover:border-primary/60 hover:bg-primary/5 focus-visible:outline-offset-2 motion-reduce:transition-none"
            href={`/projetos/${previousProject.slug}`}
          >
            <ArrowLeft
              aria-hidden="true"
              className="shrink-0 text-primary-light transition-transform group-hover:-translate-x-0.5 motion-reduce:transform-none"
              size={18}
              strokeWidth={1.8}
            />
            <span>
              <span className="font-mono text-[0.6875rem] text-foreground-muted">
                Projeto anterior
              </span>
              <span className="mt-2 block font-medium text-foreground">
                {previousProject.title}
              </span>
            </span>
          </Link>
        ) : null}

        {nextProject ? (
          <Link
            aria-label={`Próximo projeto: ${nextProject.title}`}
            className={joinClassNames(
              "group flex min-h-28 items-center justify-between gap-4 rounded-xl border border-border bg-card p-5 text-right transition-[border-color,background-color] duration-200 hover:border-primary/60 hover:bg-primary/5 focus-visible:outline-offset-2 motion-reduce:transition-none",
              !previousProject && "sm:col-start-2",
            )}
            href={`/projetos/${nextProject.slug}`}
          >
            <span className="ml-auto">
              <span className="font-mono text-[0.6875rem] text-foreground-muted">
                Próximo projeto
              </span>
              <span className="mt-2 block font-medium text-foreground">
                {nextProject.title}
              </span>
            </span>
            <ArrowRight
              aria-hidden="true"
              className="shrink-0 text-primary-light transition-transform group-hover:translate-x-0.5 motion-reduce:transform-none"
              size={18}
              strokeWidth={1.8}
            />
          </Link>
        ) : null}
      </div>
    </nav>
  );
}
