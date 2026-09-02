import Image from "next/image";

import { AnimatedSection } from "@/components/shared/animated-section";
import type { LocaleContent } from "@/i18n/types";
import type { Project } from "@/types/project";

export function ProjectGallery({ content, index, project }: { content: LocaleContent; index: string; project: Project }) {
  const headingId = "project-gallery-heading";
  return <section aria-labelledby={headingId} className="border-t border-border py-12 sm:py-14" id="galeria"><AnimatedSection><div className="grid gap-7 lg:grid-cols-[10rem_minmax(0,1fr)] lg:gap-12"><div><p className="font-mono text-[0.6875rem] text-primary-light">{index}</p><h2 className="mt-2 text-2xl font-semibold tracking-[-0.035em] text-foreground" id={headingId}>{content.ui.project.gallery.title}</h2></div><div><p className="max-w-2xl text-base leading-7 text-foreground-secondary">{content.ui.project.gallery.description}</p><ol className="mt-8 grid gap-6 md:grid-cols-2">{project.gallery.map((item, itemIndex) => <li key={item.src}><figure><div className="relative aspect-[21/10] overflow-hidden rounded-[1.125rem] border border-border bg-card"><Image alt={item.alt} className="object-cover" fill sizes="(min-width: 768px) 38vw, 100vw" src={item.src} /></div><figcaption className="mt-4"><p className="font-mono text-[0.6875rem] text-primary-light">{String(itemIndex + 1).padStart(2, "0")}</p><h3 className="mt-1 text-base font-semibold text-foreground">{item.title}</h3><p className="mt-2 text-sm leading-6 text-foreground-secondary">{item.description}</p><p className="mt-3 text-sm leading-6 text-foreground-muted"><span className="font-medium text-foreground-secondary">{content.ui.project.gallery.objective}{" "}</span>{item.objective}</p></figcaption></figure></li>)}</ol></div></div></AnimatedSection></section>;
}
