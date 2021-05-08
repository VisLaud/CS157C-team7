import React from "react";
import {
  Grid,
  CircularProgress,
  LinearProgress,
  Typography,
  Container,
} from "@material-ui/core";

import { useSelector } from "react-redux";
import useStyles from "./styles";
import Posts from "./Posts/Posts";

function Manager({ employeeid }) {
  const classes = useStyles();
  const posts = useSelector((state) => state.posts);
  const empStat = posts[employeeid];
  const show = empStat ? empStat.empType === "M" : false;

  const display = (status) => {
    if (status) {
      return (
        <Container className={classes.root}>
          <h1>Employee's Schedule</h1>
          <Grid
            container
            direction="row"
            justify="space-around"
            alignItems="stretch"
            spacing={3}
          >
            {posts.map((post) => (
              <Grid key={post._id} item xs={4}>
                <Posts post={post} />
              </Grid>
            ))}
          </Grid>
        </Container>
      );
    } else return <h1></h1>;
  };
  return <React.Fragment>{display(show)}</React.Fragment>;
}

export default Manager;
