# Repository Audit

**Data:** 2026-08-28  
**Escopo:** auditoria estática e de organização. Nenhum código, configuração,
asset, dependência ou arquivo de ambiente foi alterado.

## Status da execução

**Executado em:** 2026-08-28.

As recomendações de organização aprovadas nesta auditoria foram aplicadas em
uma etapa posterior:

- `CHANGELOG.md` passou a ser a fonte oficial e absorveu o histórico útil de
  `docs/changelog.md`.
- A especificação de Projetos V2 foi consolidada em
  `docs/portfolio-v2-projects-specification.md`.
- README, tarefas, decisões, Hero V2 e cabeçalho do Blueprint foram atualizados
  para apontar às fontes atuais e separar referências históricas.
- `CLAUDE.md`, os dois `.gitkeep` redundantes, o changelog duplicado e o antigo
  blueprint V2 de Projetos foram removidos sem perda de conteúdo útil.
- Um workflow de qualidade foi adicionado para lint, tipos e build.

As seções seguintes preservam o diagnóstico do estado **anterior** à execução e
permanecem úteis como histórico. Itens operacionais que exigem credenciais,
domínio ou uma escolha de infraestrutura — URL pública, Resend e rate limiting
— continuam como pendências de deploy.

## Executive Summary

O repositório está **adequadamente organizado e próximo de excelente** para um
portfólio pessoal. A estrutura App Router, a separação entre componentes,
dados, tipos, configuração e utilitários tornam a aplicação fácil de localizar
e evoluir. A árvore rastreada não contém builds, caches, logs, dependências ou
arquivos de ambiente locais.

Os principais pontos a resolver antes de uma publicação profissional são de
higiene de documentação e operação: consolidar o changelog, atualizar o índice
de documentos no README, definir a URL pública HTTPS no ambiente de produção,
adicionar proteção contra abuso ao endpoint de contato e estabelecer CI/testes.

No momento da auditoria, havia 90 arquivos rastreados. A única alteração local
era este relatório, ainda não rastreado e criado como saída da auditoria.

## Pontos Fortes

- Estrutura clara: `src/app`, `components`, `config`, `data`, `lib` e
  `types` possuem responsabilidades bem separadas.
- Conteúdo de projetos, experiências, tecnologias e informações pessoais está
  fora dos componentes, facilitando atualizações sem duplicação de interface.
- App Router, metadata, sitemap, robots, ícone e páginas de projeto seguem uma
  organização coerente para Next.js 16.
- Componentes de cliente são limitados aos quatro casos que exigem estado ou
  APIs do navegador: Navbar, formulário, animações de reveal e mensagem dinâmica
  do Hero.
- Formulário de contato valida no cliente e no servidor, limita o corpo da
  requisição, escapa o HTML do e-mail e mantém a chave Resend apenas no servidor.
- `.gitignore` cobre dependências, artefatos do Next.js, ambientes locais, logs,
  caches TypeScript, cobertura e configurações da Vercel.
- Capturas reais do Professional Management System, currículo e imagem Open
  Graph estão versionados em locais previsíveis dentro de `public/`.
- `package-lock.json`, TypeScript estrito, ESLint Core Web Vitals e aliases de
  importação oferecem boa base de manutenção.

## Problemas Encontrados

| Severidade | Achado | Impacto |
| --- | --- | --- |
| Alta antes do deploy | `NEXT_PUBLIC_SITE_URL` usa `http://localhost:3000` como fallback. | Canonicals, sitemap, robots e Open Graph podem apontar para localhost se a variável de produção não for definida. |
| Alta após exposição pública | O endpoint de contato possui honeypot e limite de tamanho, mas não tem rate limiting. | Pode permitir abuso do formulário e consumo da cota de e-mail. |
| Média | Existem dois changelogs: `CHANGELOG.md` e `docs/changelog.md`. | Histórico duplicado e divergente para quem chega ao projeto. |
| Média | README lista `docs/project-blueprint.md.txt`, mas o arquivo existente é `docs/project-blueprint.md`; também omite documentos V2 e o relatório. | A navegação da documentação está desatualizada. |
| Média | `docs/tasks.md`, `docs/decisions.md`, `docs/project-blueprint.md` e `docs/portfolio-v2-hero.md` não representam integralmente o estado V2 atual. | Pode induzir decisões com base em nomenclaturas, mensagens ou status antigos. |
| Média | Não há workflow em `.github/` nem suíte de testes automatizados. | Lint, tipos e build dependem de execução manual e regressões têm menor cobertura. |
| Baixa | A imagem Open Graph tem aproximadamente 1,03 MiB e também é usada no case do Portfólio Pessoal. | Há oportunidade de melhorar o compartilhamento e substituir a representação genérica por capturas reais do portfólio. |
| Baixa | `npm ls --depth=0` reporta pacotes transitivos extras no `node_modules` local. | Não afeta o Git, mas indica que uma instalação limpa com `npm ci` é recomendável antes de validar ou publicar. |

