import { useQuery } from 'react-query';
import {
  createContext, useCallback, useContext, useMemo, useState,
} from 'react';
import { fetchNews, randomArrayItem } from './AppQueryContext.utils';
import { InitialContextType, responseStateType } from './AppQueryContext.types';

const AppQueryContext = createContext<InitialContextType | null>(null);
export const useFetch = () => {
  const currentContext = useContext<InitialContextType | null>(AppQueryContext);
  if (!currentContext) {
    throw new Error('has to be used within <AppQueryContext.Provider>');
  }

  return currentContext;
};

export default function AppQueryContextProvider({ children }: typeof children) {
  const [response, setResponse] = useState<responseStateType>();

  const {
    refetch, isLoading, isRefetching, isError,
  } = useQuery('fetchNews', fetchNews, {
    refetchOnWindowFocus: false,
    enabled: false,
  });

  const showNews = useCallback(async (isShow: boolean) => {
    if (!isShow) {
      setResponse(undefined);
      return;
    }
    const { data, error } = await refetch();
    if (error) {
      setResponse(error.message);
      return;
    }
    const { title } = data.articles[randomArrayItem(data.articles.length)];
    setResponse(title);
  }, [refetch]);

  const context = useMemo(() => ({
    showNews, response, isLoading, isRefetching, isError,
  }), [showNews, response, isLoading, isRefetching, isError]);

  return (
    <AppQueryContext.Provider value={context}>
      {children}
    </AppQueryContext.Provider>
  );
}
