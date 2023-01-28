import { useQuery } from 'react-query';
import {
  createContext, useCallback, useContext, useState,
} from 'react';
import { fetchNews, randomArrayItem } from './AppQueryContext.utils';
import { InitialContextType, responseStateType } from './AppQueryContext.types';

const initialContext: InitialContextType = {
  showNews: (isShow: boolean) => {},
};

const AppQueryContext = createContext(initialContext);
export const useFetch = () => useContext(AppQueryContext);

export default function AppQueryContextProvider({ children }: typeof children) {
  const [news, setNews] = useState<responseStateType>();

  const {
    refetch, isLoading, isRefetching,
  } = useQuery('fetchNews', fetchNews, {
    refetchOnWindowFocus: false,
    enabled: false,
  });

  const showNews = useCallback(async (isShow: boolean) => {
    if (!isShow) {
      setNews(undefined);
      return;
    }
    const { data, error } = await refetch();
    if (error) {
      setNews(error.message);
      return;
    }
    const { title } = data.articles[randomArrayItem(data.articles.length)];
    setNews(title);
  }, [refetch]);

  return (
    <AppQueryContext.Provider value={{
      showNews, news, isLoading, isRefetching,
    }}
    >
      {children}
    </AppQueryContext.Provider>
  );
}
