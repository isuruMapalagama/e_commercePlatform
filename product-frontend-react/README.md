# Frontend (React + Vite + Tailwind)

Responsive product listing that consumes the Aahaas Laravel API.

## Requirements
- Node.js >= 18
- npm (or pnpm/yarn)

## Setup

1) If creating fresh:
```bash
npm create vite@latest product-frontend-react -- --template react
```

2) Add/replace the provided files in `product-frontend-react/`.

3) Install dependencies:
```bash
cd product-frontend-react
npm install
```

4) Configure environment:
- If `.env.example` is not present (dotfiles may be hidden), copy `env.example` to `.env`:
```bash
copy env.example .env
```
- Ensure:
```
VITE_API_URL=http://127.0.0.1:8000/api
```

5) Run:
```bash
npm run dev
```
Open `http://127.0.0.1:5173`.

## Features
- Product grid (1–2 columns mobile, 3–4 desktop).
- Header with search bar and cart counter.
- Loading spinner and error state.
- Subtle hover animations on product cards.



