import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@material-ui/core";
import { blue, green, lightBlue, red, teal } from "@material-ui/core/colors";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import { useStyles } from "../BodyStyles";
import GraphComponent from "../../../Common/GraphComponent";
import BlogGraph from "./BlogGraph";
import Section3 from "./Section3";
import { fakeArrayGenrator } from "../../../Common/fakeDataGenetator";
import { PageHeader } from "../../../Common/Components";

export default function Dashboard() {
  const classes = useStyles();
  const [hasFetched, setHasFetched] = useState(false);

  const DisplayData = [
    {
      label: "Post",
      value: "2,390",
      icon: <ArrowDropUpIcon />,
      iconLabel: "7%",
    },
    {
      label: "Pages",
      value: "180",
      icon: <ArrowDropUpIcon />,
      iconLabel: "5.3%",
    },
    {
      label: "New Visitor",
      value: "450",
      icon: <ArrowDropDownIcon />,
      iconLabel: "4.1%",
    },
    {
      label: "Total Visitor",
      value: "37450",
      icon: <ArrowDropDownIcon />,
      iconLabel: "2.5%",
    },
  ];

  const GraphData = [
    {
      label: "Post",
      data: fakeArrayGenrator({ length: 10, digit: 100 }),
      bgColor: lightBlue[50],
      brColor: blue["A200"],
    },
    {
      label: "Pages",
      data: fakeArrayGenrator({ length: 10, digit: 100 }),
      bgColor: blue[50],
      brColor: blue["A700"],
    },
    {
      label: "New Visitor",
      data: fakeArrayGenrator({ length: 10, digit: 100 }),
      bgColor: green[50],
      brColor: green["A400"],
    },
    {
      label: "Total Visitor",
      data: fakeArrayGenrator({ length: 10, digit: 100 }),
      bgColor: teal[50],
      brColor: teal["A400"],
    },
  ];

  //updating the graph
  useEffect(() => {
    if (!hasFetched) {
      GraphData.map((item) =>
        GraphComponent({
          id: item.label,
          data: item.data,
          bgColor: item.bgColor,
          brColor: item.brColor,
        })
      );
      setHasFetched(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [DisplayData]);

  return (
    <Box mt={2}>
      {/* //title section  */}
      <PageHeader label='Dashboard' title='Blog Overview' />

      <Grid container spacing={1} className={classes.section}>
        {DisplayData.map((item, i) => (
          <Grid key={i} item xs={6} sm={3} md={3}>
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
                  <Box className={classes.ratio}>
                    <Button
                      startIcon={item.icon}
                      size='small'
                      style={{
                        color: item.label[0] === "P" ? green[700] : red[400],
                        fontSize: "1.1rem",
                      }}>
                      {item.iconLabel}
                    </Button>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* section blog graph  */}
      <BlogGraph />
      <Section3 />
    </Box>
  );
}
