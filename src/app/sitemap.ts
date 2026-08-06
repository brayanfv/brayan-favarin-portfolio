import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";
import { projects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: new URL("/", siteConfig.url).toString(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...projects.map((project) => ({
      url: new URL(`/projetos/${project.slug}`, siteConfig.url).toString(),
      changeFrequency: "monthly" as const,
      priority: project.featured ? 0.9 : 0.8,
    })),
  ];
}