## KEEP

| Item | Justificativa |
| --- | --- |
| `src/` | Organização interna consistente, componentes reutilizáveis e dados tipados. Não há arquivo de código excessivamente grande fora de `projects.ts`, que é adequadamente um arquivo de conteúdo. |
| `public/documents/brayan-favarin-cv.pdf` | Currículo público integrado por configuração central. |
| `public/images/projects/professional-management-system/` | Capturas oficiais e referenciadas pelos cards, Hero e galeria. |
| `public/images/og/portfolio-brayan-favarin.png` | Imagem Open Graph local, com fallback coerente para metadata. |
| `.env.example` | Documenta somente nomes de variáveis e um valor público de desenvolvimento. |
| `.gitignore` | Cobre os principais artefatos e está alinhado ao Next.js atual, inclusive para `next-env.d.ts`. |
| `package.json` e `package-lock.json` | Dependências diretas são justificadas e o lockfile preserva reproduzibilidade. |
| `AGENTS.md` | Instrução curta e específica para o Next.js instalado; o próprio Next.js informa que esse arquivo deve ser mantido para evitar alterações locais recorrentes. |
| `docs/decisions.md` | Decisões arquiteturais úteis que devem ser preservadas e complementadas. |
| `docs/portfolio-v2-projects-specification.md` | Melhor candidato a especificação canônica da área de Projetos V2. |
| `docs/repository-audit.md` | Registro de auditoria e plano de melhoria incremental. |

## REMOVE

Nenhum build, cache, log, backup, dependência ou segredo está rastreado e não há
remoção imediata obrigatória.

| Item | Quando | Justificativa |
| --- | --- | --- |
| `docs/changelog.md` | Depois de migrar os registros históricos relevantes para `CHANGELOG.md`. | Duplica a função do changelog de raiz e está desatualizado. |
| `public/documents/.gitkeep` | Após confirmar a manutenção do currículo no diretório. | O PDF já preserva o diretório versionado; o marcador é redundante. |
| `public/images/projects/.gitkeep` | Após confirmar a manutenção das capturas atuais. | A pasta já é preservada pelo diretório do Professional Management System. |

Os dois `.gitkeep` são apenas simplificações opcionais e não representam risco.

## MOVE

Não há arquivos de código ou assets que precisem ser movidos imediatamente.

A recomendação é **não mover** arquivos de `src/` nem de `public/`. Para a
documentação, a ação preferível é consolidar conteúdo por meio de merge, não
realocar arquivos sem necessidade.

## REVIEW

| Item | Motivo da revisão |
| --- | --- |
| `CLAUDE.md` | Contém somente um ponteiro para `AGENTS.md`. Mantenha se o fluxo com Claude Code for intencional; caso contrário, ele é ruído pequeno na raiz. |
| `docs/project-blueprint.md` | É valioso como visão fundacional, porém contém identidade e conteúdo V1, como o antigo Professional Management API. Deve receber marcação de referência histórica. |
| `docs/portfolio-v2-projects.md` | Sobrepõe grande parte da specification. Avaliar merge na especificação canônica. |
| `docs/portfolio-v2-hero.md` | A diretriz registrada fala em fade e rejeita typewriter, enquanto a implementação atual usa typewriter aprovado. Atualizar o documento ou identificá-lo como histórico. |
| `docs/tasks.md` | O checklist não registra a evolução V2 recente e mistura pendências de publicação com estado concluído. |
| `docs/decisions.md` | Mantém boas decisões, mas precisa registrar as decisões V2 e a situação atual das imagens reais. |
| Portfólio Pessoal em `projects.ts` | O case usa a arte Open Graph como imagem principal e galeria. Funciona, mas futuras capturas reais de telas oferecerão evidência mais forte do produto. |
| Instalação local de `node_modules` | Pacotes opcionais/transitivos foram marcados como extras por `npm ls`. Não estão versionados; revisar com uma instalação limpa (`npm ci`) em momento apropriado. |

