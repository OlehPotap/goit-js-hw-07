import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");

galleryItems.forEach((el) => {
  const newEl = document.createElement("div");
  newEl.classList.add("gallery__item");
  newEl.innerHTML = `<a class="gallery__link" href="${el.original}">
<img
        class="gallery__image"
        src="${el.preview}"
        data-source="${el.original}"
        alt="${el.description}"
      />
      </a>
      `;
  galleryEl.append(newEl);
});

galleryEl.addEventListener("click", (event) => {
  if (event.target.nodeName === "IMG") {
    event.preventDefault();

    const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`);

    instance.show();

    galleryEl.addEventListener("keydown", (event) => {
      if (event.code === "Escape") {
        instance.close();
        galleryEl.removeEventListener("keydown", () => {});
      }
    });
  }
});
