import React from "react";
import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import useStyles from "./styles";

const Post = ({ post }) => {
  const classes = useStyles();

  return (
    <Grid>
      <div>
        {`${new Date(post.startTime).toLocaleDateString("en-US")}: ${new Date(
          post.startTime
        )
          .toLocaleTimeString()
          .replace(/(.*)\D\d+/, "$1")} to `}
        {`${new Date(post.endTime)
          .toLocaleTimeString()
          .replace(/(.*)\D\d+/, "$1")}`}
      </div>

      <div>{`Floor: ${post.floor}-${post.section}`}</div>
      <div>{`-`}</div>
    </Grid>
  );
};

export default Post;

/**
 *     <Card className={classes.root} variant="outlined">
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
      </CardContent>
    </Card>
 */
