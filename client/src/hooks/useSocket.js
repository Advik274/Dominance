import { useEffect, useRef } from 'react';
import { io } from 'socket.io-client';

let socketInstance = null;

export function getSocket() {
  if (!socketInstance) {
    // In production (Vercel), use the VITE_SERVER_URL env variable
    // In development, connect to localhost:4000
    const serverUrl = import.meta.env.VITE_SERVER_URL || 
      (window.location.hostname === 'localhost' ? 'http://localhost:4000' : window.location.origin);
    
    socketInstance = io(serverUrl, {
      transports: ['websocket', 'polling'],
      reconnectionAttempts: 10,
      reconnectionDelay: 1000,
    });

    socketInstance.on('connect', () => console.log('🔌 Connected to server'));
    socketInstance.on('disconnect', () => console.log('⚠️ Disconnected'));
    socketInstance.on('reconnect', (n) => console.log(`🔄 Reconnected after ${n} attempts`));
  }
  return socketInstance;
}

export function useSocket(handlers) {
  const handlersRef = useRef(handlers);
  handlersRef.current = handlers;

  useEffect(() => {
    const socket = getSocket();
    const entries = Object.entries(handlersRef.current);
    entries.forEach(([event, handler]) => {
      socket.on(event, (...args) => handlersRef.current[event]?.(...args));
    });
    return () => { entries.forEach(([event]) => socket.off(event)); };
  }, []);
}
