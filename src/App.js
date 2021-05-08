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
import { useDispatch, useSelector } from "react-redux";

import { getPosts } from "./actions/posts";
import Form from "./components/Form/Form";
import Posts from "./components/Posts/Posts";
import useStyles from "./styles";
import { Link, Switch, Route } from "react-router-dom";
import pepe from "./assets/on_duty.gif";
import covid from "./assets/covid.jpg";
import Center from "./components/Center/Center";
import Manager from "./components/ManagerView/Manager";

function App() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const posts = useSelector((state) => state);

  const [employeeid, setEmployeeid] = useState(0);
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

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
                    <Center employeeid={employeeid} />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Posts employeeid={employeeid} />
                  </Grid>
                </Grid>
              </Container>
            </Grow>
          </Container>
          <Container>
            <Grow in>
              <Manager employeeid={employeeid} />
            </Grow>
          </Container>
        </Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;
