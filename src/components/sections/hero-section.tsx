import { ArrowRight, Download, ExternalLink } from "lucide-react";

import { Container } from "@/components/layout/container";
import { AnimatedSection } from "@/components/shared/animated-section";
import { TechnologyTag } from "@/components/shared/technology-tag";
import { PrimaryButton } from "@/components/ui/primary-button";
import { SecondaryButton } from "@/components/ui/secondary-button";
import { siteConfig } from "@/config/site";
import { personalData } from "@/data/personal";
import { socialLinks } from "@/data/social-links";

export function HeroSection() {
  const githubUrl = socialLinks.find((link) => link.label === "GitHub")?.href;

  return (
    <section
      className="anchor-target relative flex min-h-svh items-center overflow-hidden border-b border-border pt-28 pb-20 sm:pt-32 sm:pb-24"
      id="inicio"
    >
      <div
        aria-hidden="true"
        className="hero-grid pointer-events-none absolute inset-0"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/3 size-[34rem] -translate-x-1/2 opacity-80"
        style={{ background: "var(--gradient-glow)" }}
      />

      <Container className="relative grid items-center gap-16 lg:grid-cols-[minmax(0,1.25fr)_minmax(20rem,0.75fr)] lg:gap-12">
        <div className="min-w-0">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-3 py-1.5 font-mono text-xs text-foreground-secondary">
              <span
                aria-hidden="true"
                className="size-1.5 rounded-full bg-success shadow-[0_0_10px_rgb(34_197_94/0.45)]"
              />
              {personalData.availability}
            </div>
          </AnimatedSection>

          <AnimatedSection className="mt-7" delay={0.06}>
            <h1 className="max-w-4xl text-[clamp(2.5rem,6vw,4.5rem)] leading-[0.98] font-semibold tracking-[-0.055em] text-balance text-foreground">
              {personalData.hero.titleLead}{" "}
              <span className="bg-[image:var(--gradient-primary)] bg-clip-text text-transparent">
                {personalData.hero.titleHighlight}
              </span>
            </h1>
          </AnimatedSection>

          <AnimatedSection
            className="mt-7 max-w-2xl space-y-4"
            delay={0.12}
          >
            {personalData.hero.description.map((paragraph) => (
              <p
                className="text-base leading-7 text-foreground-secondary sm:text-lg sm:leading-8"
                key={paragraph}
              >
                {paragraph}
              </p>
            ))}
          </AnimatedSection>

          <AnimatedSection
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
            delay={0.18}
          >
            <PrimaryButton className="sm:w-auto" href="#projetos">
              Ver projetos
              <ArrowRight aria-hidden="true" size={17} strokeWidth={1.8} />
            </PrimaryButton>
            {githubUrl ? (
              <SecondaryButton
                className="sm:w-auto"
                href={githubUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                GitHub
                <ExternalLink
                  aria-hidden="true"
                  size={16}
                  strokeWidth={1.8}
                />
              </SecondaryButton>
            ) : null}
            {siteConfig.resume.enabled ? (
              <SecondaryButton
                className="sm:w-auto"
                download
                href={siteConfig.resume.path}
              >
                <Download aria-hidden="true" size={16} strokeWidth={1.8} />
                Baixar currículo
              </SecondaryButton>
            ) : null}
          </AnimatedSection>

          <div className="mt-10">
            <AnimatedSection delay={0.22}>
              <p className="mb-3 font-mono text-[0.6875rem] tracking-[0.16em] text-foreground-muted uppercase">
                Stack principal
              </p>
            </AnimatedSection>
            <div className="flex flex-wrap gap-2">
              {personalData.hero.featuredTechnologies.map(
                (technology, index) => (
                  <AnimatedSection delay={0.24 + index * 0.035} key={technology}>
                    <TechnologyTag label={technology} />
                  </AnimatedSection>
                ),
              )}
            </div>
          </div>
        </div>

        <AnimatedSection className="mx-auto w-full max-w-md" delay={0.16}>
          <TechnicalPanel />
        </AnimatedSection>
      </Container>
    </section>
  );
}

function TechnicalPanel() {
  return (
    <div
      aria-hidden="true"
      className="relative isolate min-h-96 overflow-hidden rounded-2xl border border-border bg-card/75 p-5 shadow-[0_24px_80px_rgb(0_0_0/0.35)] backdrop-blur-sm sm:p-6"
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgb(255_255_255/0.025)_1px,transparent_1px),linear-gradient(90deg,rgb(255_255_255/0.025)_1px,transparent_1px)] bg-[size:32px_32px]" />
      <div className="absolute -top-24 -right-24 size-64 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative flex items-center justify-between border-b border-border pb-4 font-mono text-[0.6875rem] text-foreground-muted">
        <span>solution.flow</span>
        <span className="text-success">online</span>
      </div>

      <div className="relative mt-7 grid grid-cols-2 gap-5">
        {personalData.hero.technicalFlow.map((node, index) => (
          <div
            className="relative rounded-lg border border-border bg-background/75 p-4"
            key={node.label}
          >
            <span className="font-mono text-[0.625rem] text-primary">
              0{index + 1}
            </span>
            <p className="mt-6 font-mono text-sm text-foreground">
              {node.label}
            </p>
            <p className="mt-1 font-mono text-[0.625rem] text-foreground-muted">
              {node.detail}
            </p>
            {index % 2 === 0 ? (
              <span
                className="absolute -right-3 top-1/2 h-px w-3 bg-primary/60"
              />
            ) : null}
          </div>
        ))}
      </div>

      <div className="relative mt-6 flex items-center gap-3 rounded-lg border border-primary/25 bg-primary/5 px-4 py-3 font-mono text-[0.6875rem]">
        <span className="text-primary">idea</span>
        <span className="h-px flex-1 bg-gradient-to-r from-primary/70 to-primary/10" />
        <span className="text-foreground-secondary">produto funcional</span>
      </div>
    </div>
  );
}
