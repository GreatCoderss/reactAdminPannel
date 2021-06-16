import { Grid, Typography } from "@material-ui/core";
import { useStyles } from "../Components/BodyComponent/BodyStyles";

export const PageHeader = ({ label, title }) => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant='button' className={classes.pageLabel}>
          {label}
        </Typography>
        <Typography variant='h5' component='h2' className={classes.pageHeader}>
          {title}
        </Typography>
      </Grid>
    </Grid>
  );
};
