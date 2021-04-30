export default (posts = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      return [...posts, action.payload];
<<<<<<< HEAD
=======
    case "UPDATE":
      console.log(action.payload);
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
>>>>>>> fafff138658ca2c61134b97b3d592c1c779461e2
    default:
      return posts;
  }
};
