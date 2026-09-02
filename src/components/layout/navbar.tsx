"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { Container } from "@/components/layout/container";
import { PrimaryButton } from "@/components/ui/primary-button";
import type { Locale } from "@/i18n/config";
import {
  getHomePath,
  getLocaleSwitchPath,
  getSectionHref,
  getSectionId,
  type SectionKey,
} from "@/i18n/routing";
import type { LocaleContent } from "@/i18n/types";
import { joinClassNames } from "@/lib/utils";

type NavigationSection = Exclude<SectionKey, "home" | "contact">;

const navigationSections = ["about", "projects", "experience", "technologies"] as const satisfies readonly NavigationSection[];

interface NavbarProps {
  content: LocaleContent;
  locale: Locale;
}

export function Navbar({ content, locale }: NavbarProps) {
  const pathname = usePathname();
  const isHomePage = pathname === getHomePath(locale);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<SectionKey | null>(null);
  const resolveSectionHref = (section: SectionKey) =>
    isHomePage ? `#${getSectionId(locale, section)}` : getSectionHref(locale, section);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const updateScrolledState = () => setIsScrolled(window.scrollY > 12);
    updateScrolledState();
    window.addEventListener("scroll", updateScrolledState, { passive: true });
    return () => window.removeEventListener("scroll", updateScrolledState);
  }, []);

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    if (isMenuOpen) document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = originalOverflow; };
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isMenuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        window.requestAnimationFrame(() => menuButtonRef.current?.focus());
      }
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isMenuOpen) return;
    mobileMenuRef.current?.querySelector<HTMLElement>('a[href]:not([tabindex="-1"])')?.focus();
  }, [isMenuOpen]);

  useEffect(() => {
    const desktopMediaQuery = window.matchMedia("(min-width: 768px)");
    const closeAtDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) setIsMenuOpen(false);
    };
    desktopMediaQuery.addEventListener("change", closeAtDesktop);
    return () => desktopMediaQuery.removeEventListener("change", closeAtDesktop);
  }, []);

  useEffect(() => {
    if (!isHomePage) {
      return;
    }

    const sectionKeys = [...navigationSections, "contact"] as const;
    const sections = sectionKeys
      .map((section) => ({ element: document.getElementById(getSectionId(locale, section)), section }))
      .filter((entry): entry is { element: HTMLElement; section: NavigationSection | "contact" } => entry.element !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting);
        const visibleSection = sections.find(({ element }) => element === visibleEntry?.target);
        if (visibleSection) setActiveSection(visibleSection.section);
      },
      { rootMargin: "-35% 0px -55% 0px" },
    );
    sections.forEach(({ element }) => observer.observe(element));
    return () => observer.disconnect();
  }, [isHomePage, locale]);

  const handleMobileMenuKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key !== "Tab") return;
    const focusableElements = Array.from(
      mobileMenuRef.current?.querySelectorAll<HTMLElement>(
        'a[href]:not([tabindex="-1"]), button:not([disabled]):not([tabindex="-1"])',
      ) ?? [],
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements.at(-1);
    if (!firstElement || !lastElement) return;
    if (event.shiftKey && document.activeElement === firstElement) {
      event.preventDefault();
      lastElement.focus();
    } else if (!event.shiftKey && document.activeElement === lastElement) {
      event.preventDefault();
      firstElement.focus();
    }
  };

  return (
    <header className={joinClassNames(
      "fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,backdrop-filter] duration-300 motion-reduce:transition-none",
      isScrolled ? "border-border/80 bg-background/80 backdrop-blur-md" : "border-transparent bg-transparent",
    )}>
      <Container className="flex h-18 items-center justify-between gap-4">
        <Link
          aria-label={`${content.personal.name} — ${content.ui.notFound.home.toLowerCase()}`}
          className="inline-flex min-h-11 items-center font-mono text-lg font-semibold tracking-[-0.08em] text-foreground transition-colors hover:text-primary-light focus-visible:rounded-sm"
          href={resolveSectionHref("home")}
          onClick={closeMenu}
        >
          {content.personal.brand}
        </Link>

        <nav aria-label={content.ui.navigation.mainLabel} className="hidden items-center gap-6 md:flex">
          {navigationSections.map((section) => (
            <NavigationLink active={isHomePage && activeSection === section} href={resolveSectionHref(section)} key={section}>
              {content.ui.navigation.items[section]}
            </NavigationLink>
          ))}
          <LanguageSwitcher content={content} locale={locale} pathname={pathname} />
          <PrimaryButton aria-current={isHomePage && activeSection === "contact" ? "location" : undefined} href={resolveSectionHref("contact")}>
            {content.ui.navigation.contact}
          </PrimaryButton>
        </nav>

        <button
          aria-controls="menu-mobile"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? content.ui.navigation.closeMenu : content.ui.navigation.openMenu}
          className="grid size-11 place-items-center rounded-md border border-border bg-card text-foreground transition-colors hover:border-primary hover:text-primary focus-visible:outline-offset-2 md:hidden"
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
          ref={menuButtonRef}
          type="button"
        >
          {isMenuOpen ? <X aria-hidden="true" size={20} /> : <Menu aria-hidden="true" size={20} />}
        </button>
      </Container>

      {isMenuOpen ? (
        <nav aria-label={content.ui.navigation.mobileLabel} className="max-h-[calc(100svh-4.5rem)] overflow-y-auto overscroll-contain border-t border-border bg-background/95 px-5 py-5 backdrop-blur-md md:hidden" id="menu-mobile" onKeyDown={handleMobileMenuKeyDown} ref={mobileMenuRef}>
          <div className="mx-auto flex w-full max-w-[var(--content-max-width)] flex-col gap-1">
            {navigationSections.map((section) => (
              <NavigationLink active={isHomePage && activeSection === section} className="rounded-md px-3 py-3 text-base" href={resolveSectionHref(section)} key={section} onClick={closeMenu}>
                {content.ui.navigation.items[section]}
              </NavigationLink>
            ))}
            <LanguageSwitcher content={content} locale={locale} pathname={pathname} />
            <PrimaryButton aria-current={isHomePage && activeSection === "contact" ? "location" : undefined} className="mt-3 w-full justify-center" href={resolveSectionHref("contact")} onClick={closeMenu}>
              {content.ui.navigation.mobileContact}
            </PrimaryButton>
          </div>
        </nav>
      ) : null}
    </header>
  );
}

