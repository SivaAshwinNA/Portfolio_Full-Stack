# Full Stack Personal Portfolio — Thiranex Internship Task

A full-stack personal portfolio built with **React.js + Node.js/Express + PostgreSQL**.

## Project structure

```text
thiranex-fullstack-portfolio/
├── frontend/
│   ├── src/
│   ├── index.html
│   └── package.json
├── backend/
│   ├── src/
│   ├── db/schema.sql
│   └── package.json
└── README.md
```

## 1. Run PostgreSQL

Create a database called `portfolio_db`.

Then run:

```sql
\c portfolio_db
\i backend/db/schema.sql
```

Or execute `backend/db/schema.sql` using pgAdmin.

## 2. Start backend

```bash
cd backend
npm install
copy .env.example .env
npm start
```

Set `DATABASE_URL` in `.env`.

## 3. Start frontend

Open another terminal:

```bash
cd frontend
npm install
copy .env.example .env
npm run dev
```

Open the Vite URL shown in the terminal.

## API

- `GET /api/health`
- `GET /api/projects`
- `POST /api/contact`

## Deployment

Recommended deployment for the internship task:

- Frontend: Vercel
- Backend: Render
- Database: Render PostgreSQL or another PostgreSQL provider

Before deployment, set:

### Frontend
`VITE_API_URL=https://YOUR-BACKEND-URL/api`

### Backend
`DATABASE_URL=YOUR_POSTGRES_CONNECTION_STRING`
`FRONTEND_URL=https://YOUR-FRONTEND-URL`

## Important before submission

Replace placeholder GitHub/Live URLs in the database with your real project URLs, add your actual LinkedIn/GitHub profile links, test the contact form, and include the deployed URL in the Thiranex submission.
