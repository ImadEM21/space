import axios from 'axios';

const apiNasa = axios.create({
    baseURL: 'https://api.nasa.gov'
});

const API_KEY_NASA = process.env.REACT_APP_NASA_API_KEY;

export const getImage = (date, hd) => {
    return apiNasa.get(`/planetary/apod?date=${date}&hd=${hd}&api_key=${API_KEY_NASA}`);
};

export const getMarsWeather = () => {
    return apiNasa.get(`insight_weather/?api_key=${API_KEY_NASA}&feedtype=json&ver=1.0`);
};



const apiTranslate = axios.create({
    baseURL: 'https://just-translated.p.rapidapi.com',
    headers: {
        'x-rapidapi-key': process.env.REACT_APP_TRANSLATE_KEY,
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
    baseURL: 'https://epic.gsfc.nasa.gov'
});

export const getData = date => {
    return apiEarth.get(`/api/natural/date/${date}`);
};




const apis = {
    getImage,
    translate,
    getData,
    getMarsWeather
};

export default apis;