## README Audit

### Pontos fortes

- Explica propósito, stack, requisitos, instalação, execução, verificações e
  rotas.
- Documenta bem a integração com Resend, variáveis necessárias, remetente
  verificado e comportamento de falha.
- Explica manutenção de dados pessoais, projetos, imagens, currículo, URL
  pública e preparação para Vercel.

### Problemas e conteúdo desatualizado

- A árvore de `docs/` aponta para `project-blueprint.md.txt`, que não existe.
- A árvore não lista os documentos V2, o changelog de raiz nem este relatório.
- Não há índice de documentação com o papel de cada arquivo.
- O README não destaca explicitamente o Professional Management System como case
  principal com imagens reais.
- A situação de deploy é descrita, mas poderia ter um aviso mais direto de que
  URL pública, variáveis do formulário e um remetente Resend verificado são
  pré-requisitos de produção.
- Não há seção curta de contato/autor para a experiência no GitHub.

### Estrutura recomendada

1. Visão geral e status do projeto.
2. Principais funcionalidades e rotas.
3. Stack e arquitetura resumida.
4. Pré-requisitos, instalação, ambiente local e scripts.
5. Variáveis de ambiente e formulário Resend.
6. Estrutura de diretórios.
7. Manutenção: dados pessoais, projetos, imagens e currículo.
8. Preparação para deploy na Vercel.
9. Índice de documentação e changelog oficial.
10. Pendências conhecidas e contato do autor.

## Documentation Audit

| Documento | Classificação | Avaliação |
| --- | --- | --- |
| `docs/project-blueprint.md` | REVIEW | Preserva a visão, identidade e convenções iniciais; está parcialmente superado pelo V2. |
| `docs/portfolio-v2-projects.md` | MERGE | Blueprint útil, mas amplamente sobreposto por `portfolio-v2-projects-specification.md`. |
| `docs/portfolio-v2-projects-specification.md` | KEEP | Deve concentrar o padrão oficial dos projetos V2 após o merge. |
| `docs/portfolio-v2-hero.md` | REVIEW | Reconciliar com a implementação aprovada da mensagem dinâmica. |
| `docs/decisions.md` | KEEP | Fonte correta para decisões técnicas; precisa apenas de novas entradas. |
| `docs/tasks.md` | REVIEW | Atualizar como estado vivo ou arquivar tarefas concluídas no histórico Git. |
| `docs/changelog.md` | MERGE | Fundir registros relevantes em `CHANGELOG.md` e remover a duplicata depois. |
| `docs/repository-audit.md` | KEEP | Registro atual de riscos, prioridades e recomendações. |
| `CHANGELOG.md` | KEEP | Deve ser a única fonte oficial de changelog, na raiz do repositório. |

### Changelog

Há duplicação entre `CHANGELOG.md` e `docs/changelog.md`. A fonte oficial
recomendada é `CHANGELOG.md`, por ser a convenção mais visível no GitHub. Antes
de remover o arquivo em `docs/`, seus registros históricos relevantes devem ser
incorporados à fonte oficial.

## Dependency Audit

| Grupo | Resultado |
| --- | --- |
| Runtime | `next`, `react` e `react-dom` são a base da aplicação. |
| Interface | `lucide-react` é usado nos controles e `motion` nos reveals e na mensagem dinâmica. |
| Contato | `resend` é usado exclusivamente pela Route Handler e `zod` pela validação compartilhada. |
| Estilo | `tailwindcss` e `@tailwindcss/postcss` são usados pela configuração e por `globals.css`. |
| Qualidade e tipos | ESLint, `eslint-config-next`, TypeScript e os pacotes `@types/*` estão coerentes com o projeto. |

Não há dependência direta evidentemente não utilizada, duplicada ou temporária
em `package.json`. O lockfile está presente.

`npm ls --depth=0` marcou alguns pacotes transitivos opcionais no `node_modules`
local como extras. Eles não pertencem ao Git nem exigem alteração em
`package.json`; uma futura execução de `npm ci` deve normalizar essa instalação.

