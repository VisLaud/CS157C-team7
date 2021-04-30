<<<<<<< HEAD
import React, { useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
=======
import React, { useEffect, useState } from "react";
import {
  Container,
  AppBar,
  Typography,
  Grow,
  Grid,
  Button,
  Input,
  Card,
  CardContent,
} from "@material-ui/core";
>>>>>>> fafff138658ca2c61134b97b3d592c1c779461e2
import { useDispatch } from "react-redux";

import { getPosts } from "./actions/posts";
import Form from "./components/Form/Form";
import Posts from "./components/Posts/Posts";
import useStyles from "./styles";
<<<<<<< HEAD
=======
import { Link, Switch, Route } from "react-router-dom";
import pepe from "./assets/on_duty.gif";
import covid from "./assets/covid.jpg";
>>>>>>> fafff138658ca2c61134b97b3d592c1c779461e2

function App() {
  const classes = useStyles();
  const dispatch = useDispatch();

<<<<<<< HEAD
=======
  const [employeeid, setEmployeeid] = useState(0);
>>>>>>> fafff138658ca2c61134b97b3d592c1c779461e2
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

<<<<<<< HEAD
  return (
    <Container maxidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          Internal Covid Tracker
        </Typography>
      </AppBar>
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
=======
  useEffect(() => {}, [employeeid]);

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
          <Card className={classes.login}>
            <CardContent>
              <Typography>Enter Your ID</Typography>
              <Input
                onChange={(e) => {
                  return setEmployeeid(parseInt(e.target.value));
                }}
              >
                Enter ID
              </Input>
              <br />
              <br />
              <Link to="/id" style={{ textDecoration: "none" }}>
                <Button variant="contained" color="primary">
                  <span> Login</span>
                </Button>
              </Link>
            </CardContent>
          </Card>
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
                    <Form employeeid={employeeid} />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Posts employeeid={employeeid} />
                  </Grid>
                </Grid>
              </Container>
            </Grow>
          </Container>
        </Route>
      </Switch>
    </React.Fragment>
>>>>>>> fafff138658ca2c61134b97b3d592c1c779461e2
  );
}

export default App;
