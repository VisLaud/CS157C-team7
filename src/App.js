import React, { useEffect } from "react";
import {
  Container,
  AppBar,
  Typography,
  Grow,
  Grid,
  Button,
} from "@material-ui/core";
import { useDispatch } from "react-redux";

import { getPosts } from "./actions/posts";
import Form from "./components/Form/Form";
import Posts from "./components/Posts/Posts";
import useStyles from "./styles";
import { Link, Switch, Route } from "react-router-dom";
import pepe from "./assets/on_duty.gif";
import covid from "./assets/covid.jpg";

function App() {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <React.Fragment>
      <Container maxidth="lg">
        <AppBar className={classes.appBar} position="static" color="inherit">
          <img className={classes.pepe} src={pepe} />
          <Typography className={classes.heading} variant="h2" align="center">
            Internal Covid Tracker
          </Typography>
          <img className={classes.pepe} src={covid} />
        </AppBar>
      </Container>
      <Switch>
        <Route exact path="/">
          <Link to="/id" style={{ textDecoration: "none" }}>
            <Button variant="contained" color="primary">
              <span> Login</span>
            </Button>
          </Link>
        </Route>
        <Route path="/id">
          <Link
            className={classes.link}
            to="/"
            style={{ textDecoration: "none" }}
          >
            <Button variant="contained" color="secondary">
              Log out
            </Button>
          </Link>
          <Container maxidth="lg">
            <Grow in>
              <Container>
                <Grid
                  container
                  justify="space-between"
                  alignItems="stretch"
                  spacing={3}
                >
                  <Grid item xs={12} sm={4}>
                    <Form />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Posts />
                  </Grid>
                </Grid>
              </Container>
            </Grow>
          </Container>
        </Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;
