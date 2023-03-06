import { createClient } from 'pexels';

export function setImages(query) {
  const API_KEY = '28194821-49041d995ecd04735d9e20d11';

  const randomNumber = max => {
    return Math.floor(Math.random() * max);
  };

  fetch(`https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo`)
    .then(response => response.json())
    .then(data => {
      console.log('data', data);
      let defaultImg = `https://ik.imagekit.io/irinavn2011/ukraine-7047830_1920.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1678121370881`;

      const images = document.querySelectorAll('.card__image');
      for (const image of images) {
        image.src =
          data.hits[randomNumber(data.hits.length)]?.largeImageURL ??
          defaultImg;
        console.log(image.src);
      }
    });
}

//setImages('sun');

export function setTitleImages(query) {
  const randomNumber = max => {
    return Math.floor(Math.random() * max);
  };

  const API_KEY = 'nK8dQ9g0n9ztLpNfMUyyoRWjFaSsbPf5sCCcMrST8otmYHlyeXOtDq1p';
  const client = createClient(API_KEY);

  client.photos.curated({ per_page: 100 }).then(response => {
    // console.log(response);
    const images = document.querySelectorAll('.card__image');
    for (const image of images) {
      image.src =
        response.photos[randomNumber(response.photos.length)]?.src.original;
      //   console.log(img.src);
    }
  });
}
