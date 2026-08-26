# Project Blueprint — Portfólio Brayan Favarin

## 1. Visão do projeto

Criar um portfólio pessoal moderno, profissional, responsivo e preparado para crescer ao longo do tempo.

O portfólio deve apresentar a trajetória profissional de Brayan Favarin, seus conhecimentos técnicos, experiências e projetos de desenvolvimento de software.

O projeto não deve parecer um currículo tradicional nem um template genérico. Ele deve funcionar como uma vitrine profissional e demonstrar capacidade de construir aplicações modernas, organizadas e visualmente consistentes.

---

## 2. Objetivo principal

Posicionar Brayan Favarin como:

> Desenvolvedor Full Stack com foco em Java, Spring Boot e interfaces modernas, capaz de construir aplicações completas do backend ao frontend.

O site deve demonstrar:

- experiência com desenvolvimento de software;
- domínio de backend e frontend;
- capacidade de organização;
- atenção à experiência do usuário;
- preocupação com qualidade visual;
- conhecimento de arquitetura;
- habilidade para construir e publicar projetos completos.

---

## 3. Público-alvo

O portfólio será direcionado principalmente para:

- recrutadores;
- líderes técnicos;
- empresas de tecnologia;
- empresas procurando estagiários ou desenvolvedores juniores;
- possíveis clientes para sistemas e landing pages;
- outros desenvolvedores interessados nos projetos.

---

## 4. Mensagem principal

Nos primeiros segundos de navegação, o visitante deve entender:

> Brayan desenvolve aplicações modernas, trabalha com backend e frontend e sabe transformar ideias em produtos funcionais.

---

## 5. Stack tecnológica

### Framework e linguagem

- Next.js com App Router;
- React;
- TypeScript.

### Estilização

- Tailwind CSS;
- CSS Variables para tokens visuais;
- shadcn/ui apenas quando seus componentes realmente agregarem valor.

### Animações

- Motion para React;
- animações suaves e funcionais;
- suporte à preferência `prefers-reduced-motion`.

### Ícones

- Lucide React;
- ícones oficiais das tecnologias quando necessário.

### Validação futura

- React Hook Form;
- Zod.

### Hospedagem

- Vercel.

### Versionamento

- Git;
- GitHub.

---

## 6. Direção visual

O estilo visual será:

> Dark editorial tecnológico.

A aparência deve ser:

- moderna;
- minimalista;
- profissional;
- confiante;
- tecnológica;
- elegante;
- organizada.

O site deve evitar:

- visual gamer;
- excesso de neon;
- gradientes exagerados;
- animações chamativas;
- excesso de elementos;
- aparência de template pronto;
- barras de progresso subjetivas para tecnologias;
- poluição visual.

---

## 7. Identidade visual

### Marca

Marca principal:

```text
BF.
```

A marca deve ser simples, tipográfica e facilmente reconhecível.

### Cores

```text
Background principal:  #09090B
Background secundário: #111114
Card:                  #16161A
Borda:                 #27272A

Texto principal:       #FAFAFA
Texto secundário:      #A1A1AA
Texto discreto:        #71717A

Cor principal:         #7C5CFC
Principal clara:       #9B87F5
Principal escura:      #5B3FD6

Sucesso:               #22C55E
Erro:                  #EF4444
```

A cor principal deve ser usada com moderação em:

- botões;
- links;
- bordas em destaque;
- estados de hover;
- marcadores;
- pequenos brilhos;
- elementos da linha do tempo.

### Gradientes

Os gradientes devem aparecer apenas como detalhes.

Gradiente principal:

```css
linear-gradient(
  135deg,
  #9b87f5 0%,
  #7c5cfc 45%,
  #5b3fd6 100%
);
```

Brilho de fundo:

```css
radial-gradient(
  circle,
  rgba(124, 92, 252, 0.14) 0%,
  transparent 65%
);
```

---

## 8. Tipografia

### Fonte principal

Geist Sans.

Utilização:

- títulos;
- textos;
- botões;
- navegação;
- descrições.

### Fonte secundária

Geist Mono.

Utilização:

- tags;
- identificadores de seção;
- pequenos detalhes;
- status;
- elementos relacionados a código.

### Hierarquia tipográfica aproximada

```text
Hero desktop:        56px a 72px
Hero mobile:         40px a 48px

Título de seção:     36px a 48px
Título mobile:       30px a 36px

Subtítulo:           20px a 24px
Texto principal:     16px a 18px
Texto auxiliar:      14px
Tags:                12px a 14px
```

