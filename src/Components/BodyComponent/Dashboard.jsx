import React, { useEffect, useState } from "react";
import { Box, Card, CardContent, Grid, Typography } from "@material-ui/core";
import { useStyles } from "./BodyStyles";
import GraphComponent from "../../Common/GraphComponent";

export default function Dashboard() {
  const classes = useStyles();
  const [hasFetched, setHasFetched] = useState(false);
  const DisplayData = [
    { label: "Post", value: "2,390" },
    { label: "Pages", value: "180" },
    { label: "New Visitor", value: "450" },
    { label: "Total Visitor", value: "37450" },
  ];

  //updating the graph
  useEffect(() => {
    if (!hasFetched) {
      console.log("DataId", Object.values(DisplayData));
      Object.values(DisplayData).map((item) => {
        GraphComponent({ id: item.label });
        console.log(item.label);
      });
      setHasFetched(true);
      console.log("graph runs ");
    }
  }, [DisplayData]);

  return (
    <Box mt={2}>
      {/* //title section  */}
      <Grid container>
        <Grid item xs={12}>
          <Typography variant='button' className={classes.pageLabel}>
            {" "}
            Dashboard{" "}
          </Typography>
          <Typography
            variant='h5'
            component='h2'
            className={classes.pageHeader}>
            {" "}
            Blog Overview
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        {DisplayData.map((item, i) => (
          <Grid item xs={6} sm={3} md={3}>
            <Card>
              <CardContent className={classes.displayCard}>
                <canvas
                  id={item.label}
                  className={classes.displayCardGraph}></canvas>
                <Box className={classes.cardDataContent}>
                  <Typography
                    variant='subtitle2'
                    className={classes.cardLabel}
                    gutterBottom={true}>
                    {item.label}
                  </Typography>
                  <Typography
                    variant='h4'
                    component='h2'
                    className={classes.cardHeader}>
                    {item.value}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      {/* <canvas id='myChart' width='400' height='400'></canvas> */}
    </Box>
  );
}
