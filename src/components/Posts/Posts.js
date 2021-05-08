import React, { useState, useEffect } from "react";
import {
  Grid,
  CircularProgress,
  LinearProgress,
  Typography,
} from "@material-ui/core";
import { useSelector } from "react-redux";
import useStyles from "./styles";

import Post from "./Post/Post";

const Posts = ({ employeeid }) => {
  const classes = useStyles();
  const posts = useSelector((state) =>
    state.posts.find((post) => post.employeeid === employeeid)
  );

  return (
    <div className={classes.root}>
      <h1>Scheduled Events</h1>
      {posts
        ? posts.meetings.map((post) => <Post key={post._id} post={post} />)
        : null}
    </div>
  );
};

export default Posts;
