import axios from "axios";

const AUTH_REST_API_BASE_URL = 'http://localhost:8282/api/auth'

export const registerAPICall = (registerObj) => axios.post(AUTH_REST_API_BASE_URL + '/register', registerObj);

export const loginAPICall = (userNameOrEmail, password) => axios.post(AUTH_REST_API_BASE_URL + '/login', { userNameOrEmail, password });

export const storeToken = (token) => localStorage.setItem("token", token);

export const getToken = () => localStorage.getItem("token");