Utilizar tipografia responsiva com `clamp()` quando fizer sentido.

---

## 9. Espaçamento e layout

```text
Largura máxima:             1200px
Espaçamento lateral desktop: 32px
Espaçamento lateral mobile:  20px
Distância entre seções:      120px a 160px
Espaçamento interno cards:   24px a 32px
```

O layout deve ter bastante espaço em branco e não deve ocupar toda a largura disponível sem necessidade.

---

## 10. Estrutura da página principal

A ordem das seções será:

1. Navbar;
2. Hero;
3. Sobre;
4. Projetos;
5. Experiência;
6. Tecnologias;
7. Contato;
8. Footer.

A página principal será inicialmente uma página única com navegação por âncoras.

Também existirão páginas individuais para os principais projetos.

---

## 11. Navbar

A Navbar deve:

- permanecer fixa no topo;
- ser transparente quando estiver no início da página;
- receber fundo escuro translúcido e blur durante a rolagem;
- destacar o link da seção atual;
- possuir navegação acessível por teclado;
- utilizar menu mobile;
- conter botão de contato em destaque.

Links:

```text
Sobre
Projetos
Experiência
Tecnologias
Contato
```

Estrutura aproximada:

```text
BF.        Sobre   Projetos   Experiência   Tecnologias   [Contato]
```

---

## 12. Hero

O Hero deve apresentar imediatamente:

- disponibilidade;
- função;
- proposta profissional;
- tecnologias principais;
- chamadas para ação.

Conteúdo inicial:

### Status

```text
Disponível para oportunidades
```

### Título

```text
Desenvolvedor Full Stack criando aplicações modernas e completas.
```

### Descrição

```text
Sou estudante de Ciência da Computação e desenvolvedor com experiência em Java, Spring Boot, Angular e desenvolvimento de sistemas do backend ao frontend.

Transformo ideias e problemas reais em soluções organizadas, funcionais e fáceis de utilizar.
```

### Botões

```text
Ver projetos
GitHub
```

### Tecnologias em destaque

```text
Java
Spring Boot
Angular
TypeScript
PostgreSQL
Docker
```

O Hero não deve utilizar foto inicialmente.

Ele deve ser baseado em:

- tipografia forte;
- composição limpa;
- brilho azul-violeta;
- pequenos detalhes gráficos;
- elementos relacionados a código ou arquitetura;
- animações suaves.

---

## 13. Sobre

Identificador:

```text
01 / Sobre
```

Título:

```text
Desenvolvimento além do código.
```

Texto:

```text
Sou estudante de Ciência da Computação na UNESC e desenvolvedor Full Stack com experiência na construção de aplicações utilizando Java, Spring Boot, Angular e bancos de dados relacionais.

Ao longo da minha trajetória, participei do desenvolvimento de sistemas reais em ambientes colaborativos, trabalhando com regras de negócio, integração entre frontend e backend, criação de interfaces e organização de fluxos.

Gosto de entender o problema antes de começar a programar e busco desenvolver soluções que sejam organizadas, funcionais e simples de usar.

Atualmente, estou aprimorando minhas habilidades por meio de projetos próprios, estudos e experiências práticas, com o objetivo de atuar profissionalmente no desenvolvimento de software.
```

Informações rápidas:

```text
Localização:
Criciúma, Santa Catarina

Formação:
Ciência da Computação — UNESC

Área de atuação:
Desenvolvimento Full Stack

Foco principal:
Java, Spring Boot e aplicações web
```

---

## 14. Projetos

Identificador:

```text
02 / Projetos
```

Título:

```text
Projetos que transformam conhecimento em soluções reais.
```

Descrição:

```text
Uma seleção de aplicações desenvolvidas para praticar arquitetura, regras de negócio, interfaces modernas, integração de sistemas e boas práticas de desenvolvimento.
```

Projetos iniciais:

### Professional Management API

Descrição:

```text
API REST para cadastro, consulta, atualização e exclusão de profissionais e seus respectivos contatos.
```

Tecnologias:

```text
Java
Spring Boot
Spring Data JPA
PostgreSQL
Swagger
Docker
Maven
```

Status:

```text
Em evolução
```

### Portfólio Pessoal

Descrição:

```text
Portfólio desenvolvido do zero com foco em identidade visual, experiência do usuário, responsividade, performance e apresentação profissional.
```

