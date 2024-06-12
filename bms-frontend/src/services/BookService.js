import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:8282/api/books';

export const listBooks = () =>{
    return axios.get(REST_API_BASE_URL);
}