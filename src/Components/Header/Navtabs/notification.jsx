import React, { useState } from "react";
import {
  Avatar,
  Badge,
  Box,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Menu,
} from "@material-ui/core";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import { useStyles } from "../HeaderStyles";

export default function Notification() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const dropDownData = [
    { label: "Alex", desc: "likes your feds ..." },
    { label: "Frexa", desc: "likes your feds ..." },
    { label: "Dazer", desc: "likes your feds ..." },
    { label: "Lobie", desc: "likes your feds ..." },
  ];

  return (
    <Box>
      <IconButton
        aria-controls='Notification'
        aria-haspopup='true'
        onClick={handleClick}
        color='inherit'>
        <Badge badgeContent={4} color='secondary'>
          <NotificationsActiveIcon />
        </Badge>
      </IconButton>
      <Menu
        id='Notification'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}>
        <List className={classes.navlist}>
          {dropDownData.map((item, i) => (
            <ListItem key={i} onClick={handleClose}>
              <ListItemIcon>
                <Avatar className={classes.ulAvater}>
                  {item.label[0].toUpperCase()}
                </Avatar>
              </ListItemIcon>
              <ListItemText
                primary={item.label}
                secondary={item.desc}></ListItemText>
            </ListItem>
          ))}
        </List>
      </Menu>
    </Box>
  );
}
