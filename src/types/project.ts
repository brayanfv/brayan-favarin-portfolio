export type ProjectStatus =
  | "completed"
  | "in-development"
  | "in-evolution"
  | "planned";

export type ProjectStackCategory =
  | "backend"
  | "database"
  | "frontend"
  | "infrastructure"
  | "quality";

export interface ProjectContentItem {
  title: string;
  description: string;
}

export interface ProjectGalleryItem {
  src: string;
  alt: string;
  title: string;
  description: string;
  objective: string;
}

export interface ProjectArchitectureLayer {
  name: string;
  description: string;
}

export interface ProjectArchitecture {
  layers: readonly ProjectArchitectureLayer[];
  supportingItems: readonly string[];
}

export interface ProjectStackGroup {
  category: ProjectStackCategory;
  technologies: readonly string[];
}

export interface ProjectOverview {
  description: string;
  objective: string;
  context: string;
}

export interface ProjectResult {
  description: string;
  highlights: readonly string[];
}

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  shortDescription: string;
  mainTechnologies: readonly string[];
  status: ProjectStatus;
  repositoryUrl?: string;
  demoUrl?: string;
  documentationUrl?: string;
  image: string;
  imageAlt: string;
  heroImageEmphasis?: boolean;
  year: string;
  category: string;
  roleSummary: string;
  overview: ProjectOverview;
  demonstrates: readonly ProjectContentItem[];
  roles: readonly ProjectContentItem[];
  features: readonly ProjectContentItem[];
  gallery: readonly ProjectGalleryItem[];
  architecture: ProjectArchitecture;
  stack: readonly ProjectStackGroup[];
  decisions: readonly ProjectContentItem[];
  learnings: readonly string[];
  result: ProjectResult;
}
