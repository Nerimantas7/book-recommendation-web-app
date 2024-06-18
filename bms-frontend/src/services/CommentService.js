import axios from "axios";

const COMMENT_REST_API_BASE_URL = 'http://localhost:8282/api/books/comments';

export const listBooks = () => axios.get(COMMENT_REST_API_BASE_URL);

export const createBook = (comment) => axios.post(COMMENT_REST_API_BASE_URL, comment);

export const getComment = (commentId) => axios.get(COMMENT_REST_API_BASE_URL + '/' + commentId);

export const updateComment = (commentId, comment) => axios.put(COMMENT_REST_API_BASE_URL + '/' + commentId, comment);

export const deleteComment = (commentId) => axios.delete(COMMENT_REST_API_BASE_URL + '/' + commentId);