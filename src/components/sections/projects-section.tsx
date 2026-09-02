import { Container } from "@/components/layout/container";
import { ProjectGrid } from "@/components/projects/project-grid";
import { AnimatedSection } from "@/components/shared/animated-section";
import { SectionHeading } from "@/components/shared/section-heading";
import type { Locale } from "@/i18n/config";
import { getSectionId } from "@/i18n/routing";
import type { LocaleContent } from "@/i18n/types";

export function ProjectsSection({ content, locale }: { content: LocaleContent; locale: Locale }) {
  return <section aria-labelledby="projects-heading" className="anchor-target border-b border-border py-[var(--space-section)]" id={getSectionId(locale, "projects")}><Container><AnimatedSection><SectionHeading description={content.projects.section.description} eyebrow={content.projects.section.eyebrow} title={content.projects.section.title} titleId="projects-heading" /></AnimatedSection><div className="mt-14 sm:mt-16"><ProjectGrid content={content} locale={locale} projects={content.projects.items} /></div></Container></section>;
}
