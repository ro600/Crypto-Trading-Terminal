# Cryptocurrency Trading Terminal

A paper-trading web app for tracking cryptocurrency prices and practicing trades with virtual funds.

## Features

- Cryptocurrency prices and charts, refreshed every 30 seconds
- Asset search and watchlists
- Simulated buy and sell orders
- Virtual balance, portfolio, and transaction history
- User accounts and a shared demo account
- Responsive React interface

## Technology

- Frontend: React, Vite, JavaScript, CSS
- Backend: Node.js, Express
- Database: MongoDB Atlas
- Market data: CoinGecko API
- Deployment: Vercel

## Project Structure

```text
frontend/   React application
backend/    Express API and database models
api/        Vercel Function entry point
vercel.json Vercel build and routing settings
```

## Run Locally

1. Copy `backend/.env.example` to `backend/.env` and set `MONGODB_URI` and `JWT_SECRET`.
2. From the repository root, install dependencies:

   ```powershell
   npm ci
   ```

3. Start the backend in one terminal:

   ```powershell
   npm run dev --workspace backend
   ```

4. Start the frontend in another terminal:

   ```powershell
   npm run dev --workspace frontend
   ```

Open the Vite URL shown in the frontend terminal (usually `http://localhost:5173`). The API runs at `http://localhost:5000/api`.

## Deployment

The app is deployed on Vercel and uses MongoDB Atlas. Use **Try Demo Account** to explore the paper-trading features; each demo session starts with $100,000 in virtual funds.
