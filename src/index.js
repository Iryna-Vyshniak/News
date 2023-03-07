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
  console.log(document.querySelector('li:nth-child(3)'));
}

function onError(err) {
  console.log(err);
}

fetch(URL_LIST_NEWS)
  .then(response => response.json())
  .then(({ results }) => {
    // if (!ok) {
    //   throw new Error(`Error fetching`);
    // }
    console.log(results);
    insertContent(results);
  })
  .catch(onError)
  .finally(() => {
    const contentEls = document.querySelectorAll('.card__content');
    const maxHeight =
      parseInt(window.getComputedStyle(contentEls[0]).lineHeight) * 20; // максимальна висота контейнера (20 рядки тексту)
    contentEls.forEach(contentEl => {
      const contentText = contentEl.innerText;
      if (contentText.length > 350) {
        contentEl.classList.add('long-text'); // додає клас long-text, якщо довжина тексту перевищує 350 символів
      }
      const lines = Math.ceil(
        contentEl.clientHeight /
          parseInt(window.getComputedStyle(contentEl).lineHeight)
      );
      if (lines > 20) {
        const maxLength = 350;
        const ellipsis = '...';
        if (contentText.length > maxLength) {
          const truncatedText = contentText
            .substring(0, maxLength)
            .replace(/(\.|!|\?)\s/g, '$1' + ellipsis + ' ');
          contentEl.innerText = truncatedText + ellipsis;
        }
      }
    });
  });

// --------------NEWS API----------------------------------------------------------------------------

// fetch(URL_LIST_NEWS, optionsListNews)
//   .then(response => response.json())
//   .then(({ articles }) => {
//     // if (!ok) {
//     //   throw new Error(`Error fetching`);
//     // }
//     console.log(articles);
//     insertContent(articles);
//   })
//   .catch(onError);
