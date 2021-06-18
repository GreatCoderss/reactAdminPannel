import React from "react";
import { Box } from "@material-ui/core";
import { PageHeader } from "../Common/CommonComponent";
import { Typography } from "@material-ui/core";
import { useStyles } from "./BodyStyles";

export default function Link() {
  const classes = useStyles();
  return (
    <Box className={classes.section}>
      <PageHeader label='Link1' pageTitle='Link Post' />
      <Typography color='textSecondary'>
        {" "}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quis
        ex fugiat, nemo nisi voluptatum ad et in vel voluptate quibusdam! Nulla
        reiciendis rem itaque rerum enim molestiae quis quidem corrupti
        molestias quae id harum, eos iste dignissimos? Molestias voluptatum,
        voluptates ab qui quo exercitationem odio quaerat dolorum nisi,
        architecto placeat animi facilis praesentium. Modi qui, exercitationem
        rerum consequatur aut nam, dolores necessitatibus veniam magnam
        perspiciatis ducimus iste numquam laboriosam laborum. In, praesentium
        eius mollitia reiciendis itaque non minima quia iusto iste quis debitis
        sequi temporibus molestiae, aut natus. Vel distinctio laborum nihil
        reiciendis, vitae incidunt quia fuga sint? Dolore dolores iure, in id
        laboriosam voluptatem nulla quia nesciunt quod quisquam aperiam. Id
        asperiores dolorum nisi sit, a incidunt natus hic quaerat aspernatur?
        Repellat dolorum atque inventore assumenda quasi amet at impedit vitae
        accusantium dignissimos! Doloremque maxime excepturi hic officiis totam.
        Harum nostrum, ab atque odio eos vitae ipsum neque.
      </Typography>
    </Box>
  );
}
