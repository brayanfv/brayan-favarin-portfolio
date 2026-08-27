import { joinClassNames } from "@/lib/utils";
import type { Technology } from "@/types/technology";

interface TechnologyItemProps {
  technology: Technology;
  variant?: "primary" | "complementary" | "practice";
}

export function TechnologyItem({
  technology,
  variant = "complementary",
}: TechnologyItemProps) {
  const isPrimary = variant === "primary";

  return (
    <li
      className={joinClassNames(
        "flex min-w-0 max-w-full gap-2 border font-mono text-xs whitespace-normal",
        variant === "practice"
          ? "items-center rounded-full border-border bg-background px-3 py-2 text-foreground-secondary"
          : isPrimary
            ? "group h-full min-h-[5.5rem] items-start rounded-lg border-primary/35 bg-primary/5 px-3 py-2.5 font-medium text-foreground transition-[border-color,box-shadow,transform] duration-200 ease-out hover:-translate-y-0.5 hover:border-primary/60 hover:shadow-[0_8px_20px_rgb(0_0_0/0.16)] motion-reduce:transform-none motion-reduce:transition-none"
            : "group h-11 items-center rounded-lg border-border bg-card px-3 py-2.5 text-foreground-secondary transition-[border-color,box-shadow,transform] duration-200 ease-out hover:-translate-y-0.5 hover:border-primary/60 hover:shadow-[0_8px_20px_rgb(0_0_0/0.16)] motion-reduce:transform-none motion-reduce:transition-none",
      )}
    >
      {isPrimary ? (
        <>
          <span
            aria-hidden="true"
            className="size-1 shrink-0 rounded-full bg-primary"
          />
          <span className="sr-only">Tecnologia principal: </span>
        </>
      ) : null}
      <div className="min-w-0">
        <span className="block">{technology.name}</span>
        {isPrimary && technology.description ? (
          <p className="mt-1 min-h-8 font-sans text-[0.6875rem] leading-4 font-normal text-foreground-secondary">
            {technology.description}
          </p>
        ) : null}
      </div>
      {isPrimary ? (
        <span className="mt-0.5 ml-auto shrink-0 text-[0.5625rem] tracking-[0.1em] text-primary-light uppercase">
          foco
        </span>
      ) : null}
    </li>
  );
}
