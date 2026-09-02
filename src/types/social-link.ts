export type SocialPlatform = "email" | "github" | "linkedin";
export type SocialIcon = "mail" | "linkedin" | "github";

export interface SocialLink {
  external: boolean;
  href?: string;
  icon: SocialIcon;
  platform: SocialPlatform;
}
