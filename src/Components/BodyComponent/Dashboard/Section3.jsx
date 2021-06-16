import React, { useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CircularProgress,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
} from "@material-ui/core";
import { useStyles } from "../BodyStyles";
import { GetPosts, GetUsers } from "../../../Common/requestApi";

export default function Section3() {
  const classes = useStyles();
  const [hasFetched, setHasFetched] = useState(false);
  const [posts, setPosts] = useState([]);
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    if (!hasFetched) {
      GetPosts({ limit: 5 }).then(({ data: { data } }) => {
        setPosts(data);
        console.log(data);
      });
      GetUsers({ limit: 5 }).then(({ data: { data } }) => {
        setAuthors(data);
        console.log("setAuthors", data);
      });
      setHasFetched(true);
    }
  }, [hasFetched]);

  return (
    <Grid container className={classes.section} spacing={1}>
      <Grid item xs={12} sm={5} md={5}>
        <Card component={Paper}>
          <CardContent>
            <Typography variant='h6' className={classes.cardTitle} align='left'>
              Top Author
            </Typography>
          </CardContent>
          <Divider />
          <List>
            {authors.length === 0 ? (
              <Box className={classes.progressbarContainer}>
                <CircularProgress color='primary' />
              </Box>
            ) : (
              authors.map((item, i) => (
                <ListItem key={i}>
                  <ListItemIcon>
                    <Avatar
                      src={item.picture}
                      alt={item.text}
                      className={classes.avatar}></Avatar>
                  </ListItemIcon>
                  <ListItemText
                    primary={item.firstName}
                    secondary={item.email}></ListItemText>
                </ListItem>
              ))
            )}
          </List>
        </Card>
      </Grid>
      {/* usedByDevices */}
      <Grid item xs={12} sm={7} md={7}>
        <Card component={Paper}>
          <CardContent>
            <Typography variant='h6' className={classes.cardTitle} align='left'>
              Latest Posts
            </Typography>
          </CardContent>
          <Divider />
          <List>
            {posts.length === 0 ? (
              <Box className={classes.progressbarContainer}>
                <CircularProgress color='primary' />
              </Box>
            ) : (
              posts.map((item, i) => (
                <ListItem key={i}>
                  <ListItemIcon>
                    <Avatar
                      src={item.image}
                      alt={item.text}
                      className={classes.avatar}></Avatar>
                  </ListItemIcon>
                  <ListItemText className={classes.listTitle}>
                    {item.text}
                  </ListItemText>
                </ListItem>
              ))
            )}
          </List>
        </Card>
      </Grid>
    </Grid>
  );
}
