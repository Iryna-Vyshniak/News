import debounce from 'lodash.debounce';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { fetchSearchAPI, URL_LIST_NEWS } from './app/newsAPI';
import { createMarkupArticle, insertContent } from './app/createMarkup';

const list = document.querySelector('[data-list]');
const input = document.querySelector('#search-input');
const form = document.querySelector('#form');
const selectCountry = form.querySelector('#country');
const selectLanguage = form.querySelector('#language');
const selectCategory = form.querySelector('#category');

// console.log(form, selectCountry, selectLanguage, selectCategory);

input.addEventListener('input', debounce(onInputSearch), 300);
form.addEventListener('submit', onSubmit);

// !----------- createURL -----------------------------

function createURL() {
  const countries = selectCountry.value;
  const categories = selectCategory.value;
  const lang = selectLanguage.value;

  console.log(categories, countries, lang);

  const url = `https://newsdata.io/api/1/news?apikey=pub_1872016d3bdbc1e153439b60c6c670f1f5aed&country=${countries}&category=${categories}&language=${lang}`;
  return url;
}

// !--------- CHECK CATEGORY AND SEARCH ---------------

function onSubmit(e) {
  e.preventDefault();

  const url = createURL();
  return fetch(url)
    .then(response => response.json())
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
      checkSymbols(400);
    });
}

// !------INPUT SEARCH -------------------------
function onInputSearch(e) {
  const value = input.value.trim();
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
      checkSymbols(400);
      input.innerHTML = '';
    });
}

//! --- ERROR -------------------------------------

function onError(err) {
  Report.failure(
    '🥺 Ooops...',
    'Articles not found... Please, search another article.',
    'Okay'
  );
}

// ! ---- CHECK SYMBOLS ---------------------------------

function checkSymbols(maxNum) {
  if (!document.querySelectorAll('.card__content')) return;
  const contentEls = document.querySelectorAll('.card__content');
  const maxHeight =
    parseInt(window.getComputedStyle(contentEls[0]).lineHeight) * 20;
  contentEls.forEach(contentEl => {
    const contentText = contentEl.innerText;
    if (contentText.length > maxNum) {
      contentEl.classList.add('long-text');
    }
    const lines = Math.ceil(
      contentEl.clientHeight /
        parseInt(window.getComputedStyle(contentEl).lineHeight)
    );
    if (lines > 20) {
      const maxLength = maxNum;
      const ellipsis = '...';
      if (contentText.length > maxLength) {
        const truncatedText = contentText
          .substring(0, maxLength)
          .replace(/(\.|!|\?)\s/g, '$1' + ellipsis + ' ');
        contentEl.innerText = truncatedText + ellipsis;
      }
    }
  });
}

//! -------- main page -----------------------------------
fetch(URL_LIST_NEWS)
  .then(response => {
    if (!response.ok) {
      throw new Error(`Error fetching`);
    }
    return response.json();
  })
  .then(({ results }) => {
    console.log(results);
    insertContent(results);
  })
  .catch(onError);
