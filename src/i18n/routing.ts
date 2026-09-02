import { defaultLocale, localeMetadata, type Locale } from "@/i18n/config";

export type SectionKey =
  | "about"
  | "contact"
  | "experience"
  | "home"
  | "projects"
  | "technologies";

const sectionIds: Record<Locale, Record<SectionKey, string>> = {
  "pt-BR": {
    home: "inicio",
    about: "sobre",
    projects: "projetos",
    experience: "experiencia",
    technologies: "tecnologias",
    contact: "contato",
  },
  en: {
    home: "home",
    about: "about",
    projects: "projects",
    experience: "experience",
    technologies: "technologies",
    contact: "contact",
  },
};

export function getHomePath(locale: Locale): string {
  return localeMetadata[locale].pathPrefix || "/";
}

export function getSectionId(locale: Locale, section: SectionKey): string {
  return sectionIds[locale][section];
}

export function getSectionHref(locale: Locale, section: SectionKey): string {
  return `${getHomePath(locale)}#${getSectionId(locale, section)}`;
}

export function getProjectPath(locale: Locale, slug: string): string {
  return locale === "en" ? `/en/projects/${slug}` : `/projetos/${slug}`;
}

export function getProjectsPath(locale: Locale): string {
  return getSectionHref(locale, "projects");
}

export function getLocaleSwitchPath(
  pathname: string,
  targetLocale: Locale,
): string {
  if (targetLocale === "en") {
    if (pathname === "/") {
      return "/en";
    }

    const portugueseProjectMatch = pathname.match(/^\/projetos\/([^/]+)$/);
    return portugueseProjectMatch
      ? `/en/projects/${portugueseProjectMatch[1]}`
      : "/en";
  }

  if (pathname === "/en") {
    return "/";
  }

  const englishProjectMatch = pathname.match(/^\/en\/projects\/([^/]+)$/);
  return englishProjectMatch ? `/projetos/${englishProjectMatch[1]}` : "/";
}

export function getLocaleFromPathname(pathname: string): Locale {
  return pathname === "/en" || pathname.startsWith("/en/")
    ? "en"
    : defaultLocale;
}
