import { useQuery } from 'react-query';
import {
  ChangeEvent,
  createContext, useCallback, useContext, useState,
} from 'react';
import { fetchNews, randomArrayItem } from './AppQueryContext.utils';
import { InitialContextType, NewsStateType } from './AppQueryContext.types';

const initialContext: InitialContextType = {
  news: undefined,
  handleClick: (e: ChangeEvent<HTMLInputElement>) => {},
};

const AppQueryContext = createContext(initialContext);
export const useFetch = () => useContext(AppQueryContext);

export default function AppQueryContextProvider({ children }: typeof children) {
  const [news, setNews] = useState<NewsStateType>();

  const { refetch } = useQuery('fetchNews', fetchNews, {
    refetchOnWindowFocus: false,
    enabled: false,
  });

  const handleClick = useCallback(async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      const { data } = await refetch();
      const article = data.articles[randomArrayItem(data.articles.length)];
      setNews(article);
    } else {
      setNews(undefined);
    }
  }, [refetch]);

  return (
    <AppQueryContext.Provider value={{ handleClick, news }}>
      {children}
    </AppQueryContext.Provider>
  );
}
