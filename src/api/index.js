import axios from "axios";

const url = "https://covid-internal-tracker.herokuapp.com/posts";

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
