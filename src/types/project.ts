export type ProjectStatus =
  | "Concluído"
  | "Em desenvolvimento"
  | "Em evolução"
  | "Planejado";

export type ProjectVisual = "api" | "portfolio";

export interface ProjectGalleryItem {
  src: string;
  alt: string;
  caption?: string;
}

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  shortDescription?: string;
  technologies: readonly string[];
  status: ProjectStatus;
  featured: boolean;
  repositoryUrl?: string;
  demoUrl?: string;
  image?: string;
  imageAlt: string;
  year?: string;
  category?: string;
  role?: string;
  visual: ProjectVisual;
  overview: string;
  context?: string;
  problem?: string;
  solution?: string;
  features?: readonly string[];
  architecture?: readonly string[];
  challenges?: readonly string[];
  decisions?: readonly string[];
  learnings?: readonly string[];
  gallery?: readonly ProjectGalleryItem[];
  nextSteps?: readonly string[];
}
