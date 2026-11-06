# Cryptocurrency Trading Terminal

A web-based cryptocurrency trading terminal designed for real-time market monitoring and risk-free simulated trading. 

The system allows users to monitor cryptocurrency prices, view interactive charts, manage watchlists, track their virtual portfolio, and perform simulated buy/sell transactions using virtual funds. 
      
         
## Features 

* Real-time cryptocurrency market data
* Interactive price charts
* Cryptocurrency/asset search
* Watchlist management
* Virtual wallet and balance
* Portfolio and holdings tracking
* Simulated cryptocurrency buying and selling
* Transaction history
* Profit and Loss (P&L) tracking
* User authentication
* Real-time updates
* Responsive web interface

---

## Project Objective

The objective of the Cryptocurrency Trading Terminal is to provide a realistic but risk-free environment where users can practice and evaluate cryptocurrency trading decisions.

Users can monitor market conditions, manage virtual assets, execute paper trades, and analyze their portfolio performance without using real money.

---

## System Overview

The application consists of a React frontend, an Express API deployed as a Vercel Function, and MongoDB Atlas. Both parts are served by one Vercel project on the same domain. Market prices refresh every 30 seconds using HTTP requests.

```text
                    +---------------------+
                    |        User         |
                    +----------+----------+
                               |
                               v
                    +---------------------+
                    |    Web Frontend     |
                    |                     |
                    | Dashboard           |
                    | Charts              |
                    | Watchlist            |
                    | Portfolio            |
                    | Trading Interface   |
                    +----------+----------+
                               |
                               v
                    +---------------------+
                    |     Backend API     |
                    |                     |
                    | Authentication      |
                    | Trading Logic       |
                    | Portfolio Manager   |
                    | Market Data         |
                    +-------+-----+-------+
                            |     |
                 +----------+     +----------+
                 |                           |
                 v                           v
        +-----------------+        +-----------------+
        |    Database     |        | Market Data API |
        |                 |        |                 |
        | Users           |        | Crypto Prices  |
        | Holdings        |        | Market Data     |
        | Transactions    |        +-----------------+
        | Watchlists      |
        +-----------------+
```

---

## Core Workflow

1. User logs into the application.
2. The system retrieves current cryptocurrency market data.
3. The user searches for an asset or selects one from the watchlist.
4. The application displays price information and interactive charts.
5. The user can perform a simulated Buy or Sell transaction.
6. The transaction is recorded in the database.
7. The user's virtual balance and holdings are updated.
8. Portfolio value and profit/loss are recalculated.
9. Transaction history is maintained for future analysis.

---

## Main Modules

### 1. Authentication

Handles user registration, login and authentication.

### 2. Market Monitoring

Displays current cryptocurrency prices and relevant market information.

### 3. Charts

Provides interactive visualizations of cryptocurrency price movements.

### 4. Watchlist

Allows users to save and monitor selected cryptocurrencies.

### 5. Paper Trading

Allows users to simulate cryptocurrency purchases and sales using virtual funds.

### 6. Portfolio Management

Tracks:

* Virtual balance
* Cryptocurrency holdings
* Transactions
* Portfolio value
* Profit/Loss

### 7. Transaction History

Maintains a record of simulated buying and selling activities.

---

## Technology Stack

### Frontend

* React
* JavaScript
* CSS

### Backend

* Node.js
* Express

### Database

* MongoDB Atlas

### APIs

* CoinGecko market-data API
* Socket.IO for live market price updates

### Development Tools

* Git
* GitHub
* Visual Studio Code

---

## Running the Web Application

Copy `backend/.env.example` to `backend/.env`, then set your MongoDB Atlas URI and JWT secret. From the repository root, install dependencies once with `npm ci`.

**Terminal 1 - backend:**

```powershell
npm run dev --workspace backend
```

**Terminal 2 - frontend:**

```powershell
npm run dev --workspace frontend
```

Open the Vite URL shown in the terminal (usually `http://localhost:5173`). The development frontend calls the API at `http://localhost:5000/api`. Market data requires internet access to CoinGecko. Use **Try Demo Account** or register to get started.

---
## Project Structure

```text
Cryptocurrency-Trading-Terminal/
├── frontend/           React app (src/, public/, package files)
├── backend/            Express API implementation and package files
├── api/                Vercel Function entry point for the Express API
├── README.md
├── vercel.json         Vercel build and routing configuration
├── package.json        Root scripts and Vercel install metadata
├── package-lock.json
└── .gitignore
```

## Production Deployment

Deploy the complete repository as **one Vercel project**. MongoDB Atlas remains the database; Render is not used. The API runs as a Vercel Function. Market data refreshes with 30-second HTTP polling because Vercel Functions are stateless and do not maintain Socket.IO connections.

### Deploy to Vercel

1. Push this repository to GitHub and import it in Vercel using **Add New → Project**.
2. Keep **Root Directory** set to `./` (the repository root), not `frontend` or `backend`.
3. Keep the build command as `npm run build` and output directory as `frontend/build`; the root `vercel.json` configures these values.
4. In **Project Settings → Environment Variables**, add `MONGODB_URI` (your MongoDB Atlas connection string) and `JWT_SECRET` (a private random value of at least 32 characters).
5. In MongoDB Atlas, allow network access from Vercel. For a simple personal setup Atlas permits `0.0.0.0/0`; keep database credentials private and limited.
6. Deploy. Open the Vercel URL and use **Try Demo Account** or register. The shared demo account resets to $100,000 with empty holdings, watchlist, and transaction history each time someone logs in. Check `https://<your-vercel-domain>/api/health` for API health.

Do not set `VITE_API_URL` for production: the frontend uses the same-domain `/api` route. For local development, `frontend/.env.example` shows the optional API URL. Redeploy after changing environment variables.

### Local Development

Copy `backend/.env.example` to `backend/.env`, then set `MONGODB_URI` and `JWT_SECRET`. From the repository root, run `npm ci` once. Start the API with `npm run dev --workspace backend` and the frontend in another terminal with `npm run dev --workspace frontend`. In development, the frontend calls `http://localhost:5000/api`.

---
## Security and Risk Considerations

The project considers several potential risks:

* Market-data API failures or rate limits
* Network and connectivity problems
* Delayed or inaccurate market data
* Real-time synchronization issues
* Database errors
* Authentication and security vulnerabilities
* Limited development time

The system is designed as a paper-trading platform and does not execute real financial transactions.

---

## Disclaimer

This application is an educational cryptocurrency trading simulator.

It uses virtual funds and does not execute real cryptocurrency trades or provide financial advice.

---

## License

This project was developed as an academic software engineering project.


