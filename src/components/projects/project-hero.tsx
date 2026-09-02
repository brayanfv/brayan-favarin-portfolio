import { Code2, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { ProjectStatus } from "@/components/projects/project-status";
import { AnimatedSection } from "@/components/shared/animated-section";
import { PrimaryButton } from "@/components/ui/primary-button";
import { SecondaryButton } from "@/components/ui/secondary-button";
import type { Locale } from "@/i18n/config";
import { getHomePath, getProjectsPath, getSectionId } from "@/i18n/routing";
import type { LocaleContent } from "@/i18n/types";
import type { Project } from "@/types/project";

export function ProjectHero({ content, locale, project }: { content: LocaleContent; locale: Locale; project: Project }) {
  const heroGridColumns = project.heroImageEmphasis ? "lg:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)]" : "lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]";
  const imageSizes = project.heroImageEmphasis ? "(min-width: 1024px) 56vw, 100vw" : "(min-width: 1024px) 50vw, 100vw";
  return <header className="anchor-target relative overflow-hidden border-b border-border pt-28 pb-20 sm:pt-32 sm:pb-24" id={getSectionId(locale, "home")}>
    <div aria-hidden="true" className="hero-grid pointer-events-none absolute inset-0" /><div aria-hidden="true" className="pointer-events-none absolute -top-28 left-1/2 size-[36rem] -translate-x-1/2 opacity-80" style={{ background: "var(--gradient-glow)" }} />
    <Container className="relative"><AnimatedSection><nav aria-label={content.ui.project.breadcrumb.label}><ol className="flex min-w-0 flex-wrap items-center gap-x-2 gap-y-1 font-mono text-xs text-foreground-muted"><li><Link className="inline-flex min-h-11 items-center rounded-sm transition-colors hover:text-primary-light focus-visible:outline-offset-2" href={getHomePath(locale)}>{content.ui.project.breadcrumb.home}</Link></li><li className="inline-flex items-center gap-2"><span aria-hidden="true">/</span><Link className="inline-flex min-h-11 items-center rounded-sm transition-colors hover:text-primary-light focus-visible:outline-offset-2" href={getProjectsPath(locale)}>{content.ui.project.breadcrumb.projects}</Link></li><li className="inline-flex min-w-0 items-center gap-2 text-foreground-secondary"><span aria-hidden="true">/</span><span aria-current="page" className="inline-flex min-h-11 items-center break-words">{project.title}</span></li></ol></nav></AnimatedSection>
      <div className={`mt-12 grid gap-12 ${heroGridColumns} lg:items-center lg:gap-16`}><div className="min-w-0"><AnimatedSection delay={0.05}><div className="flex flex-wrap items-center gap-3"><span className="font-mono text-xs tracking-[0.14em] text-primary-light uppercase">{project.category}</span><ProjectStatus content={content} status={project.status} /><span className="font-mono text-xs text-foreground-muted">{project.year}</span></div><h1 className="mt-7 text-[clamp(2.6rem,6vw,4.8rem)] leading-[0.96] font-semibold tracking-[-0.055em] text-balance break-words text-foreground">{project.title}</h1><p className="mt-6 max-w-3xl text-lg leading-8 font-medium text-primary-light sm:text-xl">{project.subtitle}</p><p className="mt-5 max-w-3xl text-base leading-7 text-foreground-secondary sm:text-lg sm:leading-8">{project.description}</p></AnimatedSection><AnimatedSection className="mt-9 flex flex-col gap-3 sm:flex-row" delay={0.12}>{project.demoUrl ? <PrimaryButton aria-label={`${content.ui.project.card.deploy}: ${project.title}`} className="sm:w-auto" href={project.demoUrl} rel="noopener noreferrer" target="_blank">{content.ui.project.links.deploy}<ExternalLink aria-hidden="true" size={16} strokeWidth={1.8} /></PrimaryButton> : null}{project.repositoryUrl ? <SecondaryButton aria-label={`${content.ui.project.card.code}: ${project.title}`} className="sm:w-auto" href={project.repositoryUrl} rel="noopener noreferrer" target="_blank"><Code2 aria-hidden="true" size={17} strokeWidth={1.8} />{content.ui.project.links.code}<ExternalLink aria-hidden="true" size={14} strokeWidth={1.8} /></SecondaryButton> : null}</AnimatedSection></div><AnimatedSection delay={0.12}><figure className="relative aspect-[21/10] overflow-hidden rounded-[1.125rem] border border-border bg-card shadow-[0_20px_60px_rgb(0_0_0/0.2)]"><Image alt={project.imageAlt} className="object-cover" fill sizes={imageSizes} src={project.image} /></figure></AnimatedSection></div>
    </Container>
  </header>;
}
