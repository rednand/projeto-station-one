import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React, { FC, useEffect, useState } from "react";
import { useStyles } from "./styles";

interface Props {
  title: string;
  product: string;
  imagemurl: string;
}

export const Product: FC<Props> = ({ title, product, imagemurl }) => {
  const classes = useStyles();
  return (
    <>
      <Box padding={1}>
        <Card className={classes.card} sx={{ minWidth: 275 }}>
          <Typography className={classes.title} component="h3">
            {title}
          </Typography>

          <CardMedia
            component="img"
            height="250"
            image={imagemurl}
            alt="Paella dish"
          />
          <CardContent>
            <Typography
              variant="body2"
              color="text.secondary"
              className={classes.address}
            ></Typography>
            <Typography
              marginTop={2}
              variant="body2"
              color="text.secondary"
              className={classes.description}
            ></Typography>
          </CardContent>
        </Card>
      </Box>
      <Button onClick={() => {}}>VER PRODUTOS</Button>
    </>
  );
};
