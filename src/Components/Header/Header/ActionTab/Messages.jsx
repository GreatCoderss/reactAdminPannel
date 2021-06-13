import React, { Fragment } from "react";
import {
  Avatar,
  Badge,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Menu,
} from "@material-ui/core";
import ForumIcon from "@material-ui/icons/Forum";
import { useStyles } from "../HeaderStyle";

export default function Messages({ anchorEl, handleClose, handleClick }) {
  const classes = useStyles();
  return (
    <Fragment>
      <IconButton
        aria-controls='Messages'
        aria-haspopup='true'
        onClick={handleClick}
        color='inherit'>
        <Badge badgeContent={4} color='secondary'>
          <ForumIcon />
        </Badge>
      </IconButton>
      <Menu
        id='Messages'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        placement='bottom-start'>
        <List dense={true} className={classes.dropdownlist}>
          <ListItem component={Button} onClick={handleClose}>
            <ListItemAvatar>
              <Avatar className={classes.avatar}>H</Avatar>
            </ListItemAvatar>
            <ListItemText
              primary='himsnual lal'
              secondary='Hello himanshu how r u ...'></ListItemText>
          </ListItem>
        </List>
      </Menu>
    </Fragment>
  );
}
