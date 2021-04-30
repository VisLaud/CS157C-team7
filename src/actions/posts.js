import * as api from "../api";

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
<<<<<<< HEAD
    console.log(error.message);
=======
    console.log(error);
>>>>>>> fafff138658ca2c61134b97b3d592c1c779461e2
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};
<<<<<<< HEAD
=======

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);
    //console.log(data);
    dispatch({ type: "UPDATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};
>>>>>>> fafff138658ca2c61134b97b3d592c1c779461e2
