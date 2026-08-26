import { ArrowDown } from "lucide-react";

import { TechnologyTag } from "@/components/shared/technology-tag";
import type { ProjectArchitecture as ProjectArchitectureData } from "@/types/project";

interface ProjectArchitectureProps {
  architecture: ProjectArchitectureData;
}

export function ProjectArchitecture({ architecture }: ProjectArchitectureProps) {
  return (
    <div>
      <ol aria-label="Fluxo principal da arquitetura" className="max-w-xl">
        {architecture.layers.map((layer, index) => (
          <li key={layer.name}>
            <div className="rounded-xl border border-border bg-card p-5">
              <h3 className="text-base font-semibold text-foreground">
                {layer.name}
              </h3>
              <p className="mt-2 text-sm leading-6 text-foreground-secondary">
                {layer.description}
              </p>
            </div>
            {index < architecture.layers.length - 1 ? (
              <div
                aria-hidden="true"
                className="flex h-10 items-center pl-5 text-primary-light"
              >
                <ArrowDown size={18} strokeWidth={1.7} />
              </div>
            ) : null}
          </li>
        ))}
      </ol>

      <div className="mt-8 border-t border-border pt-6">
        <h3 className="font-mono text-[0.6875rem] tracking-[0.12em] text-foreground-muted uppercase">
          Elementos complementares
        </h3>
        <ul className="mt-4 flex flex-wrap gap-2">
          {architecture.supportingItems.map((item) => (
            <li key={item}>
              <TechnologyTag label={item} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
