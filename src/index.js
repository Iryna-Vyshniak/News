import debounce from 'lodash.debounce';
import { Report } from 'notiflix/build/notiflix-report-aio';
import {
  generateSearchNewsContent,
  generateMainNewsContent,
} from './app/createMarkup';
import { NewsApiService } from './app/newsAPI';

const newApiService = new NewsApiService();

const list = document.querySelector('[data-list]');
const input = document.querySelector('#search-input');
const form = document.querySelector('#form');

input.addEventListener('input', debounce(onInputSearch), 500);
form.addEventListener('submit', onSubmit);

// !------- Main Page --------------------------------

newApiService
  .fetchApiForMainPage()
  .then(({ results }) => {
    console.log(results);
    if (!results.length) {
      throw new Error('Not articles found');
    }
    insertContent(results, generateMainNewsContent);
  })
  .catch(onError);

// !--------- CHECK CATEGORY AND SEARCH ---------------

function onSubmit(e) {
  e.preventDefault();

  return newApiService
    .fetchSearchCategoryAPI()
    .then(({ results }) => {
      console.log(results.length);
      if (!results.length) {
        throw new Error('Not articles found');
      }
      insertContent(results, generateSearchNewsContent);
    })
    .catch(onError)
    .finally(() => {
      checkSymbols(400);
    });
}

// !------INPUT SEARCH -------------------------
function onInputSearch(e) {
  newApiService.query = e.target.value.trim();
  //console.log(value);
  newApiService
    .fetchSearchAPI()
    .then(({ results }) => {
      // console.log(results.length);
      if (!results.length) {
        throw new Error('Not articles found');
      }
      insertContent(results, generateSearchNewsContent);
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

// !------ generateContent --------------------------------

const insertContent = (array, generateMarkup) => {
  const result = generateMarkup(array);
  list.innerHTML = result;
};