Scripts atuais (`dev`, `build`, `start`, `lint`) são suficientes para o tamanho
do projeto. Quando houver testes, adicionar um script `test` real e um workflow
de CI é mais útil do que criar scripts vazios. Um script de formatação e o campo
`packageManager` são melhorias opcionais de consistência.

## Security Audit

### Estado verificado

- `.env.local` e demais `.env*` são ignorados, com exceção explícita de
  `.env.example`.
- Nenhum arquivo de ambiente local, chave, certificado, build, cache ou log está
  rastreado.
- `.env.example` não contém valores de segredo; apenas a URL pública local e os
  nomes das três variáveis do formulário.
- `RESEND_API_KEY` é lida somente em `src/app/api/contact/route.ts`, sem
  prefixo `NEXT_PUBLIC_`.
- `CONTACT_TO_EMAIL` e `CONTACT_FROM_EMAIL` também são server-side e estão
  documentadas sem valores reais.
- `NEXT_PUBLIC_SITE_URL` é a única variável pública identificada e é apropriada
  para URL/canonical público.
- O endpoint limita o tamanho do corpo, valida com Zod, usa honeypot, escapa os
  valores inseridos no HTML e retorna mensagens genéricas em erro.

### Riscos reais

1. O formulário ainda não tem rate limiting ou limitação na borda. Ao tornar o
   site público, isso deve ser tratado para proteger a cota do Resend.
2. Em produção, a ausência de `NEXT_PUBLIC_SITE_URL` mantém URLs de SEO em
   localhost. A variável precisa estar configurada antes do primeiro deploy.
3. O envio real depende de remetente/domínio verificado no Resend. Essa é uma
   dependência operacional, não um segredo a ser colocado no repositório.

Não foram exibidos nem registrados valores de segredo nesta auditoria.

## Structure Audit

### Estrutura do repositório

Classificação: **adequada**.

- `src/app` concentra rotas, metadata e Route Handlers com pouco acoplamento.
- `src/components` é dividido por domínio (`projects`, `experience`,
  `technologies`, `contact`) e por componentes compartilhados/visuais.
- `src/config/site.ts` centraliza identidade, dados públicos, SEO, currículo e
  URL base; segredos não foram colocados nele.
- `src/data` contém conteúdo tipado; `src/types` evita contratos implícitos;
  `src/lib` mantém validação, metadata e utilitários pequenos.
- `public` contém somente recursos públicos relevantes. Os diretórios vazios de
  perfil e ícones são reservas explícitas, não artefatos de build.
- Não existe diretório `scripts/`, o que é aceitável enquanto não houver
  automações repetitivas a extrair.

### Código-fonte

- A pesquisa estática não encontrou `any`, `@ts-ignore`,
  `dangerouslySetInnerHTML`, logs de depuração ou marcadores TODO/FIXME no
  código-fonte.
- Navbar e formulário são os maiores componentes interativos e sua extensão é
  compatível com as responsabilidades de acessibilidade e estados que atendem.
- `projects.ts` é o maior arquivo, mas concentra conteúdo de dois cases; sua
  dimensão é aceitável. Quando houver muitos projetos, avaliar arquivos de dados
  por projeto, preservando a mesma API de leitura.
- Não foram identificados componentes de projeto órfãos; os componentes
  especializados estão referenciados pela composição do estudo de caso.

### Configurações

- `next.config.ts` é mínimo e atual, com `reactStrictMode`.
- `tsconfig.json` usa modo estrito, aliases, App Router e cache incremental.
- Ignorar `next-env.d.ts` é correto para a versão atual do Next.js, pois o
  arquivo é gerado e deve permanecer no `include` do TypeScript.
- ESLint usa Core Web Vitals e regras TypeScript do Next.js.
- Tailwind CSS 4 está configurado via PostCSS e tokens em `globals.css`.
- `components.json` é válido para a convenção shadcn/Lucide; mantê-lo é
  razoável mesmo sem componentes shadcn adicionados.

### SEO e produção

- Metadata global inclui `metadataBase`, title template, descrição, autores,
  canonical, Open Graph e Twitter Card.
- Páginas de projeto geram metadata própria e usam a imagem local do projeto
  quando definida.
- Sitemap deriva os slugs de `projects.ts`; robots referencia o sitemap; ícone é
  servido por rota do App Router.
