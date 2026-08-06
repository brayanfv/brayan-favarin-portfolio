import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { ProjectCaseStudy } from "@/components/projects/project-case-study";
import {
  getAdjacentProjects,
  getProjectBySlug,
  projects,
} from "@/data/projects";
import { createMetadata } from "@/lib/metadata";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export const dynamicParams = false;

export function generateStaticParams(): Array<{ slug: string }> {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return createMetadata({
    title: project.title,
    description: project.shortDescription ?? project.description,
    path: `/projetos/${project.slug}`,
    image: project.image
      ? {
          alt: project.imageAlt,
          url: project.image,
        }
      : undefined,
  });
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const { nextProject, previousProject } = getAdjacentProjects(project.slug);

  return (
    <>
      <Navbar />

      <main id="conteudo-principal" tabIndex={-1}>
        <ProjectCaseStudy
          nextProject={nextProject}
          previousProject={previousProject}
          project={project}
        />
      </main>

      <Footer />
    </>
  );
}
