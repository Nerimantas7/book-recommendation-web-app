import axios from "axios";
import { getToken } from "./AuthService";

const REST_API_BASE_URL = 'http://localhost:8282/api/books';

// Add a request interceptor
axios.interceptors.request.use(function (config) {

    config.headers['Authorization'] = getToken();

    return config;

  }, function (error) {
    
    return Promise.reject(error);
  });

export const listBooks = () => {
    return axios.get(REST_API_BASE_URL);
}

export const createBook = (book) => axios.post(REST_API_BASE_URL, book);

export const getBook = (bookId) => axios.get(REST_API_BASE_URL + '/' + bookId);

export const updateBook = (bookId, book) => axios.put(REST_API_BASE_URL + '/' + bookId, book);

export const deleteBook = (bookId) => axios.delete(REST_API_BASE_URL + '/' + bookId);