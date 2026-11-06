import React, { createContext, useContext, useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import { useAuth } from './AuthContext';

const SocketContext = createContext(null);
const apiUrl = process.env.REACT_APP_API_URL?.trim();
const socketUrl = process.env.REACT_APP_SOCKET_URL?.trim() || (
  apiUrl ? apiUrl.replace(/\/api\/?$/, '') :
    process.env.NODE_ENV === 'development' ? 'http://localhost:5000' : ''
);

export function SocketProvider({ children }) {
  const [socket, setSocket] = useState(null);
  const [marketData, setMarketData] = useState([]);
  const [lastUpdated, setLastUpdated] = useState(null);
  const { user } = useAuth();

  useEffect(() => {
    if (!user || !socketUrl) {
      setSocket(null);
      setMarketData([]);
      setLastUpdated(null);
      return undefined;
    }

    const connection = io(socketUrl, { transports: ['websocket', 'polling'] });
    setSocket(connection);
    connection.emit('join_room', user._id);
    connection.on('market_update', (data) => {
      if (Array.isArray(data)) {
        setMarketData(data);
        setLastUpdated(new Date());
      }
    });

    return () => {
      connection.off('market_update');
      connection.disconnect();
    };
  }, [user]);

  return (
    <SocketContext.Provider value={{ socket, marketData, lastUpdated }}>
      {children}
    </SocketContext.Provider>
  );
}

export const useSocket = () => useContext(SocketContext);
