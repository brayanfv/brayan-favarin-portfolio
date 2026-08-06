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

      <ul className="mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
        {group.items.map((technology) => (
          <TechnologyItem
            key={`${technology.category}-${technology.name}`}
            technology={technology}
          />
        ))}
      </ul>
    </section>
  );
}
