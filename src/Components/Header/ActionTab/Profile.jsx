import React, { Fragment } from "react";
import {
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
import SettingsIcon from "@material-ui/icons/Settings";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

export default function Profile() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    console.log("handleClicked ", event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const dropDownData = [
    { label: "setting", icon: <SettingsIcon /> },
    { label: "logout", icon: <ExitToAppIcon /> },
  ];

  return (
    <Fragment>
      <IconButton
        aria-controls='profile'
        aria-haspopup='true'
        onClick={handleClick}
        color='inherit'>
        <Badge badgeContent={null} color='secondary'>
          <img alt={image} src={image} className={classes.navImg} />
        </Badge>
      </IconButton>
      <Menu
        id='profile'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        placement='bottom-start'>
        <List dense={true} className={classes.dropdownlist}>
          {dropDownData.map((item, i) => (
            <ListItem
              key={i}
              component={Button}
              onClick={handleClose}
              className={classes.listItem}>
              <ListItemAvatar>{item.icon}</ListItemAvatar>
              <ListItemText primary={item.label}></ListItemText>
            </ListItem>
          ))}
        </List>
      </Menu>
    </Fragment>
  );
}
