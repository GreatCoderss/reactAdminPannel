import React, { Fragment } from "react";
import {
  AppBar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  withStyles,
} from "@material-ui/core";
import { useStyles } from "./HeaderStyle";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import NotificationsRoundedIcon from "@material-ui/icons/NotificationsRounded";
import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";

import SettingsIcon from "@material-ui/icons/Settings";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import Notification from "./ActionTab/Notification";
import Profile from "./ActionTab/Profile";
import Messages from "./ActionTab/Messages";

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function NavbarComponent() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    console.log("handleClicked ", event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar>
      <Toolbar className={classes.toolbar}>
        <Box style={{ display: "flex" }}>
          <IconButton color='inherit'>
            <MenuRoundedIcon />
          </IconButton>
          <Typography variant='h6' className={classes.logo}>
            {"<AdminPannel />"}
          </Typography>
        </Box>
        <Box>
          <Notification
            anchorEl={anchorEl}
            handleClose={handleClose}
            handleClick={handleClick}
          />
          <Messages
            anchorEl={anchorEl}
            handleClose={handleClose}
            handleClick={handleClick}
          />
          <Profile
            anchorEl={anchorEl}
            handleClose={handleClose}
            handleClick={handleClick}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
