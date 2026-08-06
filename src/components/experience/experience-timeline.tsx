import { ExperienceItem } from "@/components/experience/experience-item";
import { AnimatedSection } from "@/components/shared/animated-section";
import type { Experience } from "@/types/experience";

interface ExperienceTimelineProps {
  experiences: readonly Experience[];
}

export function ExperienceTimeline({
  experiences,
}: ExperienceTimelineProps) {
  const orderedExperiences = [...experiences].sort(
    (firstExperience, secondExperience) =>
      (firstExperience.order ?? 0) - (secondExperience.order ?? 0),
  );

  return (
    <ol
      aria-label="Linha do tempo profissional"
      className="relative before:absolute before:top-2 before:bottom-0 before:left-[0.3125rem] before:w-px before:bg-border"
    >
      {orderedExperiences.map((experience, index) => (
        <li
          className="relative pl-8 sm:pl-10 [&:not(:last-child)]:pb-12"
          key={`${experience.company}-${experience.period}`}
        >
          <span
            aria-hidden="true"
            className="absolute top-1.5 left-0 size-2.5 rounded-full border-2 border-background-secondary bg-primary shadow-[0_0_0_4px_rgb(124_92_252/0.12)]"
          />
          <AnimatedSection delay={0.06 + index * 0.07}>
            <ExperienceItem experience={experience} />
          </AnimatedSection>
        </li>
      ))}
    </ol>
  );
}
