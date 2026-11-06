import axios from 'axios';

const configuredApiUrl = process.env.REACT_APP_API_URL?.trim();
const apiBaseURL = configuredApiUrl || (
  process.env.NODE_ENV === 'development' ? 'http://localhost:5000/api' : ''
);

if (!apiBaseURL) {
  throw new Error('Set REACT_APP_API_URL to the deployed Express API URL before building for production.');
}

const api = axios.create({
  baseURL: apiBaseURL.replace(/\/$/, ''),
  timeout: 20_000,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export const registerUser = (data) => api.post('/auth/register', data);
export const loginUser = (data) => api.post('/auth/login', data);
export const loginDemoUser = () => api.post('/auth/demo');
export const getMe = () => api.get('/auth/me');
export const fetchPrices = () => api.get('/market/prices', { timeout: 15_000 });
export const fetchHistory = (coinId, days) => api.get(`/market/history/${encodeURIComponent(coinId)}`, { params: { days } });
export const searchCoins = (q) => api.get('/market/search', { params: { q } });
export const executeTrade = (data) => api.post('/trade', data, { timeout: 30_000 });
export const fetchPortfolio = () => api.get('/portfolio');
export const fetchWatchlist = () => api.get('/watchlist');
export const addToWatchlist = (data) => api.post('/watchlist', data);
export const removeFromWatchlist = (cryptoId) => api.delete(`/watchlist/${encodeURIComponent(cryptoId)}`);
export const fetchTransactions = () => api.get('/transactions');

export default api;
