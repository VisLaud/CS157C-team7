import React, { useState } from "react";
import { Grid, CircularProgress, LinearProgress } from "@material-ui/core";
import { useSelector } from "react-redux";
import useStyles from "./styles";

import Post from "./Post/Post";

const Posts = ({ employeeid }) => {
  const classes = useStyles();
  const posts = useSelector((state) =>
    state.posts.find((post) => post.employeeid === employeeid)
  );
  console.log(posts ? posts.meetings : null);
  const testv1 = {
    employeeid: 1,
    floor: 3,
    section: 2,
    startTime: "2021-03-28T00:33",
    endTime: "2021-04-07T00:33",
    note: "adsfasd",
  };
  return !posts ? (
    <div className={classes.root}>
      <LinearProgress />
      <h2>Loading your schedules....</h2>
      <LinearProgress color="secondary" />
    </div>
  ) : (
    <div>
      <h1>Scheduled Events</h1>
      {posts
        ? posts.meetings.map((post) => <Post key={post._id} post={post} />)
        : null}
    </div>
  );
};

export default Posts;
// {posts.map((post) => {
//   return <Post key={post._id} post={post} />;
// })}