function LanguageSwitcher({ content, locale, pathname }: NavbarProps & { pathname: string }) {
  return (
    <div
      aria-label={content.ui.languageSwitcher.label}
      className="flex items-center gap-1 font-mono text-xs text-foreground-muted"
      role="group"
    >
      {(["pt-BR", "en"] as const).map((targetLocale, index) => (
        <span className="flex items-center gap-1" key={targetLocale}>
          {index ? <span aria-hidden="true">|</span> : null}
          <Link aria-current={locale === targetLocale ? "page" : undefined} className={joinClassNames("rounded-sm px-1 py-1 transition-colors hover:text-foreground focus-visible:outline-offset-2", locale === targetLocale && "text-primary-light")} href={getLocaleSwitchPath(pathname, targetLocale)}>
            {content.ui.languageSwitcher.localeLabels[targetLocale]}
          </Link>
        </span>
      ))}
    </div>
  );
}

interface NavigationLinkProps {
  active: boolean;
  children: React.ReactNode;
  className?: string;
  href: string;
  onClick?: () => void;
}

function NavigationLink({ active, children, className, href, onClick }: NavigationLinkProps) {
  return (
    <Link aria-current={active ? "location" : undefined} className={joinClassNames("font-mono text-xs text-foreground-secondary transition-colors hover:text-foreground focus-visible:rounded-sm", active && "text-primary-light", className)} href={href} onClick={onClick}>
      {children}
    </Link>
  );
}
