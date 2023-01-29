import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import App from './components/App';
import { AppDataProvider } from './context/appDataContext/AppDataContext';
import AppStylesContextProvider from './context/appStylesContext/AppStylesContext';
import AppQueryContextProvider from './context/appQueryContext/AppQueryContextProvider';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <AppDataProvider>
    <QueryClientProvider client={new QueryClient()}>
      <AppQueryContextProvider>
        <AppStylesContextProvider>
          <App />
        </AppStylesContextProvider>
      </AppQueryContextProvider>
    </QueryClientProvider>
  </AppDataProvider>,
);
