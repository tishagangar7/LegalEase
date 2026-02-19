# Backend (FastAPI)

## Run locally

```bash
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
cp .env.example .env
uvicorn main:app --reload
```

## Required env vars

- `GEMINI_API_KEY`
- `FRONTEND_ORIGINS` (comma-separated allowed origins)

Example:

```env
FRONTEND_ORIGINS=http://localhost:3000,https://your-app.vercel.app
```
