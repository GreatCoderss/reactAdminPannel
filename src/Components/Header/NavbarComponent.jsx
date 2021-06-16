import React from "react";
import {
  AppBar,
  Box,
  Hidden,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { useStyles } from "./HeaderStyle";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";

import Notification from "./ActionTab/Notification";
import Profile from "./ActionTab/Profile";
import Messages from "./ActionTab/Messages";

export default function NavbarComponent({ handleDrawerToggle }) {
  const classes = useStyles();

  return (
    <AppBar>
      <Toolbar className={classes.toolbar}>
        <Box style={{ display: "flex" }}>
          <Typography variant='h6' className={classes.logo}>
            {"<AdminPannel />"}
          </Typography>
        </Box>
        <Hidden smDown>
          <Box>
            <Notification />
            <Messages />
            <Profile />
          </Box>
        </Hidden>
        <Hidden mdUp>
          <IconButton color='inherit' onClick={handleDrawerToggle}>
            <MenuRoundedIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
}
