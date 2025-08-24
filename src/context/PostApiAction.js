// API calls are seperated to have a more clean context file
import axios from 'axios';

import { errorCheck } from '../helper/ApiErrors';

const API_URL = process.env.REACT_APP_API_URL;
const MAX_POSTS = process.env.REACT_APP_API_MAX_POSTS;

const posts = axios.create({
  baseURL: API_URL,
});

// --- API calls ---
// GET
export const getPosts = async () => {
  try {
    const response = await posts.get(`/posts?limit=${MAX_POSTS}`);
    return response.data.posts.slice(-50).reverse();
  } catch (err) {
    errorCheck(err);
    return false;
  }
};

// ADD
export const addPost = async (post) => {
  try {
    const response = await posts.post('/posts/add', post);
    return response.data;
  } catch (err) {
    errorCheck(err);
    return false;
  }
};

// EDIT
export const editPost = async (post) => {
  try {
    const response = await posts.put(`/posts/${post.id}`, post);
    return response.data;
  } catch (err) {
    errorCheck(err);
    return false;
  }
};

// DELETE
export const deletePost = async (postId) => {
  try {
    const response = await posts.delete(`/posts/${postId}`);
    return response;
  } catch (err) {
    errorCheck(err);
    return false;
  }
};

// GET USER
export const getUser = async (userId) => {
  try {
    const response = await posts.get(`/users/${userId}`);
    return response.data;
  } catch (err) {
    errorCheck(err);
    return false;
  }
};
