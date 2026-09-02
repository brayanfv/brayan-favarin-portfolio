import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { getLocaleContent } from "@/i18n/content";
import type { Locale } from "@/i18n/config";

interface PortfolioPageProps {
  locale: Locale;
}

export function PortfolioPage({ locale }: PortfolioPageProps) {
  const content = getLocaleContent(locale);

  return (
    <>
      <Navbar content={content} locale={locale} />

      <main id="conteudo-principal" tabIndex={-1}>
        <HeroSection content={content} locale={locale} />
        <AboutSection content={content} locale={locale} />
        <ProjectsSection content={content} locale={locale} />
        <ExperienceSection content={content} locale={locale} />
        <SkillsSection content={content} locale={locale} />
        <ContactSection content={content} locale={locale} />
      </main>

      <Footer content={content} locale={locale} />
    </>
  );
}
