# Changelog

Todas as mudanças relevantes do projeto são registradas neste arquivo. Esta é
a única fonte oficial de histórico; o antigo `docs/changelog.md` foi consolidado
aqui em 2026-08-28.

## [Unreleased]

### Documentação e repositório

- Consolidação do changelog e da especificação de Projetos V2.
- README reorganizado com status atual, arquitetura, assets, documentação e
  checklist de deploy.
- Atualização dos documentos de Hero, tarefas, decisões e Blueprint para
  separar referências atuais de históricas.
- Remoção de marcadores de diretório redundantes e do ponteiro `CLAUDE.md`.
- Adição de workflow de qualidade para lint, tipos e build.

## [2.0.0] - 2026-08-27

### Adicionado

- Hero com posicionamento profissional e estrutura preparada para foto opcional.
- Estudos de caso dinâmicos, incluindo galeria de imagens reais do Professional
  Management System.
- Documentação V2 dos projetos.

### Melhorado

- Refinamento das seções Hero, Projetos, Experiência, Tecnologias e Sobre.
- Melhorias de UX, responsividade e acessibilidade.
- Dados e componentes de projetos organizados para crescimento futuro.
- SEO, sitemap e metadata de páginas de projeto.

## [1.1.0] - 2026-08-07

### Formulário de contato

- Formulário acessível integrado à seção Contato, com estados de envio, sucesso
  e erro.
- Route Handler server-side com validação Zod, limite de tamanho, honeypot e
  Resend.
- Documentação de variáveis de ambiente e de remetente/domínio verificado.

### Currículo

- Currículo disponibilizado em `/documents/brayan-favarin-cv.pdf`.
- `siteConfig.resume.enabled` ativado, reutilizando a ação do Hero.

## [1.0.1] - 2026-08-05

### Qualidade e preparação

- Revisão da homepage, estudos de caso e página 404.
- Metadata global e por projeto ampliada com canonical, Open Graph e Twitter.
- Adição de ícone, imagem Open Graph local, sitemap e robots.
- Centralização de identidade, redes sociais, contato e currículo em
  `siteConfig`.
- Melhorias de contraste, foco, teclado, rolagem, menu mobile e skip link.
- Redução de JavaScript em elementos passivos e numeração dinâmica dos estudos
  de caso.
