import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { ButtonProdutos, TitleContainer } from "./styles";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useStyles } from "./styles";
import { useNavigate } from "react-router-dom";

export const CardProducts = () => {
  const classes = useStyles();
  const navegate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("./src/api/mockjson.json", {
      headers: { Accept: "application/json" },
    })
      .then((res) => res.json())
      .then((response) => setData(response.data));
  }, []);

  console.log(data, "datadata");

  return (
    <Box padding={1}>
      {data.map(({ title, imagemurl, endereco, descricao, id }) => {
        return (
          <Card className={classes.card} sx={{ minWidth: 275 }}>
            <TitleContainer>
              <Typography className={classes.title} component="h3">
                {title}
              </Typography>
            </TitleContainer>
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
              >
                <LocationOnIcon fontSize="small" /> {endereco}
              </Typography>
              <Typography
                marginTop={2}
                variant="body2"
                color="text.secondary"
                className={classes.description}
              >
                {descricao}
              </Typography>
            </CardContent>
            <ButtonProdutos
              onClick={(e: number) => {
                navegate("/product/:id");
                const produto = data.find((item: any) =>
                  item.title.includes(title)
                );
                console.log(produto, "empresa");
              }}
            >
              VER PRODUTOS
            </ButtonProdutos>
          </Card>
        );
      })}
    </Box>
  );
};
