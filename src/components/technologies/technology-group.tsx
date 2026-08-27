import { TechnologyItem } from "@/components/technologies/technology-item";
import type { TechnologyGroup as TechnologyGroupData } from "@/types/technology";

interface TechnologyGroupProps {
  group: TechnologyGroupData;
  index: number;
}

export function TechnologyGroup({
  group,
  index,
}: TechnologyGroupProps) {
  const headingId = `technology-group-${index}`;
  const primaryTechnologies = group.items.filter(
    (technology) => technology.highlighted,
  );
  const complementaryTechnologies = group.items.filter(
    (technology) => !technology.highlighted,
  );
  const primaryHeadingId = `${headingId}-primary`;
  const complementaryHeadingId = `${headingId}-complementary`;

  return (
    <section
      aria-labelledby={headingId}
      className="border-t border-border pt-5"
    >
      <div className="flex items-baseline gap-3">
        <span
          aria-hidden="true"
          className="font-mono text-[0.625rem] text-primary-light"
        >
          {String(index + 1).padStart(2, "0")}
        </span>
        <h3
          className="font-mono text-sm font-medium text-foreground"
          id={headingId}
        >
          {group.category}
        </h3>
      </div>

      {primaryTechnologies.length ? (
        <div className="mt-5">
          <p
            className="font-mono text-[0.625rem] tracking-[0.12em] text-primary-light uppercase"
            id={primaryHeadingId}
          >
            Stack principal
          </p>
          <ul
            aria-labelledby={primaryHeadingId}
            className="mt-3 grid auto-rows-fr gap-2 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2"
          >
            {primaryTechnologies.map((technology) => (
              <TechnologyItem
                key={`${technology.category}-${technology.name}`}
                technology={technology}
                variant="primary"
              />
            ))}
          </ul>
        </div>
      ) : null}

      {complementaryTechnologies.length ? (
        <div className={primaryTechnologies.length ? "mt-7" : "mt-5"}>
          <p
            className="font-mono text-[0.625rem] tracking-[0.12em] text-foreground-muted uppercase"
            id={complementaryHeadingId}
          >
            Tecnologias complementares
          </p>
          <ul
            aria-labelledby={complementaryHeadingId}
            className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2"
          >
            {complementaryTechnologies.map((technology) => (
              <TechnologyItem
                key={`${technology.category}-${technology.name}`}
                technology={technology}
                variant="complementary"
              />
            ))}
          </ul>
        </div>
      ) : null}
    </section>
  );
}
