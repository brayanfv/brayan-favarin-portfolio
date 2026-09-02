import type { LocaleContent } from "@/i18n/types";
import { joinClassNames } from "@/lib/utils";
import type { ProjectStatus as ProjectStatusValue } from "@/types/project";

const statusStyles: Record<ProjectStatusValue, string> = {
  completed: "border-success/25 bg-success/5 text-success",
  "in-development": "border-primary/30 bg-primary/5 text-primary-light",
  "in-evolution": "border-primary/25 bg-primary/5 text-primary-light",
  planned: "border-border bg-background-secondary text-foreground-secondary",
};

export function ProjectStatus({ content, status }: { content: LocaleContent; status: ProjectStatusValue }) {
  return <span className={joinClassNames("inline-flex items-center gap-2 rounded-full border px-2.5 py-1 font-mono text-[0.6875rem]", statusStyles[status])}><span aria-hidden="true" className="size-1 rounded-full bg-current" /><span className="sr-only">{content.ui.project.statusPrefix}</span>{content.ui.project.statusLabels[status]}</span>;
}
