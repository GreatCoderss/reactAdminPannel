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

import NotificationsRoundedIcon from "@material-ui/icons/NotificationsRounded";
import { useStyles } from "../HeaderStyle";

export default function Notification({ anchorEl, handleClose, handleClick }) {
  const classes = useStyles();
  return (
    <Fragment>
      <IconButton
        aria-controls='notification'
        aria-haspopup='true'
        onClick={handleClick}
        color='inherit'>
        <Badge badgeContent={4} color='secondary'>
          <NotificationsRoundedIcon />
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
