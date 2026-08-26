# Portfolio v2 — Especificação da Seção de Projetos

## Objetivo

Esta especificação define o comportamento funcional, estrutural e visual da nova seção de Projetos do Portfolio v2.

Seu objetivo é garantir que todos os projetos apresentados mantenham o mesmo padrão de qualidade, organização, experiência do usuário e consistência visual.

Este documento complementa o Blueprint da seção de Projetos e deverá servir como referência durante toda a implementação.
 
---

# Escopo

Esta especificação contempla exclusivamente:

- seção de Projetos da Home;
- cards de projetos;
- páginas de estudo de caso;
- galeria de imagens;
- arquitetura apresentada;
- organização das tecnologias;
- responsividade;
- acessibilidade.

Não faz parte deste escopo:

- Hero;
- Navbar;
- Footer;
- Sobre;
- Experiência;
- Skills;
- Contato;
- SEO global.

---

# Objetivos de UX

A nova experiência deverá permitir que qualquer visitante compreenda rapidamente:

- o que o projeto faz;
- quais problemas resolve;
- quais tecnologias foram utilizadas;
- quais decisões técnicas foram tomadas;
- qual foi minha participação;
- quais competências o projeto demonstra.

A navegação deve ocorrer de forma natural e progressiva.

---

# Estrutura da Home

Cada projeto deverá possuir um card padronizado.

Todos os cards deverão utilizar exatamente a mesma estrutura.

Não deverá existir diferença de tamanho entre projetos.

A escalabilidade deve permitir crescimento futuro sem alterações estruturais.

---

# Estrutura do Card

Cada card deverá conter obrigatoriamente:

Imagem principal

Título

Descrição curta

Stack principal

Botões

- Estudo de Caso
- GitHub
- Deploy (quando existir)

Opcionalmente:

Documentação

---

# Imagens

Todas as imagens deverão utilizar:

Next/Image

Lazy Loading

Alt descritivo

Aspect Ratio consistente

Boa qualidade

Não utilizar placeholders quando existirem imagens reais.

---

# Organização Visual

Todos os cards deverão seguir:

Imagem

↓

Título

↓

Resumo

↓

Stack

↓

Botões

A ordem nunca deverá variar.

---

# Estudo de Caso

Todos os estudos de caso deverão seguir exatamente esta sequência.

## Hero

Nome do projeto

Resumo

Links

Imagem principal

---

## Visão Geral

Descrição do projeto.

Objetivos.

Contexto.

---

## O que este projeto demonstra

Apresentar em formato de lista.

Exemplo:

- Arquitetura Full Stack
- Autenticação JWT
- Docker
- PostgreSQL
- CI/CD
- Testes
- Documentação
- Production Readiness

Esta seção representa as competências demonstradas pelo projeto.

Não listar tecnologias repetidas.

---

## Meu Papel

Descrever claramente minha participação.

Exemplo:

Arquitetura

Frontend

Backend

Banco

Docker

Documentação

Deploy

---

## Funcionalidades

Apresentar apenas funcionalidades relevantes.

Cada funcionalidade deverá possuir descrição curta.

---

## Galeria

A galeria deverá seguir fluxo natural de utilização do sistema.

Exemplo:

Login

↓

Dashboard

↓

Lista

↓

Cadastro

Cada imagem deverá possuir:

Título

Descrição

Objetivo da tela

Não utilizar carrossel automático.

---

## Arquitetura

Apresentar arquitetura de forma visual.

Exemplo:

Frontend

↓

Backend

↓

Banco de Dados

Complementar com:

JWT

Docker

CI/CD

Testes

Deploy

Sempre que possível utilizar diagramas simples.

---

## Stack Técnica

Organizar tecnologias por categoria.

Frontend

Backend

Banco

Infraestrutura

Qualidade

Não apresentar lista única de tecnologias.

---

## Decisões Técnicas

Apresentar decisões importantes tomadas durante o desenvolvimento.

Exemplos:

Arquitetura

Segurança

Organização

Escalabilidade

Documentação

Production Readiness

---

## Aprendizados

Apresentar os principais conhecimentos adquiridos durante o projeto.

---

## Resultado

Apresentar o estado final do projeto.

Exemplo:

Sistema completo.

Frontend.

Backend.

Banco.

Docker.

Documentação.

Deploy.

---

## Links

Sempre apresentar:

GitHub

Deploy

Documentação (quando existir)

---

# Professional Management System

Este projeto representa atualmente o principal case técnico do portfólio.

Nome oficial:

Professional Management System

Resumo:

Sistema completo para gerenciamento organizacional desenvolvido com Next.js, Spring Boot, PostgreSQL, autenticação JWT, Docker e preparação para produção.

Galeria inicial:

1 Login

2 Dashboard

3 Lista de profissionais

4 Cadastro de profissional

As imagens deverão utilizar os arquivos oficiais do projeto.

---

# Portfolio

O próprio portfólio deverá seguir exatamente a mesma estrutura de estudo de caso.

Demonstrar:

Arquitetura

SEO

Responsividade

Acessibilidade

Deploy

Performance

---

# ListaSmart

Quando finalizado deverá seguir exatamente esta especificação.

Nenhum tratamento especial deverá ser criado para projetos específicos.

---

# Responsividade

Desktop

Grid de múltiplas colunas.

Tablet

Adaptação proporcional.

Mobile

Uma coluna.

Todos os estudos de caso deverão permanecer totalmente legíveis.

---

# Acessibilidade

Todos os componentes deverão:

Possuir navegação por teclado.

Possuir foco visível.

Utilizar textos alternativos.

Manter contraste adequado.

Não depender exclusivamente de efeitos visuais.

---

# Performance

Todas as imagens deverão ser otimizadas.

Utilizar:

Next/Image

Lazy Loading

Compressão

Não carregar imagens desnecessárias.

---

# Escalabilidade

Toda estrutura deverá permitir inclusão de novos projetos sem necessidade de alterações arquiteturais.

Adicionar um novo projeto deverá exigir apenas:

Novo objeto de dados.

Novas imagens.

Novo estudo de caso.

Nenhuma alteração estrutural deverá ser necessária.

---

# Critérios de Aceitação

A implementação será considerada concluída quando:

✓ Todos os cards utilizarem o mesmo padrão.

✓ Professional Management System utilizar imagens reais.

✓ Os placeholders forem removidos.

✓ Todos os estudos de caso seguirem a mesma estrutura.

✓ A galeria estiver organizada.

✓ Desktop, tablet e mobile funcionarem corretamente.

✓ Lighthouse permanecer em alto nível.

✓ npm run lint sem erros.

✓ npx tsc --noEmit sem erros.

✓ npm run build aprovado.

---

# Considerações Finais

A seção de Projetos deverá representar o principal elemento técnico do portfólio.

O foco não será demonstrar quantidade de tecnologias utilizadas, mas evidenciar capacidade de projetar, desenvolver, documentar e entregar software profissional.

Todo novo projeto adicionado futuramente deverá seguir integralmente esta especificação.