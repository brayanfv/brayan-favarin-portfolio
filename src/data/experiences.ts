import type { Experience } from "@/types/experience";

export const experienceSectionData = {
  eyebrow: "03 / Experiência",
  title: "Experiências que ajudaram a construir minha forma de trabalhar.",
  description:
    "Uma trajetória marcada por desenvolvimento de software, colaboração em equipe, responsabilidade e contato com problemas reais.",
} as const;

export const experiences = [
  {
    company: "UNESC Labs — Simples Dental",
    role: "Estagiário Bolsista em Desenvolvimento de Software",
    period: "2025",
    description: [
      "Atuação no desenvolvimento e manutenção de aplicações utilizando Java, Spring Boot e Angular.",
      "Participação em reuniões diárias, organização de tarefas, desenvolvimento de funcionalidades, implementação de regras de negócio e integração entre frontend e backend.",
    ],
    responsibilities: [
      "Desenvolvimento de funcionalidades",
      "Implementação de regras de negócio",
      "Integração entre frontend e backend",
      "Correção de problemas",
      "Participação em reuniões diárias",
      "Trabalho com prazos e entregas",
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "Angular",
      "TypeScript",
      "Banco de dados",
      "Git",
    ],
    order: 1,
  },
  {
    company: "UNESC Labs — Mohawk",
    role: "Estagiário Bolsista em Desenvolvimento Frontend",
    period: "2025",
    description: [
      "Atuação no desenvolvimento visual de um sistema de controle interno, com foco em criação de telas, componentes reutilizáveis e organização de fluxos utilizando Angular.",
    ],
    responsibilities: [
      "Desenvolvimento de interfaces",
      "Criação de componentes reutilizáveis",
      "Organização de fluxos",
      "Ajustes visuais",
      "Participação em reuniões com supervisores",
      "Colaboração com a equipe de desenvolvimento",
    ],
    technologies: ["Angular", "TypeScript", "HTML", "SCSS", "Git"],
    order: 2,
  },
] as const satisfies readonly Experience[];