Tecnologias:

```text
Next.js
React
TypeScript
Tailwind CSS
Motion
Vercel
```

Status:

```text
Em desenvolvimento
```

Os cards devem apresentar:

- imagem;
- título;
- subtítulo;
- descrição;
- tecnologias;
- status;
- link do repositório;
- link de demonstração;
- link para detalhes.

O hover deve ser discreto:

- leve elevação;
- borda destacada;
- pequena ampliação da imagem.

---

## 15. Páginas de projetos

Cada projeto importante deve possuir uma URL própria:

```text
/projetos/professional-management-api
/projetos/listasmart
/projetos/portfolio-pessoal
```

Utilizar rota dinâmica:

```text
src/app/projetos/[slug]/page.tsx
```

As páginas devem ser geradas a partir dos dados dos projetos.

Estrutura futura dos estudos de caso:

- contexto;
- problema;
- solução;
- principais funcionalidades;
- arquitetura;
- tecnologias;
- desafios;
- decisões técnicas;
- aprendizados;
- imagens;
- demonstração;
- repositório.

---

## 16. Experiência

Identificador:

```text
03 / Experiência
```

Título:

```text
Experiências que ajudaram a construir minha forma de trabalhar.
```

A seção deve utilizar uma linha do tempo vertical.

Experiências iniciais:

### UNESC Labs — Simples Dental

Cargo:

```text
Estagiário Bolsista em Desenvolvimento de Software
```

Período:

```text
2025
```

Descrição:

```text
Atuação no desenvolvimento e manutenção de aplicações utilizando Java, Spring Boot e Angular.

Participação em reuniões diárias, organização de tarefas, desenvolvimento de funcionalidades, implementação de regras de negócio e integração entre frontend e backend.
```

### UNESC Labs — Mohawk

Cargo:

```text
Estagiário Bolsista em Desenvolvimento Frontend
```

Período:

```text
2025
```

Descrição:

```text
Atuação no desenvolvimento visual de um sistema de controle interno, com foco em criação de telas, componentes e organização de fluxos utilizando Angular.
```

### Hotel Dalmoro

Cargo:

```text
Recepcionista
```

Descrição:

```text
Experiência com atendimento ao público, organização de reservas, operação de sistemas internos, emissão de documentos e controle financeiro.

Essa experiência contribuiu para o desenvolvimento de habilidades de comunicação, responsabilidade, resolução de problemas e contato direto com clientes.
```

---

## 17. Tecnologias

Identificador:

```text
04 / Tecnologias
```

Título:

```text
Ferramentas que utilizo para transformar ideias em aplicações.
```

Categorias:

### Backend

- Java;
- Spring Boot;
- Spring Data JPA;
- Node.js;
- Express;
- APIs REST;
- Maven.

### Frontend

- Angular;
- React;
- Next.js;
- React Native;
- TypeScript;
- JavaScript;
- HTML;
- CSS;
- SCSS;
- Tailwind CSS.

### Bancos de dados

- PostgreSQL;
- MySQL;
- MongoDB;
- SQLite.

### Ferramentas e DevOps

- Git;
- GitHub;
- Docker;
- Docker Compose;
- Swagger;
- Postman;
- VS Code;
- Vercel.

Não utilizar barras de porcentagem ou níveis numéricos.

---

## 18. Contato

Identificador:

```text
05 / Contato
```

Título:

```text
Vamos construir algo juntos?
```

Texto:

```text
Estou disponível para oportunidades profissionais, projetos e conversas sobre desenvolvimento de software.

Caso queira conhecer melhor meu trabalho ou conversar sobre alguma oportunidade, entre em contato comigo.
```

Links:

- e-mail;
- LinkedIn;
- GitHub.

Na primeira versão, não criar backend para formulário.

---

## 19. Footer

O Footer deve conter:

```text
BF.

Desenvolvido com Next.js, TypeScript e Tailwind CSS.

© 2026 Brayan Favarin.

Voltar ao topo.
```

---

## 20. Arquitetura de pastas

Criar a seguinte estrutura:

