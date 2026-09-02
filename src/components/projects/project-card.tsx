import { BookOpen, Code2, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { ProjectStatus } from "@/components/projects/project-status";
import { TechnologyTag } from "@/components/shared/technology-tag";
import type { Locale } from "@/i18n/config";
import { getProjectPath } from "@/i18n/routing";
import type { LocaleContent } from "@/i18n/types";
import type { Project } from "@/types/project";

export function ProjectCard({ content, locale, project }: { content: LocaleContent; locale: Locale; project: Project }) {
  return <article aria-labelledby={`project-${project.slug}-title`} className="group flex h-full flex-col overflow-hidden rounded-[1.125rem] border border-border bg-card transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_20px_60px_rgb(0_0_0/0.24)] motion-reduce:transform-none motion-reduce:transition-none">
    <div className="relative aspect-[21/10] overflow-hidden border-b border-border bg-background-secondary"><Image alt={project.imageAlt} className="object-cover transition-transform duration-300 group-hover:scale-[1.015] motion-reduce:transform-none motion-reduce:transition-none" fill sizes="(min-width: 768px) 50vw, 100vw" src={project.image} /></div>
    <div className="flex flex-1 flex-col p-6 sm:p-8">
      <div className="flex flex-wrap items-center justify-between gap-3"><span className="font-mono text-[0.625rem] tracking-[0.14em] text-primary-light uppercase">{project.category}</span><ProjectStatus content={content} status={project.status} /></div>
      <h3 className="mt-6 text-2xl font-semibold tracking-[-0.035em] text-foreground sm:text-3xl" id={`project-${project.slug}-title`}>{project.title}</h3>
      <p className="mt-3 text-sm font-medium leading-6 text-primary-light">{project.subtitle}</p><p className="mt-5 text-sm leading-7 text-foreground-secondary sm:text-base">{project.shortDescription}</p>
      <ul aria-label={`${content.ui.technology.primary}: ${project.title}`} className="mt-6 flex flex-wrap gap-2">{project.mainTechnologies.map((technology) => <li key={technology}><TechnologyTag label={technology} /></li>)}</ul>
      <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
        <Link aria-label={`${content.ui.project.card.caseStudy}: ${project.title}`} className="inline-flex min-h-11 items-center gap-2 rounded-md bg-primary px-4 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-light focus-visible:outline-offset-2" href={getProjectPath(locale, project.slug)}><BookOpen aria-hidden="true" size={16} strokeWidth={1.8} />{content.ui.project.card.caseStudy}</Link>
        {project.repositoryUrl ? <a aria-label={`${content.ui.project.card.code}: ${project.title}`} className="inline-flex min-h-11 items-center gap-2 rounded-md text-sm font-medium text-foreground transition-colors hover:text-primary-light focus-visible:outline-offset-2" href={project.repositoryUrl} rel="noopener noreferrer" target="_blank"><Code2 aria-hidden="true" size={17} strokeWidth={1.8} />{content.ui.project.card.code}<ExternalLink aria-hidden="true" size={14} strokeWidth={1.8} /></a> : null}
        {project.demoUrl ? <a aria-label={`${content.ui.project.card.deploy}: ${project.title}`} className="inline-flex min-h-11 items-center gap-2 rounded-md text-sm font-medium text-foreground transition-colors hover:text-primary-light focus-visible:outline-offset-2" href={project.demoUrl} rel="noopener noreferrer" target="_blank">{content.ui.project.card.deploy}<ExternalLink aria-hidden="true" size={14} strokeWidth={1.8} /></a> : null}
      </div>
    </div>
  </article>;
}
