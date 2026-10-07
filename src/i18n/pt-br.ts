import type { LocaleContent } from "@/i18n/types";

export const ptBrContent = {
  locale: "pt-BR",
  metadata: {
    title: "Brayan Favarin | Desenvolvedor Full Stack",
    description:
      "Portfólio de Brayan Favarin, desenvolvedor Full Stack com experiência em Java, Spring Boot, Angular, TypeScript e construção de aplicações modernas.",
    keywords: [
      "Brayan Favarin",
      "Desenvolvedor Full Stack",
      "Java",
      "Spring Boot",
      "Angular",
      "TypeScript",
      "Next.js",
    ],
    openGraphAlt: "Brayan Favarin — Desenvolvedor Full Stack",
  },
  sections: {
    home: "início",
    about: "sobre",
    projects: "projetos",
    experience: "experiência",
    technologies: "tecnologias",
    contact: "contato",
  },
  personal: {
    name: "Brayan Favarin",
    brand: "BF.",
    role: "Desenvolvedor Full Stack",
    location: "Criciúma, Santa Catarina",
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
  },
  quickFacts: [
    { label: "Localização", value: "Criciúma, Santa Catarina" },
    { label: "Formação", value: "Ciência da Computação — UNESC" },
    { label: "Área de atuação", value: "Desenvolvimento Full Stack" },
    { label: "Stack principal", value: "Java, Spring Boot, Angular e PostgreSQL" },
  ],
  projects: {
    section: {
      eyebrow: "02 / Projetos",
      title: "Projetos que transformam conhecimento em soluções reais.",
      description:
        "Uma seleção de aplicações desenvolvidas para praticar arquitetura, regras de negócio, interfaces modernas, integração de sistemas e boas práticas de desenvolvimento.",
    },
    items: [
      {
        slug: "professional-management-system",
        title: "Professional Management System",
        subtitle: "Sistema full stack para gestão de profissionais e contatos",
        description:
          "Sistema full stack para gerenciar profissionais e contatos, reunindo uma interface em Next.js, backend em Spring Boot, autenticação, persistência e um ambiente preparado para produção.",
        shortDescription:
          "Sistema full stack de gestão de profissionais, com frontend, backend, autenticação JWT, persistência PostgreSQL e ambiente Docker preparado para produção.",
        mainTechnologies: ["Next.js", "Spring Boot", "PostgreSQL", "Docker"],
        status: "completed",
        repositoryUrl: "https://github.com/brayanfv/Professional-Management-System",
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
          { title: "Autenticação de usuários", description: "Acesso protegido por credenciais e token JWT para os fluxos internos do sistema." },
          { title: "Dashboard operacional", description: "Visão inicial para orientar a navegação e concentrar informações importantes do sistema." },
          { title: "Gestão de profissionais", description: "Listagem, busca, cadastro, atualização e exclusão de dados de profissionais." },
          { title: "Gestão de contatos", description: "Relacionamento entre profissionais e contatos para manter as informações organizadas." },
          { title: "Validações e respostas consistentes", description: "Regras aplicadas na API para reduzir dados inválidos e tornar o consumo mais previsível." },
          { title: "Documentação de endpoints", description: "Base preparada para consulta e teste dos recursos expostos pela API REST." },
        ],
        gallery: [
          { src: "/images/projects/professional-management-system/login.png", alt: "Tela de login do Professional Management System", title: "Login", description: "Fluxo de acesso com credenciais para entrada na área administrativa do sistema.", objective: "Demonstrar a autenticação e o acesso protegido antes da navegação pelos recursos internos." },
          { src: "/images/projects/professional-management-system/dashboard.png", alt: "Dashboard do Professional Management System", title: "Dashboard", description: "Visão consolidada com totais, status de profissionais, departamentos, cargos e registros recentes.", objective: "Demonstrar como indicadores organizacionais são agrupados para apoiar a leitura inicial da operação." },
          { src: "/images/projects/professional-management-system/professionals.png", alt: "Lista de profissionais do Professional Management System", title: "Lista de profissionais", description: "Tabela com pesquisa, filtros por status, departamento e cargo, ordenação e paginação dos registros.", objective: "Demonstrar uma gestão escalável dos profissionais, facilitando consulta, localização e acompanhamento de status." },
          { src: "/images/projects/professional-management-system/create-professional.png", alt: "Tela de cadastro de profissional do Professional Management System", title: "Cadastro de profissional", description: "Formulário organizado por dados pessoais e vínculo organizacional para registrar um novo profissional.", objective: "Demonstrar um fluxo de criação claro, estruturado para orientar o preenchimento e aplicar as regras de validação do domínio." },
        ],
        architecture: {
          layers: [
            { name: "Next.js", description: "Interface, navegação e experiência de uso do sistema." },
            { name: "Spring Boot", description: "API REST, regras de negócio, autenticação e acesso aos dados." },
            { name: "PostgreSQL", description: "Persistência relacional de profissionais, contatos e dados da aplicação." },
          ],
          supportingItems: ["JWT", "Docker", "CI/CD", "Testes", "Deploy"],
        },
        stack: [
          { category: "frontend", technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"] },
          { category: "backend", technologies: ["Java", "Spring Boot", "Spring Data JPA", "API REST"] },
          { category: "database", technologies: ["PostgreSQL"] },
          { category: "infrastructure", technologies: ["Docker", "Docker Compose", "JWT", "Preparação para deploy"] },
          { category: "quality", technologies: ["Swagger / OpenAPI", "Validações", "Tratamento de erros", "Preparação para testes"] },
        ],
        decisions: [
          { title: "Camadas bem definidas", description: "Separação entre controller, service, repository, entidades e DTOs para manter as responsabilidades claras." },
          { title: "DTOs nas fronteiras da API", description: "Uso de objetos de transferência para evitar o acoplamento entre o modelo de persistência e os contratos públicos." },
          { title: "Autenticação baseada em JWT", description: "Escolha de tokens para proteger os fluxos internos sem expor dados sensíveis na interface." },
          { title: "Ambiente reproduzível", description: "Uso de Docker como base para tornar a configuração local mais previsível e facilitar a evolução do deploy." },
        ],
        learnings: [
          "Integração entre frontend, backend e banco de dados em uma aplicação única.",
          "Modelagem de relacionamentos entre entidades e organização de regras de negócio.",
          "Construção de APIs REST com contratos mais claros, validações e tratamento de erros.",
          "Planejamento de uma solução preparada para documentação, testes e entrega contínua.",
        ],
        result: {
          description: "O resultado é um sistema full stack completo para gestão de profissionais, com frontend, backend, autenticação, persistência e ambiente Docker preparados para manutenção e produção.",
          highlights: ["Frontend integrado ao backend", "Persistência relacional com PostgreSQL", "Fluxos de autenticação e gestão de dados", "Ambiente Docker preparado para evolução e produção"],
        },
      },
      {
        slug: "finora",
        title: "Finora",
        subtitle: "Sistema full stack para gestão financeira",
        description:
          "Plataforma de gestão financeira para controle de contas a pagar e receber, contatos e indicadores, com processamento assíncrono, automações e ambiente Docker.",
        shortDescription:
          "Sistema full stack de gestão financeira com Laravel, React, PostgreSQL e Redis, incluindo filas, automações, relatórios e testes automatizados.",
        mainTechnologies: ["Laravel", "React", "PostgreSQL", "Redis"],
        status: "completed",
        repositoryUrl: "https://github.com/brayanfv/finora",
        image: "/images/projects/finora/dashboardFinora.png",
        imageAlt:
          "Dashboard do Finora com indicadores financeiros, pendências e próximos lançamentos",
        year: "2026",
        category: "Sistema full stack",
        roleSummary: "Arquitetura e desenvolvimento full stack",
        overview: {
          description:
            "O Finora é uma aplicação full stack de gestão financeira desenvolvida para organizar contas a pagar e receber, contatos, vencimentos, liquidações e fechamentos financeiros em uma experiência integrada entre frontend, backend, banco de dados e processamento assíncrono.",
          objective:
            "Construir uma solução financeira organizada e confiável para registrar movimentações, acompanhar vencimentos, consolidar indicadores e automatizar tarefas que não devem bloquear as requisições da aplicação.",
          context:
            "O projeto foi estruturado como uma aplicação completa, com frontend em React, API em Laravel, persistência PostgreSQL, Redis para filas e locks, autenticação com Sanctum e ambiente Docker reproduzível.",
        },
        demonstrates: [
          {
            title: "Arquitetura full stack",
            description:
              "Separação clara entre frontend, API, banco de dados e infraestrutura para manter responsabilidades bem definidas.",
          },
          {
            title: "Processamento assíncrono",
            description:
              "Uso de Jobs e filas para executar tarefas como lembretes e fechamentos financeiros sem bloquear as requisições HTTP.",
          },
          {
            title: "Automação de tarefas",
            description:
              "Scheduler responsável por identificar lançamentos elegíveis, disparar lembretes e reconciliar processos financeiros interrompidos.",
          },
          {
            title: "Consistência e idempotência",
            description:
              "Proteções para reduzir duplicidade em lembretes, fechamentos, retries e execuções concorrentes.",
          },
          {
            title: "Persistência e infraestrutura",
            description:
              "PostgreSQL como fonte principal de dados e Redis apoiando filas, cache e mecanismos de sincronização.",
          },
          {
            title: "Qualidade automatizada",
            description:
              "Cobertura dos fluxos principais com testes automatizados, lint e validações de build.",
          },
        ],
        roles: [
          {
            title: "Arquitetura da solução",
            description:
              "Definição da integração entre React, Laravel, PostgreSQL, Redis e os serviços auxiliares.",
          },
          {
            title: "Frontend",
            description:
              "Construção das telas de autenticação, dashboard, contatos, lançamentos e visão financeira por período.",
          },
          {
            title: "Backend e regras de negócio",
            description:
              "Implementação das APIs, autenticação, validações, liquidações, filtros, Jobs, Scheduler e fluxos financeiros.",
          },
          {
            title: "Infraestrutura e qualidade",
            description:
              "Configuração de Docker Compose, filas, Redis, Mailpit, testes automatizados e validação dos principais fluxos.",
          },
        ],
        features: [
          {
            title: "Autenticação de usuários",
            description:
              "Acesso protegido à SPA utilizando Laravel Sanctum, sessão e proteção CSRF.",
          },
          {
            title: "Gestão de contatos",
            description:
              "Cadastro, edição e exclusão de contatos utilizados nas movimentações financeiras.",
          },
          {
            title: "Contas a pagar e receber",
            description:
              "Criação e acompanhamento de lançamentos com valores, vencimentos, tipo, contato e situação.",
          },
          {
            title: "Liquidação de lançamentos",
            description:
              "Fluxo para registrar pagamentos e recebimentos preservando o histórico financeiro.",
          },
          {
            title: "Dashboard e visão por período",
            description:
              "Indicadores, próximos vencimentos e consolidação financeira por intervalo de datas.",
          },
          {
            title: "Lembretes e fechamento financeiro",
            description:
              "Processamento assíncrono de alertas e fechamentos, com geração de CSV e envio por e-mail.",
          },
        ],
        gallery: [
          {
            src: "/images/projects/finora/dashboardFinora.png",
            alt: "Dashboard do Finora com valores a receber, valores a pagar, pendências e próximos lançamentos",
            title: "Dashboard financeiro",
            description:
              "Visão consolidada com valores a receber, valores a pagar, pendências e próximos lançamentos.",
            objective:
              "Demonstrar como o sistema organiza indicadores financeiros e vencimentos em uma visão operacional única.",
          },
          {
            src: "/images/projects/finora/transactionsFinora.png",
            alt: "Tela de lançamentos do Finora com contas a pagar e receber, status, vencimentos e contatos vinculados",
            title: "Gestão de lançamentos",
            description:
              "Tela para cadastrar, consultar, editar, liquidar e excluir contas a pagar e receber.",
            objective:
              "Demonstrar o fluxo principal de gestão financeira, incluindo status, valores, vencimentos e vínculos com contatos.",
          },
          {
            src: "/images/projects/finora/period-overviewFinora.png",
            alt: "Visão financeira por período do Finora com filtros de data e totais consolidados",
            title: "Visão do período",
            description:
              "Consulta financeira por intervalo de datas, com totais de contas abertas, liquidadas e vencidas.",
            objective:
              "Demonstrar filtros temporais, consolidação de valores e o fluxo de fechamento financeiro do período.",
          },
          {
            src: "/images/projects/finora/contactsFinora.png",
            alt: "Tela de contatos do Finora com cadastro de clientes e fornecedores",
            title: "Gestão de contatos",
            description:
              "Cadastro e manutenção dos contatos utilizados nos lançamentos financeiros.",
            objective:
              "Demonstrar a organização de clientes e fornecedores relacionados às movimentações do sistema.",
          },
          {
            src: "/images/projects/finora/loginFinora.png",
            alt: "Tela de autenticação do Finora com campos de e-mail e senha",
            title: "Autenticação",
            description:
              "Fluxo de acesso à aplicação utilizando autenticação protegida.",
            objective:
              "Demonstrar a entrada segura na SPA antes do acesso aos recursos financeiros.",
          },
        ],
        architecture: {
          layers: [
            {
              name: "React",
              description:
                "Interface, navegação e experiência de uso do sistema.",
            },
            {
              name: "Laravel",
              description:
                "API REST, autenticação, regras de negócio, Jobs, Scheduler e integração com dados.",
            },
            {
              name: "PostgreSQL",
              description:
                "Persistência relacional de usuários, contatos, lançamentos e fechamentos.",
            },
          ],
          supportingItems: [
            "Redis",
            "Laravel Sanctum",
            "Queues",
            "Scheduler",
            "Mailpit",
            "Docker",
          ],
        },
        stack: [
          {
            category: "frontend",
            technologies: ["React", "TypeScript", "Vite", "Axios"],
          },
          {
            category: "backend",
            technologies: ["PHP", "Laravel", "Laravel Sanctum", "API REST"],
          },
          {
            category: "database",
            technologies: ["PostgreSQL", "SQLite para testes"],
          },
          {
            category: "infrastructure",
            technologies: [
              "Docker",
              "Docker Compose",
              "Redis",
              "Laravel Queues",
              "Laravel Scheduler",
              "Mailpit",
            ],
          },
          {
            category: "quality",
            technologies: [
              "PHPUnit",
              "Laravel Pint",
              "Oxlint",
              "TypeScript",
              "Testes de integração",
            ],
          },
        ],
        decisions: [
          {
            title: "Processamento assíncrono com filas",
            description:
              "Operações potencialmente demoradas são enviadas para filas para não bloquear as requisições HTTP.",
          },
          {
            title: "PostgreSQL como fonte de verdade",
            description:
              "Os estados dos processos financeiros permanecem persistidos no banco, enquanto Redis atua como infraestrutura auxiliar.",
          },
          {
            title: "Atraso como estado derivado",
            description:
              "Uma conta é considerada vencida a partir do status pendente e da data de vencimento, evitando duplicação desnecessária de estado.",
          },
          {
            title: "Idempotência e retries",
            description:
              "Jobs e registros persistentes ajudam a evitar reprocessamentos duplicados e permitem recuperação de falhas temporárias.",
          },
          {
            title: "Docker como ambiente oficial",
            description:
              "Os serviços da aplicação são executados de forma reproduzível por Docker Compose.",
          },
        ],
        learnings: [
          "Construção de uma aplicação financeira full stack com frontend e backend desacoplados.",
          "Uso de filas, Jobs, Scheduler e Redis em fluxos reais de processamento assíncrono.",
          "Aplicação de idempotência, retries e reconciliação em processos financeiros.",
          "Integração entre autenticação SPA, PostgreSQL, Redis, e-mail e infraestrutura Docker.",
          "Criação de testes automatizados para fluxos críticos de negócio.",
        ],
        result: {
          description:
            "O resultado é uma aplicação financeira full stack funcional e testada, com autenticação, gestão de contatos, contas a pagar e receber, liquidação, indicadores, automações e processamento assíncrono em um ambiente Docker reproduzível.",
          highlights: [
            "Frontend React integrado à API Laravel",
            "Persistência relacional com PostgreSQL",
            "Redis, filas e Scheduler para automações",
            "Fechamentos com CSV e envio por e-mail",
            "66 testes automatizados com 232 assertions",
            "Ambiente Docker reproduzível",
          ],
        },
      },
      {
        slug: "portfolio-pessoal",
        title: "Portfólio Pessoal",
        subtitle: "Plataforma para apresentar trajetória, projetos e experiência",
        description: "Portfólio desenvolvido do zero para reunir experiências, tecnologias e estudos de caso em uma experiência editorial, responsiva e preparada para crescer.",
        shortDescription: "Portfólio responsivo e orientado a dados, criado para apresentar trajetória, tecnologia e projetos de forma profissional.",
        mainTechnologies: ["Next.js", "TypeScript", "Tailwind CSS", "Motion"],
        status: "in-development",
        repositoryUrl: "https://github.com/brayanfv/brayan-favarin-portfolio",
        image: "/images/og/portfolio-brayan-favarin.png",
        imageAlt: "Imagem de apresentação do portfólio pessoal de Brayan Favarin",
        year: "2026",
        category: "Portfólio profissional",
        roleSummary: "Design e desenvolvimento full stack",
        overview: {
          description: "Uma plataforma autoral para comunicar trajetória profissional, tecnologias, experiências e projetos com mais contexto do que um currículo tradicional.",
          objective: "Apresentar informações profissionais em uma estrutura clara, acessível e simples de atualizar conforme novos projetos são concluídos.",
          context: "O portfólio também funciona como laboratório para aplicar arquitetura com Next.js, sistema visual, SEO, responsividade e boas práticas de desenvolvimento.",
        },
        demonstrates: [
          { title: "Arquitetura orientada a dados", description: "Conteúdo separado dos componentes para que a inclusão de novos projetos não exija alterações estruturais na interface." },
          { title: "Experiência responsiva", description: "Layouts e componentes pensados para manter a leitura confortável em diferentes tamanhos de tela." },
          { title: "Acessibilidade integrada", description: "Navegação por teclado, foco visível, semântica e redução de movimento considerados desde a construção." },
          { title: "Base preparada para crescimento", description: "Rotas dinâmicas, metadata por projeto e estrutura modular para acompanhar a evolução do portfólio." },
        ],
        roles: [
          { title: "Direção de produto", description: "Definição da narrativa, da hierarquia de conteúdo e dos objetivos de cada área do portfólio." },
          { title: "Identidade visual", description: "Criação de um sistema dark editorial tecnológico com tokens reutilizáveis e uso moderado da cor de destaque." },
          { title: "Desenvolvimento frontend", description: "Implementação com Next.js, App Router, TypeScript, Tailwind CSS e componentes reutilizáveis." },
          { title: "Qualidade e descoberta", description: "Organização de metadata, páginas de projeto, navegação e conteúdo para facilitar manutenção e evolução futura." },
        ],
        features: [
          { title: "Navegação por âncoras", description: "Acesso direto às principais áreas da homepage com suporte a teclado e menu responsivo." },
          { title: "Estudos de caso dinâmicos", description: "Páginas individuais geradas a partir de dados tipados para aprofundar cada projeto." },
          { title: "Seções modulares", description: "Componentes independentes para trajetória, projetos, tecnologias e contato, preservando consistência." },
          { title: "Contato integrado", description: "Formulário seguro e links alternativos para tornar a conversa mais acessível a recrutadores e parceiros." },
          { title: "SEO e metadata", description: "Estrutura de metadata global e individual para melhorar a apresentação em mecanismos de busca e compartilhamentos." },
          { title: "Currículo disponível", description: "Ação de download integrada ao portfólio sem depender de serviços externos." },
        ],
        gallery: [{ src: "/images/og/portfolio-brayan-favarin.png", alt: "Imagem de apresentação do portfólio pessoal de Brayan Favarin", title: "Identidade do portfólio", description: "Composição visual que representa a marca pessoal e a proposta tecnológica do projeto.", objective: "Estabelecer uma presença profissional reconhecível e coerente em compartilhamentos e pontos de entrada do site." }],
        architecture: {
          layers: [
            { name: "Next.js", description: "App Router, rotas dinâmicas, renderização e base de performance." },
            { name: "Componentes e dados tipados", description: "Interface reutilizável conectada a arquivos de conteúdo centralizados." },
            { name: "Hospedagem preparada", description: "Estrutura pronta para publicação em uma plataforma compatível com Next.js." },
          ],
          supportingItems: ["SEO", "Acessibilidade", "Formulário seguro", "Currículo", "Preparado para Vercel"],
        },
        stack: [
          { category: "frontend", technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"] },
          { category: "backend", technologies: ["Route Handlers", "Resend", "Zod"] },
          { category: "database", technologies: ["Sem banco de dados nesta versão"] },
          { category: "infrastructure", technologies: ["Vercel", "Variáveis de ambiente", "GitHub"] },
          { category: "quality", technologies: ["ESLint", "TypeScript", "SEO", "Acessibilidade"] },
        ],
        decisions: [
          { title: "Sem template pronto", description: "A interface foi desenhada para refletir a identidade profissional e as necessidades do conteúdo, sem herdar limitações de um tema genérico." },
          { title: "Dados fora dos componentes", description: "Projetos, experiências e tecnologias são mantidos em arquivos próprios para reduzir repetição e facilitar atualizações." },
          { title: "Server Components por padrão", description: "A interatividade fica restrita aos pontos necessários para preservar simplicidade e desempenho." },
          { title: "Acessibilidade como requisito", description: "Semântica, foco visível e respeito a preferências de movimento fazem parte da implementação, não de um ajuste posterior." },
        ],
        learnings: ["Estruturação de um design system pequeno e coerente para uma aplicação real.", "Uso do App Router, rotas dinâmicas e metadata do Next.js em um projeto de portfólio.", "Equilíbrio entre presença visual, performance, SEO e acessibilidade.", "Criação de uma base modular que facilita a publicação de novos estudos de caso."],
        result: {
          description: "O portfólio se tornou uma plataforma profissional completa, capaz de apresentar projetos com profundidade e continuar evoluindo sem perder a consistência visual.",
          highlights: ["Homepage com narrativa profissional completa", "Estudos de caso gerados a partir dos dados", "Contato, currículo e links sociais integrados", "Fundação preparada para novos projetos e publicação"],
        },
      },
    ],
  },
  experiences: {
    labels: { current: "Atual", context: "Contexto", competencies: "Competências demonstradas", technologies: "Tecnologias", technologyList: "Tecnologias utilizadas em {company}", timeline: "Linha do tempo profissional" },
    section: {
      eyebrow: "03 / Experiência",
      title: "Experiências que ajudaram a construir minha forma de trabalhar.",
      description: "Experiência prática no desenvolvimento de aplicações web, atuando em projetos reais com tecnologias modernas de frontend, backend e banco de dados.",
    },
    items: [
      { company: "Mohawk Brasil", role: "Estagiário de Desenvolvimento", context: "UNESC Labs", period: "Ago 2025 — Jan 2026", description: ["Atuação no desenvolvimento de interfaces e funcionalidades para um sistema interno de gestão empresarial, utilizando Angular no frontend e colaborando com integrações ao backend em Python. Participação na evolução de funcionalidades e na manutenção de fluxos existentes em ambiente colaborativo com Git, Docker e PostgreSQL."], competencies: ["Desenvolvimento Frontend", "Integração Frontend/Backend", "Trabalho em equipe", "Versionamento com Git", "Desenvolvimento de funcionalidades"], technologies: ["Angular", "TypeScript", "Python", "PostgreSQL", "Docker", "Git"], order: 1 },
      { company: "Simples Dental", role: "Estagiário de Desenvolvimento", context: "UNESC Labs", period: "Jan 2025 — Ago 2025", description: ["Participação no desenvolvimento e na manutenção de aplicações web com Spring Boot e Angular, contribuindo para APIs REST, integração entre frontend e backend, modelagem de dados e evolução de funcionalidades em ambiente colaborativo."], competencies: ["Desenvolvimento Full Stack", "APIs REST", "Integração Frontend/Backend", "Modelagem de dados", "Trabalho em equipe"], technologies: ["Java", "Spring Boot", "Angular", "PostgreSQL", "Git"], order: 2 },
    ],
  },
  technologies: {
    section: { eyebrow: "04 / Tecnologias", title: "Ferramentas que utilizo para transformar ideias em aplicações.", description: "Tecnologias, ferramentas e boas práticas utilizadas no desenvolvimento de aplicações completas, da arquitetura e backend ao frontend, banco de dados e preparação para produção." },
    focusDescription: "As tecnologias marcadas como Foco representam a base da minha stack principal e estão presentes na maior parte dos projetos.",
    practicesDescription: "Princípios presentes na forma como organizo e desenvolvo soluções.",
    groups: [
      { category: "backend", label: "Backend", items: [{ name: "Java", category: "backend", highlighted: true, description: "Backend principal para o desenvolvimento de APIs REST.", order: 1 }, { name: "Spring Boot", category: "backend", highlighted: true, description: "Framework para construir aplicações Java escaláveis.", order: 2 }, { name: "Spring Data JPA", category: "backend", order: 3 }, { name: "Node.js", category: "backend", order: 4 }, { name: "Express", category: "backend", order: 5 }, { name: "APIs REST", category: "backend", order: 6 }, { name: "Maven", category: "backend", order: 7 }] },
      { category: "frontend", label: "Frontend", items: [{ name: "Angular", category: "frontend", highlighted: true, description: "Framework principal para interfaces web modernas.", order: 1 }, { name: "React", category: "frontend", order: 2 }, { name: "Next.js", category: "frontend", order: 3 }, { name: "React Native", category: "frontend", order: 4 }, { name: "TypeScript", category: "frontend", highlighted: true, description: "Linguagem para aplicações frontend robustas e organizadas.", order: 5 }, { name: "JavaScript", category: "frontend", order: 6 }, { name: "HTML", category: "frontend", order: 7 }, { name: "CSS", category: "frontend", order: 8 }, { name: "SCSS", category: "frontend", order: 9 }, { name: "Tailwind CSS", category: "frontend", order: 10 }] },
      { category: "database", label: "Bancos de dados", items: [{ name: "PostgreSQL", category: "database", highlighted: true, description: "Banco relacional presente na maior parte dos projetos.", order: 1 }, { name: "MySQL", category: "database", order: 2 }, { name: "MongoDB", category: "database", order: 3 }, { name: "SQLite", category: "database", order: 4 }] },
      { category: "tools", label: "Ferramentas e DevOps", items: [{ name: "Git", category: "tools", highlighted: true, description: "Versionamento de código e colaboração em equipe.", order: 1 }, { name: "GitHub", category: "tools", order: 2 }, { name: "Docker", category: "tools", highlighted: true, description: "Containerização e preparação consistente para produção.", order: 3 }, { name: "Docker Compose", category: "tools", order: 4 }, { name: "Swagger", category: "tools", order: 5 }, { name: "Postman", category: "tools", order: 6 }, { name: "VS Code", category: "tools", order: 7 }, { name: "Vercel", category: "tools", order: 8 }] },
      { category: "practices", label: "Práticas", items: [{ name: "Desenvolvimento responsivo", category: "practices", order: 1 }, { name: "Integração frontend e backend", category: "practices", order: 2 }, { name: "Versionamento de código", category: "practices", order: 3 }, { name: "Organização de componentes", category: "practices", order: 4 }, { name: "Regras de negócio", category: "practices", order: 5 }, { name: "APIs REST", category: "practices", order: 6 }, { name: "Trabalho em equipe", category: "practices", order: 7 }, { name: "Metodologias ágeis", category: "practices", order: 8 }] },
    ],
  },
  contact: {
    eyebrow: "05 / Contato",
    title: "Vamos construir algo juntos?",
    description: ["Estou disponível para oportunidades profissionais, projetos e conversas sobre desenvolvimento de software.", "Caso queira conhecer melhor meu trabalho ou conversar sobre alguma oportunidade, entre em contato comigo."],
    channelsLabel: "Canais profissionais",
    highlights: [
      { icon: "clock", title: "Resposta rápida", description: "Costumo responder em até 24 horas úteis." },
      { icon: "briefcase", title: "Novas oportunidades", description: "Estou disponível para oportunidades profissionais, freelances e projetos." },
      { icon: "sparkles", title: "Projetos e parcerias", description: "Vamos transformar ideias em soluções modernas e escaláveis." },
    ],
    form: {
      fields: { name: "Nome", email: "E-mail", message: "Mensagem", website: "Website" },
      send: "Enviar mensagem",
      sending: "Enviando...",
      turnstile: { label: "Verificação de segurança", loading: "Carregando verificação de segurança...", pending: "Conclua a verificação de segurança para enviar sua mensagem.", failed: "A verificação de segurança falhou. Tente novamente.", unavailable: "A verificação de segurança está indisponível agora. Tente novamente ou use um dos canais de contato abaixo." },
      feedback: { genericError: "Não foi possível enviar sua mensagem agora. Tente novamente ou entre em contato pelos links disponíveis.", invalidFields: "Confira os campos destacados e tente novamente.", processingError: "Não foi possível processar sua mensagem.", success: "Mensagem enviada com sucesso. Obrigado pelo contato!" },
      validation: { nameMin: "Informe um nome com pelo menos 2 caracteres.", nameMax: "O nome deve ter no máximo 80 caracteres.", emailInvalid: "Informe um endereço de e-mail válido.", emailMax: "O e-mail deve ter no máximo 254 caracteres.", messageMin: "A mensagem deve ter pelo menos 10 caracteres.", messageMax: "A mensagem deve ter no máximo 2000 caracteres." },
      email: { heading: "Nova mensagem recebida pelo portfólio", nameLabel: "Nome", emailLabel: "E-mail", messageLabel: "Mensagem", originLabel: "Origem", originValue: "Portfólio profissional", subjectPrefix: "Nova mensagem pelo portfólio" },
    },
  },
  ui: {
    skipToContent: "Pular para o conteúdo",
    aboutAsideLabel: "Informações rápidas sobre {name}",
    navigation: { mainLabel: "Navegação principal", mobileLabel: "Menu de navegação mobile", openMenu: "Abrir menu de navegação", closeMenu: "Fechar menu de navegação", contact: "Contato", mobileContact: "Entrar em contato", items: { about: "Sobre", projects: "Projetos", experience: "Experiência", technologies: "Tecnologias", contact: "Contato" } },
    languageSwitcher: { label: "Selecionar idioma", localeLabels: { "pt-BR": "PT", en: "EN" } },
    hero: { projects: "Ver projetos", resume: "Baixar currículo", panelFile: "delivery.flow", panelActive: "em foco", panelFrom: "ideia", panelTo: "software com qualidade" },
    footer: { builtWith: "Desenvolvido com Next.js, TypeScript e Tailwind CSS.", copyright: "© 2026 {name}.", backToTop: "Voltar ao topo" },
    project: { statusPrefix: "Status: ", statusLabels: { completed: "Concluído", "in-development": "Em desenvolvimento", "in-evolution": "Em evolução", planned: "Planejado" }, stackCategories: { frontend: "Frontend", backend: "Backend", database: "Banco de dados", infrastructure: "Infraestrutura", quality: "Qualidade" }, breadcrumb: { label: "Navegação estrutural", home: "Início", projects: "Projetos" }, card: { caseStudy: "Estudo de caso", code: "GitHub", deploy: "Deploy" }, overview: { title: "Visão geral", heading: "O projeto em perspectiva.", objective: "Objetivo", context: "Contexto", projectType: "Tipo de projeto", role: "Papel", status: "Status", year: "Ano" }, sections: ["O que este projeto demonstra", "Meu papel", "Funcionalidades", "Galeria", "Arquitetura", "Stack técnica", "Decisões técnicas", "Aprendizados", "Resultado", "Links"], gallery: { title: "Galeria", description: "Interfaces e registros visuais que ajudam a entender a experiência e os fluxos principais do projeto.", objective: "Objetivo:" }, architectureSupportingItems: "Elementos complementares", links: { availableDescription: "Acesse os recursos públicos disponíveis para conhecer melhor o projeto.", unavailableDescription: "Os links públicos deste projeto serão adicionados assim que estiverem disponíveis.", deploy: "Ver deploy", code: "GitHub", documentation: "Documentação" }, navigation: { returnToProjects: "Voltar para projetos", previous: "Projeto anterior", next: "Próximo projeto", previousProject: "Projeto anterior", nextProject: "Próximo projeto" }, contact: { eyebrow: "Próximo passo", button: "Entrar em contato" } },
    socialLinksLabel: "Links sociais",
    technology: { focus: "Foco", primary: "Stack principal", complementary: "Tecnologias complementares", primaryPrefix: "Tecnologia principal:", practices: "Práticas" },
    notFound: { eyebrow: "404 / Página não encontrada", title: "Página não encontrada.", description: "O conteúdo que você tentou acessar não existe ou foi movido.", home: "Voltar ao início", projects: "Ver projetos" },
  },
} as const satisfies LocaleContent;
