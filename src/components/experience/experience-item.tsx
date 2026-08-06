import { TechnologyTag } from "@/components/shared/technology-tag";
import type { Experience } from "@/types/experience";

interface ExperienceItemProps {
  experience: Experience;
}

export function ExperienceItem({ experience }: ExperienceItemProps) {
  return (
    <article className="grid min-w-0 gap-5 border-b border-border pb-12 md:grid-cols-[7rem_minmax(0,1fr)] md:gap-8">
      <div>
        <time
          className="font-mono text-sm text-primary-light"
          dateTime={experience.period}
        >
          {experience.period}
        </time>
        {experience.current ? (
          <p className="mt-2 font-mono text-[0.6875rem] text-success">Atual</p>
        ) : null}
      </div>

      <div className="min-w-0">
        <h3 className="text-2xl font-semibold tracking-[-0.035em] text-foreground sm:text-3xl">
          {experience.company}
        </h3>
        <p className="mt-2 text-sm font-medium leading-6 text-primary-light sm:text-base">
          {experience.role}
        </p>

        <div className="mt-6 max-w-3xl space-y-3">
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
            Principais atividades
          </p>
          <ul className="mt-4 grid gap-x-8 gap-y-2.5 sm:grid-cols-2">
            {experience.responsibilities.map((responsibility) => (
              <li
                className="flex min-w-0 items-start gap-3 text-sm leading-6 text-foreground-secondary"
                key={responsibility}
              >
                <span
                  aria-hidden="true"
                  className="mt-[0.68rem] size-1 shrink-0 rounded-full bg-primary"
                />
                <span>{responsibility}</span>
              </li>
            ))}
          </ul>
        </div>

        {experience.technologies?.length ? (
          <ul
            aria-label={`Tecnologias utilizadas em ${experience.company}`}
            className="mt-7 flex flex-wrap gap-2"
          >
            {experience.technologies.map((technology) => (
              <li key={technology}>
                <TechnologyTag label={technology} />
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </article>
  );
}
