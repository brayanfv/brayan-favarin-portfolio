import type {
  Technology,
  TechnologyCategory,
  TechnologyGroup,
} from "@/types/technology";

export const technologiesSectionData = {
  eyebrow: "04 / Tecnologias",
  title: "Ferramentas que utilizo para transformar ideias em aplicações.",
  description:
    "Tecnologias e práticas utilizadas na construção de APIs, interfaces, aplicações mobile e soluções completas.",
  practicesDescription:
    "Princípios presentes na forma como organizo e desenvolvo soluções.",
} as const;

export const technologyCategoryOrder = [
  "Backend",
  "Frontend",
  "Bancos de dados",
  "Ferramentas e DevOps",
  "Práticas",
] as const satisfies readonly TechnologyCategory[];

export const technologies = [
  {
    name: "Java",
    category: "Backend",
    highlighted: true,
    order: 1,
  },
  {
    name: "Spring Boot",
    category: "Backend",
    highlighted: true,
    order: 2,
  },
  {
    name: "Spring Data JPA",
    category: "Backend",
    order: 3,
  },
  {
    name: "Node.js",
    category: "Backend",
    order: 4,
  },
  {
    name: "Express",
    category: "Backend",
    order: 5,
  },
  {
    name: "APIs REST",
    category: "Backend",
    order: 6,
  },
  {
    name: "Maven",
    category: "Backend",
    order: 7,
  },
  {
    name: "Angular",
    category: "Frontend",
    highlighted: true,
    order: 1,
  },
  {
    name: "React",
    category: "Frontend",
    order: 2,
  },
  {
    name: "Next.js",
    category: "Frontend",
    order: 3,
  },
  {
    name: "React Native",
    category: "Frontend",
    order: 4,
  },
  {
    name: "TypeScript",
    category: "Frontend",
    highlighted: true,
    order: 5,
  },
  {
    name: "JavaScript",
    category: "Frontend",
    order: 6,
  },
  {
    name: "HTML",
    category: "Frontend",
    order: 7,
  },
  {
    name: "CSS",
    category: "Frontend",
    order: 8,
  },
  {
    name: "SCSS",
    category: "Frontend",
    order: 9,
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    order: 10,
  },
  {
    name: "PostgreSQL",
    category: "Bancos de dados",
    highlighted: true,
    order: 1,
  },
  {
    name: "MySQL",
    category: "Bancos de dados",
    order: 2,
  },
  {
    name: "MongoDB",
    category: "Bancos de dados",
    order: 3,
  },
  {
    name: "SQLite",
    category: "Bancos de dados",
    order: 4,
  },
  {
    name: "Git",
    category: "Ferramentas e DevOps",
    highlighted: true,
    order: 1,
  },
  {
    name: "GitHub",
    category: "Ferramentas e DevOps",
    order: 2,
  },
  {
    name: "Docker",
    category: "Ferramentas e DevOps",
    highlighted: true,
    order: 3,
  },
  {
    name: "Docker Compose",
    category: "Ferramentas e DevOps",
    order: 4,
  },
  {
    name: "Swagger",
    category: "Ferramentas e DevOps",
    order: 5,
  },
  {
    name: "Postman",
    category: "Ferramentas e DevOps",
    order: 6,
  },
  {
    name: "VS Code",
    category: "Ferramentas e DevOps",
    order: 7,
  },
  {
    name: "Vercel",
    category: "Ferramentas e DevOps",
    order: 8,
  },
  {
    name: "Desenvolvimento responsivo",
    category: "Práticas",
    order: 1,
  },
  {
    name: "Integração frontend e backend",
    category: "Práticas",
    order: 2,
  },
  {
    name: "Versionamento de código",
    category: "Práticas",
    order: 3,
  },
  {
    name: "Organização de componentes",
    category: "Práticas",
    order: 4,
  },
  {
    name: "Regras de negócio",
    category: "Práticas",
    order: 5,
  },
  {
    name: "APIs REST",
    category: "Práticas",
    order: 6,
  },
  {
    name: "Trabalho em equipe",
    category: "Práticas",
    order: 7,
  },
  {
    name: "Metodologias ágeis",
    category: "Práticas",
    order: 8,
  },
] as const satisfies readonly Technology[];

export const technologyGroups: readonly TechnologyGroup[] =
  technologyCategoryOrder.map((category) => ({
    category,
    items: technologies
      .filter((technology) => technology.category === category)
      .sort(
        (firstTechnology, secondTechnology) =>
          (firstTechnology.order ?? 0) - (secondTechnology.order ?? 0),
      ),
  }));
