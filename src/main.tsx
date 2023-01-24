import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { AppDataProvider } from './context/AppDataContext';
import AppContextProvider from './context/AppContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <AppDataProvider>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </AppDataProvider>,
);
