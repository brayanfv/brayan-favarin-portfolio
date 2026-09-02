import { TechnologyTag } from "@/components/shared/technology-tag";
import type { ExperienceCopy } from "@/i18n/types";
import type { Experience } from "@/types/experience";

interface ExperienceItemProps {
  copy: ExperienceCopy;
  experience: Experience;
}

export function ExperienceItem({ copy, experience }: ExperienceItemProps) {
  return (
    <article className="grid min-w-0 gap-5 border-b border-border/70 pb-12 md:grid-cols-[9.5rem_minmax(0,1fr)] md:gap-8">
      <div className="md:pt-1">
        <time className="block whitespace-nowrap font-mono text-xs leading-5 font-normal text-foreground-secondary">
          {experience.period}
        </time>
        {experience.current ? (
          <p className="mt-2 font-mono text-[0.6875rem] text-success">{copy.labels.current}</p>
        ) : null}
      </div>

      <div className="min-w-0">
        <h3 className="text-2xl font-semibold tracking-[-0.035em] text-foreground sm:text-3xl">
          {experience.company}
        </h3>
        <p className="mt-2 text-sm font-medium leading-6 text-primary-light sm:text-base">
          {experience.role}
        </p>
        {experience.context ? (
          <p className="mt-3 text-sm leading-6 text-foreground-secondary">
            <span className="mr-2 font-mono text-[0.6875rem] tracking-[0.12em] text-foreground-muted uppercase">
              {copy.labels.context}
            </span>
            {experience.context}
          </p>
        ) : null}

        <div className="mt-5 max-w-3xl space-y-3">
          {experience.description.map((paragraph) => (
            <p
              className="text-sm leading-7 text-foreground-secondary sm:text-base"
              key={paragraph}
            >
              {paragraph}
            </p>
          ))}
        </div>
        <div className="mt-7">
          <p className="font-mono text-[0.6875rem] tracking-[0.12em] text-foreground-secondary uppercase">
            {copy.labels.competencies}
          </p>
          <ul className="mt-3.5 grid gap-x-8 gap-y-2.5 sm:grid-cols-2">
            {experience.competencies.map((competency) => (
              <li
                className="flex min-w-0 items-start gap-3 text-sm font-medium leading-6 text-foreground sm:text-base"
                key={competency}
              >
                <span
                  aria-hidden="true"
                  className="mt-[0.68rem] size-1 shrink-0 rounded-full bg-primary"
                />
                <span>{competency}</span>
              </li>
            ))}
          </ul>
        </div>

        {experience.technologies?.length ? (
          <div className="mt-6">
            <p className="font-mono text-[0.6875rem] tracking-[0.12em] text-foreground-secondary uppercase">
              {copy.labels.technologies}
            </p>
            <ul
              aria-label={copy.labels.technologyList.replace("{company}", experience.company)}
              className="mt-3.5 flex flex-wrap gap-2"
            >
              {experience.technologies.map((technology) => (
                <li key={technology}>
                  <TechnologyTag label={technology} />
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </article>
  );
}
