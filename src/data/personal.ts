import { siteConfig } from "@/config/site";
import type { PersonalData, QuickFact } from "@/types/personal";

export const personalData = {
  name: siteConfig.name,
  brand: siteConfig.brand,
  role: siteConfig.role,
  location: siteConfig.location,
  education: "Ciência da Computação — UNESC",
  area: "Desenvolvimento Full Stack",
  focus: "Java, Spring Boot, Angular e PostgreSQL",
  availability: "Disponível para oportunidades",
  hero: {
    proposal:
      "Especializado em construir aplicações completas, organizadas e preparadas para produção.",
    dynamicMessages: [
      "Planejando soluções.",
      "Projetando arquitetura.",
      "Desenvolvendo aplicações.",
      "Preparando para produção.",
    ],
    technicalFlow: [
      { detail: "requisitos e escopo", label: "planejamento" },
      { detail: "sistemas sustentáveis", label: "arquitetura" },
      { detail: "frontend e backend", label: "desenvolvimento" },
      { detail: "testes e entrega", label: "qualidade" },
    ],
  },
  about: {
    eyebrow: "01 / Sobre",
    title: "Desenvolvimento além do código.",
    paragraphs: [
      "Atuo como Desenvolvedor Full Stack na construção de aplicações completas, unindo Java, Spring Boot, Angular e bancos de dados relacionais para transformar necessidades de negócio em soluções confiáveis e bem estruturadas.",
      "Em projetos reais, contribuo para APIs REST, integração entre frontend e backend, definição de arquitetura, regras de negócio e evolução contínua de funcionalidades em ambientes colaborativos.",
      "Gosto de compreender o problema antes de escrever código e de tomar decisões que valorizem organização, arquitetura, qualidade e simplicidade. Mantenho o aprendizado contínuo como parte do trabalho e da minha evolução profissional.",
    ],
  },
} as const satisfies PersonalData;

export const aboutQuickFacts: QuickFact[] = [
  {
    label: "Localização",
    value: personalData.location,
  },
  {
    label: "Formação",
    value: personalData.education,
  },
  {
    label: "Área de atuação",
    value: personalData.area,
  },
  {
    label: "Stack principal",
    value: personalData.focus,
  },
];
