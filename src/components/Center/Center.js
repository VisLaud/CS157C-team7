import React, { useState, useEffect } from "react";
import covidChecker from "../Verify/CovidChecker";
import {
  Grid,
  CircularProgress,
  Card,
  CardActionArea,
  Typography,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import Alert from "@material-ui/lab/Alert";
import useStyles from "./styles";
import { useDispatch } from "react-redux";
import { createPost, updatePost } from "../../actions/posts";

const Center = ({ employeeid }) => {
  const [open, setOpen] = React.useState(false);
  const [alertTimer, setAlertTimer] = React.useState(false);
  const classes = useStyles();
  const posts = useSelector((state) => state.posts);
  const post = posts.find((post) => post.employeeid === employeeid);

  const [postID, setPostId] = useState(0);
  let stat = "";
  const dispatch = useDispatch();
  const covidConfirm = (e) => {
    e.preventDefault();
    const submitData = {
      ...post,
      covidstat: true,
    };
    dispatch(updatePost(postID, submitData));
    setOpen(false);
  };

  useEffect(() => {
    if (post) setPostId(post._id);
  }, [post, posts, stat, alertTimer]);

  const getStatus = () => {
    if (post.covidstat) {
      stat = "Infected";
      return classes.danger;
    } else if (post.checkstat) {
      stat = "At Risk";
      return classes.risk;
    }
    stat = "Safe";
    return classes.safe;
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const alert = () => {
    if (post.checkstat) {
      return (
        <Alert variant="filled" severity="warning">
          Looks like you have been in contact with someone who is infected.
          Please contact the department ASAP
        </Alert>
      );
    } else
      return (
        <Alert variant="filled" severity="success">
          No match found
        </Alert>
      );
  };

  const checkStatus = () => {
    const checked = covidChecker(employeeid, posts);
    const submitData = {
      ...post,
      checkstat: checked,
    };
    dispatch(updatePost(postID, submitData));
    setAlertTimer(true);
    setTimeout(() => setAlertTimer(false), 5000);
  };

  const theme = createMuiTheme();

  theme.typography.h3 = {
    fontSize: "1.2rem",
    "@media (min-width:600px)": {
      fontSize: "1.5rem",
      fontFamily: "cursive",
    },
    textAlign: "center",
    [theme.breakpoints.up("md")]: {
      fontSize: "1.5rem",
    },
  };

  return post ? (
    <Card className={getStatus()}>
      <ThemeProvider theme={theme}>
        <Typography variant="h3">Employee {employeeid} </Typography>
      </ThemeProvider>
      <ThemeProvider theme={theme}>
        <Typography variant="h3">Current Status: {stat} </Typography>
      </ThemeProvider>
      <br />
      <Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={handleClickOpen}
          disabled={post.covidstat}
        >
          Notify about my covid
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Are you sure that you have Covid-19"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Select YES if you are certain that you have Covid-19 or are
              showing symptoms related to the disease. YOU CANNOT REVERT THE
              CHANGES ONCE YOU HIT YES!
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={covidConfirm} color="primary">
              Yes
            </Button>
            <Button onClick={handleClose} color="primary" autoFocus>
              No
            </Button>
          </DialogActions>
        </Dialog>
      </Typography>
      <br />
      <Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={checkStatus}
          disabled={post.covidstat}
        >
          Check for covid
        </Button>
      </Typography>
      {alertTimer ? alert() : null}
    </Card>
  ) : null;
};

export default Center;
