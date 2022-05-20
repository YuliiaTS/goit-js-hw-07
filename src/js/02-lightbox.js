import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryDiv = document.querySelector('.gallery');
const galleryImg = createGaleryItems(galleryItems);

function createGaleryItems(galleryItems) {
  return galleryItems
  .map(item => 
    `<li>
    <a class='gallery__item' 
    href='${item.original}'>
    <img class='gallery__image' 
    src='${item.preview}' 
    alt='${item.description}' />
    </a>
    </li>`
    )
    .join('');
}
galleryDiv.insertAdjacentHTML('beforeend', galleryImg);

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: '250ms',
});
