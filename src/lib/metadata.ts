import type { Metadata } from "next";

import { siteConfig } from "@/config/site";
import { getLocaleContent } from "@/i18n/content";
import { localeMetadata, type Locale } from "@/i18n/config";
import { getHomePath } from "@/i18n/routing";

interface MetadataOptions {
  alternatePaths?: Record<Locale, string>;
  description?: string;
  image?: { alt: string; url: string };
  locale: Locale;
  path?: string;
  title?: string;
}

export function createMetadata({
  locale,
  title,
  description,
  path = getHomePath(locale),
  image,
  alternatePaths,
}: MetadataOptions): Metadata {
  const content = getLocaleContent(locale);
  const metadataTitle = title ?? content.metadata.title;
  const metadataDescription = description ?? content.metadata.description;
  const metadataImage = image ?? {
    alt: content.metadata.openGraphAlt,
    url: siteConfig.openGraphImage.url,
  };
  const canonicalUrl = new URL(path, siteConfig.url);
  const paths = alternatePaths ?? {
    "pt-BR": getHomePath("pt-BR"),
    en: getHomePath("en"),
  };
  const alternateLanguages = {
    "pt-BR": new URL(paths["pt-BR"], siteConfig.url).toString(),
    en: new URL(paths.en, siteConfig.url).toString(),
    "x-default": new URL(paths["pt-BR"], siteConfig.url).toString(),
  };

  return {
    metadataBase: new URL(siteConfig.url),
    applicationName: siteConfig.name,
    title: metadataTitle,
    description: metadataDescription,
    keywords: [...content.metadata.keywords],
    authors: siteConfig.authors.map((author) => ({ ...author })),
    creator: siteConfig.creator,
    publisher: siteConfig.publisher,
    alternates: { canonical: canonicalUrl, languages: alternateLanguages },
    openGraph: {
      type: "website",
      locale: localeMetadata[locale].openGraphLocale,
      url: canonicalUrl,
      siteName: siteConfig.name,
      title: metadataTitle,
      description: metadataDescription,
      images: [{ alt: metadataImage.alt, url: new URL(metadataImage.url, siteConfig.url) }],
    },
    twitter: {
      card: "summary_large_image",
      title: metadataTitle,
      description: metadataDescription,
      images: [{ alt: metadataImage.alt, url: new URL(metadataImage.url, siteConfig.url) }],
    },
  };
}
