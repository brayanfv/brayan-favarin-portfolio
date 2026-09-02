import { siteConfig } from "@/config/site";
import type { SocialLink } from "@/types/social-link";

const email = siteConfig.contact.email?.trim();

export const socialLinks: SocialLink[] = [
  { platform: "github", href: siteConfig.social.github, icon: "github", external: true },
  { platform: "linkedin", href: siteConfig.social.linkedin, icon: "linkedin", external: true },
  { platform: "email", href: email ? `mailto:${email}` : undefined, icon: "mail", external: false },
];
