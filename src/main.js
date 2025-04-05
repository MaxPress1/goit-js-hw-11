import { getImagesByQuery } from './js/pixabay-api';
import { createGallery, clearGallery, showLoader, hideLoader } from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    if (!form.elements["search-text"].value) {
        return;
    }
    const query = form.elements["search-text"].value.trim();

    clearGallery();
    showLoader();

    getImagesByQuery(query);
};