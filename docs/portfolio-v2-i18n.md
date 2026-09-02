# Portfolio V2 — Internacionalização

**Status:** especificação e implementação atual.
**Atualizada em:** 2026-08-28.

## Rotas

| Idioma | Homepage | Estudos de caso |
| --- | --- | --- |
| Português (pt-BR) | `/` | `/projetos/[slug]` |
| Inglês (en) | `/en` | `/en/projects/[slug]` |

O idioma é determinado exclusivamente pela URL. Não há cookies, Local Storage,
detecção automática ou persistência de preferência. O seletor `PT | EN` da
Navbar apenas aponta para a rota equivalente do idioma escolhido; em páginas
sem equivalente, retorna para a homepage correspondente.

Os slugs publicados são estáveis entre os idiomas para preservar URLs já
existentes. Assim, a rota em inglês do Professional Management System é
`/en/projects/professional-management-api`.

## Arquitetura

- `src/i18n/config.ts` define os idiomas suportados e seus metadados de rota.
- `src/i18n/routing.ts` centraliza caminhos, âncoras e troca de idioma.
- `src/i18n/pt-br.ts` e `src/i18n/en.ts` concentram todo o conteúdo traduzível.
- `src/i18n/content.ts` fornece o dicionário correto apenas em Server
  Components e utilitários server-side.
- `src/i18n/projects.ts` deriva projetos e navegação adjacente do dicionário
  ativo.

Os componentes continuam únicos. Páginas e layouts de rota são adaptadores
mínimos que escolhem o locale e reutilizam `PortfolioPage` e `ProjectPage`.
Não há uma implementação visual separada para inglês.

## Conteúdo e currículo

Interface, Hero, Sobre, experiências, tecnologias, contato, Footer, cards e
estudos de caso usam dados traduzidos. Nomes oficiais de tecnologias, empresas
e projetos são preservados quando apropriado.

`siteConfig.resume` possui configuração por idioma. O currículo em português
está habilitado em `/documents/brayan-favarin-cv.pdf` e o currículo em inglês
está habilitado em `/documents/brayan-favarin-cv-en.pdf`.

## SEO

Cada rota publica title, description, canonical, Open Graph e Twitter Card no
idioma correspondente. A metadata inclui alternates `pt-BR`, `en` e
`x-default`; o sitemap contém a homepage e os estudos de caso dos dois idiomas.
Os layouts raiz também definem corretamente `lang="pt-BR"` e `lang="en"`.

## Manutenção

Para adicionar um idioma, inclua seu identificador em `config.ts`, o conteúdo
tipado completo em `src/i18n/`, os caminhos em `routing.ts` e os adaptadores de
rota necessários. Ao adicionar ou modificar um projeto, mantenha os mesmos
slugs nas duas traduções e execute lint, TypeScript e build.
