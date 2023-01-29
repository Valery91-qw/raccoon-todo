export function createFetch(isDevMode: boolean) {
  if (isDevMode) {
    return fetch('https://newsapi.org/v2/top-headlines?country=ru', {
      headers: {
        'X-Api-Key': `${import.meta.env.VITE_API_KEY_DEV}`,
      },
    });
  }
  return fetch('https://api.newscatcherapi.com/v2/latest_headlines?countries=RU&page_size=10', {
    headers: {
      'x-api-key': `${import.meta.env.VITE_API_KEY_PROD}`,
    },
  });
}

export function randomArrayItem(length: number) {
  return Math.floor(Math.random() * length);
}

export async function fetchNews() {
  const res = await createFetch(import.meta.env.DEV);
  const serialiseData = await res.json();
  if (serialiseData.status !== 'ok') {
    throw new Error(serialiseData.message);
  } else {
    return serialiseData;
  }
}
