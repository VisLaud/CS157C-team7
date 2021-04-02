import React from "react";
import { List, ListItem, ListItemText, ListItemLink } from "@material-ui/core";
import useStyles from "./styles";

const Post = ({ post }) => {
  const classes = useStyles();

  function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
  }

  return (
  
    <div className={classes.root}>
      <List component="nav" aria-label="secondary mailbox folders">
        <ListItem button>
          <ListItemText
            primary={`Start Time: ${post.startTime} End Time: ${post.endTime} Floor: ${post.floor}-${post.section}`}
            secondary={`note: ${post.note}`}
          />
        </ListItem>
      </List>
    </div>
  );
};

export default Post;
