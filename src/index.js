import { format } from 'date-fns';
import { uk } from 'date-fns/locale';

import { fetchSearchAPI, optionsListNews, URL_LIST_NEWS } from './app/newsAPI';
//import { setImages, setTitleImages } from './app/setImages';
import { createMarkupArticle, insertContent } from './app/createMarkup';

const list = document.querySelector('[data-list]');
const form = document.querySelector('#form');

form.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();

  const value = e.currentTarget.elements.news.value.trim();

  fetchSearchAPI(value)
    .then(({ articles }) => {
      if (articles.length === 0) {
        throw new Error('No articles');
      }
      return articles.reduce(
        (markup, article) => markup + createMarkupArticle(article),
        ''
      );
    })
    .then(markup => (list.innerHTML = markup))
    .catch(onError)
    .finally(() => form.reset());
}

function onError(err) {
  console.log(err);
}

fetch(URL_LIST_NEWS, optionsListNews)
  .then(response => response.json())
  .then(({ articles }) => {
    // if (!ok) {
    //   throw new Error(`Error fetching`);
    // }
    console.log(articles);
    insertContent(articles);
  })
  .catch(onError);
