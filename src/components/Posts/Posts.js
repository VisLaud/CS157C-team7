<<<<<<< HEAD
import React from "react";
=======
import React, { useState, useEffect } from "react";
>>>>>>> fafff138658ca2c61134b97b3d592c1c779461e2
import { Grid, CircularProgress, LinearProgress } from "@material-ui/core";
import { useSelector } from "react-redux";
import useStyles from "./styles";

import Post from "./Post/Post";

<<<<<<< HEAD
const Posts = () => {
  const classes = useStyles();
  const posts = useSelector((state) => state.posts);
  //console.log(posts);
  return !posts.length ? (
    <div className={classes.root}>
      <LinearProgress />
      <h2>You have no event scheduled</h2>
      <LinearProgress color="secondary" />
    </div>
  ) : (
    <div>
      <h1>Scheduled Events</h1>
      {posts.map((post) => {
        return <Post key={post._id} post={post} />;
      })}
=======
const Posts = ({ employeeid }) => {
  const classes = useStyles();
  const posts = useSelector((state) =>
    state.posts.find((post) => post.employeeid === employeeid)
  );

  return (
    <div>
      <h1>Scheduled Events</h1>
      {posts
        ? posts.meetings.map((post) => <Post key={post._id} post={post} />)
        : null}
>>>>>>> fafff138658ca2c61134b97b3d592c1c779461e2
    </div>
  );
};

export default Posts;
