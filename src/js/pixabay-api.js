import axios from 'axios';

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { createGallery, clearGallery, showLoader, hideLoader } from './render-functions';

const API_KEY = '49649405-8aeb588384e19e05040c9b75c';
axios.defaults.baseURL = 'https://pixabay.com/api/';


export function getImagesByQuery(query) {

    showLoader();

    axios({
        params: {
            key: API_KEY,
            q: query,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: 'true'
        }
    })
        .then((response) => {
            const hits = response.data.hits;
            if (hits.length === 0) {
                throw new Error('Sorry, there are no images matching your search query. Please try again!');
            }
            createGallery(hits);
        }
        )
        .catch(error => {
            iziToast.error({
                message: error.message,
                position: "topRight",
            });
        })
        .finally(() => hideLoader()
        );

};