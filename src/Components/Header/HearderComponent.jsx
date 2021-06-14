import React, { Fragment } from "react";
import { Box } from "@material-ui/core";
import { Route, Switch } from "react-router-dom";
import { useStyles } from "./HeaderStyle";
import NavbarComponent from "./NavbarComponent";
import Sidenav from "./Sidenav";
import Dashboard from "../BodyComponent/Dashboard";
import Notification from "./ActionTab/Notification";
import AddPost from "../BodyComponent/AddPost";
import BlogPost from "../BodyComponent/BlogPost";

export default function HearderComponent() {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
    console.log("jai siya ram", mobileOpen);
  };
  return (
    <Fragment>
      <NavbarComponent handleDrawerToggle={handleDrawerToggle} />
      <Sidenav
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
      />
      <Box className={classes.wrapper}>
        <Switch>
          <Route exact path='/' render={() => <Dashboard />} />
          <Route path='/blog' render={() => <BlogPost />} />
          <Route exact path='/blog/add' render={() => <AddPost />} />
          <Route exact path='/notification' render={() => <Notification />} />
        </Switch>
      </Box>
    </Fragment>
  );
}
