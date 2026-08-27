# Portfolio v2 — Hero

## Objetivo

O Hero representa a primeira impressão do portfólio.

Seu objetivo é comunicar imediatamente quem sou, qual é minha área de atuação e como desenvolvo software.

O Hero deve transmitir profissionalismo, organização e confiança sem utilizar excesso de elementos visuais.

A experiência deve ser limpa, moderna e memorável.

---

# Filosofia

O Hero não deve impressionar por efeitos.

Ele deve impressionar pela clareza.

O visitante deve compreender em poucos segundos:

- quem sou;
- o que faço;
- como trabalho;
- quais ações pode realizar.

---

# Estrutura

O Hero deverá conter:

Nome

↓

Cargo

↓

Mensagem dinâmica

↓

Breve descrição

↓

Botões principais

↓

Elemento visual (foto quando existir)

---

# Nome

O nome deverá possuir maior destaque visual do Hero.

Texto oficial:

Brayan Favarin

O nome nunca deverá fazer parte da animação.

Ele deverá permanecer fixo.

---

# Cargo

Texto principal:

Desenvolvedor Full Stack

Também permanecerá fixo.

Não deverá alternar.

---

# Mensagem Dinâmica

A animação deverá ocorrer apenas nesta área.

O objetivo não é demonstrar tecnologias.

O objetivo é comunicar minha forma de desenvolver software.

Mensagens sugeridas:

Planejando arquitetura.

Projetando soluções.

Desenvolvendo aplicações.

Preparando para produção.

Entregando software de qualidade.

As transições deverão utilizar fade suave.

Não utilizar efeito de digitação contínuo.

Não utilizar animações exageradas.

A troca deverá ocorrer naturalmente.

---

# Descrição

A descrição deverá complementar o cargo.

Exemplo de direção:

"Desenvolvo aplicações completas, unindo arquitetura, backend, frontend e boas práticas para entregar software preparado para produção."

O texto deverá permanecer curto.

---

# Botões

Manter dois botões principais.

Ver Projetos

Baixar Currículo

Os botões deverão permanecer em destaque.

---

# Foto

A foto deverá ser opcional.

Enquanto não existir foto profissional:

O Hero não deverá reservar espaço vazio.

O layout deverá expandir automaticamente.

Quando existir:

A foto deverá aparecer integrada ao Hero.

Nunca deverá competir com o conteúdo textual.

---

# Configuração

A foto deverá ser controlada por configuração.

Exemplo:

enabled: false

Quando uma foto profissional estiver disponível:

enabled: true

Nenhuma alteração estrutural deverá ser necessária.

---

# Elemento Visual

Na ausência da foto, manter o elemento visual atual ou outro componente compatível com a identidade do portfólio.

Quando a foto estiver habilitada, o componente visual deverá adaptar-se automaticamente.

---

# Responsividade

Desktop

Nome e descrição à esquerda.

Foto ou elemento visual à direita.

Tablet

Redução proporcional.

Mobile

Conteúdo empilhado.

A foto deverá mover-se naturalmente para baixo quando habilitada.

Nenhum espaço vazio poderá permanecer.

---

# Acessibilidade

Toda animação deverá respeitar usuários com preferência por redução de movimento.

Os textos deverão permanecer totalmente legíveis.

Nenhuma informação poderá depender exclusivamente da animação.

---

# Performance

A animação deverá possuir baixo impacto.

A foto deverá utilizar Next/Image.

Lazy Loading quando apropriado.

Boa otimização.

---

# Critérios de Aceitação

O Hero será considerado concluído quando:

✓ O nome possuir maior destaque.

✓ O cargo permanecer fixo.

✓ A animação comunicar o processo de desenvolvimento.

✓ A descrição estiver mais alinhada ao perfil profissional.

✓ Os botões permanecerem claros.

✓ O Hero funcionar perfeitamente com ou sem foto.

✓ Desktop, tablet e mobile permanecerem consistentes.

✓ Lighthouse não sofrer regressão.

✓ npm run lint aprovado.

✓ npx tsc --noEmit aprovado.

✓ npm run build aprovado.

---

# Considerações Finais

O Hero deverá representar minha identidade profissional.

Seu foco não será demonstrar tecnologias.

Seu foco será comunicar organização, arquitetura, qualidade de software e capacidade de entregar aplicações completas.