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

export default function Messages() {
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
    { label: "GreatCoders", description: "commodi dicta ..." },
    { label: "Bholenath", description: "ipsum dolor sit ..." },
    { label: "Mahakaal", description: "llum porro saepe ..." },
  ];

  return (
    <Fragment>
      <IconButton
        aria-controls='Messages'
        aria-haspopup='true'
        onClick={handleClick}
        color='inherit'>
        <Badge badgeContent={dropDownData.length} color='secondary'>
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
          {dropDownData.map((item, i) => (
            <ListItem
              key={i}
              component={Button}
              onClick={handleClose}
              className={classes.listItem}>
              <ListItemAvatar>
                <Avatar className={classes.navImg}>{item.label[0]}</Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={item.label}
                secondary={item.description}></ListItemText>
            </ListItem>
          ))}
        </List>
      </Menu>
    </Fragment>
  );
}
