import React from "react";
import { Grid, CircularProgress, LinearProgress } from "@material-ui/core";
import { useSelector } from "react-redux";
import useStyles from "./styles";

import Post from "./Post/Post";

const Posts = () => {
  const classes = useStyles();
  const posts = useSelector((state) => state.posts);
  //console.log(posts);
  return !posts.length ? (
    <div className={classes.root}>
      <LinearProgress />
      <h2>Loading your schedules....</h2>
      <LinearProgress color="secondary" />
    </div>
  ) : (
    <div>
      <h1>Scheduled Events</h1>
      {posts.map((post) => {
        return <Post key={post._id} post={post} />;
      })}
    </div>
  );
};

export default Posts;
