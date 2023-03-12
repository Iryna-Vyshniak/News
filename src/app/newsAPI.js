// ----- NEWS DATA ---------------------------------
export function fetchSearchAPI(query) {
  const SEARCH_URL = `https://newsdata.io/api/1/news?apikey=pub_1872016d3bdbc1e153439b60c6c670f1f5aed&country=ua,pl,us&category=politics,science,environment,sports&language=uk,pl,en,fr&q=${query}`;
  return fetch(SEARCH_URL).then(response => response.json());
}

export const URL_LIST_NEWS = `https://newsdata.io/api/1/news?apikey=pub_1872016d3bdbc1e153439b60c6c670f1f5aed&country=ua&category=top&language=uk`;
