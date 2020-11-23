import axios from 'axios'


const apiKey = 'ea6e1810'

const instance = axios.create({
    baseURL: `https://www.omdbapi.com/`
})

export const API = {
    getMovieById(imdbID) {
        return instance.get(`?apikey=${apiKey}&i=${imdbID}`).then(response => response.data)
    },
    getSearchList(value, page) {
        return instance.get(`?apikey=${apiKey}&s=${value}&page=${page}`)
    }
}