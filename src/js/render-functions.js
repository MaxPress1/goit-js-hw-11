import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryList = document.querySelector('.gallery');

export function createGallery(images) {
    const markup = images.map(image => `
    <li>
        <div class="gallery">
            <a href="${image.largeImageURL}"><img src="${image.webformatURL}" alt="${image.tags}"/></a>
            <div>
            <p>Likes:${image.likes} </p>
            <p>Views:${image.views}</p>
            <p>Comments:${image.comments}</p>
            <p>Downloads:${image.downloads}</p>
            </div>
        </div>
    </li>
    `).join("");

    galleryList.innerHTML = markup;

    const lightbox = new SimpleLightbox(".gallery a", {
        captionsData: "alt",
        captionDelay: 250,
        overlayOpacity: 0.8,
    });

    lightbox.refresh();
};

export function clearGallery() {
    const galleryContainer = document.querySelector(".gallery");
    if (galleryContainer) {
        galleryContainer.innerHTML = "";
    }
};

export function showLoader() {
    const loader = document.querySelector(".loader");
    if (loader) {
        loader.classList.remove("visible");
    }
};


export function hideLoader() {
    const loader = document.querySelector(".loader");
    if (loader) {
        loader.classList.add("visible");
    }
};