import React, { useState, useEffect } from "react";
import {
  Grid,
  CircularProgress,
  LinearProgress,
  Typography,
  Card,
  CardActionArea,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
import useStyles from "./styles";
import Post from "./Post/Post";
import { useDispatch } from "react-redux";
import { createPost, updatePost } from "../../../actions/posts";

function Posts({ post }) {
  const [open, setOpen] = React.useState(false);
  const [postID, setPostId] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    if (post) setPostId(post._id);
  }, [post]);

  const getStatus = () => {
    if (post.covidstat) {
      return classes.danger;
    } else if (post.checkstat) {
      return classes.risk;
    }
    return classes.safe;
  };

  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const resetCovid = (e) => {
    e.preventDefault();
    const submitData = {
      ...post,
      covidstat: false,
      checkstat: false,
    };
    dispatch(updatePost(postID, submitData));
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <div className={getStatus()}>
        <h2>Employee: {post.employeeid}</h2>
        {post
          ? post.meetings.map((post) => <Post key={post._id} post={post} />)
          : null}
      </div>
      <br />
      <Typography>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleClickOpen}
          disabled={!post.covidstat && !post.checkstat}
          variant="outlined"
        >
          Reset
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {`Reset Employee ${post.employeeid} 's Covid status?`}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {`This will reset both covid status and check status for employee ${post.employeeid}. Are you sure that you want to continue? `}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={resetCovid} color="primary">
              Yes
            </Button>
            <Button onClick={handleClose} color="primary" autoFocus>
              No
            </Button>
          </DialogActions>
        </Dialog>
      </Typography>
    </div>
  );
}

export default Posts;
