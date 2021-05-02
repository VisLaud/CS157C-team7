import React, { useState, useEffect } from "react";
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
import { useSelector } from "react-redux";
import useStyles from "./styles";
import { useDispatch } from "react-redux";
import { createPost, updatePost } from "../../actions/posts";

const Center = ({ employeeid }) => {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const post = useSelector((state) =>
    state.posts.find((post) => post.employeeid === employeeid)
  );

  const [postID, setPostId] = useState(0);

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
  }, [post]);

  const getStatus = () => {
    if (post.covidstat) {
      return classes.danger;
    } else if (post.checkstat) {
      return classes.risk;
    }
    return classes.safe;
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return post ? (
    <Card className={getStatus()}>
      <Typography>Current Status: </Typography>
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
    </Card>
  ) : null;
};

export default Center;
