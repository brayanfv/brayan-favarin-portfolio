import { BookOpenText, Code2, ExternalLink, MonitorUp } from "lucide-react";

import { PrimaryButton } from "@/components/ui/primary-button";
import { SecondaryButton } from "@/components/ui/secondary-button";
import type { LocaleContent } from "@/i18n/types";
import type { Project } from "@/types/project";

export function ProjectLinks({ content, project }: { content: LocaleContent; project: Project }) {
  const hasLinks = Boolean(project.repositoryUrl) || Boolean(project.demoUrl) || Boolean(project.documentationUrl);
  const copy = content.ui.project.links;
  return <div><p className="max-w-2xl text-base leading-7 text-foreground-secondary">{hasLinks ? copy.availableDescription : copy.unavailableDescription}</p>{hasLinks ? <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">{project.demoUrl ? <PrimaryButton aria-label={`${copy.deploy}: ${project.title}`} className="sm:w-auto" href={project.demoUrl} rel="noopener noreferrer" target="_blank"><MonitorUp aria-hidden="true" size={17} strokeWidth={1.8} />{copy.deploy}<ExternalLink aria-hidden="true" size={14} strokeWidth={1.8} /></PrimaryButton> : null}{project.repositoryUrl ? <SecondaryButton aria-label={`${copy.code}: ${project.title}`} className="sm:w-auto" href={project.repositoryUrl} rel="noopener noreferrer" target="_blank"><Code2 aria-hidden="true" size={17} strokeWidth={1.8} />{copy.code}<ExternalLink aria-hidden="true" size={14} strokeWidth={1.8} /></SecondaryButton> : null}{project.documentationUrl ? <SecondaryButton aria-label={`${copy.documentation}: ${project.title}`} className="sm:w-auto" href={project.documentationUrl} rel="noopener noreferrer" target="_blank"><BookOpenText aria-hidden="true" size={17} strokeWidth={1.8} />{copy.documentation}<ExternalLink aria-hidden="true" size={14} strokeWidth={1.8} /></SecondaryButton> : null}</div> : null}</div>;
}
