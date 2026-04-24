# CORP NEWS — Frontend

Feito por Jonas Silva Nascimento para a vaga de estagiário Front-End

## Estrutura do Projeto

```
src/
├── components/
│   ├── layout/         # Header, Footer, Layout
│   └── ui/             # CategoriaBadge, AutorAvatar, NewsCards, ModalConfirmar
├── hooks/
│   └── useNoticias.js  # Hook para listagem do feed
├── pages/
│   ├── FeedPage.jsx         # HU01 — Feed de notícias
│   ├── NewsDetailPage.jsx   # HU03 — Detalhe da notícia
│   └── RegisterNewsPage.jsx # HU02 — Cadastrar notícia
├── services/
│   ├── api.js               # Instância Axios configurada
│   └── noticiaService.js    # GET, POST, DELETE para a API
└── utils/
    └── helpers.js           # Saudação, formatação de data, cores de categoria
```

## Endpoints da API

| Método | Endpoint | Ação |
|--------|----------|------|
| GET | `/corpnews_api/noticias/` | Lista todas as notícias |
| POST | `/corpnews_api/noticias/` | Cria nova notícia (`multipart/form-data`) |
| GET | `/corpnews_api/noticias/:id/` | Detalhe de uma notícia |
| DELETE | `/corpnews_api/noticias/:id/` | Remove uma notícia |

## Como rodar

### 1. Suba a API Django

```bash
cd api
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

A API ficará disponível em `http://127.0.0.1:8000`

### 2. Instale as dependências do frontend

```bash
cd corp-news
npm install
```

### 3. Rode o projeto

```bash
npm run dev
```

Acesse em `http://localhost:5173`
