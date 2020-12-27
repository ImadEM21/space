import axios from 'axios';

const apiNasa = axios.create({
    baseURL: 'https://api.nasa.gov'
});

const API_KEY_NASA = "YOURAPI";

export const getImage = (date, hd) => {
    return apiNasa.get(`/planetary/apod?date=${date}&hd=${hd}&api_key=${API_KEY_NASA}`);
};



const apiTranslate = axios.create({
    baseURL: 'https://just-translated.p.rapidapi.com',
    headers: {
        'x-rapidapi-key': 'YOURRAPIDAPIKEY',
        'x-rapidapi-host': 'just-translated.p.rapidapi.com'
    }
});

export const translate = text => {
    return apiTranslate.get('/', {
        params: {
            lang_from: 'en', 
            lang_to: 'fr', 
            text: text
        },
    });
};

const apis = {
    getImage,
    translate
};

export default apis;
