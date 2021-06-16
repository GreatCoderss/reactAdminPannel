import React from "react";
import {
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { useStyles } from "./HeaderStyle";

import DashboardIcon from "@material-ui/icons/Dashboard";
import BookIcon from "@material-ui/icons/Book";
import PostAddIcon from "@material-ui/icons/PostAdd";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

export default function SidenavData({ handleDrawerClose }) {
  const classes = useStyles();
  const listItemData = [
    { label: "Dashboard", link: "/", icon: <DashboardIcon /> },
    { label: "Blog Post", link: "/blog", icon: <BookIcon /> },
    { label: "Link 1", link: "/link1", icon: <PostAddIcon /> },
    {
      label: "Notification",
      link: "/notification",
      icon: <NotificationsActiveIcon />,
    },
    { label: "logout", link: "/logout", icon: <ExitToAppIcon /> },
  ];

  return (
    <List>
      {listItemData.map((item, i) => (
        <Button
          size='small'
          onClick={() => handleDrawerClose()}
          className={classes.navButton}>
          <ListItem
            exact
            key={i}
            component={NavLink}
            to={item.link}
            className={classes.navlink}
            activeClassName={classes.selectedNav}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText>{item.label}</ListItemText>
          </ListItem>
        </Button>
      ))}
    </List>
  );
}
