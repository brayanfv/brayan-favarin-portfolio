# Decisões técnicas

## Conteúdo orientado a dados

Projetos, experiências, tecnologias e links sociais permanecem fora dos
componentes. As páginas dinâmicas usam `projects.ts`, evitando conteúdo
duplicado e facilitando novas inclusões.

## Configuração central do site

Identidade, URL base, dados sociais, contato, SEO e currículo ficam em
`src/config/site.ts`. A URL usa `NEXT_PUBLIC_SITE_URL` e mantém
`http://localhost:3000` apenas como fallback de desenvolvimento.

## Imagens de projetos substituíveis

O Professional Management System utiliza capturas reais locais com `next/image`.
O Portfólio Pessoal usa temporariamente a arte Open Graph como representação
visual. Novas capturas entram em `public/images/projects/<slug>/` e são
referenciadas pelo objeto correspondente em `projects.ts`, sem exigir mudança de
layout.

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

## Contato por Resend sem persistência

O formulário envia dados para uma Route Handler do Next.js e a chave da Resend
permanece somente no servidor. Não há banco de dados nesta etapa. A validação
é compartilhada com Zod, o endpoint limita o corpo da requisição e um honeypot
silencioso reduz spam sem introduzir CAPTCHA. Os links de contato alternativos
continuam visíveis caso o serviço esteja indisponível.

## Turnstile complementar ao honeypot

O formulário usa Cloudflare Turnstile em modo Managed sem adicionar uma
biblioteca de terceiros. O widget fornece um token efêmero ao componente de
formulário; a Route Handler o valida no Siteverify antes de chamar o Resend.
O segredo permanece exclusivamente no servidor. O honeypot silencioso foi
mantido como uma camada independente para descartar automações simples sem
substituir a validação obrigatória do Turnstile.

## JavaScript somente onde agrega valor

Navbar e reveals continuam como Client Components. Links sociais e itens de
tecnologia passivos foram mantidos como Server Components, reduzindo hidratação
sem alterar a composição visual.

## Especificações V2 canônicas

A especificação de Projetos V2 foi consolidada em
`docs/portfolio-v2-projects-specification.md`. O documento descreve o padrão
único para cards, estudos de caso, galeria, arquitetura e adição de novos
projetos. O Blueprint fundacional permanece como referência histórica.

## Hero com mensagem dinâmica isolada

A mensagem dinâmica do Hero é um Client Component isolado. Ela usa digitação e
cursor discretos apenas nessa área; nome, cargo e proposta permanecem fixos.
Com `prefers-reduced-motion`, a mensagem inicial é exibida sem animação.

## Documentação e histórico centralizados

`CHANGELOG.md` é a única fonte oficial de histórico. O README funciona como
porta de entrada para execução, manutenção e deploy; a pasta `docs/` mantém
especificações, decisões, estado do projeto e auditorias. Documentos históricos
recebem marcação explícita para não competir com as fontes atuais.

## Qualidade contínua no GitHub

O workflow de qualidade executa lint, checagem de tipos e build em pushes e pull
requests. Ele não realiza deploy e complementa as validações locais descritas no
README.

## Internacionalização orientada por rotas

Português permanece na raiz e inglês usa o prefixo `/en`. Dicionários tipados
em `src/i18n/` concentram conteúdo, rótulos e metadata, enquanto componentes
visuais permanecem únicos. O idioma vem exclusivamente da URL; o seletor da
Navbar preserva a página equivalente quando ela existe e não cria preferência
persistente. Os currículos usam flags independentes por idioma.
