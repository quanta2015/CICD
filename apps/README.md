# React + Node CI/CD Demo


- Frontend: React + Vite
- Backend: Node + Express
- Tests: Vitest (+ RTL / Supertest)
- CI: GitHub Actions (Lint → Build → Test)
- CD (optional): GitHub Pages (frontend), Heroku (backend)


## Local
1. `cd apps/backend && npm i && npm start`
2. `cd apps/frontend && npm i && npm run dev`
3. Open http://localhost:5173


## CI/CD
- On PR to `main`: run lint/build/test
- On push to `main`: deploy frontend to Pages; deploy backend to Heroku (if secrets configured)


## Health & Version
- Backend: `/health` → `ok`, `/api/version` → git sha / package version