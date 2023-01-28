import { useQuery } from 'react-query';
import {
  createContext, useCallback, useContext, useMemo, useState,
} from 'react';
import { fetchNews, randomArrayItem } from './AppQueryContext.utils';
import { ArticleType, InitialContextType, responseStateType } from './AppQueryContext.types';

const AppQueryContext = createContext<InitialContextType | null>(null);
export const useFetch = () => useContext(AppQueryContext);

export default function AppQueryContextProvider({ children }: typeof children) {
  const [news, setNews] = useState<responseStateType>();

  const { refetch, isLoading, isRefetching } = useQuery('fetchNews', fetchNews, {
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

  const context = useMemo(() => ({
    showNews, news, isLoading, isRefetching,
  }), [showNews, news, isLoading, isRefetching]);

  return (
    <AppQueryContext.Provider value={context}>
      {children}
    </AppQueryContext.Provider>
  );
}
