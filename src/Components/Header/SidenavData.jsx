import React from "react";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { useStyles } from "./HeaderStyle";

import DashboardIcon from "@material-ui/icons/Dashboard";
import BookIcon from "@material-ui/icons/Book";
import PostAddIcon from "@material-ui/icons/PostAdd";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

export default function SidenavData({ handleDrawerToggler }) {
  const classes = useStyles();
  const listItemData = [
    { label: "Dashboard", link: "/", icon: <DashboardIcon /> },
    { label: "Blog Post", link: "/blog", icon: <BookIcon /> },
    { label: "Add Post", link: "/blog/add", icon: <PostAddIcon /> },
    {
      label: "Notification",
      link: "/Notification",
      icon: <NotificationsActiveIcon />,
    },
    { label: "logout", link: "/logout", icon: <ExitToAppIcon /> },
  ];

  return (
    <List>
      {listItemData.map((item, i) => (
        <NavLink
          key={i}
          to={item.link}
          className={classes.navlink}
          activeClassName={classes.selectedNav}
          style={{ TextDecoration: "none" }}>
          <ListItem
            button
            className={classes.nested}
            onClick={handleDrawerToggler}>
            <ListItemIcon style={{ color: "inherit" }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText>{item.label}</ListItemText>
          </ListItem>
        </NavLink>
      ))}
    </List>
  );
}
