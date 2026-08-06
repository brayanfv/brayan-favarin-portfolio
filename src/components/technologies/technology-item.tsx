import { joinClassNames } from "@/lib/utils";
import type { Technology } from "@/types/technology";

interface TechnologyItemProps {
  technology: Technology;
  variant?: "default" | "practice";
}

export function TechnologyItem({
  technology,
  variant = "default",
}: TechnologyItemProps) {
  return (
    <li
      className={joinClassNames(
        "flex min-w-0 max-w-full items-center gap-2 border font-mono text-xs whitespace-normal text-foreground-secondary",
        variant === "practice"
          ? "rounded-full border-border bg-background px-3 py-2"
          : "min-h-11 rounded-lg border-border bg-card px-3 py-2.5",
        technology.highlighted &&
          "border-primary/35 bg-primary/5 font-medium text-foreground transition-colors duration-300 hover:border-primary/60 motion-reduce:transition-none",
      )}
    >
      {technology.highlighted ? (
        <>
          <span
            aria-hidden="true"
            className="size-1 shrink-0 rounded-full bg-primary"
          />
          <span className="sr-only">Tecnologia principal: </span>
        </>
      ) : null}
      <span className="min-w-0">{technology.name}</span>
      {technology.highlighted ? (
        <span className="ml-auto shrink-0 text-[0.5625rem] tracking-[0.1em] text-primary-light uppercase">
          foco
        </span>
      ) : null}
    </li>
  );
}
