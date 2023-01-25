import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { AppDataProvider } from './context/appDataContext/AppDataContext';
import AppStylesContextProvider from './context/appStylesContext/AppStylesContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <AppDataProvider>
    <AppStylesContextProvider>
      <App />
    </AppStylesContextProvider>
  </AppDataProvider>,
);
