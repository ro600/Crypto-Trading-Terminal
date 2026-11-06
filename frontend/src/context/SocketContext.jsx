import React, { createContext, useContext, useEffect, useState } from 'react';
import { fetchPrices } from '../api/api';
import { useAuth } from './AuthContext';

const SocketContext = createContext(null);
export function SocketProvider({ children }) {
  const [marketData, setMarketData] = useState([]);
  const [lastUpdated, setLastUpdated] = useState(null);
  const { user } = useAuth();

  useEffect(() => {
    if (!user) {
      setMarketData([]);
      setLastUpdated(null);
      return undefined;
    }

    let active = true;
    const updatePrices = async () => {
      try {
        const { data } = await fetchPrices();
        if (active && Array.isArray(data)) {
          setMarketData(data);
          setLastUpdated(new Date());
        }
      } catch {
        // Keep the last successful market snapshot when a poll fails.
      }
    };
    updatePrices();
    const interval = window.setInterval(updatePrices, 30_000);

    return () => {
      active = false;
      window.clearInterval(interval);
    };
  }, [user]);

  return (
    <SocketContext.Provider value={{ marketData, lastUpdated }}>
      {children}
    </SocketContext.Provider>
  );
}

export const useSocket = () => useContext(SocketContext);
