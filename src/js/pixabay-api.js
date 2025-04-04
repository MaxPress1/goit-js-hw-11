import axios from 'axios';

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const form = document.querySelector('form');

const API_KEY = '49649405-8aeb588384e19e05040c9b75c';
axios.defaults.baseURL = 'https://pixabay.com/api/';

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    if (!form.elements["search-text"].value) {
        return;
    }
    const query = form.elements["search-text"].value;

    getImagesByQuery(query);
}

export function getImagesByQuery(query) {
    
    axios({
        params: {
            key: API_KEY,
            q: query,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: 'true'
        }
    })
        .then((data) => {

            if (data.data.hits.length === 0) {
                throw new Error('Sorry, there are no images matching your search query. Please try again!');
            }
            console.log(data);
            
        }
        )
        .catch(error => console.log(iziToast.error({
                message: error.message,
                position: "topRight",
            }))
        );
};