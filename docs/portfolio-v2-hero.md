# Portfolio V2 — Hero

**Status:** especificação atual do Hero.
**Atualizada em:** 2026-08-28.

## Objetivo

O Hero é a primeira impressão do portfólio. Ele deve comunicar com clareza quem
é Brayan Favarin, seu cargo, como desenvolve software, suas principais ações e
disponibilidade profissional.

A composição deve transmitir organização, confiança e maturidade técnica sem
efeitos excessivos. A clareza da mensagem é mais importante que a quantidade de
elementos visuais.

## Hierarquia de conteúdo

A leitura ocorre nesta ordem:

1. Brayan Favarin;
2. Desenvolvedor Full Stack;
3. proposta profissional;
4. mensagem dinâmica;
5. ações principais;
6. disponibilidade;
7. painel técnico ou foto opcional.

O nome é o elemento textual de maior destaque e nunca participa da animação. O
cargo permanece fixo.

## Proposta profissional

A proposta atual comunica a construção de aplicações completas, organizadas e
preparadas para produção. Ela deve permanecer curta, profissional e alinhada ao
trabalho que une arquitetura, backend, frontend e qualidade.

## Mensagem dinâmica

A animação ocorre somente nesta área e comunica o processo de desenvolvimento.
As frases são exibidas continuamente nesta ordem:

1. Planejando soluções.
2. Projetando arquitetura.
3. Desenvolvendo aplicações.
4. Preparando para produção.

### Comportamento

Cada frase é digitada caractere a caractere, permanece legível por cerca de dois
segundos e é apagada antes da próxima. A implementação atual usa:

- digitação em aproximadamente 58 ms por caractere;
- pausa de 2 s;
- remoção em aproximadamente 36 ms por caractere;
- cursor vertical com piscar discreto.

O cursor acompanha a mensagem, continua visível durante a pausa e não adiciona
movimento a outras áreas do Hero. Não usar bounce, zoom, rotação, partículas,
efeitos 3D ou animações de layout contínuas.

Com preferência por redução de movimento, ou sem JavaScript, a mensagem
Planejando soluções. permanece estática e compreensível.

## Ações e disponibilidade

As ações principais são:

- Ver projetos;
- Baixar currículo, somente quando o currículo estiver habilitado na
  configuração.

A disponibilidade para oportunidades permanece visível, mas secundária à
hierarquia de nome, cargo e proposta. Todos os controles devem ter foco visível
e funcionar por teclado.

## Foto opcional e painel técnico

A foto é controlada por configuração centralizada:

- quando desabilitada, o Hero renderiza o painel técnico e não reserva espaço
  vazio;
- quando habilitada, a foto é carregada com Next/Image, com alt configurado e
  sem superar o conteúdo textual;
- o painel técnico representa planejamento, arquitetura, desenvolvimento e
  qualidade, preservando a identidade dark editorial.

Não criar foto fictícia. A futura imagem deve ser incluída em
public/images/profile/ e habilitada somente quando estiver pronta.

## Responsividade

- **Desktop:** conteúdo textual e painel/foto formam duas colunas equilibradas.
- **Tablet:** a composição reduz proporcionalmente, sem comprimir ações.
- **Mobile:** conteúdo textual vem primeiro; ações podem quebrar em linhas e o
  painel/foto fica abaixo, sem espaço vazio.

Nenhum breakpoint deve introduzir scroll horizontal, texto cortado ou área
reservada para uma foto desabilitada.

## Acessibilidade e performance

- A mensagem dinâmica não contém informação exclusiva da animação.
- Preferência por redução de movimento é respeitada.
- O conteúdo essencial é legível sem JavaScript.
- Foto futura utiliza alt descritivo e Next/Image.
- A animação fica isolada em um componente cliente pequeno, evitando hidratação
  desnecessária do restante do Hero.

## Critérios de manutenção

Ao alterar o Hero, confirme que:

- nome e cargo continuam fixos;
- a mensagem dinâmica mantém ordem, ritmo e fallback estático;
- currículo e links continuam funcionando;
- foto desabilitada não reserva espaço;
- foco, contraste, teclado e redução de movimento continuam preservados;
- lint, checagem de tipos e build permanecem aprovados.
