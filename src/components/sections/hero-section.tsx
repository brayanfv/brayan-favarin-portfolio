import { ArrowRight, Download } from "lucide-react";
import Image from "next/image";

import { Container } from "@/components/layout/container";
import { HeroDynamicMessage } from "@/components/sections/hero-dynamic-message";
import { PrimaryButton } from "@/components/ui/primary-button";
import { SecondaryButton } from "@/components/ui/secondary-button";
import { siteConfig } from "@/config/site";
import type { Locale } from "@/i18n/config";
import { getSectionHref, getSectionId } from "@/i18n/routing";
import type { LocaleContent } from "@/i18n/types";

interface HeroSectionProps {
  content: LocaleContent;
  locale: Locale;
}

export function HeroSection({ content, locale }: HeroSectionProps) {
  const resume = siteConfig.resume[locale];

  return (
    <section className="anchor-target relative flex min-h-svh items-center overflow-hidden border-b border-border pt-28 pb-20 sm:pt-32 sm:pb-24" id={getSectionId(locale, "home")}>
      <div aria-hidden="true" className="hero-grid pointer-events-none absolute inset-0" />
      <div aria-hidden="true" className="pointer-events-none absolute -top-24 left-1/3 size-[34rem] -translate-x-1/2 opacity-80" style={{ background: "var(--gradient-glow)" }} />

      <Container className="relative grid items-center gap-14 lg:grid-cols-[minmax(0,1.25fr)_minmax(20rem,0.75fr)] lg:gap-12">
        <div className="min-w-0">
          <h1 className="max-w-4xl text-[clamp(3rem,7vw,5.5rem)] leading-[0.94] font-semibold tracking-[-0.06em] text-balance text-foreground">{content.personal.name}</h1>
          <p className="mt-6 font-mono text-sm tracking-[0.14em] text-primary-light uppercase sm:text-base">{content.personal.role}</p>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-foreground-secondary sm:text-xl sm:leading-9">{content.personal.hero.proposal}</p>
          <div className="mt-7 border-l border-primary/60 pl-4">
            <HeroDynamicMessage fallbackMessage={content.personal.hero.dynamicMessages[0]} messages={content.personal.hero.dynamicMessages} />
          </div>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <PrimaryButton className="sm:w-auto" href={getSectionHref(locale, "projects")}>
              {content.ui.hero.projects}<ArrowRight aria-hidden="true" size={17} strokeWidth={1.8} />
            </PrimaryButton>
            {resume.enabled ? (
              <SecondaryButton className="sm:w-auto" download href={resume.path}>
                <Download aria-hidden="true" size={16} strokeWidth={1.8} />{content.ui.hero.resume}
              </SecondaryButton>
            ) : null}
          </div>
          <p className="mt-7 inline-flex items-center gap-2 font-mono text-xs text-foreground-muted">
            <span aria-hidden="true" className="size-1.5 rounded-full bg-success shadow-[0_0_10px_rgb(34_197_94/0.45)]" />{content.personal.availability}
          </p>
        </div>
        <div className="mx-auto w-full max-w-md">
          {siteConfig.photo.enabled ? <ProfilePhoto /> : <TechnicalPanel content={content} />}
        </div>
      </Container>
    </section>
  );
}

function ProfilePhoto() {
  return <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-card shadow-[0_24px_80px_rgb(0_0_0/0.35)]"><Image alt={siteConfig.photo.alt} className="object-cover" height={800} priority sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw" src={siteConfig.photo.src} width={640} /></div>;
}

function TechnicalPanel({ content }: { content: LocaleContent }) {
  return (
    <div aria-hidden="true" className="relative isolate min-h-96 overflow-hidden rounded-2xl border border-border bg-card/75 p-5 shadow-[0_24px_80px_rgb(0_0_0/0.35)] backdrop-blur-sm sm:p-6">
      <div className="absolute inset-0 bg-[linear-gradient(rgb(255_255_255/0.025)_1px,transparent_1px),linear-gradient(90deg,rgb(255_255_255/0.025)_1px,transparent_1px)] bg-[size:32px_32px]" />
      <div className="absolute -top-24 -right-24 size-64 rounded-full bg-primary/10 blur-3xl" />
      <div className="relative flex items-center justify-between border-b border-border pb-4 font-mono text-[0.6875rem] text-foreground-muted"><span>{content.ui.hero.panelFile}</span><span className="text-success">{content.ui.hero.panelActive}</span></div>
      <div className="relative mt-7 grid grid-cols-2 gap-5">
        {content.personal.hero.technicalFlow.map((node, index) => <div className="relative rounded-lg border border-border bg-background/75 p-4" key={node.label}><span className="font-mono text-[0.625rem] text-primary">0{index + 1}</span><p className="mt-6 font-mono text-sm text-foreground">{node.label}</p><p className="mt-1 font-mono text-[0.625rem] text-foreground-muted">{node.detail}</p>{index % 2 === 0 ? <span aria-hidden="true" className="absolute -right-3 top-1/2 h-px w-3 bg-primary/60" /> : null}</div>)}
      </div>
      <div className="relative mt-6 flex items-center gap-3 rounded-lg border border-primary/25 bg-primary/5 px-4 py-3 font-mono text-[0.6875rem]"><span className="text-primary">{content.ui.hero.panelFrom}</span><span className="h-px flex-1 bg-gradient-to-r from-primary/70 to-primary/10" /><span className="text-foreground-secondary">{content.ui.hero.panelTo}</span></div>
    </div>
  );
}
