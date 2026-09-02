import type { Locale } from "@/i18n/config";

const fallbackUrl = "http://localhost:3000";

interface SiteConfig {
  authors: readonly { name: string; url: string }[];
  brand: string;
  contact: { email?: string };
  creator: string;
  name: string;
  openGraphImage: { url: string };
  photo: { alt: string; enabled: boolean; src: string };
  publisher: string;
  resume: Record<Locale, { enabled: boolean; path: string }>;
  social: { github: string; linkedin: string };
  url: string;
}

function normalizeSiteUrl(value: string): string {
  const normalizedValue = value.trim().replace(/\/+$/, "");

  try {
    return new URL(normalizedValue).toString().replace(/\/$/, "");
  } catch {
    return fallbackUrl;
  }
}

const siteUrl = normalizeSiteUrl(
  process.env.NEXT_PUBLIC_SITE_URL ?? fallbackUrl,
);

export const siteConfig: SiteConfig = {
  name: "Brayan Favarin",
  brand: "BF.",
  url: siteUrl,
  authors: [{ name: "Brayan Favarin", url: siteUrl }],
  creator: "Brayan Favarin",
  publisher: "Brayan Favarin",
  openGraphImage: { url: "/images/og/portfolio-brayan-favarin.png" },
  photo: {
    enabled: false,
    src: "/images/profile/brayan-favarin.jpg",
    alt: "Professional portrait of Brayan Favarin",
  },
  social: {
    github: "https://github.com/brayanfv",
    linkedin: "https://br.linkedin.com/in/brayan-favarin",
  },
  contact: { email: "brayanmf1227@gmail.com" },
  resume: {
    "pt-BR": { enabled: true, path: "/documents/brayan-favarin-cv.pdf" },
    en: { enabled: true, path: "/documents/brayan-favarin-cv-en.pdf" },
  },
};
