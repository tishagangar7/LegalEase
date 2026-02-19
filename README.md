# LegalEase

AI-powered web app that converts complex legal documents into plain, understandable language.

## Tech Stack

- Frontend: `Next.js` + `React` + `Tailwind CSS`
- Backend: `FastAPI`
- AI: `Google Gemini`

## Local Development

### 1) Backend

```bash
cd backend
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
cp .env.example .env
# set GEMINI_API_KEY in .env
uvicorn main:app --reload
```

### 2) Frontend

```bash
cd frontend
npm install
cp .env.local.example .env.local
# set NEXT_PUBLIC_API_URL if needed (defaults to http://127.0.0.1:8000)
npm run dev
```

## Deployment

Recommended setup:
- Frontend on Vercel
- Backend on Render

### Deploy Backend (Render)

This repo includes `render.yaml` for Blueprint deploy.

1. Push this repo to GitHub.
2. In Render, create a new Blueprint service from this repo.
3. Set required env vars in Render:
   - `GEMINI_API_KEY`
   - `FRONTEND_ORIGINS` (comma-separated, e.g. `https://your-app.vercel.app`)
4. Deploy and verify:
   - `GET /health` returns `{"status":"healthy","version":"1.0"}`

### Deploy Frontend (Vercel)

1. Import this repo in Vercel.
2. Set root directory to `frontend`.
3. Add env var:
   - `NEXT_PUBLIC_API_URL=https://<your-render-service>.onrender.com`
4. Deploy.

## Production Notes

- Do not commit real secrets (`.env`, API keys).
- CORS is controlled by backend env var `FRONTEND_ORIGINS`.
- The repo ignores Python cache files (`__pycache__`, `*.pyc`) and Next build output.
