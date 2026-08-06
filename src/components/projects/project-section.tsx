import type { ReactNode } from "react";

import { AnimatedSection } from "@/components/shared/animated-section";
import { joinClassNames } from "@/lib/utils";

interface ProjectSectionProps {
  children?: ReactNode;
  description?: string;
  id: string;
  index: string;
  items?: readonly string[];
  listColumns?: "one" | "two";
  title: string;
}

export function ProjectSection({
  children,
  description,
  id,
  index,
  items,
  listColumns = "two",
  title,
}: ProjectSectionProps) {
  if (!children && !description && (!items || items.length === 0)) {
    return null;
  }

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

          <div className="min-w-0">
            {description ? (
              <p className="max-w-3xl text-base leading-7 text-foreground-secondary sm:text-lg sm:leading-8">
                {description}
              </p>
            ) : null}

            {items && items.length > 0 ? (
              <ul
                className={joinClassNames(
                  "grid gap-x-10 gap-y-4",
                  listColumns === "two" && "md:grid-cols-2",
                )}
              >
                {items.map((item) => (
                  <li
                    className="grid grid-cols-[0.5rem_minmax(0,1fr)] gap-3 text-sm leading-6 text-foreground-secondary sm:text-base"
                    key={item}
                  >
                    <span
                      aria-hidden="true"
                      className="mt-[0.65rem] size-1 rounded-full bg-primary"
                    />
                    <span className="first-letter:uppercase">{item}</span>
                  </li>
                ))}
              </ul>
            ) : null}

            {children}
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
