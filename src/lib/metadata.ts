import type { Metadata } from "next";

import { siteConfig } from "@/config/site";

interface MetadataOptions {
  title?: string;
  description?: string;
  path?: string;
  image?: {
    alt: string;
    url: string;
  };
}

export function createMetadata({
  title = siteConfig.title,
  description = siteConfig.description,
  path = "/",
  image = siteConfig.openGraphImage,
}: MetadataOptions = {}): Metadata {
  const canonicalUrl = new URL(path, siteConfig.url);
  const metadataImage = {
    alt: image.alt,
    url: new URL(image.url, siteConfig.url),
  };

  return {
    metadataBase: new URL(siteConfig.url),
    applicationName: siteConfig.name,
    title,
    description,
    keywords: [...siteConfig.keywords],
    authors: siteConfig.authors.map((author) => ({ ...author })),
    creator: siteConfig.creator,
    publisher: siteConfig.publisher,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url: canonicalUrl,
      siteName: siteConfig.name,
      title,
      description,
      images: [metadataImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [metadataImage],
    },
  };
}
