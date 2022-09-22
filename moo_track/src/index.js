import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import React from 'react';
import ContextProvider from './context/context';
const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>
);
