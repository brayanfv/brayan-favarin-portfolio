import type { ProjectVisual } from "@/types/project";

interface ProjectPlaceholderProps {
  alt: string;
  visual: ProjectVisual;
}

export function ProjectPlaceholder({
  alt,
  visual,
}: ProjectPlaceholderProps) {
  return (
    <div
      aria-label={alt}
      className="relative h-full min-h-64 overflow-hidden bg-background-secondary"
      role="img"
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgb(255_255_255/0.025)_1px,transparent_1px),linear-gradient(90deg,rgb(255_255_255/0.025)_1px,transparent_1px)] bg-[size:32px_32px]" />
      <div className="absolute -top-20 -right-16 size-56 rounded-full bg-primary/10 blur-3xl" />

      <div aria-hidden="true" className="h-full">
        {renderProjectVisual(visual)}
      </div>
    </div>
  );
}

function renderProjectVisual(visual: ProjectVisual) {
  switch (visual) {
    case "api":
      return <ApiPlaceholder />;
    case "portfolio":
      return <PortfolioPlaceholder />;
    default:
      return assertNever(visual);
  }
}

function assertNever(value: never): never {
  throw new Error(`Visual de projeto não suportado: ${value}`);
}

function ApiPlaceholder() {
  const endpoints = [
    { method: "GET", path: "/professionals", tone: "text-primary-light" },
    { method: "POST", path: "/professionals", tone: "text-success" },
    { method: "PUT", path: "/professionals/{id}", tone: "text-primary-light" },
    { method: "DELETE", path: "/contacts/{id}", tone: "text-error" },
  ] as const;

  return (
    <div className="relative flex h-full min-h-64 flex-col p-5 sm:p-7">
      <div className="flex items-center justify-between border-b border-border pb-4 font-mono text-[0.625rem] text-foreground-muted">
        <span>management.api</span>
        <span>v1 / REST</span>
      </div>

      <div className="mt-5 grid flex-1 gap-5 sm:grid-cols-[1.3fr_0.7fr]">
        <div className="space-y-2.5">
          {endpoints.map((endpoint) => (
            <div
              className="grid grid-cols-[3.2rem_1fr] items-center gap-3 rounded-md border border-border bg-background/85 px-3 py-2.5 font-mono text-[0.625rem]"
              key={`${endpoint.method}-${endpoint.path}`}
            >
              <span className={endpoint.tone}>{endpoint.method}</span>
              <span className="truncate text-foreground-secondary">
                {endpoint.path}
              </span>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-2 sm:flex-col">
          <div className="rounded-md border border-primary/30 bg-primary/5 px-3 py-2 font-mono text-[0.625rem] text-foreground">
            professional
          </div>
          <span className="h-px w-8 bg-primary/50 sm:h-8 sm:w-px" />
          <div className="rounded-md border border-border bg-background/85 px-3 py-2 font-mono text-[0.625rem] text-foreground-secondary">
            contact
          </div>
        </div>
      </div>
    </div>
  );
}

function PortfolioPlaceholder() {
  return (
    <div className="relative flex h-full min-h-64 items-center justify-center p-5 sm:p-7">
      <div className="w-full max-w-sm overflow-hidden rounded-lg border border-border bg-background/90 shadow-[0_18px_50px_rgb(0_0_0/0.3)]">
        <div className="flex h-8 items-center gap-1.5 border-b border-border px-3">
          <span className="size-1.5 rounded-full bg-foreground-muted/50" />
          <span className="size-1.5 rounded-full bg-foreground-muted/35" />
          <span className="size-1.5 rounded-full bg-foreground-muted/20" />
          <span className="ml-auto font-mono text-[0.5rem] text-foreground-muted">
            BF.
          </span>
        </div>

        <div className="space-y-4 p-4">
          <div className="grid grid-cols-[1fr_4rem] gap-3">
            <div className="space-y-2 pt-1">
              <div className="h-1.5 w-12 rounded-full bg-primary/70" />
              <div className="h-2.5 w-full rounded-full bg-foreground/80" />
              <div className="h-2.5 w-4/5 rounded-full bg-foreground/45" />
              <div className="h-1.5 w-2/3 rounded-full bg-foreground-muted/35" />
            </div>
            <div className="rounded-md border border-primary/20 bg-primary/5" />
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className="h-14 rounded-md border border-border bg-card" />
            <div className="h-14 rounded-md border border-border bg-card" />
          </div>

          <div className="flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-primary" />
            <span className="h-px flex-1 bg-border" />
            <span className="size-1.5 rounded-full bg-border" />
            <span className="h-px flex-1 bg-border" />
            <span className="size-1.5 rounded-full bg-border" />
          </div>
        </div>
      </div>
    </div>
  );
}
