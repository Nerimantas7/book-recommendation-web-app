import axios from "axios";

const AUTH_REST_API_BASE_URL = 'http://localhost:8282/api/auth'

export const registerAPICall = (registerObj) => axios.post(AUTH_REST_API_BASE_URL + '/register', registerObj);

export const loginAPICall = (userNameOrEmail, password) => axios.post(AUTH_REST_API_BASE_URL + '/login', { userNameOrEmail, password });

export const storeToken = (token) => localStorage.setItem("token", token);

export const getToken = () => localStorage.getItem("token");

export const saveLoggedInUser = (userNameOrEmail, role) => {
    sessionStorage.setItem("authenticatedUser", userNameOrEmail);
    sessionStorage.setItem("role", role);
}

export const isUserLoggedIn = () => {
    const userNameOrEmail = sessionStorage.getItem("authenticatedUser");

    if (userNameOrEmail == null) {
        return false;
    } else {
        return true;
    }
}

export const getLoggedInUser = () => {
    const userNameOrEmail = sessionStorage.getItem("authenticatedUser");
    return userNameOrEmail;
}

export const logout = () =>{
    localStorage.clear();
    sessionStorage.clear();
    // window.location.reload(false);
}

export const isAdminUser = () =>{

    let role = sessionStorage.getItem("role");

    if(role != null && role === 'ROLE_ADMIN'){
        return true;
    }else{
        return false;
    }
}