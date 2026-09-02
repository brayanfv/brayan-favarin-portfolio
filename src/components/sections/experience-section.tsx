import { ExperienceTimeline } from "@/components/experience/experience-timeline";
import { Container } from "@/components/layout/container";
import { AnimatedSection } from "@/components/shared/animated-section";
import { SectionHeading } from "@/components/shared/section-heading";
import type { Locale } from "@/i18n/config";
import { getSectionId } from "@/i18n/routing";
import type { LocaleContent } from "@/i18n/types";

export function ExperienceSection({ content, locale }: { content: LocaleContent; locale: Locale }) {
  return <section aria-labelledby="experience-heading" className="anchor-target border-b border-border bg-background-secondary py-[var(--space-section)]" id={getSectionId(locale, "experience")}><Container><AnimatedSection><SectionHeading description={content.experiences.section.description} eyebrow={content.experiences.section.eyebrow} title={content.experiences.section.title} titleId="experience-heading" /></AnimatedSection><div className="mt-14 sm:mt-16"><ExperienceTimeline copy={content.experiences} experiences={content.experiences.items} /></div></Container></section>;
}
