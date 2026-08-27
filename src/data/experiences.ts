import type { Experience } from "@/types/experience";

export const experienceSectionData = {
  eyebrow: "03 / Experiência",
  title: "Experiências que ajudaram a construir minha forma de trabalhar.",
  description:
    "Experiência prática no desenvolvimento de aplicações web, atuando em projetos reais com tecnologias modernas de frontend, backend e banco de dados.",
} as const;

export const experiences = [
  {
    company: "Mohawk Brasil",
    role: "Estagiário de Desenvolvimento",
    context: "UNESC Labs",
    period: "Ago 2025 — Jan 2026",
    description: [
      "Atuação no desenvolvimento de interfaces e funcionalidades para um sistema interno de gestão empresarial, utilizando Angular no frontend e colaborando com integrações ao backend em Python. Participação na evolução de funcionalidades e na manutenção de fluxos existentes em ambiente colaborativo com Git, Docker e PostgreSQL.",
    ],
    competencies: [
      "Desenvolvimento Frontend",
      "Integração Frontend/Backend",
      "Trabalho em equipe",
      "Versionamento com Git",
      "Desenvolvimento de funcionalidades",
    ],
    technologies: [
      "Angular",
      "TypeScript",
      "Python",
      "PostgreSQL",
      "Docker",
      "Git",
    ],
    order: 1,
  },
  {
    company: "Simples Dental",
    role: "Estagiário de Desenvolvimento",
    context: "UNESC Labs",
    period: "Jan 2025 — Ago 2025",
    description: [
      "Participação no desenvolvimento e na manutenção de aplicações web com Spring Boot e Angular, contribuindo para APIs REST, integração entre frontend e backend, modelagem de dados e evolução de funcionalidades em ambiente colaborativo.",
    ],
    competencies: [
      "Desenvolvimento Full Stack",
      "APIs REST",
      "Integração Frontend/Backend",
      "Modelagem de dados",
      "Trabalho em equipe",
    ],
    technologies: ["Java", "Spring Boot", "Angular", "PostgreSQL", "Git"],
    order: 2,
  },
] as const satisfies readonly Experience[];
