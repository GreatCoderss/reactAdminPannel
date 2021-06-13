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

import { useStyles } from "../HeaderStyle";
import image from "./unnamed.jpg";

export default function Profile({ anchorEl, handleClose, handleClick }) {
  const classes = useStyles();
  return (
    <Fragment>
      <IconButton
        aria-controls='notification'
        aria-haspopup='true'
        onClick={handleClick}
        color='inherit'>
        <Badge badgeContent={4} color='secondary'>
          <img src={image} className={classes.navImg} alt={image} />
        </Badge>
      </IconButton>
      <Menu
        id='notification'
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
