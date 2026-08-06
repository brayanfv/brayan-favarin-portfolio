import { joinClassNames } from "@/lib/utils";
import type { ProjectStatus as ProjectStatusValue } from "@/types/project";

interface ProjectStatusProps {
  status: ProjectStatusValue;
}

const statusStyles: Record<ProjectStatusValue, string> = {
  Concluído: "border-success/25 bg-success/5 text-success",
  "Em desenvolvimento":
    "border-primary/30 bg-primary/5 text-primary-light",
  "Em evolução": "border-primary/25 bg-primary/5 text-primary-light",
  Planejado: "border-border bg-background-secondary text-foreground-secondary",
};

export function ProjectStatus({ status }: ProjectStatusProps) {
  return (
    <span
      className={joinClassNames(
        "inline-flex items-center gap-2 rounded-full border px-2.5 py-1 font-mono text-[0.6875rem]",
        statusStyles[status],
      )}
    >
      <span aria-hidden="true" className="size-1 rounded-full bg-current" />
      <span className="sr-only">Status: </span>
      {status}
    </span>
  );
}
