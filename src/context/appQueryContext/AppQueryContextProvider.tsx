import { useQuery } from 'react-query';
import {
  ChangeEvent,
  createContext, useCallback, useContext, useState,
} from 'react';
import { fetchNews, randomArrayItem } from './AppQueryContext.utils';
import { InitialContextType, NewsStateType } from './AppQueryContext.types';

const initialContext: InitialContextType = {
  showNews: (isShow: boolean) => {},
};

const AppQueryContext = createContext(initialContext);
export const useFetch = () => useContext(AppQueryContext);

export default function AppQueryContextProvider({ children }: typeof children) {
  const [news, setNews] = useState<NewsStateType>();

  const { refetch, isLoading, isRefetching } = useQuery('fetchNews', fetchNews, {
    refetchOnWindowFocus: false,
    enabled: false,
  });

  const showNews = useCallback(async (isShow: boolean) => {
    if (isShow) {
      const { data } = await refetch();
      const article = data.articles[randomArrayItem(data.articles.length)];
      setNews(article);
    } else {
      setNews(undefined);
    }
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
