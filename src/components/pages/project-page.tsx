import { notFound } from "next/navigation";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { ProjectCaseStudy } from "@/components/projects/project-case-study";
import { getLocaleContent } from "@/i18n/content";
import type { Locale } from "@/i18n/config";
import { getAdjacentProjects, getProjectBySlug } from "@/i18n/projects";

export function ProjectPage({ locale, slug }: { locale: Locale; slug: string }) {
  const content = getLocaleContent(locale);
  const project = getProjectBySlug(locale, slug);
  if (!project) notFound();
  const { nextProject, previousProject } = getAdjacentProjects(locale, project.slug);
  return <><Navbar content={content} locale={locale} /><main id="conteudo-principal" tabIndex={-1}><ProjectCaseStudy content={content} locale={locale} nextProject={nextProject} previousProject={previousProject} project={project} /></main><Footer content={content} locale={locale} /></>;
}
