import { ProjectCard } from "@/components/projects/project-card";
import { AnimatedSection } from "@/components/shared/animated-section";
import type { Project } from "@/types/project";

interface ProjectGridProps {
  projects: readonly Project[];
}

export function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {projects.map((project, index) => (
        <AnimatedSection
          className="min-w-0"
          delay={0.05 + index * 0.07}
          key={project.slug}
        >
          <ProjectCard project={project} />
        </AnimatedSection>
      ))}
    </div>
  );
}
