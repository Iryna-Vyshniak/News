import { format } from 'date-fns';
import { uk } from 'date-fns/locale';

import { fetchSearchAPI } from './app/newsAPI';
import { setImages, setTitleImages } from './app/setImages';

console.log(`2023-03-05T19:05:00Z`.split('T').join(' ').slice(0, -4));

const list = document.querySelector('[data-list]');
const form = document.querySelector('#form');

form.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();

  const value = e.currentTarget.elements.news.value.trim();
  console.log(setImages(value));

  //console.log(value);
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

function createMarkupArticle({
  author,
  title,
  publishedAt,
  urlToImage,
  description,
  url,
  source: { id, name },
}) {
  const value = form.elements.news.value.trim();
  return /* html */ `
<li class="news__card card stacked featured">
<div class="card__category-data">
<span class="card__category">${name}</span>
<span class="card__date">${publishedAt.split('T').join(' ').slice(0, -4)}</span>
</div>

     ${
       urlToImage
         ? `<div class="card__image"> <img src="${urlToImage}" alt="${id}" loading="lazy"></div>`
         : `<div class="card__image"> <img src="${setImages(
             value
           )}" alt="${id}" loading="lazy"></div>`
     }
 
 <div class="card__content">
  <h2 class="card__title">${title}</h2>
 ${description ? `<p class="card__desc">${description}</p>` : ''}
<p class="card__author">${author ?? 'Anonymous'}</p>
  <a class="card__link" href="${url}" target="_blank">Read more</a>
  </div>
</li>
`;
}

// //const NEWS_API_KEY = `80b5b1b77e7347378516259f83ba6464`;
const BASE_URL = `https://newsapi.org/v2/`;
const URL_LIST_NEWS = `${BASE_URL}top-headlines?country=ua&pageSize=20`;

// LIST NEWS
const optionsListNews = {
  headers: {
    'X-Api-Key': `1572576c777b4bada530e28e03640c11`,
  },
};

fetch(URL_LIST_NEWS, optionsListNews)
  .then(response => response.json())
  .then(({ articles }) => {
    // if (!ok) {
    //   throw new Error(`Error fetching`);
    // }
    console.log(articles);
    insertContent(articles);
  })
  .catch(err => console.error(err));

// 1
const createListItem = ({
  author,
  title,
  publishedAt,
  description,
  url,
  source: { id, name },
}) => /* html */ `
<li class="news__card--main card--main stacked featured">
<div class="card__category-data">
<span class="card__category">${name}</span>
<span class="card__date">${publishedAt.split('T').join(' ').slice(0, -4)}</span>
</div>
 <div class="card__content">
  <h2 class="card__title">${title}</h2>
 ${description ? `<p class="card__desc">${description}</p>` : ''}
<p class="card__author">${author ?? 'Anonymous'}</p>
  <a class="card__link" href="${url}" target="_blank">Read more</a>
  </div>
</li>
`;

//{ <p class="news__desc">${description ? description : ''}</p> } => doesn`t good variant for semantic
//   <p class="news__author">${author ?? ''}</p>

//<img class="card__image" src="${(urlToImage = setTitleImages(author))}" alt="${id}" loading="lazy">

// 2
const generateContent = array =>
  array?.reduce((acc, item) => acc + createListItem(item), '');

//3 final function to generate content
const insertContent = array => {
  const result = generateContent(array);
  list.innerHTML = result;
};
