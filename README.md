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

The application consists of a React frontend, a persistent Express API, MongoDB Atlas, and Socket.IO for live market updates. The frontend and backend are deployed separately so the backend can maintain WebSocket connections. MongoDB Atlas is the application's only database.

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

For local development, open two terminals in the project root. The backend needs a configured `server/.env` file with your MongoDB connection string and JWT secret.

**Terminal 1 - backend** :

```powershell
cd server
npm run dev
```

If the terminal prompt already ends in `\server>`, run `npm run dev` directly without entering `cd server` again.

**Terminal 2 - frontend** :

```powershell
npm ci
npm start
```

Open `http://localhost:3000` in your browser. Market data requires internet access to CoinGecko. Use **Try Demo Account** or register an account to get started.

---

## Project Structure

```text
Cryptocurrency-Trading-Terminal/
│
├── public/
├── server/
│   ├── package.json
│   └── server.js
├── src/
│   ├── api/
│   ├── components/
│   ├── context/
│   └── pages/
├── package.json
├── README.md
└── ...
```

## Production Deployment

Deploy the React frontend to Vercel and deploy the persistent Express backend to Render. MongoDB Atlas stores all users, portfolios, watchlists, and transactions. The backend deployment must support long-running Node.js processes and WebSocket connections for Socket.IO.

### Frontend on Vercel

Import the repository into Vercel, keep the project root as the root directory, and set `REACT_APP_API_URL` to the backend URL ending in `/api`, for example `https://your-service.onrender.com/api`. Set `REACT_APP_SOCKET_URL` to the backend origin, for example `https://your-service.onrender.com`. The React build uses `npm run build` and outputs `build/`.

### Backend on Render

Create a Web Service from this repository using `server` as the root directory. Use `npm ci` as the build command and `npm start` as the start command. Set these environment variables in the service settings:

* `MONGODB_URI`: MongoDB Atlas connection string
* `JWT_SECRET`: random secret of at least 32 characters
* `CLIENT_URL`: exact Vercel site URL; comma-separated additional trusted URLs are supported

The backend listens on `process.env.PORT` and connects to MongoDB Atlas. Configure Atlas network access to allow the service to connect. `render.yaml` contains the service settings, and `vercel.json` configures client-side React routes.

For local development, copy `.env.example` to `.env` and `server/.env.example` to `server/.env`, then fill in your MongoDB Atlas URI and a private JWT secret. The root `.env.example` configures local API and Socket.IO URLs.

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
