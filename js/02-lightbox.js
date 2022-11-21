import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");
const galleryMarkup = creatGalleryMarkup(galleryItems);
galleryEl.insertAdjacentHTML("beforeend", galleryMarkup);

function creatGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__link">
         <a class="gallery__item" href="${original}">
          <img
            class="gallery__image"
             src="${preview}"
            data-source="${original}"
             alt="${description}"
         />
         </a>
       </li>`;
    })
    .join("");
};

const lightbox = new SimpleLightbox(".gallery__item", {
  captionsData: "alt",
  captionDelay: "250"
});

