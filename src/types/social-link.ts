export type SocialPlatform = "E-mail" | "LinkedIn" | "GitHub";
export type SocialIcon = "mail" | "linkedin" | "github";

export interface SocialLink {
  label: SocialPlatform;
  href?: string;
  icon: SocialIcon;
  external: boolean;
  ariaLabel?: string;
}
