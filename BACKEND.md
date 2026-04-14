# Como rodar o backend (Django)

Instruções pensadas para **Windows + PowerShell**.
Para **Linux/macOS**, use os comandos na seção correspondente.

## 1. Criar e ativar um ambiente virtual (recomendado)

Abra o terminal na **raiz do repositório**. Se você já tem a pasta `env/` no projeto, pode reutilizar.

### Windows (PowerShell)
```powershell
python -m venv env
.\env\Scripts\Activate.ps1
```

### Linux/macOS (bash)
```bash
python3 -m venv env
source env/bin/activate
```

## 2. Acessar a pasta da API
O arquivo `manage.py` e as configurações ficam dentro da pasta `api/`. Entre nela para rodar os próximos comandos:

```bash
cd api
```
*(Todos os comandos abaixo devem ser executados dentro desta pasta)*

## 3. Instalar dependências

### Windows (PowerShell) / Linux/macOS (bash)
```bash
python -m pip install -r requirements.txt
```

## 4. Rodar migrations

### Windows (PowerShell) / Linux/macOS (bash)
```bash
python manage.py migrate
```

## 5. Subir o servidor

### Windows (PowerShell) / Linux/macOS (bash)
```bash
python manage.py runserver
```

O backend sobe por padrão em:
- `http://127.0.0.1:8000/`

---

## Endpoints úteis

- API (lista de notícias): `http://127.0.0.1:8000/corpnews_api/noticias/`
- OpenAPI schema (JSON): `http://127.0.0.1:8000/schema/`
- Swagger UI: `http://127.0.0.1:8000/docs/`
- Redoc: `http://127.0.0.1:8000/redoc/`
