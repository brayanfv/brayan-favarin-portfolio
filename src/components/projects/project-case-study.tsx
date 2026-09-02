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
import type { Locale } from "@/i18n/config";
import { getSectionHref } from "@/i18n/routing";
import type { LocaleContent } from "@/i18n/types";
import type { Project } from "@/types/project";

interface ProjectCaseStudyProps { content: LocaleContent; locale: Locale; nextProject?: Project; previousProject?: Project; project: Project }

export function ProjectCaseStudy({ content, locale, nextProject, previousProject, project }: ProjectCaseStudyProps) {
  const sections = content.ui.project.sections;
  return <article><ProjectHero content={content} locale={locale} project={project} /><ProjectOverview content={content} project={project} /><Container><div className="mx-auto max-w-5xl">
    <ProjectSection id="project-demonstrates" index="01" title={sections[0]}><ProjectDetailGrid items={project.demonstrates} /></ProjectSection>
    <ProjectSection id="project-role" index="02" title={sections[1]}><ProjectDetailGrid items={project.roles} /></ProjectSection>
    <ProjectSection id="project-features" index="03" title={sections[2]}><ProjectDetailGrid items={project.features} /></ProjectSection>
    <ProjectGallery content={content} index="04" project={project} />
    <ProjectSection id="project-architecture" index="05" title={sections[4]}><ProjectArchitecture architecture={project.architecture} content={content} /></ProjectSection>
    <ProjectSection id="project-stack" index="06" title={sections[5]}><ProjectStack content={content} groups={project.stack} /></ProjectSection>
    <ProjectSection id="project-decisions" index="07" title={sections[6]}><ProjectDetailGrid items={project.decisions} /></ProjectSection>
    <ProjectSection id="project-learnings" index="08" title={sections[7]}><BulletList items={project.learnings} /></ProjectSection>
    <ProjectSection id="project-result" index="09" title={sections[8]}><p className="max-w-3xl text-base leading-7 text-foreground-secondary sm:text-lg sm:leading-8">{project.result.description}</p><div className="mt-7"><BulletList items={project.result.highlights} /></div></ProjectSection>
    <ProjectSection id="project-links" index="10" title={sections[9]}><ProjectLinks content={content} project={project} /></ProjectSection>
    <ProjectNavigation content={content} locale={locale} nextProject={nextProject} previousProject={previousProject} />
    <AnimatedSection className="pb-[var(--space-section)]"><section aria-labelledby="project-contact-heading" className="relative overflow-hidden rounded-[1.25rem] border border-border bg-card p-6 sm:p-10"><div aria-hidden="true" className="pointer-events-none absolute -top-28 -right-24 size-72 rounded-full bg-primary/10 blur-3xl" /><div className="relative max-w-3xl"><p className="font-mono text-xs tracking-[0.16em] text-primary-light uppercase">{content.ui.project.contact.eyebrow}</p><h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-foreground sm:text-4xl" id="project-contact-heading">{content.contact.title}</h2><p className="mt-5 text-base leading-7 text-foreground-secondary sm:text-lg sm:leading-8">{content.contact.description[0]}</p><PrimaryButton className="mt-7 w-full sm:w-auto" href={getSectionHref(locale, "contact")}>{content.ui.project.contact.button}<ArrowRight aria-hidden="true" size={17} strokeWidth={1.8} /></PrimaryButton></div></section></AnimatedSection>
  </div></Container></article>;
}

function BulletList({ items }: { items: readonly string[] }) {
  return <ul className="grid gap-x-8 gap-y-4 md:grid-cols-2">{items.map((item) => <li className="grid grid-cols-[0.5rem_minmax(0,1fr)] gap-3 text-sm leading-6 text-foreground-secondary sm:text-base" key={item}><span aria-hidden="true" className="mt-[0.65rem] size-1 rounded-full bg-primary" /><span>{item}</span></li>)}</ul>;
}
