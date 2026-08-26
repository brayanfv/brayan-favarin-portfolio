import type { ReactNode } from "react";

import { AnimatedSection } from "@/components/shared/animated-section";

interface ProjectSectionProps {
  children: ReactNode;
  id: string;
  index: string;
  title: string;
}

export function ProjectSection({
  children,
  id,
  index,
  title,
}: ProjectSectionProps) {
  const headingId = `${id}-heading`;

  return (
    <section
      aria-labelledby={headingId}
      className="border-t border-border py-12 sm:py-14"
      id={id}
    >
      <AnimatedSection>
        <div className="grid gap-7 lg:grid-cols-[10rem_minmax(0,1fr)] lg:gap-12">
          <div>
            <p className="font-mono text-[0.6875rem] text-primary-light">
              {index}
            </p>
            <h2
              className="mt-2 text-2xl font-semibold tracking-[-0.035em] text-foreground"
              id={headingId}
            >
              {title}
            </h2>
          </div>

          <div className="min-w-0">{children}</div>
        </div>
      </AnimatedSection>
    </section>
  );
}
