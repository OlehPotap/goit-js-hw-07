import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");

galleryItems.forEach((el) => {
  const newEl = document.createElement("li");
  newEl.innerHTML = `<a class="gallery__item" href="${el.original}">
<img
        class="gallery__image"
        src="${el.preview}"
        alt="${el.description}"
      />
      </a>
      `;
  galleryEl.append(newEl);
});

let gallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
