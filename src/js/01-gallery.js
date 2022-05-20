import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryDiv = document.querySelector('.gallery');
const galleryImg = createGaleryItems(galleryItems);

function createGaleryItems() {
  return galleryItems
    .map(
      (item) =>
        `<div class='gallery__item'>
        <a class='gallery__link' 
        href='${item.original}'>
        <img
        class='gallery__image'
        src='${item.preview}'
        data-source='${item.original}'
        alt='${item.description}'
        />
        </a>
        </div>`
    )
    .join('');
}
galleryDiv.insertAdjacentHTML('beforeend', galleryImg);

galleryDiv.addEventListener('click', onShowImgByClick);

function onShowImgByClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const instance = basicLightbox.create(
    `<img src='${event.target.getAttribute(['data-source'])}'>
`,
    {
      onShow: (instance) => {
        window.addEventListener('keydown', onEscPressCloce);
        function onEscPressCloce(event) {
          if (event.key === 'Escape') {
            instance.close();
            window.removeEventListener('keydown', onEscPressCloce);
          }
        }
      },
    }
  );
  instance.show();
}
