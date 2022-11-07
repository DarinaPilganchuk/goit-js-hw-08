// Add imports above this line

import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);
const galleryEl = document.querySelector('.gallery')
console.log(galleryEl);

const GalleryItemsMarkup= createGalleryItemsMarkup(galleryItems);
console.log(GalleryItemsMarkup);

galleryEl.innerHTML = GalleryItemsMarkup;

function createGalleryItemsMarkup(items){
    return items.map(item=>`<a class="gallery__item" href="${item.original}">
    <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
  </a>`).join('')
};

new SimpleLightbox('.gallery a', {captionsData:"alt", captionDelay:250, });
