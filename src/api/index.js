import axios from 'axios';

const apiNasa = axios.create({
    baseURL: 'https://api.nasa.gov'
});

const API_KEY_NASA = "rogcug1Hff4jsbhuJu6TJNFj8dhanyTf0dljO71G";

export const getImage = (date, hd) => {
    return apiNasa.get(`/planetary/apod?date=${date}&hd=${hd}&api_key=${API_KEY_NASA}`);
};



const apiTranslate = axios.create({
    baseURL: 'https://just-translated.p.rapidapi.com',
    headers: {
        'x-rapidapi-key': '8f8889aacfmsh7310c810ab6ebe5p1d4ae1jsn33a73cb18e6f',
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



const apiEarth = axios.create({
    baseURL: 'https://epic.gsfc.nasa.gov',
    headers: {
        
    }
});

export const getData = date => {
    return apiEarth.get(`/api/natural/date/${date}`);
};




const apis = {
    getImage,
    translate,
    getData
};

export default apis;