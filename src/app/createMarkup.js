//! ----- main page -------------------------

// 1
const createMainPageContent = ({
  creator,
  title,
  pubDate,
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
 ${description ? `<p class="card__descr">${description.slice(0, 250)}</p>` : ''}
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
// // 2
// const createListItem = ({
//   creator,
//   title,
//   pubDate,
//   content,
//   link,
//   keywords,
//   source_id,
//   description,
// }) => /* html */ `
// <li class="news__card--main card--main stacked featured">
// <div class="card__category-data">
// <span class="card__category">${keywords}</span>
// <span class="card__date">${pubDate}</span>
// </div>
//  <div class="card__content-wrapper">
//   <h2 class="card__title">${title}</h2>
//  ${description ? `<p class="card__descr">${description.slice(0, 250)}</p>` : ''}
//  <div class="content-wrapper">
//  ${content ? `<p class="card__content">${content}</p>` : ''}
//  </div>
//  <div class="card__link-border">
//  <a class="card__link" href="${link}" target="_blank">Read more</a>
//  </div>
// <div class="card__category-info">
// ${creator ? `<p class="card__author">${creator}</p>` : ''}
// <p class="card__source">${source_id}</p>
// </div>
//   </div>
// </li>
// `;

// 2
export const generateMainNewsContent = array =>
  array?.reduce((acc, item) => acc + createMainPageContent(item), '');

// //3 finally function to generate content
// export const insertContent = array => {
//   const result = generateContent(array);
//   list.innerHTML = result;
// };

// ----- for search --------------------

function createSearchMarkupArticle({
  image_url,
  creator,
  title,
  pubDate,
  content,
  link,
  keywords,
  source_id,
  description,
}) {
  const defaultImg = `https://ik.imagekit.io/irinavn2011/ukraine-7047830_1920.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1678121370881`;
  return /* html */ `
<li class="news__card--main card--main stacked featured">
      <div class="card__category-data">
       ${keywords ? `<span class="card__category">${keywords[0]}</span>` : ''}
       ${pubDate ? `<span class="card__date">${pubDate}</span>` : ''}
      </div>
      ${
        image_url
          ? `
      <div class="card__image">
        <img src="${image_url}" alt="${keywords}"/>
      </div>`
          : `<div class="card__image">
        <img src="${defaultImg}" alt="${keywords}"/>
      </div>`
      }
      <div class="card__content-wrapper">
        <h2 class="card__title">${title}</h2>
        ${
          description
            ? `<p class="card__descr">${description.slice(0, 250)}</p>`
            : ''
        }
        <div class="content-wrapper">
          ${content ? `<p class="card__content">${content}</p>` : ''}
        </div>
        <div class="card__link-border">
          <a class="card__link" href="${link}" target="_blank">Read more</a>
        </div>
        <div class="card__category-info">
          ${creator ? `<p class="card__author">${creator}</p>` : ''} 
          ${source_id ? `<p class="card__source">${source_id}</p>` : ''}
        </div>
      </div>
    </li>
`;
}

export const generateSearchNewsContent = array =>
  array?.reduce((acc, item) => acc + createSearchMarkupArticle(item), '');

//! ----- for search NEWS API ---------

// export function createMarkupArticle({
//   author,
//   title,
//   publishedAt,
//   urlToImage,
//   description,
//   url,
//   source: { id, name },
// }) {
//   const defaultImg = `https://ik.imagekit.io/irinavn2011/ukraine-7047830_1920.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1678121370881`;
//   return /* html */ `
// <li class="news__card card stacked featured">
// <div class="card__category-data">
// <span class="card__category">${name}</span>
// <span class="card__date">${publishedAt.split('T').join(' ').slice(0, -4)}</span>
// </div>
//      ${
//        urlToImage
//          ? `<div class="card__image"> <img src="${urlToImage}" alt="${id}" loading="lazy"></div>`
//          : `<div class="card__image"> <img src="${defaultImg}" alt="${id}" loading="lazy"></div>`
//      }

//  <div class="card__content">
//   <h2 class="card__title">${title}</h2>
//  ${description ? `<p class="card__desc">${description}</p>` : ''}
// <p class="card__author">${author ?? 'Anonymous'}</p>
//   <a class="card__link" href="${url}" target="_blank">Read more</a>
//   </div>
// </li>
// `;
// }

//{ <p class="news__desc">${description ? description : ''}</p> } => doesn`t good variant for semantic
//   <p class="news__author">${author ?? ''}</p>

//! -------------- NEWS API------------------
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

//! --- TIMES-----------------------
// const createListItem = ({
//   copyright,
//   title,
//   updated,
//   url,
//   section,
//   source,
//   abstract,
// }) => /* html */ `
// <li class="news__card--main card--main stacked featured">
// <div class="card__category-data">
// <span class="card__category">${section}</span>
// <span class="card__date">${updated}</span>
// </div>
//  <div class="card__content-wrapper">
//   <h2 class="card__title">${title}</h2>
//  ${abstract ? `<p class="card__descr">${abstract}</p>` : ''}
//  <div class="card__link-border">
//  <a class="card__link" href="${url}" target="_blank">Read more</a>
//  </div>
// <div class="card__category-info">
// ${copyright ? `<p class="card__author">${copyright}</p>` : ''}
// <p class="card__source">${source}</p>
// </div>
//   </div>
// </li>
// `;
