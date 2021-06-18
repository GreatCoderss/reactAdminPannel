import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { useStyles } from "../BodyComponent/BodyStyles";

export const PageHeader = ({ label, pageTitle }) => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={12} sm={12}>
        <Typography variant='body2' className={classes.pageSubTitle}>
          {label}
        </Typography>
        <Typography variant='h5' className={classes.pageTitle}>
          {pageTitle}
        </Typography>
      </Grid>
    </Grid>
  );
};
