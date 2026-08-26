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
    title: "Professional Management System",
    subtitle: "Sistema full stack para gestão de profissionais e contatos",
    description:
      "Sistema full stack para gerenciar profissionais e contatos, reunindo uma interface em Next.js, backend em Spring Boot, autenticação, persistência e um ambiente preparado para produção.",
    shortDescription:
      "Sistema full stack de gestão de profissionais, com frontend, backend, autenticação JWT, persistência PostgreSQL e ambiente Docker preparado para produção.",
    mainTechnologies: ["Next.js", "Spring Boot", "PostgreSQL", "Docker"],
    status: "Concluído",
    repositoryUrl: "https://github.com/brayanfv/PROFESSIONAL-MANAGEMENT-API",
    image: "/images/projects/professional-management-system/dashboard.png",
    imageAlt:
      "Dashboard do Professional Management System com visão geral do sistema",
    heroImageEmphasis: true,
    year: "2026",
    category: "Sistema full stack",
    roleSummary: "Arquitetura e desenvolvimento full stack",
    overview: {
      description:
        "O Professional Management System é um sistema full stack que organiza o cadastro e a consulta de profissionais e contatos em uma experiência integrada entre frontend, backend e banco de dados.",
      objective:
        "Construir um fluxo confiável para operações de cadastro, consulta, atualização e exclusão, sem duplicação ou inconsistência de dados.",
      context:
        "O projeto foi desenvolvido como um sistema organizacional completo, reunindo autenticação, regras de negócio, persistência, documentação do backend e uma interface voltada à operação.",
    },
    demonstrates: [
      {
        title: "Arquitetura full stack",
        description:
          "Separação clara entre interface, regras de negócio e persistência para manter a solução coesa e fácil de evoluir.",
      },
      {
        title: "Autenticação protegida",
        description:
          "Fluxo de acesso baseado em JWT para restringir a área administrativa a usuários autorizados.",
      },
      {
        title: "Modelagem de domínio",
        description:
          "Organização de profissionais e contatos com relacionamentos, validações e regras de negócio bem definidos.",
      },
      {
        title: "Ambiente com Docker",
        description:
          "Configuração containerizada para tornar a execução do sistema mais reproduzível entre os ambientes.",
      },
      {
        title: "Qualidade e CI/CD",
        description:
          "Contratos documentados, validações e estrutura preparada para ampliar testes automatizados e integração contínua.",
      },
      {
        title: "Preparação para produção",
        description:
          "Organização em camadas e configurações separadas para sustentar manutenção, entrega e evolução contínua.",
      },
    ],
    roles: [
      {
        title: "Arquitetura da solução",
        description:
          "Definição da integração entre frontend, backend, banco de dados e os limites de responsabilidade de cada camada.",
      },
      {
        title: "Desenvolvimento de interface",
        description:
          "Construção das telas de autenticação, dashboard, listagem e cadastro com atenção à clareza dos fluxos.",
      },
      {
        title: "Backend e regras de negócio",
        description:
          "Implementação dos endpoints, validações, DTOs e tratamento consistente das respostas da aplicação.",
      },
      {
        title: "Persistência e documentação",
        description:
          "Modelagem relacional no PostgreSQL e organização da API para documentação e manutenção contínua.",
      },
    ],
    features: [
      {
        title: "Autenticação de usuários",
        description:
          "Acesso protegido por credenciais e token JWT para os fluxos internos do sistema.",
      },
      {
        title: "Dashboard operacional",
        description:
          "Visão inicial para orientar a navegação e concentrar informações importantes do sistema.",
      },
      {
        title: "Gestão de profissionais",
        description:
          "Listagem, busca, cadastro, atualização e exclusão de dados de profissionais.",
      },
      {
        title: "Gestão de contatos",
        description:
          "Relacionamento entre profissionais e contatos para manter as informações organizadas.",
      },
      {
        title: "Validações e respostas consistentes",
        description:
          "Regras aplicadas na API para reduzir dados inválidos e tornar o consumo mais previsível.",
      },
      {
        title: "Documentação de endpoints",
        description:
          "Base preparada para consulta e teste dos recursos expostos pela API REST.",
      },
    ],
    gallery: [
      {
        src: "/images/projects/professional-management-system/login.png",
        alt: "Tela de login do Professional Management System",
        title: "Login",
        description:
          "Fluxo de acesso com credenciais para entrada na área administrativa do sistema.",
        objective:
          "Demonstrar a autenticação e o acesso protegido antes da navegação pelos recursos internos.",
      },
      {
        src: "/images/projects/professional-management-system/dashboard.png",
        alt: "Dashboard do Professional Management System",
        title: "Dashboard",
        description:
          "Visão consolidada com totais, status de profissionais, departamentos, cargos e registros recentes.",
        objective:
          "Demonstrar como indicadores organizacionais são agrupados para apoiar a leitura inicial da operação.",
      },
      {
        src: "/images/projects/professional-management-system/professionals.png",
        alt: "Lista de profissionais do Professional Management System",
        title: "Lista de profissionais",
        description:
          "Tabela com pesquisa, filtros por status, departamento e cargo, ordenação e paginação dos registros.",
        objective:
          "Demonstrar uma gestão escalável dos profissionais, facilitando consulta, localização e acompanhamento de status.",
      },
      {
        src: "/images/projects/professional-management-system/create-professional.png",
        alt: "Tela de cadastro de profissional do Professional Management System",
        title: "Cadastro de profissional",
        description:
          "Formulário organizado por dados pessoais e vínculo organizacional para registrar um novo profissional.",
        objective:
          "Demonstrar um fluxo de criação claro, estruturado para orientar o preenchimento e aplicar as regras de validação do domínio.",
      },
    ],
    architecture: {
      layers: [
        {
          name: "Next.js",
          description: "Interface, navegação e experiência de uso do sistema.",
        },
        {
          name: "Spring Boot",
          description: "API REST, regras de negócio, autenticação e acesso aos dados.",
        },
        {
          name: "PostgreSQL",
          description: "Persistência relacional de profissionais, contatos e dados da aplicação.",
        },
      ],
      supportingItems: ["JWT", "Docker", "CI/CD", "Testes", "Deploy"],
    },
    stack: [
      {
        category: "Frontend",
        technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      },
      {
        category: "Backend",
        technologies: ["Java", "Spring Boot", "Spring Data JPA", "API REST"],
      },
      {
        category: "Banco",
        technologies: ["PostgreSQL"],
      },
      {
        category: "Infraestrutura",
        technologies: ["Docker", "Docker Compose", "JWT", "Preparação para deploy"],
      },
      {
        category: "Qualidade",
        technologies: [
          "Swagger / OpenAPI",
          "Validações",
          "Tratamento de erros",
          "Preparação para testes",
        ],
      },
    ],
    decisions: [
      {
        title: "Camadas bem definidas",
        description:
          "Separação entre controller, service, repository, entidades e DTOs para manter as responsabilidades claras.",
      },
      {
        title: "DTOs nas fronteiras da API",
        description:
          "Uso de objetos de transferência para evitar o acoplamento entre o modelo de persistência e os contratos públicos.",
      },
      {
        title: "Autenticação baseada em JWT",
        description:
          "Escolha de tokens para proteger os fluxos internos sem expor dados sensíveis na interface.",
      },
      {
        title: "Ambiente reproduzível",
        description:
          "Uso de Docker como base para tornar a configuração local mais previsível e facilitar a evolução do deploy.",
      },
    ],
    learnings: [
      "Integração entre frontend, backend e banco de dados em uma aplicação única.",
      "Modelagem de relacionamentos entre entidades e organização de regras de negócio.",
      "Construção de APIs REST com contratos mais claros, validações e tratamento de erros.",
      "Planejamento de uma solução preparada para documentação, testes e entrega contínua.",
    ],
    result: {
      description:
        "O resultado é um sistema full stack completo para gestão de profissionais, com frontend, backend, autenticação, persistência e ambiente Docker preparados para manutenção e produção.",
      highlights: [
        "Frontend integrado ao backend",
        "Persistência relacional com PostgreSQL",
        "Fluxos de autenticação e gestão de dados",
        "Ambiente Docker preparado para evolução e produção",
      ],
    },
  },
  {
    slug: "portfolio-pessoal",
    title: "Portfólio Pessoal",
    subtitle: "Plataforma para apresentar trajetória, projetos e experiência",
    description:
      "Portfólio desenvolvido do zero para reunir experiências, tecnologias e estudos de caso em uma experiência editorial, responsiva e preparada para crescer.",
    shortDescription:
      "Portfólio responsivo e orientado a dados, criado para apresentar trajetória, tecnologia e projetos de forma profissional.",
    mainTechnologies: ["Next.js", "TypeScript", "Tailwind CSS", "Motion"],
    status: "Em desenvolvimento",
    repositoryUrl: "https://github.com/brayanfv/portfolio",
    image: "/images/og/portfolio-brayan-favarin.png",
    imageAlt:
      "Imagem de apresentação do portfólio pessoal de Brayan Favarin",
    year: "2026",
    category: "Portfólio profissional",
    roleSummary: "Design e desenvolvimento full stack",
    overview: {
      description:
        "Uma plataforma autoral para comunicar trajetória profissional, tecnologias, experiências e projetos com mais contexto do que um currículo tradicional.",
      objective:
        "Apresentar informações profissionais em uma estrutura clara, acessível e simples de atualizar conforme novos projetos são concluídos.",
      context:
        "O portfólio também funciona como laboratório para aplicar arquitetura com Next.js, sistema visual, SEO, responsividade e boas práticas de desenvolvimento.",
    },
    demonstrates: [
      {
        title: "Arquitetura orientada a dados",
        description:
          "Conteúdo separado dos componentes para que a inclusão de novos projetos não exija alterações estruturais na interface.",
      },
      {
        title: "Experiência responsiva",
        description:
          "Layouts e componentes pensados para manter a leitura confortável em diferentes tamanhos de tela.",
      },
      {
        title: "Acessibilidade integrada",
        description:
          "Navegação por teclado, foco visível, semântica e redução de movimento considerados desde a construção.",
      },
      {
        title: "Base preparada para crescimento",
        description:
          "Rotas dinâmicas, metadata por projeto e estrutura modular para acompanhar a evolução do portfólio.",
      },
    ],
    roles: [
      {
        title: "Direção de produto",
        description:
          "Definição da narrativa, da hierarquia de conteúdo e dos objetivos de cada área do portfólio.",
      },
      {
        title: "Identidade visual",
        description:
          "Criação de um sistema dark editorial tecnológico com tokens reutilizáveis e uso moderado da cor de destaque.",
      },
      {
        title: "Desenvolvimento frontend",
        description:
          "Implementação com Next.js, App Router, TypeScript, Tailwind CSS e componentes reutilizáveis.",
      },
      {
        title: "Qualidade e descoberta",
        description:
          "Organização de metadata, páginas de projeto, navegação e conteúdo para facilitar manutenção e evolução futura.",
      },
    ],
    features: [
      {
        title: "Navegação por âncoras",
        description:
          "Acesso direto às principais áreas da homepage com suporte a teclado e menu responsivo.",
      },
      {
        title: "Estudos de caso dinâmicos",
        description:
          "Páginas individuais geradas a partir de dados tipados para aprofundar cada projeto.",
      },
      {
        title: "Seções modulares",
        description:
          "Componentes independentes para trajetória, projetos, tecnologias e contato, preservando consistência.",
      },
      {
        title: "Contato integrado",
        description:
          "Formulário seguro e links alternativos para tornar a conversa mais acessível a recrutadores e parceiros.",
      },
      {
        title: "SEO e metadata",
        description:
          "Estrutura de metadata global e individual para melhorar a apresentação em mecanismos de busca e compartilhamentos.",
      },
      {
        title: "Currículo disponível",
        description:
          "Ação de download integrada ao portfólio sem depender de serviços externos.",
      },
    ],
    gallery: [
      {
        src: "/images/og/portfolio-brayan-favarin.png",
        alt: "Imagem de apresentação do portfólio pessoal de Brayan Favarin",
        title: "Identidade do portfólio",
        description:
          "Composição visual que representa a marca pessoal e a proposta tecnológica do projeto.",
        objective:
          "Estabelecer uma presença profissional reconhecível e coerente em compartilhamentos e pontos de entrada do site.",
      },
    ],
    architecture: {
      layers: [
        {
          name: "Next.js",
          description: "App Router, rotas dinâmicas, renderização e base de performance.",
        },
        {
          name: "Componentes e dados tipados",
          description: "Interface reutilizável conectada a arquivos de conteúdo centralizados.",
        },
        {
          name: "Hospedagem preparada",
          description: "Estrutura pronta para publicação em uma plataforma compatível com Next.js.",
        },
      ],
      supportingItems: [
        "SEO",
        "Acessibilidade",
        "Formulário seguro",
        "Currículo",
        "Preparado para Vercel",
      ],
    },
    stack: [
      {
        category: "Frontend",
        technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      },
      {
        category: "Backend",
        technologies: ["Route Handlers", "Resend", "Zod"],
      },
      {
        category: "Banco",
        technologies: ["Sem banco de dados nesta versão"],
      },
      {
        category: "Infraestrutura",
        technologies: ["Vercel", "Variáveis de ambiente", "GitHub"],
      },
      {
        category: "Qualidade",
        technologies: ["ESLint", "TypeScript", "SEO", "Acessibilidade"],
      },
    ],
    decisions: [
      {
        title: "Sem template pronto",
        description:
          "A interface foi desenhada para refletir a identidade profissional e as necessidades do conteúdo, sem herdar limitações de um tema genérico.",
      },
      {
        title: "Dados fora dos componentes",
        description:
          "Projetos, experiências e tecnologias são mantidos em arquivos próprios para reduzir repetição e facilitar atualizações.",
      },
      {
        title: "Server Components por padrão",
        description:
          "A interatividade fica restrita aos pontos necessários para preservar simplicidade e desempenho.",
      },
      {
        title: "Acessibilidade como requisito",
        description:
          "Semântica, foco visível e respeito a preferências de movimento fazem parte da implementação, não de um ajuste posterior.",
      },
    ],
    learnings: [
      "Estruturação de um design system pequeno e coerente para uma aplicação real.",
      "Uso do App Router, rotas dinâmicas e metadata do Next.js em um projeto de portfólio.",
      "Equilíbrio entre presença visual, performance, SEO e acessibilidade.",
      "Criação de uma base modular que facilita a publicação de novos estudos de caso.",
    ],
    result: {
      description:
        "O portfólio se tornou uma plataforma profissional completa, capaz de apresentar projetos com profundidade e continuar evoluindo sem perder a consistência visual.",
      highlights: [
        "Homepage com narrativa profissional completa",
        "Estudos de caso gerados a partir dos dados",
        "Contato, currículo e links sociais integrados",
        "Fundação preparada para novos projetos e publicação",
      ],
    },
  },
];

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
