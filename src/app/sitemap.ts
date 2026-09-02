import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";
import { locales } from "@/i18n/config";
import { getProjects } from "@/i18n/projects";
import { getHomePath, getProjectPath } from "@/i18n/routing";

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((locale) => [
    { url: new URL(getHomePath(locale), siteConfig.url).toString(), changeFrequency: "monthly" as const, priority: locale === "pt-BR" ? 1 : 0.9 },
    ...getProjects(locale).map((project) => ({ url: new URL(getProjectPath(locale, project.slug), siteConfig.url).toString(), changeFrequency: "monthly" as const, priority: 0.8 })),
  ]);
}
