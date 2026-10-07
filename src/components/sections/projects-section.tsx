import { Container } from "@/components/layout/container";
import { ProjectCard } from "@/components/projects/project-card";
import { ProjectCarousel } from "@/components/projects/project-carousel";
import { AnimatedSection } from "@/components/shared/animated-section";
import { SectionHeading } from "@/components/shared/section-heading";
import type { Locale } from "@/i18n/config";
import { getSectionId } from "@/i18n/routing";
import type { LocaleContent } from "@/i18n/types";

export function ProjectsSection({ content, locale }: { content: LocaleContent; locale: Locale }) {
  const carouselItems = content.projects.items.map((project) => ({
    card: <ProjectCard content={content} locale={locale} project={project} />,
    id: project.slug,
    title: project.title,
  }));

  return (
    <section
      aria-labelledby="projects-heading"
      className="anchor-target overflow-hidden border-b border-border py-[var(--space-section)]"
      id={getSectionId(locale, "projects")}
    >
      <Container>
        <AnimatedSection>
          <SectionHeading
            description={content.projects.section.description}
            eyebrow={content.projects.section.eyebrow}
            title={content.projects.section.title}
            titleId="projects-heading"
          />
        </AnimatedSection>
      </Container>

      <AnimatedSection className="mt-14 sm:mt-16" delay={0.05}>
        <ProjectCarousel
          ariaLabel={content.projects.section.title}
          initialItemId="finora"
          items={carouselItems}
          nextLabel={content.ui.project.navigation.nextProject}
          previousLabel={content.ui.project.navigation.previousProject}
        />
      </AnimatedSection>
    </section>
  );
}
