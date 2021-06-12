import React, { Fragment } from "react";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Menu,
  Toolbar,
  Typography,
} from "@material-ui/core";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import NotificationsRoundedIcon from "@material-ui/icons/NotificationsRounded";
import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";
import { useStyles } from "./HeaderStyle";

export default function NavbarComponent() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const DropDownMenuData = [
    {
      id: "",
      menuIcon: "",
      badgeCount: "",
      menuList: [{ avatar: "", listTitle: "", listDescription: "" }],
    },
  ];

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
                <ListItem buttom onClick={handleClose}>
                  <ListItemAvatar>
                    <Avatar className={classes.avatar}>H</Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary='Himanshu lal'
                    secondary='hello this is what i want'></ListItemText>
                </ListItem>
              </List>
            </Menu>
          </Fragment>
          <Fragment>
            <IconButton
              aria-controls='messages'
              aria-haspopup='true'
              onClick={handleClick}
              color='inherit'>
              <Badge badgeContent={4} color='secondary'>
                <NotificationsRoundedIcon />
              </Badge>
            </IconButton>
            <Menu
              id='messages'
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
              placement='bottom-start'>
              <List dense={true} className={classes.dropdownlist}>
                <ListItem buttom onClick={handleClose}>
                  <ListItemAvatar>
                    <Avatar className={classes.avatar}>H</Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary='Himanshu lal'
                    secondary='hello this is what i want'></ListItemText>
                </ListItem>
              </List>
            </Menu>
          </Fragment>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
