import React, { useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CircularProgress,
  Grid,
  Typography,
} from "@material-ui/core";
import { PageHeader } from "../../Common/Components";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { GetPosts } from "../../Common/requestApi";
import { useStyles } from "./BodyStyles";

export default function BlogPost() {
  const classes = useStyles();
  const [Fetched, setFetched] = useState(false);
  const [Posts, setPosts] = useState([]);

  //calling posts api
  useEffect(() => {
    !Fetched &&
      GetPosts({ limit: 25 }).then(({ data: { data } }) => {
        setPosts(data);
        setFetched(true);
        console.log("dataPost:", data);
      });
  }, [Fetched]);
  return (
    <Box mt={2}>
      <PageHeader label='Posts' title='Blog Posts' />
      <Grid container spacing={1}>
        {Posts.length <= 0 ? (
          <Typography component='p' align='center' style={{ width: "100%" }}>
            <CircularProgress color='primary' />
          </Typography>
        ) : (
          Posts.map((item, i) => (
            <Grid
              key={i}
              item
              xs={12}
              sm={4}
              style={{ maxWidth: "400px", margin: "10px auto" }}>
              <Card>
                <CardHeader
                  avatar={
                    <Avatar
                      aria-label={item.owner.firstName}
                      src={item.owner.picture}></Avatar>
                  }
                  title={item.owner.firstName}
                  // subheader={'Posted on'+ item.owner.email}
                />
                <img
                  src={item.image}
                  alt={item.text}
                  className={`${classes.responsiveImg} ${classes.cardImage}`}
                />

                <CardContent>
                  <Typography
                    variant='body2'
                    color='textSecondary'
                    component='p'>
                    {item.text}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    startIcon={<FavoriteIcon color='secondary' />}
                    size='small'
                    color='secondary'>
                    {item.likes}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))
        )}
      </Grid>
    </Box>
  );
}