```text
portfolio/
├── public/
│   ├── images/
│   │   ├── projects/
│   │   ├── profile/
│   │   └── og/
│   ├── documents/
│   └── icons/
│
├── src/
│   ├── app/
│   │   ├── projetos/
│   │   │   └── [slug]/
│   │   │       └── page.tsx
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── globals.css
│   │   ├── sitemap.ts
│   │   └── robots.ts
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── navbar.tsx
│   │   │   ├── footer.tsx
│   │   │   └── container.tsx
│   │   │
│   │   ├── sections/
│   │   │   ├── hero-section.tsx
│   │   │   ├── about-section.tsx
│   │   │   ├── projects-section.tsx
│   │   │   ├── experience-section.tsx
│   │   │   ├── skills-section.tsx
│   │   │   └── contact-section.tsx
│   │   │
│   │   ├── projects/
│   │   │   ├── project-card.tsx
│   │   │   ├── project-grid.tsx
│   │   │   └── project-details.tsx
│   │   │
│   │   ├── shared/
│   │   │   ├── section-heading.tsx
│   │   │   ├── technology-tag.tsx
│   │   │   ├── social-links.tsx
│   │   │   └── animated-section.tsx
│   │   │
│   │   └── ui/
│   │
│   ├── data/
│   │   ├── personal.ts
│   │   ├── projects.ts
│   │   ├── experiences.ts
│   │   ├── technologies.ts
│   │   ├── navigation.ts
│   │   └── social-links.ts
│   │
│   ├── types/
│   │   ├── project.ts
│   │   ├── experience.ts
│   │   └── technology.ts
│   │
│   ├── lib/
│   │   ├── utils.ts
│   │   └── metadata.ts
│   │
│   └── config/
│       └── site.ts
│
├── docs/
│   ├── project-blueprint.md
│   ├── tasks.md
│   ├── decisions.md
│   └── changelog.md
│
├── .env.example
├── components.json
├── next.config.ts
├── package.json
├── tsconfig.json
└── README.md
```

---

## 21. Organização dos dados

O conteúdo deve ficar separado dos componentes.

Criar arquivos específicos em:

```text
src/data/
```

Os componentes não devem possuir textos extensos ou listas de projetos diretamente em seu código.

Exemplo:

```ts
export const personalData = {
  name: "Brayan Favarin",
  role: "Desenvolvedor Full Stack",
  location: "Criciúma, Santa Catarina",
  education: "Ciência da Computação — UNESC",
  availability: "Disponível para oportunidades",
};
```

Os projetos devem ser adicionados por objetos tipados.

A inclusão de um novo projeto deve exigir apenas:

- adicionar o objeto;
- adicionar suas imagens;
- preencher seus links e informações.

---

## 22. Tipagem

Criar interfaces TypeScript para:

- projetos;
- experiências;
- tecnologias;
- links sociais;
- navegação.

Exemplo:

```ts
export type ProjectStatus =
  | "Concluído"
  | "Em desenvolvimento"
  | "Em evolução"
  | "Planejado";

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  status: ProjectStatus;
  featured: boolean;
  repositoryUrl?: string;
  demoUrl?: string;
  image: string;
}
```

Evitar o uso de `any`.

---

## 23. Componentização

Criar componentes pequenos e reutilizáveis.

Componentes fundamentais:

- Container;
- Navbar;
- Footer;
- SectionHeading;
- TechnologyTag;
- ProjectCard;
- ProjectGrid;
- SocialLinks;
- AnimatedSection;
- botões reutilizáveis.

A página principal deve apenas organizar as seções.

Exemplo:

```tsx
export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <SkillsSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
```

---

## 24. Responsividade

O site deve funcionar corretamente em:

- celulares pequenos;
- celulares grandes;
- tablets;
- notebooks;
- monitores grandes.

Utilizar abordagem mobile-first.

Verificar especialmente:

- Navbar;
- Hero;
- títulos;
- botões;
- cards;
- linha do tempo;
- tecnologias;
- Footer.

Não permitir:

- scroll horizontal;
- textos cortados;
- botões pequenos;
- imagens deformadas;
- sobreposição de elementos.

---

## 25. Acessibilidade

Garantir:

- HTML semântico;
- navegação por teclado;
- foco visível;
- contraste adequado;
- textos alternativos;
- labels acessíveis;
- hierarquia correta de títulos;
- respeito ao `prefers-reduced-motion`;
- áreas clicáveis adequadas;
- links com nomes compreensíveis.

---

## 26. Animações

As animações devem ser suaves e não distrair o visitante.

Utilizar:

- fade;
- pequeno deslocamento vertical;
- stagger de cards;
- hover de botões;
- hover de projetos;
- transição da Navbar;
- brilho sutil no Hero.

