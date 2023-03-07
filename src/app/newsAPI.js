const BASE_URL = `https://newsapi.org/v2/`;
const NEWS_API_KEY = `1572576c777b4bada530e28e03640c11`;

// SEARCH
export function fetchSearchAPI(query) {
  const SEARCH_URL = `${BASE_URL}everything?apiKey=${NEWS_API_KEY}&q=${query}&searchIn=title&from=2023-03-04&to=2023-03-05&language=en&sortBy=popularity&pageSize=24`;
  return fetch(SEARCH_URL).then(response => response.json());
}

// ----------------------------------------------------------------
export const URL_LIST_NEWS = `${BASE_URL}top-headlines?country=ua&pageSize=20`;

// LIST NEWS
export const optionsListNews = {
  headers: {
    'X-Api-Key': `1572576c777b4bada530e28e03640c11`,
  },
};
