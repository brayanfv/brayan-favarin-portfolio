# Portfolio V2 — Especificação de Projetos

**Status:** fonte canônica para a seção de Projetos e estudos de caso.
**Atualizada em:** 2026-08-28.
**Origem:** consolida o antigo Blueprint e a Specification de Projetos V2.

## Objetivo

A seção de Projetos é o principal elemento técnico do portfólio. Ela apresenta
aplicações como estudos de caso, não como uma galeria de imagens ou uma lista de
tecnologias. Cada projeto deve deixar claro o problema, a solução, a
arquitetura, as decisões técnicas, a participação de Brayan e o resultado.

O objetivo é comunicar capacidade de projetar, desenvolver, documentar, testar
e evoluir software com qualidade.

## Princípios

1. **Conteúdo antes da tecnologia.** A tecnologia sustenta a solução; não é a
   narrativa principal.
2. **Estrutura consistente.** Cards e estudos de caso seguem o mesmo padrão,
   independentemente do número de projetos.
3. **Evidência visual com contexto.** Capturas reais têm prioridade. Toda imagem
   deve ter texto alternativo, título, descrição curta e objetivo.
4. **Escalabilidade orientada a dados.** Adicionar um projeto deve exigir apenas
   novo objeto de dados, imagens e conteúdo aprovado — nunca uma mudança na
   estrutura da interface.
5. **Leitura progressiva.** Um recrutador deve compreender o essencial na Home
   e encontrar profundidade no estudo de caso.

## Escopo

Esta especificação cobre:

- seção de Projetos da homepage;
- cards de projeto;
- rota dinâmica de estudos de caso;
- galeria;
- arquitetura visual;
- stack técnica organizada;
- responsividade, acessibilidade e performance.

Hero global, Navbar, Footer, Sobre, Experiência, Tecnologias, Contato e SEO
global possuem documentação própria.

## Home

Todos os cards usam a mesma hierarquia e o mesmo tamanho visual. A relevância
vem da qualidade do conteúdo, não de tratamento especial de layout.

Ordem obrigatória do card:

1. imagem principal;
2. título;
3. descrição curta;
4. stack principal;
5. ações.

Ações possíveis:

- **Estudo de caso** — rota interna válida;
- **GitHub** — somente quando houver URL de repositório;
- **Deploy** — somente quando houver URL pública válida;
- **Documentação** — opcional, somente quando existir.

Não criar links vazios ou de placeholder. Imagens usam Next/Image, carregamento
preguiçoso quando aplicável, alt descritivo e proporção consistente.

## Estudos de caso

Todo projeto publicado deve seguir esta ordem:

1. **Hero** — nome, resumo, links disponíveis e imagem principal.
2. **Visão geral** — descrição, objetivo e contexto; comunica também problema e
   solução sem fragmentar a leitura.
3. **O que este projeto demonstra** — competências técnicas e de engenharia sem
   repetir a stack.
4. **Meu papel** — responsabilidades de arquitetura, interface, backend, dados,
   infraestrutura ou qualidade quando aplicáveis.
5. **Funcionalidades** — itens relevantes, cada um com descrição curta.
6. **Galeria** — fluxo lógico de uso, sem carrossel automático.
7. **Arquitetura** — camadas e elementos de suporte, em composição simples.
8. **Stack técnica** — grupos Frontend, Backend, Banco, Infraestrutura e
   Qualidade.
9. **Decisões técnicas** — escolhas de arquitetura, segurança, organização,
   escalabilidade ou documentação.
10. **Aprendizados** — conhecimentos adquiridos no desenvolvimento.
11. **Resultado** — estado final e pontos de destaque.
12. **Links** — código, deploy e documentação quando disponíveis.
13. **Navegação e contato** — projetos adjacentes, retorno à seção de projetos e
    chamada de contato.

## Galeria e imagens

A galeria deve acompanhar uma sequência natural do produto e cada item deve
conter:

- título;
- descrição curta;
- objetivo da tela;
- texto alternativo descritivo.

Evitar imagens meramente decorativas, carrossel automático, screenshots sem
contexto e placeholders quando uma captura real existir.

Novas imagens devem ser incluídas em
**public/images/projects/<slug>/**. Atualize **image**, **imageAlt** e, se
aplicável, **gallery** no objeto correspondente dos dicionários em
**src/i18n/**.

## Professional Management System

É o principal case técnico atual.

- **Nome oficial:** Professional Management System.
- **Resumo:** sistema full stack de gestão de profissionais e contatos, com
  interface em Next.js, backend Spring Boot, PostgreSQL, autenticação JWT e
  ambiente Docker preparado para produção.
- **Capturas oficiais:** login.png, dashboard.png, professionals.png e
  create-professional.png.

A ordem da galeria é Login, Dashboard, Lista de profissionais e Cadastro de
profissional. As legendas devem explicar tanto o fluxo visível quanto a
competência técnica demonstrada — autenticação, indicadores organizacionais,
pesquisa/filtros/ordenação/paginação e validação no fluxo de criação,
respectivamente.

A arquitetura apresenta Next.js → Spring Boot → PostgreSQL e pode complementar
o fluxo com JWT, Docker, CI/CD, testes e preparação para deploy, desde que esses
itens sejam descritos com precisão e não sugiram um deploy público inexistente.

## Portfólio Pessoal

O próprio portfólio também possui estudo de caso e segue a mesma estrutura. Ele
deve comunicar arquitetura orientada a dados, SEO, acessibilidade,
responsividade, performance e manutenção.

Enquanto capturas reais próprias não estiverem disponíveis, a arte Open Graph
pode representar o projeto. Quando houver telas aprovadas, priorize imagens de
Hero, homepage, Projetos e Contato.

## ListaSmart

O ListaSmart permanece fora das rotas públicas enquanto não houver título,
objetivo, stack, links e conteúdo de case aprovados. Quando estiver pronto,
deverá obedecer integralmente a esta especificação sem criar variantes
estruturais.

## Responsividade

- **Desktop:** grade de múltiplas colunas na Home e leitura confortável nos
  estudos de caso.
- **Tablet:** adaptação proporcional, sem comprimir cards, galeria ou conteúdo.
- **Mobile:** uma coluna, botões acessíveis, imagens preservadas e nenhuma
  informação perdida.

Não permitir scroll horizontal, texto cortado, imagem deformada ou ação
essencial disponível apenas no hover.

## Acessibilidade

- headings e landmarks semânticos;
- apenas um h1 por página;
- navegação completa por teclado e foco visível;
- contraste adequado;
- alt significativo nas imagens;
- links com nomes compreensíveis;
- conteúdo independente de cor ou animação;
- respeito a prefers-reduced-motion.

## Performance

- Usar Next/Image para imagens locais.
- Informar sizes adequados às composições responsivas.
- Evitar carregar mídia sem necessidade.
- Preferir compressão e formatos modernos em novos assets.
- Não adicionar dependências apenas para criar efeitos visuais.

## Critérios de manutenção

Antes de publicar um novo projeto:

1. validar que o slug é único;
2. preencher o objeto tipado e não duplicar conteúdo nos componentes;
3. incluir imagens e alt adequados, quando existirem;
4. verificar links internos e externos;
5. executar lint, checagem de tipos e build;
6. revisar em desktop, tablet e mobile;
7. confirmar que cards e case mantêm a mesma estrutura dos demais.

A evolução da seção deve acontecer pela qualidade do conteúdo e das evidências
técnicas, preservando a identidade visual do portfólio.
