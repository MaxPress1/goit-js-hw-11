import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryList = document.querySelector('.gallery');

export function createGallery(images) {
    const markup = images.map(({ preview, original, description }) => `
        <a href="${original}" class="gallery-item">
            <img src="${preview}" alt="${description}" />
        </a>
    `).join("");

    galleryList.innerHTML = markup;

    const lightbox = new SimpleLightbox("body div", {
        captionsData: "alt",
        captionDelay: 250,
        overlayOpacity: 0.8,
    });

    lightbox.refresh();
};

export function clearGallery() {
    const galleryContainer = document.querySelector(".gallery-box");
    if (galleryContainer) {
        galleryContainer.innerHTML = "";
    }
};

export function showLoader() {
    const loader = document.querySelector(".loader");
    if (loader) {
        loader.classList.add("visible");
    }
};


export function hideLoader() {
    const loader = document.querySelector(".loader");
    if (loader) {
        loader.classList.remove("visible");
    }
};