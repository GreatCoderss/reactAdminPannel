import React, { useEffect, useState } from "react";
import { Box, Card, Grid, Typography, Button } from "@material-ui/core";
import { useStyles } from "../BodyStyles";
import { PageHeader } from "../../Common/CommonComponent";
import { DisplayCardGraph } from "../../Common/GraphComponent";
import { CardContent } from "@material-ui/core";

import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import {
  fakeArrayDataGenerator,
  randomValueGenerator,
} from "../../../utils/fakeArrayDataGenetator";
import {
  amber,
  green,
  indigo,
  lightGreen,
  red,
} from "@material-ui/core/colors";
import { blue } from "@material-ui/core/colors";
import UserOverviewComponent from "./UserOverviewComponent";
import { GetPost, GetUser } from "../../../utils/blogRequest";
import ListSection from "./ListSection";

export default function Dashboard() {
  const classes = useStyles();
  const [fetched, setFetched] = useState(false);
  const [posts, setPosts] = useState([]);
  const [authors, setauthors] = useState([]);

  const DisplayData = [
    {
      label: "Post",
      value: randomValueGenerator({ digit: 1000 }),
      icon: <ArrowDropUpIcon />,
      iconLabel: "4%",
    },
    {
      label: "Pages",
      value: randomValueGenerator({ digit: 100 }),
      icon: <ArrowDropUpIcon />,
      iconLabel: "9%",
    },
    {
      label: "New Visitor",
      value: randomValueGenerator({ digit: 100 }),
      icon: <ArrowDropDownIcon />,
      iconLabel: "23%",
    },
    {
      label: "Total visitor",
      value: randomValueGenerator({ digit: 1000 }),
      icon: <ArrowDropDownIcon />,
      iconLabel: "30%",
    },
  ];

  const GraphCardData = [
    {
      id: "Post",
      data: fakeArrayDataGenerator({ count: 9, digit: 100 }),
      brColor: blue[500],
      bgColor: blue[50],
    },
    {
      id: "Pages",
      data: fakeArrayDataGenerator({ count: 9, digit: 100 }),
      brColor: indigo[500],
      bgColor: indigo[50],
    },
    {
      id: "New Visitor",
      data: fakeArrayDataGenerator({ count: 9, digit: 100 }),
      brColor: lightGreen[500],
      bgColor: lightGreen[50],
    },
    {
      id: "Total visitor",
      data: fakeArrayDataGenerator({ count: 9, digit: 100 }),
      brColor: amber[500],
      bgColor: amber[50],
    },
  ];

  useEffect(() => {
    if (!fetched) {
      GraphCardData.map((item, i) =>
        DisplayCardGraph({
          id: item.id,
          data: item.data,
          brColor: item.brColor,
          bgColor: item.bgColor,
        })
      );
      setFetched(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetched]);

  // for api calling
  useEffect(() => {
    if (!fetched) {
      GetPost({ limit: 5 }).then(({ data: { data } }) => {
        setPosts(data);
      });
      GetUser({ limit: 5 }).then(({ data: { data } }) => {
        setauthors(data);
      });
      setFetched(true);
    }
  }, [fetched]);

  return (
    <Box>
      {/* section title
      section card
      section graph
      section posts */}

      <PageHeader label='Dashboard' pageTitle='blog Overview' />
      <Grid container spacing={1}>
        {DisplayData.map((item, i) => (
          <Grid item xs={6} sm={3} key={i}>
            <Card>
              <CardContent className={classes.cardContent}>
                <canvas
                  id={item.label}
                  className={classes.displayCardGraph}></canvas>

                <Typography variant='body2' className={classes.cardLabel}>
                  {item.label}
                </Typography>
                <Typography
                  variant='h5'
                  component='h6'
                  className={classes.cardTitle}>
                  {item.value}
                </Typography>
                <Typography
                  component='p'
                  style={{
                    textAlign: "center",
                    marginBottom: "0px",
                  }}>
                  <Button
                    size='small'
                    className={classes.ratioBtn}
                    startIcon={item.icon}
                    style={{
                      color: item.label[0] === "P" ? green[600] : red[500],
                    }}>
                    {item.iconLabel}
                  </Button>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <UserOverviewComponent />

      <ListSection posts={posts} authors={authors} />
    </Box>
  );
}
