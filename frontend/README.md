# Frontend (Next.js)

## Run locally

```bash
npm install
cp .env.local.example .env.local
npm run dev
```

## Required env vars

- `NEXT_PUBLIC_API_URL` (URL of FastAPI backend)

Example:

```env
NEXT_PUBLIC_API_URL=http://127.0.0.1:8000
```
