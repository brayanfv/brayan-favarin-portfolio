import Image from "next/image";

import { ProjectPlaceholder } from "@/components/projects/project-placeholder";
import { AnimatedSection } from "@/components/shared/animated-section";
import type { Project, ProjectGalleryItem } from "@/types/project";

interface ProjectGalleryProps {
  index: string;
  project: Project;
}

export function ProjectGallery({ index, project }: ProjectGalleryProps) {
  const imageFallback: readonly ProjectGalleryItem[] = project.image
    ? [{ src: project.image, alt: project.imageAlt }]
    : [];
  const galleryItems = project.gallery ?? imageFallback;

  return (
    <section
      aria-labelledby="project-gallery-heading"
      className="border-t border-border py-12 sm:py-14"
    >
      <AnimatedSection>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mono text-[0.6875rem] text-primary-light">
              {index}
            </p>
            <h2
              className="mt-2 text-2xl font-semibold tracking-[-0.035em] text-foreground"
              id="project-gallery-heading"
            >
              Galeria do projeto
            </h2>
          </div>
          <p className="max-w-lg text-sm leading-6 text-foreground-muted">
            Uma leitura visual da interface, arquitetura ou fluxo principal.
          </p>
        </div>

        {galleryItems.length > 0 ? (
          <ul
            className={
              galleryItems.length > 1
                ? "mt-8 grid gap-6 md:grid-cols-2"
                : "mt-8"
            }
          >
            {galleryItems.map((item) => (
              <li key={item.src}>
                <figure>
                  <div className="relative aspect-[16/10] overflow-hidden rounded-[1.125rem] border border-border bg-card">
                    <Image
                      alt={item.alt}
                      className="object-cover"
                      fill
                      sizes={
                        galleryItems.length > 1
                          ? "(min-width: 768px) 50vw, 100vw"
                          : "100vw"
                      }
                      src={item.src}
                    />
                  </div>
                  {item.caption ? (
                    <figcaption className="mt-3 text-sm leading-6 text-foreground-muted">
                      {item.caption}
                    </figcaption>
                  ) : null}
                </figure>
              </li>
            ))}
          </ul>
        ) : (
          <figure className="mt-8">
            <div className="h-[clamp(19rem,52vw,38rem)] overflow-hidden rounded-[1.125rem] border border-border bg-card">
              <ProjectPlaceholder
                alt={project.imageAlt}
                visual={project.visual}
              />
            </div>
            <figcaption className="mt-3 text-sm leading-6 text-foreground-muted">
              Representação visual conceitual de {project.title} enquanto as
              capturas definitivas são preparadas.
            </figcaption>
          </figure>
        )}
      </AnimatedSection>
    </section>
  );
}
