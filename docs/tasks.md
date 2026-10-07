# Estado do projeto

**Atualizado em:** 2026-10-07.

## Concluído

- [x] Fundação com Next.js, TypeScript, Tailwind CSS, App Router e fontes Geist.
- [x] Homepage com Hero, Sobre, Projetos, Experiência, Tecnologias, Contato,
  Navbar e Footer.
- [x] Hero V2 com proposta profissional, mensagem dinâmica acessível, currículo
  e estrutura para foto opcional.
- [x] Projetos V2 com cards padronizados, estudos de caso dinâmicos e galeria.
- [x] Professional Management System atualizado como case full stack com
  capturas reais.
- [x] Estudos de caso do Professional Management System, Finora e Portfólio
  Pessoal.
- [x] Finora publicado como case full stack de gestão financeira, com galeria de
  capturas reais, arquitetura, stack, decisões e conteúdo em português e inglês.
- [x] Experiência, Tecnologias, Sobre e Contato revisados com foco profissional.
- [x] Formulário de contato com validação Zod, Resend, honeypot, Cloudflare
  Turnstile validado no servidor e canais alternativos.
- [x] Currículos integrados em `/documents/brayan-favarin-cv.pdf` e
  `/documents/brayan-favarin-cv-en.pdf`.
- [x] Metadata global e por projeto, sitemap, robots, ícone e imagem Open Graph.
- [x] Auditoria e consolidação de documentação, changelog e referências
  internas.
- [x] Workflow de qualidade para lint, tipos e build.

## Próximos passos antes do deploy

- [ ] Definir a URL HTTPS definitiva em NEXT_PUBLIC_SITE_URL.
- [ ] Configurar RESEND_API_KEY, CONTACT_TO_EMAIL e CONTACT_FROM_EMAIL na
  plataforma de hospedagem.
- [ ] Configurar NEXT_PUBLIC_TURNSTILE_SITE_KEY e TURNSTILE_SECRET_KEY na
  plataforma de hospedagem e autorizar o hostname de produção no Turnstile.
- [ ] Verificar remetente ou domínio na Resend.
- [ ] Adicionar rate limiting para POST /api/contact na borda ou na plataforma.
- [ ] Executar a validação final local e conferir metadata, sitemap e links
  depois do deploy.

## Melhorias futuras

- [ ] Criar testes automatizados para o schema e a Route Handler de contato.
- [ ] Adicionar conteúdo completo do ListaSmart antes de tornar sua rota pública.
- [ ] Substituir a arte Open Graph do case Portfólio Pessoal por capturas reais.
- [ ] Otimizar a imagem Open Graph quando houver uma nova versão.
- [ ] Avaliar analytics somente após definir solução e consentimento.
- [ ] Adicionar domínio, novos idiomas além do inglês e novos projetos quando aprovados.
