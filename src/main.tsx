import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AppDataProvider } from './context/AppDataContext';
import { AppContextProvider } from './context/AppContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  <AppDataProvider>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </AppDataProvider>,
  // </React.StrictMode>,
);
