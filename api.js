import axios from 'axios';

const countriesApi = axios.create({baseURL: "https://restcountries.com/v3.1"});


export const fetchCountries = () => {
    return countriesApi.get(`/all`).then((res) =>{
        return res.data
    })
}

export const searchCountries = (name) => {
    return countriesApi.get(`name/${name}`).then((res) => {
        return res.data
    })
}

export const searchLanguages = (languages) => {
    return countriesApi.get(`lang/${languages}`).then((res) => {
        return res.data
    })
}
