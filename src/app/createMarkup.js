const list = document.querySelector('[data-list]');

// ----- main page -------------------------------------------------------------------------

// 1
const createListItem = ({
  creator,
  title,
  pubDate,
  content,
  link,
  keywords,
  source_id,
  description,
}) => /* html */ `
<li class="news__card--main card--main stacked featured">
<div class="card__category-data">
<span class="card__category">${keywords}</span>
<span class="card__date">${pubDate}</span>
</div>
 <div class="card__content-wrapper">
  <h2 class="card__title">${title}</h2>
 ${description ? `<p class="card__descr">${description}</p>` : ''}
 <div class="content-wrapper">
 ${content ? `<p class="card__content">${content}</p>` : ''}
 </div>
 <div class="card__link-border">
 <a class="card__link" href="${link}" target="_blank">Read more</a>
 </div>
<div class="card__category-info">
${creator ? `<p class="card__author">${creator}</p>` : ''}
<p class="card__source">${source_id}</p>
</div>
  </div>
</li>
`;

// 2
const generateContent = array =>
  array?.reduce((acc, item) => acc + createListItem(item), '');

//3 finally function to generate content
export const insertContent = array => {
  const result = generateContent(array);
  list.innerHTML = result;
};

// --------------NEWS API----------------------------------------------------------------------------
// // 1
// const createListItem = ({
//   author,
//   title,
//   publishedAt,
//   description,
//   url,
//   source: { id, name },
// }) => /* html */ `
// <li class="news__card--main card--main stacked featured">
// <div class="card__category-data">
// <span class="card__category">${name}</span>
// <span class="card__date">${publishedAt.split('T').join(' ').slice(0, -4)}</span>
// </div>
//  <div class="card__content-wrapper">
//   <h2 class="card__title">${title}</h2>
//  ${description ? `<p class="card__desc">${description}</p>` : ''}
// <p class="card__author">${author ?? 'Anonymous'}</p>
//   <a class="card__link" href="${url}" target="_blank">Read more</a>
//   </div>
// </li>
// `;

// // 2
// const generateContent = array =>
//   array?.reduce((acc, item) => acc + createListItem(item), '');

// //3 finally function to generate content
// export const insertContent = array => {
//   const result = generateContent(array);
//   list.innerHTML = result;
// };

// ----- for search -------------------------------------------------------------------------

export function createMarkupArticle({
  author,
  title,
  publishedAt,
  urlToImage,
  description,
  url,
  source: { id, name },
}) {
  const defaultImg = `https://ik.imagekit.io/irinavn2011/ukraine-7047830_1920.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1678121370881`;
  return /* html */ `
<li class="news__card card stacked featured">
<div class="card__category-data">
<span class="card__category">${name}</span>
<span class="card__date">${publishedAt.split('T').join(' ').slice(0, -4)}</span>
</div>
     ${
       urlToImage
         ? `<div class="card__image"> <img src="${urlToImage}" alt="${id}" loading="lazy"></div>`
         : `<div class="card__image"> <img src="${defaultImg}" alt="${id}" loading="lazy"></div>`
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

//{ <p class="news__desc">${description ? description : ''}</p> } => doesn`t good variant for semantic
//   <p class="news__author">${author ?? ''}</p>
