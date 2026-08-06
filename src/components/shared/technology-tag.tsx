import { joinClassNames } from "@/lib/utils";

interface TechnologyTagProps {
  ariaLabel?: string;
  className?: string;
  label: string;
}

export function TechnologyTag({
  ariaLabel,
  className,
  label,
}: TechnologyTagProps) {
  return (
    <span
      aria-label={ariaLabel}
      className={joinClassNames(
        "inline-flex items-center rounded-full border border-border bg-card px-3 py-1 font-mono text-xs text-foreground-secondary",
        className,
      )}
    >
      {label}
    </span>
  );
}
