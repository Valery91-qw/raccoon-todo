export function queryOption(isDevMode: boolean): Promise<Response> {
  if (isDevMode) {
    return fetch(`https://newsapi.org/v2/top-headlines?country=ru&apiKey=${import.meta.env.VITE_API_KEY_DEV}`);
  }
  return fetch('https://api.newscatcherapi.com/v2/latest_headlines?countries=RU&page_size=10', {
    headers: {
      'x-api-key': `${import.meta.env.VITE_API_KEY_PROD}`,
    },
  });
}

export function randomArrayItem(length: number): number {
  return Math.floor(Math.random() * length);
}

export async function fetchNews() {
  const res = await queryOption(import.meta.env.DEV);
  return res.json();
}
