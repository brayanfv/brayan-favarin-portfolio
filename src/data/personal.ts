import { siteConfig } from "@/config/site";
import type { PersonalData, QuickFact } from "@/types/personal";

export const personalData = {
  name: siteConfig.name,
  brand: siteConfig.brand,
  role: siteConfig.role,
  location: siteConfig.location,
  education: "Ciência da Computação — UNESC",
  area: "Desenvolvimento Full Stack",
  focus: "Java, Spring Boot e aplicações web",
  availability: "Disponível para oportunidades",
  hero: {
    titleLead: "Desenvolvedor Full Stack criando",
    titleHighlight: "aplicações modernas e completas.",
    description: [
      "Sou estudante de Ciência da Computação e desenvolvedor com experiência em Java, Spring Boot, Angular e desenvolvimento de sistemas do backend ao frontend.",
      "Transformo ideias e problemas reais em soluções organizadas, funcionais e fáceis de utilizar.",
    ],
    featuredTechnologies: [
      "Java",
      "Spring Boot",
      "Angular",
      "TypeScript",
      "PostgreSQL",
      "Docker",
    ],
    technicalFlow: [
      { detail: "REST", label: "API" },
      { detail: "interface", label: "frontend" },
      { detail: "data", label: "database" },
      { detail: "release", label: "deploy" },
    ],
  },
  about: {
    eyebrow: "01 / Sobre",
    title: "Desenvolvimento além do código.",
    paragraphs: [
      "Sou estudante de Ciência da Computação na UNESC e desenvolvedor Full Stack com experiência na construção de aplicações utilizando Java, Spring Boot, Angular e bancos de dados relacionais.",
      "Ao longo da minha trajetória, participei do desenvolvimento de sistemas reais em ambientes colaborativos, trabalhando com regras de negócio, integração entre frontend e backend, criação de interfaces e organização de fluxos.",
      "Gosto de entender o problema antes de começar a programar e busco desenvolver soluções que sejam organizadas, funcionais e simples de usar.",
      "Atualmente, estou aprimorando minhas habilidades por meio de projetos próprios, estudos e experiências práticas, com o objetivo de atuar profissionalmente no desenvolvimento de software.",
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
    label: "Foco principal",
    value: personalData.focus,
  },
];
