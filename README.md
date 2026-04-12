# Desafio Front-End — SETHAS
<br>
<p align="center">
  <img src="./corp_readme.svg" alt="CORP" height="80">
  <span style="display:inline-block;width:1px;height:70px;background:#cfcfcf;margin:0 18px;"></span>
  <img src="./corp-news.png" alt="CORP NEWS" height="80">
</p>
<br>
A empresa fictícia terceirizada da SETHAS, a CORP., está prestes a lançar o **CORP NEWS**, um novo módulo de comunicação interna exclusivo para os colaboradores. Eles estão precisando dos seus serviços de Front-End para dar vida a essa nova funcionalidade no sistema.

> **Guia de interface:** há um **Figma disponibilizado** para se guiar na estrutura e estilização das telas:
> https://www.figma.com/design/VbGFkfWVYSrdC3DFoCGnSC/Untitled?node-id=0-1&t=Lh7oyrcLQ90HnQeL-1

---

## 🔗 URL da API

**Base URL:** `http://127.0.0.1:8000/corpnews_api/noticias/`

Esta é a URL base para fazer todas as requisições relacionadas às publicações do mural.

---

## Stack que será usada

- **Framework**: React
- **Estilização**: CSS Puro ou Tailwind CSS v4
- **API**: Django (fornecida)
- **Ferramentas**: Axios (services)

---

## Histórias de Usuário

---

### HU01 - Feed de Notícias

💬 Como usuário do sistema, quero visualizar um feed com as últimas notícias postadas no CORP NEWS para me manter informado sobre o que acontece na secretaria. 

**Critérios de Aceite:**
- A página principal deve exibir uma **renderização condicional na saudação**: exibir "Bom dia", "Boa tarde" ou "Boa noite" de acordo com o horário do sistema **(conforme detalhado no Figma)**.
- A página deve exibir as notícias em formato de **Cards** (não em tabela), com **dois tipos de cards**:
  - **Card maior**
  - **Card menor**
- Ambos os cards devem exibir:
  - Título da notícia
  - Autor da postagem
  - **Foto do autor da postagem**
  - Data da publicação
  - Categoria *(ex: Avisos, Eventos, TI, RH)*
- O **Card maior** também deve exibir:
  - Resumo do conteúdo
- Consumir a API via Axios. **(Precisará criar um arquivo de service)**
- Exibir mensagens de erro em caso de falha e um estado de carregamento *(loading)* durante a busca.

---

### HU02 - Publicar Nova Notícia

💬 Como usuário do sistema, quero um formulário para publicar uma nova notícia no mural, para que meus colegas possam visualizá-la.

**Critérios de Aceite:**
- A interface deve ter um botão para cadastrar uma "Nova Notícia" (pode abrir um modal ou redirecionar de página).
- O formulário deve conter os seguintes campos:
  - Título *(obrigatório)*
  - Resumo *(obrigatório)*
  - Conteúdo da Notícia *(obrigatório)*
  - Imagem da capa *(obrigatório)*
  - Autor *(obrigatório)*
  - Foto do autor *(obrigatório)*
  - Categoria *(Select - obrigatório)*
- O sistema deve validar se todos os campos obrigatórios estão preenchidos antes de permitir o envio.  
- Realizar um `POST` para a API via Axios para salvar a postagem.  
- Após o sucesso, limpar o formulário e atualizar o feed de notícias automaticamente.

---

### HU03 - Detalhamento da Notícia

💬 Como usuário do sistema, quero acessar uma página de detalhe para visualizar uma notícia específica por completo.

**Critérios de Aceite:**
- Ao clicar em um card do feed, o usuário deve ser direcionado para a página de detalhe da notícia selecionada.
- A página de detalhe deve buscar a notícia pelo seu identificador (ex.: parâmetro de rota) e consumir a API via Axios.
- Exibir estado de carregamento *(loading)* durante a busca e mensagens de erro em caso de falha.
- A página deve exibir pelo menos:
  - Título
  - Resumo
  - Conteúdo completo
  - Imagem da capa
  - Autor
  - Foto do autor
  - Data da publicação
  - Categoria

---

## Extras
- Utilizar alguma biblioteca de validação para o formulário (ex: React Hook Form + Zod).
- Utilizar Tailwind CSS para a estilização da aplicação conforme o Figma.