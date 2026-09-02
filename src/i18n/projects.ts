import "server-only";

import { getLocaleContent } from "@/i18n/content";
import type { Locale } from "@/i18n/config";
import type { Project } from "@/types/project";

export function getProjects(locale: Locale): readonly Project[] {
  return getLocaleContent(locale).projects.items;
}

export function getProjectBySlug(locale: Locale, slug: string): Project | undefined {
  return getProjects(locale).find((project) => project.slug === slug);
}

export function getAdjacentProjects(locale: Locale, slug: string): { nextProject?: Project; previousProject?: Project } {
  const projects = getProjects(locale);
  const projectIndex = projects.findIndex((project) => project.slug === slug);
  if (projectIndex === -1) return {};
  return { previousProject: projectIndex > 0 ? projects[projectIndex - 1] : undefined, nextProject: projectIndex < projects.length - 1 ? projects[projectIndex + 1] : undefined };
}
