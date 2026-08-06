import { ProjectCard } from "@/components/projects/project-card";
import { AnimatedSection } from "@/components/shared/animated-section";
import type { Project } from "@/types/project";

interface ProjectGridProps {
  projects: readonly Project[];
}

export function ProjectGrid({ projects }: ProjectGridProps) {
  const orderedProjects = [...projects].sort(
    (firstProject, secondProject) =>
      Number(secondProject.featured) - Number(firstProject.featured),
  );

  return (
    <div className="grid gap-6 xl:grid-cols-12 xl:items-stretch">
      {orderedProjects.map((project, index) => (
        <AnimatedSection
          className={
            project.featured
              ? "min-w-0 xl:col-span-8"
              : "min-w-0 xl:col-span-4"
          }
          delay={0.05 + index * 0.07}
          key={project.slug}
        >
          <ProjectCard
            project={project}
            variant={project.featured ? "featured" : "default"}
          />
        </AnimatedSection>
      ))}
    </div>
  );
}
