// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');

galleryContainer.innerHTML = galleryItems
  .map(
    item => `
<li class="gallery__item">
<a class="gallery__link" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a>
</li>
`
  )
  .join('');

galleryContainer.addEventListener('click', e => {
  e.preventDefault();
});

const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionPosition: 'bottom',
  captionType: 'attr',
  captionsData: 'alt',
  captionDelay: 250,
});
console.log(galleryItems);
