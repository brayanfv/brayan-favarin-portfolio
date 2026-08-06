# Decisões técnicas

## Conteúdo orientado a dados

Projetos, experiências, tecnologias e links sociais permanecem fora dos
componentes. As páginas dinâmicas usam `projects.ts`, evitando conteúdo
duplicado e facilitando novas inclusões.

## Configuração central do site

Identidade, URL base, dados sociais, contato, SEO e currículo ficam em
`src/config/site.ts`. A URL usa `NEXT_PUBLIC_SITE_URL` e mantém
`http://localhost:3000` apenas como fallback de desenvolvimento.

## Placeholders substituíveis

Enquanto não existem capturas reais, os projetos usam composições locais em
HTML e CSS. Quando `image` é preenchido em `projects.ts`, o mesmo layout passa a
usar `next/image` automaticamente.

## SEO sem dependências externas

A imagem Open Graph é local, o ícone é gerado pelo App Router e sitemap e robots
derivam de `siteConfig`. Páginas de projeto usam a arte global como fallback
quando ainda não há uma imagem própria.

## Currículo com ativação explícita

O caminho do PDF é estável, mas o botão depende de `resume.enabled`. Essa flag
evita verificações frágeis do sistema de arquivos em runtime e impede links
quebrados enquanto o documento não existe.

## ListaSmart pendente de conteúdo

O blueprint cita o slug `listasmart`, mas não fornece dados suficientes para um
estudo de caso. A rota não será criada com informações inventadas; o projeto
será adicionado quando título, descrição, stack e conteúdo forem confirmados.

## JavaScript somente onde agrega valor

Navbar e reveals continuam como Client Components. Links sociais e itens de
tecnologia passivos foram mantidos como Server Components, reduzindo hidratação
sem alterar a composição visual.
