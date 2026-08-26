import type { ProjectContentItem } from "@/types/project";

interface ProjectDetailGridProps {
  items: readonly ProjectContentItem[];
}

export function ProjectDetailGrid({ items }: ProjectDetailGridProps) {
  return (
    <ul className="grid gap-x-8 gap-y-6 md:grid-cols-2">
      {items.map((item) => (
        <li className="border-t border-border pt-5" key={item.title}>
          <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
          <p className="mt-2 text-sm leading-6 text-foreground-secondary">
            {item.description}
          </p>
        </li>
      ))}
    </ul>
  );
}
