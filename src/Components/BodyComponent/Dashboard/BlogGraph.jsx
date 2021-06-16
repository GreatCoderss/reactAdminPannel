import {
  Card,
  CardContent,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import { blue, red } from "@material-ui/core/colors";
import React, { useEffect, useState } from "react";
import { fakeArrayGenrator } from "../../../Common/fakeDataGenetator";
import { lineGraphComponent } from "../../../Common/GraphComponent";
import { useStyles } from "../BodyStyles";

export default function BlogGraph() {
  const classes = useStyles();
  const [fetched, setFetched] = useState(false);

  const GraphData = [
    {
      id: "userOverViewGraph",
      dataSets: [
        {
          label: "Current Month",
          data: fakeArrayGenrator({ length: 30, digit: 100 }),
          borderColor: blue["A400"],
          backgroundColor: "rgb(21 101 192 /50%)",
          fill: true,
          tension: 0.5,
        },
        {
          label: "Last Month",
          data: fakeArrayGenrator({ length: 30, digit: 100 }),
          borderColor: red[500],
          backgroundColor: "rgb(198 40 40 /30%)",
          fill: true,
          tension: 0.5,
        },
      ],
      xAxisLabels: ["week1", "week2", "week3", "week4", "week5"],
    },
    {
      id: "deviceOverViewGraph",
      type: "pie",
      dataSets: [
        {
          label: "DeskTop",
          data: fakeArrayGenrator({ length: 3, digit: 1000 }),
          borderColor: [blue[50], blue[800], blue[500]],
          backgroundColor: [blue["A200"], blue[400], blue[200]],
          fill: true,
          tension: 0.5,
        },
      ],
      xAxisLabels: ["Desktop", "Tablet", "Mobile"],
    },
  ];

  useEffect(() => {
    if (!fetched) {
      GraphData.map((item, i) =>
        lineGraphComponent({
          id: item.id,
          type: item.type,
          dataSets: item.dataSets,
          xAxisLabels: item.xAxisLabels,
        })
      );
    }
    setFetched(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetched]);
  return (
    <Grid container className={classes.section} spacing={1}>
      <Grid item xs={12} sm={7} md={7}>
        <Card component={Paper}>
          <CardContent>
            <Typography variant='h6' className={classes.cardTitle} align='left'>
              User Overviews
            </Typography>
          </CardContent>
          <Divider />
          <CardContent>
            <canvas
              id='userOverViewGraph'
              className={classes.generalGraph}></canvas>
          </CardContent>
        </Card>
      </Grid>
      {/* usedByDevices */}
      <Grid item xs={12} sm={5} md={5}>
        <Card component={Paper}>
          <CardContent>
            <Typography variant='h6' className={classes.cardTitle} align='left'>
              Used by graph
            </Typography>
          </CardContent>
          <Divider />
          <CardContent>
            <canvas
              id='deviceOverViewGraph'
              className={classes.generalGraph}></canvas>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
