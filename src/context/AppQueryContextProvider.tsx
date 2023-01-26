import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

export default function AppQueryContextProvider({ children }: typeof children) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}
