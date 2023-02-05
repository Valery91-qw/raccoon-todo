import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import App from './components/App';
import AppStylesContextProvider from './context/appStylesContext/AppStylesContext';
import AppQueryContextProvider from './context/appQueryContext/AppQueryContextProvider';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <QueryClientProvider client={new QueryClient()}>
    <AppQueryContextProvider>
      <AppStylesContextProvider>
        <App />
      </AppStylesContextProvider>
    </AppQueryContextProvider>
  </QueryClientProvider>,
);
