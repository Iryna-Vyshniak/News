const list = document.querySelector('[data-list]');

// 1
export const createListItem = ({
  author,
  title,
  publishedAt,
  urlToImage,
  description,
  source: { id, name },
}) => /* html */ `
<li class="news__card">
<span class="news__category">${name}</span>
  <img src="${urlToImage}" alt="${id}">
  <span class="news__date">${publishedAt}</span>
  <h2 class="news__title">${title}</h2>
  <p class="news__desc">${description}</p>
  <p class="news__author">${author}</p>
  <a href=""></a>
</li>
`;

// 2
export const generateContent = array =>
  array.reduce((acc, item) => acc + createListItem(item), '');

//3 final function to generate content
export const insertContent = array => {
  const result = generateContent(array);
  list.insertAdjacentHTML('beforeend', result);
};
