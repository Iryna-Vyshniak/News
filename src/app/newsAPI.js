// ----- NEWS DATA ---------------------------------

export class NewsApiService {
  constructor() {
    this.searchQuery = '';
  }

  fetchSearchAPI() {
    const SEARCH_URL = `https://newsdata.io/api/1/news?apikey=pub_18787ba1ce83d8ffac107aed7314f8a091ca2&country=ua,pl,us&category=politics,science,environment,sports&language=uk,pl,en,fr&q=${this.searchQuery}`;

    return fetch(SEARCH_URL).then(response => {
      if (!response.ok) throw new Error('Not found');
      return response.json();
    });
  }

  createURL() {
    const countries = document.querySelector('#country').value;
    const categories = document.querySelector('#category').value;
    const lang = document.querySelector('#language').value;

    const url = `https://newsdata.io/api/1/news?apikey=pub_18787ba1ce83d8ffac107aed7314f8a091ca2&country=${countries}&category=${categories}&language=${lang}`;
    return url;
  }

  fetchSearchCategoryAPI() {
    const SEARCH_URL = this.createURL();

    return fetch(SEARCH_URL).then(response => {
      if (!response.ok) throw new Error('Not found');
      return response.json();
    });
  }

  fetchApiForMainPage() {
    const URL_LIST_NEWS = `https://newsdata.io/api/1/news?apikey=pub_18787ba1ce83d8ffac107aed7314f8a091ca2&country=ua&category=top&language=uk`;

    return fetch(URL_LIST_NEWS).then(response => {
      if (!response.ok) throw new Error('Not found');
      return response.json();
    });
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
