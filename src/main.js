import { getImagesByQuery } from './js/pixabay-api';

const form = document.querySelector('form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    if (!form.elements["search-text"].value) {
        return;
    }
    const query = form.elements["search-text"].value.trim();


    getImagesByQuery(query);
};