import { TechnologyTag } from "@/components/shared/technology-tag";
import type { ProjectStackGroup } from "@/types/project";

interface ProjectStackProps {
  groups: readonly ProjectStackGroup[];
}

export function ProjectStack({ groups }: ProjectStackProps) {
  return (
    <ul className="grid gap-x-8 gap-y-7 sm:grid-cols-2">
      {groups.map((group) => (
        <li className="border-t border-border pt-5" key={group.category}>
          <h3 className="font-mono text-[0.6875rem] tracking-[0.12em] text-primary-light uppercase">
            {group.category}
          </h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {group.technologies.map((technology) => (
              <li key={technology}>
                <TechnologyTag label={technology} />
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}
