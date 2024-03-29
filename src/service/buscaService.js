import axios from "axios";

export default class BuscarService {
    url  = 'https://www.googleapis.com/books/v1/volumes';

    getBooks(query,startIndex) {
        return axios.get(this.url,{ params: { q: query,maxResults:40,startIndex:startIndex } });
    }

 }