import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import useStyles from "./styles";

const Post = ({ post }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography>
          {`Start Time: ${new Date(post.startTime).toDateString()}, ${new Date(
            post.startTime
          )
            .toLocaleTimeString()
            .replace(/(.*)\D\d+/, "$1")}`}
        </Typography>
        <Typography>
          {`End Time : ${new Date(post.endTime).toDateString()}, ${new Date(
            post.endTime
          )
            .toLocaleTimeString()
            .replace(/(.*)\D\d+/, "$1")}`}
        </Typography>
        <Typography>{`Floor: ${post.floor}-${post.section}`}</Typography>

        <Typography color="textSecondary">{`note: ${post.note}`}</Typography>
      </CardContent>
    </Card>
  );
};

export default Post;
