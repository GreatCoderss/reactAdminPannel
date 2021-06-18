import React, { useEffect, useState } from "react";
import {
  Box,
  Card,
  Grid,
  CardHeader,
  CardContent,
  Avatar,
  Button,
  CircularProgress,
} from "@material-ui/core";
import { useStyles } from "./BodyStyles";
import { PageHeader } from "../Common/CommonComponent";
import { GetPost } from "../../utils/blogRequest";
import { Typography } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";

export default function BlogComponent() {
  const classes = useStyles();
  const [fetched, setfetched] = useState(false);
  const [posts, setPosts] = useState([]);

  //calling getpost api
  useEffect(() => {
    if (!fetched) {
      GetPost({ limit: 24 }).then(({ data: { data } }) => {
        setPosts(data);
      });
      setfetched(true);
    }
  }, [fetched]);
  return (
    <Box>
      <PageHeader label='post' pageTitle='Blog Posts' />

      <Grid container spacing={1}>
        {posts.length === 0 ? (
          <Box p={3} style={{ width: "100%", textAlign: "center" }}>
            <CircularProgress />
          </Box>
        ) : (
          posts.map((item, i) => (
            <Grid key={i} item xs={12} sm={4}>
              <Card>
                <CardHeader
                  avatar={
                    <Avatar aria-label='recipe' src={item.owner.picture} />
                  }
                  title={item.owner.firstName}
                />
                <img
                  alt={item.text}
                  src={item.image}
                  className={` ${classes.responsiveImg} ${classes.cardImage}`}
                />
                <CardContent>
                  <Typography variant='body1' color='textSecondary'>
                    {item.text}
                  </Typography>
                </CardContent>
                <CardContent>
                  <Button
                    size='small'
                    color='secondary'
                    startIcon={<FavoriteIcon />}>
                    {item.likes}
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))
        )}
      </Grid>
    </Box>
  );
}
