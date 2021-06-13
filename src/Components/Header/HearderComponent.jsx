import React, { Fragment } from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import { useStyles } from "./HeaderStyle";
import NavbarComponent from "./NavbarComponent";
import Sidenav from "./Sidenav";

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
        <Typography variant='h6'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          assumenda eius amet quod nihil voluptas sunt quo sequi at reiciendis
          quidem eligendi odio similique aperiam dolorem veniam sint deleniti,
          iusto corrupti. Quae distinctio aspernatur aliquid, consequatur
          exercitationem quisquam qui id minus alias omnis totam iusto incidunt
          sint, animi, blanditiis doloremque.
        </Typography>
      </Box>
    </Fragment>
  );
}
