import { ArrowLeft, FolderOpen } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { PrimaryButton } from "@/components/ui/primary-button";
import { SecondaryButton } from "@/components/ui/secondary-button";

export default function NotFound() {
  return (
    <>
      <Navbar />

      <main
        className="relative flex min-h-svh items-center overflow-hidden border-b border-border pt-28 pb-20"
        id="conteudo-principal"
        tabIndex={-1}
      >
        <span aria-hidden="true" className="absolute top-0" id="inicio" />
        <div
          aria-hidden="true"
          className="hero-grid pointer-events-none absolute inset-0"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 left-1/2 size-[32rem] -translate-x-1/2 -translate-y-1/2 opacity-75"
          style={{ background: "var(--gradient-glow)" }}
        />

        <Container className="relative">
          <p className="font-mono text-xs tracking-[0.16em] text-primary-light uppercase">
            404 / Página não encontrada
          </p>
          <h1 className="mt-5 max-w-3xl text-[clamp(2.7rem,7vw,5rem)] leading-[0.98] font-semibold tracking-[-0.055em] text-foreground">
            Página não encontrada.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-foreground-secondary sm:text-lg sm:leading-8">
            O conteúdo que você tentou acessar não existe ou foi movido.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <PrimaryButton className="w-full sm:w-auto" href="/#inicio">
              <ArrowLeft aria-hidden="true" size={17} strokeWidth={1.8} />
              Voltar ao início
            </PrimaryButton>
            <SecondaryButton className="w-full sm:w-auto" href="/#projetos">
              <FolderOpen aria-hidden="true" size={17} strokeWidth={1.8} />
              Ver projetos
            </SecondaryButton>
          </div>
        </Container>
      </main>

      <Footer />
    </>
  );
}
