import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ProjectPage } from "@/components/pages/project-page";
import { getProjectBySlug, getProjects } from "@/i18n/projects";
import { getProjectPath } from "@/i18n/routing";
import { createMetadata } from "@/lib/metadata";

interface PageProps { params: Promise<{ slug: string }> }
export const dynamicParams = false;
export function generateStaticParams(): Array<{ slug: string }> { return getProjects("en").map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug("en", slug);
  if (!project) notFound();
  return createMetadata({ locale: "en", title: project.title, description: project.shortDescription, path: getProjectPath("en", slug), image: { alt: project.imageAlt, url: project.image }, alternatePaths: { "pt-BR": getProjectPath("pt-BR", slug), en: getProjectPath("en", slug) } });
}
export default async function EnglishProjectPage({ params }: PageProps) { return <ProjectPage locale="en" slug={(await params).slug} />; }
