import React, { useState, useEffect } from "react";
import { Grid, CircularProgress, LinearProgress } from "@material-ui/core";
import { useSelector } from "react-redux";
import useStyles from "./styles";

import Post from "./Post/Post";

const Posts = ({ employeeid }) => {
  const classes = useStyles();
  const posts = useSelector((state) =>
    state.posts.find((post) => post.employeeid === employeeid)
  );
  console.log(posts);
  return !posts ? (
    <div className={classes.root}>
      <LinearProgress />
      <h2>Loading your schedules....</h2>
      <LinearProgress color="secondary" />
    </div>
  ) : (
    <div>
      <h1>Scheduled Events</h1>
    </div>
  );
};

export default Posts;
// {posts.map((post) => {
//   return <Post key={post._id} post={post} />;
// })}
