# Portfólio — Brayan Favarin

Portfólio profissional desenvolvido do zero para apresentar trajetória,
experiências, tecnologias e projetos. O projeto segue uma identidade dark
editorial tecnológica, arquitetura orientada a dados, acessibilidade e
Server Components por padrão.

## Stack

- Next.js 16 com App Router;
- React 19;
- TypeScript em modo estrito;
- Tailwind CSS 4;
- Motion para reveals pontuais;
- Lucide React para ícones;
- Geist Sans e Geist Mono;
- ESLint com Core Web Vitals.

## Requisitos

- Node.js 20.9 ou superior;
- npm 10 ou superior.

## Instalação e execução local

1. Instale as dependências:

   ```bash
   npm install
   ```

2. Copie as variáveis de ambiente:

   ```bash
   cp .env.example .env.local
   ```

   No Windows PowerShell:

   ```powershell
   Copy-Item .env.example .env.local
   ```

3. Inicie o servidor:

   ```bash
   npm run dev
   ```

4. Acesse [http://localhost:3000](http://localhost:3000).

## Verificações

```bash
npm run lint
npx tsc --noEmit
npm run build
```

Para executar localmente o resultado do build:

```bash
npm run start
```

O projeto ainda não possui uma suíte automatizada de testes. Lint, checagem de
tipos e geração das rotas são validados pelo ESLint e pelo build do Next.js.

## Rotas

- `/` — homepage;
- `/projetos/professional-management-api`;
- `/projetos/portfolio-pessoal`;
- `/sitemap.xml`;
- `/robots.txt`.

O ListaSmart é citado no blueprint, mas seu estudo de caso ainda não foi criado
porque não existem dados aprovados suficientes. Um slug desconhecido utiliza a
página 404 personalizada.

## Estrutura principal

```text
public/
├── documents/          # Currículo e documentos públicos
└── images/
    ├── og/             # Imagem Open Graph global
    └── projects/       # Capturas reais dos projetos
src/
├── app/                # Rotas, layout, metadata, sitemap e robots
├── components/
│   ├── layout/         # Navbar, Footer e Container
│   ├── projects/       # Cards e estudos de caso
│   ├── sections/       # Seções da homepage
│   ├── shared/         # Componentes compartilhados
│   ├── technologies/   # Apresentação das tecnologias
│   └── ui/             # Botões
├── config/             # Configuração central do site
├── data/               # Conteúdo tipado separado da interface
├── lib/                # Utilitários e metadata
└── types/              # Tipos e interfaces TypeScript
docs/
├── project-blueprint.md.txt
├── tasks.md
├── decisions.md
└── changelog.md
```

## Alterando dados pessoais

Edite `src/config/site.ts` para atualizar:

- nome, marca, cargo e localização;
- descrição e palavras-chave de SEO;
- GitHub e LinkedIn;
- e-mail profissional;
- URL pública;
- configuração do currículo;
- imagem Open Graph padrão.

Textos biográficos e da homepage ficam em `src/data/personal.ts`. Os itens
renderizados de contato são derivados por `src/data/social-links.ts`, sem
duplicar URLs nos componentes.

O endereço de contato atual é definido em `contact.email`. Se ele precisar ser
removido temporariamente, mantenha o campo sem valor; o botão de e-mail e o
respectivo link deixarão de ser renderizados.

## Atualizando a URL do site

Defina `NEXT_PUBLIC_SITE_URL` em `.env.local` durante testes de produção e no
ambiente da Vercel durante a publicação:

```env
NEXT_PUBLIC_SITE_URL=<URL_HTTPS_DE_PRODUCAO>
```

Use a origem HTTPS definitiva, sem caminho e preferencialmente sem barra final.
Enquanto a variável não for definida, canonicals, Open Graph, sitemap e robots
usam `http://localhost:3000`, apropriado apenas para desenvolvimento.

## Adicionando projetos

1. Inclua um objeto tipado no array de `src/data/projects.ts`.
2. Use um `slug` único e válido.
3. Preencha o conteúdo do estudo de caso e as tecnologias.
4. Defina `repositoryUrl` e `demoUrl` somente quando os endereços existirem.
5. Se necessário, adicione uma variante visual tipada ao placeholder.

`generateStaticParams`, metadata, cards, navegação entre projetos e sitemap
derivam desse array. Não é necessário duplicar o slug em outro arquivo.

### Substituindo placeholders por imagens reais

1. Adicione a imagem em `public/images/projects`.
2. Atualize `image` em `src/data/projects.ts`.
3. Atualize `imageAlt` com uma descrição objetiva.
4. Prefira WebP ou AVIF.
5. Use dimensões adequadas e uma proporção consistente.

O card e a galeria detectam `image` e passam a utilizar `next/image`
automaticamente; nenhuma mudança de layout é necessária.

## Adicionando o currículo

1. Adicione o arquivo real em
   `public/documents/curriculo-brayan-favarin.pdf`.
2. Confirme o caminho em `siteConfig.resume.path`.
3. Altere `siteConfig.resume.enabled` para `true`.

Enquanto a flag estiver desativada, o botão permanece oculto e nenhum link
quebrado é gerado. Não adicione um PDF fictício.

## Preparação para deploy na Vercel

Antes de publicar:

1. confirme os dados pessoais e links;
2. adicione `NEXT_PUBLIC_SITE_URL` com a URL HTTPS de produção;
3. execute `npm run lint`, `npx tsc --noEmit` e `npm run build`;
4. confira a imagem Open Graph e as rotas do sitemap;
5. conecte o repositório à Vercel;
6. replique a variável de ambiente no projeto da Vercel;
7. realize o deploy somente após a URL definitiva estar decidida.

Não há necessidade atual de `vercel.json`. Nenhum deploy é realizado por estas
instruções.

## Dados pendentes antes da publicação

- URL HTTPS definitiva ou domínio;
- arquivo real do currículo e ativação da flag;
- conteúdo completo do ListaSmart;
- imagens reais dos projetos, opcionais;
- URLs ausentes de repositório ou demonstração, quando existirem.

GitHub, LinkedIn e e-mail profissional já possuem valores configurados, mas
devem ser conferidos pelo responsável antes da publicação.
