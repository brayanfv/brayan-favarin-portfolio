const fallbackUrl = "http://localhost:3000";

interface SiteConfig {
  authors: readonly {
    name: string;
    url: string;
  }[];
  brand: string;
  contact: {
    email?: string;
  };
  creator: string;
  description: string;
  keywords: readonly string[];
  language: string;
  locale: string;
  location: string;
  name: string;
  openGraphImage: {
    alt: string;
    url: string;
  };
  publisher: string;
  resume: {
    enabled: boolean;
    path: string;
  };
  role: string;
  social: {
    github: string;
    linkedin: string;
  };
  title: string;
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
  role: "Desenvolvedor Full Stack",
  title: "Brayan Favarin | Desenvolvedor Full Stack",
  description:
    "Portfólio de Brayan Favarin, desenvolvedor Full Stack com experiência em Java, Spring Boot, Angular, TypeScript e construção de aplicações modernas.",
  url: siteUrl,
  language: "pt-BR",
  locale: "pt_BR",
  location: "Criciúma, Santa Catarina",
  keywords: [
    "Brayan Favarin",
    "Desenvolvedor Full Stack",
    "Java",
    "Spring Boot",
    "Angular",
    "TypeScript",
    "Next.js",
  ],
  authors: [{ name: "Brayan Favarin", url: siteUrl }],
  creator: "Brayan Favarin",
  publisher: "Brayan Favarin",
  openGraphImage: {
    url: "/images/og/portfolio-brayan-favarin.png",
    alt: "Brayan Favarin — Desenvolvedor Full Stack",
  },
  social: {
    github: "https://github.com/brayanfv",
    linkedin: "https://br.linkedin.com/in/brayan-favarin",
  },
  contact: {
    email: "brayanmf1227@gmail.com",
  },
  resume: {
    enabled: false,
    path: "/documents/curriculo-brayan-favarin.pdf",
  },
};
