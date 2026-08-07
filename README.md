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
- Resend para o envio server-side do formulário de contato.
- Zod para validação compartilhada do formulário.

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

## Formulário de contato com Resend

O formulário da seção Contato envia os dados para `POST /api/contact`. Nome,
e-mail e mensagem são validados no navegador e novamente no servidor. A chave
da Resend nunca é enviada ao navegador; links de e-mail, GitHub e LinkedIn
continuam disponíveis como canais alternativos.

1. Crie uma API key em [Resend](https://resend.com/api-keys).
2. Copie `.env.example` para `.env.local`.
3. Preencha somente em `.env.local`:

   ```env
   RESEND_API_KEY=
   CONTACT_TO_EMAIL=
   CONTACT_FROM_EMAIL=
   ```

4. Use em `CONTACT_FROM_EMAIL` um remetente pertencente a um domínio verificado
   na Resend. Não use o e-mail do visitante como remetente: ele é usado apenas
   como `replyTo`.
5. Reinicie `npm run dev` depois de alterar variáveis de ambiente.

Sem essas três variáveis, o endpoint falha de forma controlada e o visitante
recebe uma mensagem genérica, sem dados técnicos. O formulário possui um
honeypot simples; não há banco de dados ou CAPTCHA nesta versão.

### Teste local

Com as variáveis configuradas, execute `npm run dev`, preencha os três campos
e envie uma mensagem. Confirme o recebimento em `CONTACT_TO_EMAIL` e responda
ao e-mail para validar o `replyTo`. Para testar falhas, remova temporariamente
uma das variáveis de `.env.local` e reinicie o servidor.

### Variáveis na Vercel

No projeto da Vercel, abra **Settings → Environment Variables** e adicione
`RESEND_API_KEY`, `CONTACT_TO_EMAIL` e `CONTACT_FROM_EMAIL` para os ambientes
necessários. Use o mesmo remetente de domínio verificado na Resend e faça um
novo deploy depois de salvar as variáveis. Não use o prefixo `NEXT_PUBLIC_` em
nenhuma dessas chaves.

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

## Atualizando o currículo

1. Mantenha ou substitua o arquivo em
   `public/documents/brayan-favarin-cv.pdf`.
2. Confirme o caminho `/documents/brayan-favarin-cv.pdf` em
   `siteConfig.resume.path`.
3. Mantenha `siteConfig.resume.enabled` como `true` somente enquanto o PDF
   existir.

O botão "Baixar currículo" aparece no Hero somente quando a flag está
ativada. Caso o arquivo seja removido, desative a flag para evitar links
quebrados.

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
- imagens reais dos projetos, opcionais;
- URLs ausentes de repositório ou demonstração, quando existirem.

GitHub, LinkedIn e e-mail profissional já possuem valores configurados, mas
devem ser conferidos pelo responsável antes da publicação.
