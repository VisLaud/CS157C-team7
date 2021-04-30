import axios from "axios";

const url = "https://covid-internal-tracker.herokuapp.com/posts";

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
<<<<<<< HEAD
=======
export const updatePost = (id, updatedPost) =>
  axios.patch(`${url}/${id}`, updatedPost);
>>>>>>> fafff138658ca2c61134b97b3d592c1c779461e2
