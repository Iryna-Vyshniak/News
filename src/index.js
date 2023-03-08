import { format } from 'date-fns';
import { uk } from 'date-fns/locale';
import debounce from 'lodash.debounce';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { fetchSearchAPI, optionsListNews, URL_LIST_NEWS } from './app/newsAPI';
import { setImages, setTitleImages } from './app/setImages';
import { createMarkupArticle, insertContent } from './app/createMarkup';

const list = document.querySelector('[data-list]');
const form = document.querySelector('#form');

// add debounce if use only input without form
// form.addEventListener('input', debounce(onSubmit), 300);
form.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();

  const value = e.currentTarget.elements.news.value.trim();
  //console.log(value);

  fetchSearchAPI(value)
    .then(({ results }) => {
      console.log(results.length);
      if (!results.length) {
        throw new Error('Not articles found');
      }
      return results.reduce(
        (markup, article) => markup + createMarkupArticle(article),
        ''
      );
    })
    .then(markup => {
      list.innerHTML = markup;
    })
    .catch(onError)
    .finally(() => {
      const contentEls = document.querySelectorAll('.card__content');
      const maxHeight =
        parseInt(window.getComputedStyle(contentEls[0]).lineHeight) * 20;
      contentEls.forEach(contentEl => {
        const contentText = contentEl.innerText;
        if (contentText.length > 400) {
          contentEl.classList.add('long-text');
        }
        const lines = Math.ceil(
          contentEl.clientHeight /
            parseInt(window.getComputedStyle(contentEl).lineHeight)
        );
        if (lines > 20) {
          const maxLength = 400;
          const ellipsis = '...';
          if (contentText.length > maxLength) {
            const truncatedText = contentText
              .substring(0, maxLength)
              .replace(/(\.|!|\?)\s/g, '$1' + ellipsis + ' ');
            contentEl.innerText = truncatedText + ellipsis;
          }
        }
      });
      form.reset();
    });
}

function onError(err) {
  Report.failure(
    '🥺 Ooops...',
    'Articles not found... Please, search another article.',
    'Okay'
  );
}

fetch(URL_LIST_NEWS)
  .then(response => response.json())
  .then(({ results }) => {
    // if (!status.ok) {
    //   throw new Error(`Error fetching`);
    // }
    //console.log(results);
    insertContent(results);
  })
  .catch(onError)
  .finally(() => {
    const contentEls = document.querySelectorAll('.card__content');
    const maxHeight =
      parseInt(window.getComputedStyle(contentEls[0]).lineHeight) * 20; // максимальна висота контейнера (20 рядки тексту)
    contentEls.forEach(contentEl => {
      const contentText = contentEl.innerText;
      if (contentText.length > 800) {
        contentEl.classList.add('long-text'); // додає клас long-text, якщо довжина тексту перевищує 350 символів
      }
      const lines = Math.ceil(
        contentEl.clientHeight /
          parseInt(window.getComputedStyle(contentEl).lineHeight)
      );
      if (lines > 20) {
        const maxLength = 800;
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

// --------------NEWS API---------------------------------------

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

// function onSubmit(e) {
//   e.preventDefault();

//   const value = e.currentTarget.elements.news.value.trim();

//   fetchSearchAPI(value)
//     .then(({ articles }) => {
//       if (articles.length === 0) {
//         throw new Error('No articles');
//       }
//       return articles.reduce(
//         (markup, article) => markup + createMarkupArticle(article),
//         ''
//       );
//     })
//     .then(markup => (list.innerHTML = markup))
//     .catch(onError)
//     .finally(() => form.reset());
//   console.log(document.querySelector('li:nth-child(3)'));
// }

// function onError(err) {
//   console.log(err);
// }