Duração média:

```text
200ms a 500ms
```

Evitar:

- animações infinitas fortes;
- cursor personalizado;
- textos giratórios;
- movimentos excessivos;
- efeitos pesados em dispositivos móveis.

---

## 27. SEO

Configurar:

- título;
- descrição;
- Open Graph;
- Twitter Card;
- canonical;
- sitemap;
- robots;
- favicon;
- imagem social;
- metadata nas páginas de projetos.

Título inicial:

```text
Brayan Favarin | Desenvolvedor Full Stack
```

Descrição inicial:

```text
Portfólio de Brayan Favarin, desenvolvedor Full Stack com experiência em Java, Spring Boot, Angular, TypeScript e construção de aplicações modernas.
```

---

## 28. Performance

Buscar boa performance sem sacrificar a experiência visual.

Aplicar:

- `next/image`;
- carregamento otimizado de fontes;
- imagens WebP ou AVIF;
- componentes de cliente somente quando necessário;
- animações leves;
- lazy loading;
- bundle enxuto;
- evitar bibliotecas desnecessárias.

---

## 29. Qualidade do código

O código deve:

- possuir nomes claros;
- ter componentes com responsabilidade única;
- evitar duplicação;
- utilizar TypeScript corretamente;
- evitar `any`;
- evitar valores mágicos;
- utilizar tokens visuais;
- manter conteúdo separado da interface;
- manter formatação consistente;
- passar no lint e no build.

---

## 30. Convenções

### Arquivos

Utilizar nomes em kebab-case:

```text
project-card.tsx
hero-section.tsx
social-links.tsx
```

### Componentes

Utilizar PascalCase:

```text
ProjectCard
HeroSection
SocialLinks
```

### Variáveis e funções

Utilizar camelCase.

### Imports

Utilizar alias:

```text
@/components
@/data
@/types
@/lib
```

---

## 31. Implementação por fases

### Fase 1 — Fundação

- inicializar Next.js;
- configurar TypeScript;
- configurar Tailwind;
- adicionar fontes;
- criar tokens visuais;
- criar pastas;
- criar tipos;
- criar arquivos de dados;
- configurar lint e formatação.

### Fase 2 — Componentes fundamentais

- Container;
- SectionHeading;
- botões;
- TechnologyTag;
- AnimatedSection;
- Navbar;
- Footer.

### Fase 3 — Página principal

- Hero;
- Sobre;
- Projetos;
- Experiência;
- Tecnologias;
- Contato.

### Fase 4 — Projetos detalhados

- rota dinâmica;
- geração de páginas por slug;
- estudos de caso;
- metadata individual.

### Fase 5 — Qualidade

- responsividade;
- acessibilidade;
- animações;
- SEO;
- performance;
- revisão de textos;
- testes manuais.

### Fase 6 — Publicação

- GitHub;
- Vercel;
- domínio;
- HTTPS;
- analytics;
- currículo para download.

---

## 32. Primeira instrução para o Codex

Ao iniciar o desenvolvimento, executar a seguinte tarefa:

```text
Leia integralmente o arquivo docs/project-blueprint.md antes de realizar qualquer alteração.

Inicialize o projeto Next.js dentro da pasta atual, seguindo a stack, arquitetura, convenções e identidade visual definidas no documento.

Nesta primeira etapa, implemente somente a fundação do projeto:

1. configuração do Next.js com App Router e TypeScript;
2. Tailwind CSS;
3. fontes Geist Sans e Geist Mono;
4. tokens de cores e espaçamentos;
5. estrutura de pastas;
6. interfaces TypeScript;
7. arquivos de dados iniciais;
8. configuração básica de metadata;
9. README com instruções para execução;
10. página inicial provisória simples para validar o ambiente.

Não implemente ainda as seções completas do portfólio.

Antes de finalizar:

- execute o lint;
- execute o build;
- corrija os erros encontrados;
- apresente um resumo dos arquivos criados e das decisões tomadas.
```

---

## 33. Critérios de conclusão da fundação

A primeira fase estará concluída quando:

- o projeto executar localmente;
- o build funcionar;
- o lint não apresentar erros;
- as fontes estiverem configuradas;
- os tokens visuais existirem;
- a estrutura de pastas estiver criada;
- os dados estiverem separados da interface;
- os tipos estiverem definidos;
- a página inicial provisória estiver acessível;
- o README possuir instruções claras.