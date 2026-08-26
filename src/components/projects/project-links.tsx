import { BookOpenText, Code2, ExternalLink, MonitorUp } from "lucide-react";

import { PrimaryButton } from "@/components/ui/primary-button";
import { SecondaryButton } from "@/components/ui/secondary-button";
import type { Project } from "@/types/project";

interface ProjectLinksProps {
  project: Project;
}

export function ProjectLinks({ project }: ProjectLinksProps) {
  const hasLinks =
    Boolean(project.repositoryUrl) ||
    Boolean(project.demoUrl) ||
    Boolean(project.documentationUrl);

  return (
    <div>
      <p className="max-w-2xl text-base leading-7 text-foreground-secondary">
        {hasLinks
          ? "Acesse os recursos públicos disponíveis para conhecer melhor o projeto."
          : "Os links públicos deste projeto serão adicionados assim que estiverem disponíveis."}
      </p>
      {hasLinks ? (
        <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          {project.demoUrl ? (
            <PrimaryButton
              aria-label={`Abrir o deploy de ${project.title} em uma nova aba`}
              className="sm:w-auto"
              href={project.demoUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              <MonitorUp aria-hidden="true" size={17} strokeWidth={1.8} />
              Ver deploy
              <ExternalLink aria-hidden="true" size={14} strokeWidth={1.8} />
            </PrimaryButton>
          ) : null}
          {project.repositoryUrl ? (
            <SecondaryButton
              aria-label={`Ver o código de ${project.title} no GitHub em uma nova aba`}
              className="sm:w-auto"
              href={project.repositoryUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Code2 aria-hidden="true" size={17} strokeWidth={1.8} />
              GitHub
              <ExternalLink aria-hidden="true" size={14} strokeWidth={1.8} />
            </SecondaryButton>
          ) : null}
          {project.documentationUrl ? (
            <SecondaryButton
              aria-label={`Abrir a documentação de ${project.title} em uma nova aba`}
              className="sm:w-auto"
              href={project.documentationUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              <BookOpenText aria-hidden="true" size={17} strokeWidth={1.8} />
              Documentação
              <ExternalLink aria-hidden="true" size={14} strokeWidth={1.8} />
            </SecondaryButton>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
