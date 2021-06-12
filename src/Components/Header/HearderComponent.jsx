import React, { Fragment } from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import NavbarComponent from "./NavbarComponent";
import { useStyles } from "./HeaderStyle";

export default function HearderComponent() {
  const classes = useStyles();
  return (
    <Fragment>
      <NavbarComponent />
      <Box className={classes.wrapper}>
        <Grid container>
          <Grid item xs={12} sm={6}>
            <Typography variant='h3' component='h4' className={classes.title}>
              React Tutorials for beginnerss
            </Typography>
            <Typography variant='h6'>
              Learn React by bulding a color plate project for absolute
              begainnerss
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            svga
          </Grid>
        </Grid>
      </Box>
    </Fragment>
  );
}
