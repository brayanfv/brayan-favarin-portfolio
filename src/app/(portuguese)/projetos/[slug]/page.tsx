import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ProjectPage } from "@/components/pages/project-page";
import { getProjectBySlug, getProjects } from "@/i18n/projects";
import { getProjectPath } from "@/i18n/routing";
import { createMetadata } from "@/lib/metadata";

interface PageProps { params: Promise<{ slug: string }> }
export const dynamicParams = false;
export function generateStaticParams(): Array<{ slug: string }> { return getProjects("pt-BR").map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug("pt-BR", slug);
  if (!project) notFound();
  return createMetadata({ locale: "pt-BR", title: project.title, description: project.shortDescription, path: getProjectPath("pt-BR", slug), image: { alt: project.imageAlt, url: project.image }, alternatePaths: { "pt-BR": getProjectPath("pt-BR", slug), en: getProjectPath("en", slug) } });
}
export default async function PortugueseProjectPage({ params }: PageProps) { return <ProjectPage locale="pt-BR" slug={(await params).slug} />; }
