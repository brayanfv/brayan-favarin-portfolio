import { Code2, Link, Mail } from "lucide-react";

import { socialLinks } from "@/data/social-links";
import type { LocaleContent } from "@/i18n/types";
import { joinClassNames } from "@/lib/utils";
import type { SocialLink } from "@/types/social-link";

const socialIcons = { mail: Mail, github: Code2, linkedin: Link } as const;

interface SocialLinksProps {
  className?: string;
  content: LocaleContent;
  variant?: "compact" | "labeled";
}

export function SocialLinks({ className, content, variant = "compact" }: SocialLinksProps) {
  const availableLinks = socialLinks.filter(
    (link): link is SocialLink & { href: string } => typeof link.href === "string" && link.href.trim().length > 0,
  );
  const labels = {
    github: "GitHub",
    linkedin: "LinkedIn",
    email: content.contact.form.fields.email,
  } as const;

  if (!availableLinks.length) return null;

  return (
    <ul aria-label={content.ui.socialLinksLabel} className={joinClassNames("flex flex-wrap gap-2", className)}>
      {availableLinks.map((link) => {
        const Icon = socialIcons[link.icon];
        const label = labels[link.platform];
        return (
          <li key={link.platform}>
            <a
              aria-label={`${label} — ${content.personal.name}`}
              className={joinClassNames(
                "inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-border bg-background/45 text-foreground-secondary transition-[border-color,background-color,color,transform] duration-200 hover:-translate-y-0.5 hover:border-primary/70 hover:bg-primary/5 hover:text-foreground focus-visible:outline-offset-2 motion-reduce:transform-none motion-reduce:transition-none",
                variant === "labeled" ? "px-4 py-2.5 text-sm" : "w-11",
              )}
              href={link.href}
              rel={link.external ? "noopener noreferrer" : undefined}
              target={link.external ? "_blank" : undefined}
            >
              <Icon aria-hidden="true" size={17} strokeWidth={1.8} />
              {variant === "labeled" ? <span>{label}</span> : <span className="sr-only">{label}</span>}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
