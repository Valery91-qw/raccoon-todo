import { useQuery } from 'react-query';
import {
  ChangeEvent,
  createContext, useCallback, useContext, useMemo, useState,
} from 'react';

const initialContext: {
  news: ArticleType | undefined;
  handleClick: (e: ChangeEvent<HTMLInputElement>) => void
} = {
  news: undefined,
  handleClick: (e: ChangeEvent<HTMLInputElement>) => {},
};

const AppQueryContext = createContext(initialContext);
export const useFetch = () => useContext(AppQueryContext);

const fetchNews = async () => {
  const res = await fetch(`https://newsapi.org/v2/top-headlines?country=ru&apiKey=${import.meta.env.VITE_API_KEY}`);
  return res.json();
};
export default function AppQueryContextProvider({ children }: typeof children) {
  const [news, setNews] = useState<ArticleType | undefined>();

  const { refetch } = useQuery('fetchNews', fetchNews, {
    refetchOnWindowFocus: false,
    enabled: false,
  });
  const handleClick = useCallback(async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      const { data } = await refetch();
      const article = data.articles[Math.floor(Math.random() * data.articles.length)];
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

type ArticleType = {
  source: {
    id: string,
    name: string
  }
  author: string,
  description: string
  url: string,
  urlToImage: string
  publishedAt: Date
  content: string
};