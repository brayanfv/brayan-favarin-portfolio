import type { Project } from "@/types/project";

export const projectsSectionData = {
  eyebrow: "02 / Projetos",
  title: "Projetos que transformam conhecimento em soluções reais.",
  description:
    "Uma seleção de aplicações desenvolvidas para praticar arquitetura, regras de negócio, interfaces modernas, integração de sistemas e boas práticas de desenvolvimento.",
} as const;

export const projects: readonly Project[] = [
  {
    slug: "professional-management-api",
    title: "Professional Management API",
    subtitle: "Sistema de gerenciamento de profissionais e contatos",
    description:
      "API REST desenvolvida para cadastrar, consultar, atualizar e excluir profissionais e seus respectivos contatos, com foco em organização arquitetural, regras de negócio, persistência de dados e documentação de endpoints.",
    shortDescription:
      "API REST para gerenciar profissionais, contatos e suas regras de negócio.",
    technologies: [
      "Java",
      "Spring Boot",
      "Spring Data JPA",
      "PostgreSQL",
      "Swagger",
      "Docker",
      "Maven",
    ],
    status: "Em evolução",
    featured: true,
    repositoryUrl:
      "https://github.com/brayanfv/PROFESSIONAL-MANAGEMENT-API",
    imageAlt:
      "Representação abstrata de endpoints e relacionamento entre profissionais e contatos",
    category: "API REST",
    visual: "api",
    overview:
      "API REST para gerenciamento de profissionais e contatos, desenvolvida com foco em arquitetura organizada, regras de negócio, persistência de dados e documentação.",
    context:
      "O projeto foi criado para praticar e demonstrar a construção de uma API completa, incluindo relacionamento entre entidades, operações CRUD, filtros, validações e documentação de endpoints.",
    problem:
      "Organizar o cadastro de profissionais e seus contatos de forma estruturada, permitindo consultas, alterações, exclusões e filtros sem duplicação ou inconsistência de dados.",
    solution:
      "Desenvolvimento de uma API em Java com Spring Boot, utilizando JPA para persistência, PostgreSQL como banco de dados e Swagger para documentação.",
    features: [
      "cadastro de profissionais",
      "cadastro de contatos",
      "relacionamento entre profissional e contato",
      "listagem",
      "busca por identificador",
      "filtros",
      "atualização",
      "exclusão",
      "documentação com Swagger",
      "integração com PostgreSQL",
    ],
    architecture: [
      "controller",
      "service",
      "repository",
      "entities",
      "DTOs",
      "validações",
      "tratamento de erros",
      "banco relacional",
    ],
    challenges: [
      "modelagem do relacionamento entre profissional e contato",
      "conversão entre entidades e DTOs",
      "filtros",
      "tratamento de datas",
      "consistência das respostas da API",
      "conexão com PostgreSQL",
    ],
    decisions: [
      "separação por camadas",
      "uso de DTOs",
      "uso de Spring Data JPA",
      "documentação com Swagger",
      "conteúdo preparado para Docker e testes",
    ],
    learnings: [
      "arquitetura de APIs REST",
      "relacionamento entre entidades",
      "regras de negócio",
      "persistência",
      "documentação",
      "tratamento de erros",
    ],
    nextSteps: [
      "ampliar testes",
      "melhorar cobertura de validações",
      "finalizar Docker",
      "publicar backend",
      "criar uma interface web",
    ],
  },
  {
    slug: "portfolio-pessoal",
    title: "Portfólio Pessoal",
    subtitle: "Plataforma para apresentar minha trajetória e projetos",
    description:
      "Portfólio desenvolvido do zero com foco em identidade visual, experiência do usuário, responsividade, performance, SEO e apresentação profissional.",
    shortDescription:
      "Experiência digital para apresentar trajetória, competências e projetos.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Motion",
      "Vercel",
    ],
    status: "Em desenvolvimento",
    featured: false,
    imageAlt:
      "Representação abstrata do portfólio em uma janela de navegador",
    category: "Aplicação web",
    visual: "portfolio",
    overview:
      "Portfólio desenvolvido do zero para apresentar trajetória, experiências, tecnologias e projetos de forma profissional.",
    context:
      "O projeto foi criado para funcionar como vitrine profissional e também como laboratório para aplicar Next.js, TypeScript, Tailwind CSS, animações, SEO e boas práticas.",
    problem:
      "Apresentar experiências e projetos de maneira mais completa e visual do que um currículo ou perfil em rede profissional.",
    solution:
      "Criação de um portfólio responsivo, modular, orientado a dados e preparado para crescer ao longo do tempo.",
    features: [
      "página única",
      "navegação por âncoras",
      "projetos em destaque",
      "páginas dinâmicas",
      "design responsivo",
      "animações suaves",
      "SEO",
      "estrutura de dados separada da interface",
    ],
    architecture: [
      "Next.js App Router",
      "componentes reutilizáveis",
      "arquivos de dados tipados",
      "rotas dinâmicas",
      "Server Components por padrão",
      "Tailwind CSS",
      "Motion apenas onde necessário",
    ],
    challenges: [
      "criar identidade visual do zero",
      "manter consistência entre seções",
      "equilibrar visual e performance",
      "estruturar o projeto para crescimento futuro",
    ],
    decisions: [
      "não utilizar template pronto",
      "separar dados e componentes",
      "utilizar TypeScript",
      "criar páginas de projetos dinamicamente",
      "evitar dependências desnecessárias",
    ],
    learnings: [
      "arquitetura com Next.js",
      "design system",
      "responsividade",
      "componentização",
      "SEO",
      "acessibilidade",
      "uso de IA como apoio ao desenvolvimento",
    ],
    nextSteps: [
      "publicar na Vercel",
      "conectar domínio",
      "adicionar projetos",
      "adicionar currículo",
      "criar versão em inglês",
      "adicionar analytics",
    ],
  },
] as const;

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getAdjacentProjects(slug: string): {
  previousProject?: Project;
  nextProject?: Project;
} {
  const projectIndex = projects.findIndex((project) => project.slug === slug);

  if (projectIndex === -1) {
    return {};
  }

  return {
    previousProject:
      projectIndex > 0 ? projects[projectIndex - 1] : undefined,
    nextProject:
      projectIndex < projects.length - 1
        ? projects[projectIndex + 1]
        : undefined,
  };
}
