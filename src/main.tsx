import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import App from './components/App';
import { AppDataProvider } from './context/appDataContext/AppDataContext';
import AppStylesContextProvider from './context/appStylesContext/AppStylesContext';
import AppQueryContextProvider from './context/AppQueryContextProvider';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <AppDataProvider>
    <QueryClientProvider client={queryClient}>
      <AppQueryContextProvider>
        <AppStylesContextProvider>
          <App />
        </AppStylesContextProvider>
      </AppQueryContextProvider>
    </QueryClientProvider>
  </AppDataProvider>,
);
