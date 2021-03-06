import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  TextField,
  Button,
  Paper,
  Typography,
  FormControl,
  InputLabel,
  Select,
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import { createPost, updatePost } from "../../actions/posts";

import useStyles from "./styles";

const Form = ({ employeeid }) => {
  const [postData, setPostData] = useState({
    startTime: "",
    endTime: "",
    floor: 0,
    section: 0,
    note: "",
  });

  const [endPost, setEndPost] = useState({
    employeeid: employeeid,
    meetings: [],
  });

  const [postID, setPostId] = useState(0);

  const searchedPost = useSelector((state) =>
    state.posts.find((post) => post.employeeid === employeeid)
  );

  // console.log(searchedPost);
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const submitData = {
      ...searchedPost,
      meetings: [...searchedPost.meetings, postData],
    };
    dispatch(updatePost(postID, submitData));
    clear();
  };

  useEffect(() => {
    if (searchedPost) setPostId(searchedPost._id);
  }, [searchedPost]);

  const clear = () => {
    setPostData({
      startTime: "",
      endTime: "",
      floor: "",
      section: "",
      note: "",
    });
  };

  return (
    <React.Fragment>
      <Paper className={classes.paper}>
        <form
          autoComplete="off"
          noValidate
          className={`${classes.root} ${classes.form}`}
          onSubmit={handleSubmit}
        >
          <Typography variant="h6">Schedule new meeting </Typography>

          <TextField
            name="startTime"
            id="datetime-local"
            label="Start Time"
            type="datetime-local"
            value={postData.startTime}
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) =>
              setPostData({ ...postData, startTime: e.target.value })
            }
          />
          <TextField
            name="endTime"
            id="datetime-local"
            label="End Time"
            type="datetime-local"
            value={postData.endTime}
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) =>
              setPostData({ ...postData, endTime: e.target.value })
            }
          />
          <FormControl
            className={classes.formControl}
            fullWidth
            onChange={(e) =>
              setPostData({ ...postData, floor: e.target.value })
            }
          >
            <InputLabel htmlFor="grouped-native-select">
              Select Floor
            </InputLabel>
            <Select native value={postData.floor} id="floor">
              <option aria-label="None" value="" />
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </Select>
          </FormControl>
          <FormControl
            className={classes.formControl}
            fullWidth
            onChange={(e) =>
              setPostData({ ...postData, section: e.target.value })
            }
          >
            <InputLabel htmlFor="grouped-native-select">
              Select Section
            </InputLabel>
            <Select native value={postData.section} id="section">
              <option aria-label="None" value="" />
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </Select>
          </FormControl>
          <TextField
            name="note"
            varient="outlined"
            label="Note"
            fullWidth
            value={postData.note}
            onChange={(e) => setPostData({ ...postData, note: e.target.value })}
          />
          <Button
            className={classes.buttonSubmit}
            varient="contained"
            color="primary"
            size="large"
            type="submit"
            fullWidth
          >
            Submit
          </Button>
          <Button
            className={classes.buttonSubmit}
            varient="contained"
            color="secondary"
            size="small"
            onClick={clear}
            fullWidth
          >
            Clear
          </Button>
        </form>
      </Paper>
    </React.Fragment>
  );
};

export default Form;