- A estrutura está pronta para Vercel sem `vercel.json`, mas o deploy ainda não
  deve ocorrer sem URL HTTPS pública e variáveis do formulário configuradas.
- A imagem Open Graph é válida e local, porém seu tamanho atual é uma
  oportunidade de otimização futura.

## Prioridade Alta

1. Antes de qualquer deploy, configurar `NEXT_PUBLIC_SITE_URL` com a origem
   HTTPS definitiva e confirmar canonicals, sitemap, robots e Open Graph.
2. Antes de expor o formulário publicamente, definir rate limiting na borda ou
   na plataforma de hospedagem, sem remover a validação e o honeypot atuais.
3. Configurar no ambiente de produção as variáveis server-side do Resend e usar
   remetente ou domínio verificado, sem versionar seus valores.

## Prioridade Média

1. Consolidar o changelog em `CHANGELOG.md` e eliminar a duplicação após merge.
2. Corrigir o índice de documentos do README e registrar o papel de cada
   documento V2.
3. Atualizar ou marcar como históricas as especificações que divergem do estado
   aprovado, principalmente Blueprint, Hero V2, tarefas e decisões.
4. Criar CI mínimo para `npm run lint`, `npx tsc --noEmit` e `npm run build`.
5. Planejar testes automatizados para schema/Route Handler de contato e geração
   das rotas de projeto.

## Prioridade Baixa

1. Executar `npm ci` em uma janela apropriada para limpar o estado local de
   dependências transitivas extras.
2. Otimizar a arte Open Graph e substituí-la por capturas reais no estudo de
   caso do Portfólio Pessoal quando elas estiverem disponíveis.
3. Decidir se `CLAUDE.md` e o diretório público de ícones devem permanecer como
   convenções de ferramenta/preparação futura.
4. Considerar um formatter padronizado e o campo `packageManager` se o projeto
   passar a ter mais colaboradores.

## Quick Wins

- Corrigir a extensão e ampliar a lista de documentos no README.
- Definir `CHANGELOG.md` como fonte oficial e migrar o conteúdo útil do
  changelog em `docs/`.
- Adicionar uma nota de status aos documentos históricos, sem apagar seu valor
  como referência.
- Criar workflow de CI apenas com lint, tipos e build.
- Rodar `npm ci` antes da próxima validação completa local.

## Riscos

- **SEO incorreto em produção:** ocorre se a URL pública não for definida antes
  do deploy.
- **Abuso de e-mail:** o formulário pode receber tráfego automatizado acima da
  capacidade esperada sem rate limiting.
- **Documentação contraditória:** instruções V1, V2 e changelogs duplicados
  podem confundir colaboradores e afetar a apresentação do GitHub.
- **Regressões não detectadas:** sem CI e testes, a qualidade depende de
  verificações manuais.
- **Evidência visual limitada do Portfólio Pessoal:** a arte Open Graph não
  substitui capturas de produto quando o case for evoluído.

## Recomendações

1. Tratar as prioridades altas como checklist obrigatório de deploy.
2. Consolidar documentação em uma pequena hierarquia: README como porta de
   entrada, `CHANGELOG.md` como histórico, `decisions.md` como decisões e uma
   especificação V2 canônica por domínio.
3. Manter a arquitetura orientada a dados atual; ela é um dos principais
   diferenciais de manutenção do projeto.
4. Adicionar automação de qualidade antes de ampliar o número de colaboradores
   ou projetos.
5. Priorizar imagens reais do próprio portfólio e otimização da imagem social
   depois de resolver os itens de produção e documentação.

## Nota Final

| Categoria | Nota |
| --- | ---: |
| Organização | 8,5 / 10 |
| Documentação | 5,5 / 10 |
| Clareza | 7,5 / 10 |
| Manutenção | 8,0 / 10 |
| Segurança | 7,5 / 10 |
| Escalabilidade | 8,5 / 10 |
| Developer Experience | 7,0 / 10 |
| Apresentação no GitHub | 7,5 / 10 |

**Nota geral: 7,6 / 10.** A base técnica é forte, limpa e profissional. Com a
consolidação da documentação, CI/testes e o checklist de segurança/SEO antes do
deploy, o repositório tem condições de alcançar uma apresentação excelente para
recrutadores e colaboradores.
