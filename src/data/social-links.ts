import { siteConfig } from "@/config/site";
import type { SocialLink } from "@/types/social-link";

const email = siteConfig.contact.email?.trim();

export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: siteConfig.social.github,
    icon: "github",
    external: true,
    ariaLabel: `Abrir o GitHub de ${siteConfig.name} em uma nova aba`,
  },
  {
    label: "LinkedIn",
    href: siteConfig.social.linkedin,
    icon: "linkedin",
    external: true,
    ariaLabel: `Abrir o LinkedIn de ${siteConfig.name} em uma nova aba`,
  },
  {
    label: "E-mail",
    href: email ? `mailto:${email}` : undefined,
    icon: "mail",
    external: false,
    ariaLabel: `Enviar e-mail para ${siteConfig.name}`,
  },
];
