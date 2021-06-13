import {
  Drawer,
  Hidden,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useStyles } from "./HeaderStyle";
import CreateIcon from "@material-ui/icons/Create";
import SidenavData from "./SidenavData";

export default function Sidenav({ mobileOpen, handleDrawerToggle }) {
  const classes = useStyles();

  return (
    <nav className={classes.drawer} aria-label='mailbox folders'>
      {/* Hidden on bigger Size  */}
      <Hidden mdUp implementation='css'>
        <Drawer
          variant='temporary'
          anchor={"left"}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}>
          <SidenavData />
        </Drawer>
      </Hidden>
      {/* visible on screen greater than 600px */}
      <Hidden smDown implementation='css'>
        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant='permanent'
          open>
          <SidenavData />
        </Drawer>
      </Hidden>
    </nav>
  );
}
