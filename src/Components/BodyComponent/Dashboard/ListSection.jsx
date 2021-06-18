import React from "react";
import {
  Grid,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  CircularProgress,
} from "@material-ui/core";
import { Avatar } from "@material-ui/core";
import { useStyles } from "../BodyStyles";
import { Typography } from "@material-ui/core";

export default function ListSection({ authors, posts }) {
  const classes = useStyles();
  return (
    <Grid container className={classes.section} spacing={1}>
      {/* //author */}
      <Grid item xs={12} sm={5}>
        <Paper>
          <List>
            <ListItem>
              <Typography variant='h6'>Top Authors</Typography>
            </ListItem>
            {/* <Box p={3} style={{ width: "100%", textAlign: "center" }}>
            <CircularProgress />
          </Box> */}
            {authors.length === 0 ? (
              <Box p={3} style={{ width: "100%", textAlign: "center" }}>
                <CircularProgress />
              </Box>
            ) : (
              authors.map((item, i) => (
                <ListItem key={i}>
                  <ListItemIcon>
                    <Avatar alt={item.firstName} src={item.picture} />
                  </ListItemIcon>
                  <ListItemText
                    primary={item.firstName}
                    secondary={item.email}></ListItemText>
                </ListItem>
              ))
            )}
          </List>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={7}>
        <Paper>
          <List>
            <ListItem>
              <Typography variant='h6'>Top Posts</Typography>
            </ListItem>
            {posts.length === 0 ? (
              <Box p={3} style={{ width: "100%", textAlign: "center" }}>
                <CircularProgress />
              </Box>
            ) : (
              posts.map((item, i) => (
                <ListItem key={i}>
                  <ListItemIcon>
                    <Avatar alt={item.id} src={item.image} />
                  </ListItemIcon>
                  <ListItemText primary={item.text}></ListItemText>
                </ListItem>
              ))
            )}
          </List>
        </Paper>
      </Grid>
      {/* post */}
      <Grid item xs={12} sm={7}></Grid>
    </Grid>
  );
}
