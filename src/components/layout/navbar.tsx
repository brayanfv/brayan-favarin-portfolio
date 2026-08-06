"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { Container } from "@/components/layout/container";
import { PrimaryButton } from "@/components/ui/primary-button";
import { navigationItems } from "@/data/navigation";
import { personalData } from "@/data/personal";
import { joinClassNames } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeHref, setActiveHref] = useState<string>("");
  const resolveSectionHref = (href: string) =>
    isHomePage ? href : `/${href}`;
  const contactHref = resolveSectionHref("#contato");

  useEffect(() => {
    const updateScrolledState = () => setIsScrolled(window.scrollY > 12);

    updateScrolledState();
    window.addEventListener("scroll", updateScrolledState, { passive: true });

    return () => window.removeEventListener("scroll", updateScrolledState);
  }, []);

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;

    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") {
        return;
      }

      setIsMenuOpen(false);
      window.requestAnimationFrame(() => menuButtonRef.current?.focus());
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const firstLink = mobileMenuRef.current?.querySelector<HTMLElement>(
      'a[href]:not([tabindex="-1"])',
    );

    firstLink?.focus();
  }, [isMenuOpen]);

  useEffect(() => {
    const desktopMediaQuery = window.matchMedia("(min-width: 768px)");
    const closeAtDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) {
        setIsMenuOpen(false);
      }
    };

    desktopMediaQuery.addEventListener("change", closeAtDesktop);
    return () =>
      desktopMediaQuery.removeEventListener("change", closeAtDesktop);
  }, []);

  useEffect(() => {
    if (!isHomePage) {
      return;
    }

    const sections = navigationItems
      .map(({ href }) => document.querySelector(href))
      .filter((section): section is Element => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting);

        if (visibleEntry?.target.id) {
          setActiveHref(`#${visibleEntry.target.id}`);
        }
      },
      { rootMargin: "-35% 0px -55% 0px" },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [isHomePage]);

  const closeMenu = () => setIsMenuOpen(false);
  const handleMobileMenuKeyDown = (
    event: React.KeyboardEvent<HTMLElement>,
  ) => {
    if (event.key !== "Tab") {
      return;
    }

    const focusableElements = Array.from(
      mobileMenuRef.current?.querySelectorAll<HTMLElement>(
        'a[href]:not([tabindex="-1"]), button:not([disabled]):not([tabindex="-1"])',
      ) ?? [],
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements.at(-1);

    if (!firstElement || !lastElement) {
      return;
    }

    if (event.shiftKey && document.activeElement === firstElement) {
      event.preventDefault();
      lastElement.focus();
    } else if (!event.shiftKey && document.activeElement === lastElement) {
      event.preventDefault();
      firstElement.focus();
    }
  };

  return (
    <header
      className={joinClassNames(
        "fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,backdrop-filter] duration-300 motion-reduce:transition-none",
        isScrolled
          ? "border-border/80 bg-background/80 backdrop-blur-md"
          : "border-transparent bg-transparent",
      )}
    >
      <Container className="flex h-18 items-center justify-between">
        <Link
          aria-label={`${personalData.name} — voltar ao início`}
          className="inline-flex min-h-11 items-center font-mono text-lg font-semibold tracking-[-0.08em] text-foreground transition-colors hover:text-primary-light focus-visible:rounded-sm"
          href={resolveSectionHref("#inicio")}
          onClick={closeMenu}
        >
          {personalData.brand}
        </Link>

        <nav aria-label="Navegação principal" className="hidden items-center gap-7 md:flex">
          {navigationItems.slice(0, -1).map((item) => (
            <NavigationLink
              active={activeHref === item.href}
              href={resolveSectionHref(item.href)}
              key={item.href}
            >
              {item.label}
            </NavigationLink>
          ))}
          <PrimaryButton
            aria-current={activeHref === "#contato" ? "location" : undefined}
            href={contactHref}
          >
            Contato
          </PrimaryButton>
        </nav>

        <button
          aria-controls="menu-mobile"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
          className="grid size-11 place-items-center rounded-md border border-border bg-card text-foreground transition-colors hover:border-primary hover:text-primary focus-visible:outline-offset-2 md:hidden"
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
          ref={menuButtonRef}
          type="button"
        >
          {isMenuOpen ? <X aria-hidden="true" size={20} /> : <Menu aria-hidden="true" size={20} />}
        </button>
      </Container>

      {isMenuOpen ? (
        <nav
          aria-label="Menu de navegação mobile"
          className="max-h-[calc(100svh-4.5rem)] overflow-y-auto overscroll-contain border-t border-border bg-background/95 px-5 py-5 backdrop-blur-md md:hidden"
          id="menu-mobile"
          onKeyDown={handleMobileMenuKeyDown}
          ref={mobileMenuRef}
        >
          <div className="mx-auto flex w-full max-w-[var(--content-max-width)] flex-col gap-1">
            {navigationItems.slice(0, -1).map((item) => (
              <NavigationLink
                active={activeHref === item.href}
                className="rounded-md px-3 py-3 text-base"
                href={resolveSectionHref(item.href)}
                key={item.href}
                onClick={closeMenu}
              >
                {item.label}
              </NavigationLink>
            ))}
            <PrimaryButton
              aria-current={activeHref === "#contato" ? "location" : undefined}
              className="mt-3 w-full justify-center"
              href={contactHref}
              onClick={closeMenu}
            >
              Entrar em contato
            </PrimaryButton>
          </div>
        </nav>
      ) : null}
    </header>
  );
}

interface NavigationLinkProps {
  active: boolean;
  children: React.ReactNode;
  className?: string;
  href: string;
  onClick?: () => void;
}

function NavigationLink({
  active,
  children,
  className,
  href,
  onClick,
}: NavigationLinkProps) {
  return (
    <Link
      aria-current={active ? "location" : undefined}
      className={joinClassNames(
        "font-mono text-xs text-foreground-secondary transition-colors hover:text-foreground focus-visible:rounded-sm",
        active && "text-primary-light",
        className,
      )}
      href={href}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
