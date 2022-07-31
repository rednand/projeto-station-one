import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { ButtonCard, Input, InputContainer, TitleContainer } from "./styles";
import LocationOn from "@material-ui/icons/LocationOn";
import { useStyles } from "./styles";
import { Product } from "./Product";
import { Footer } from "../Footer";
import { RedText } from "../Header/styles";
import { ButtonBottom } from "../../styles";

export type CardTypes = "card" | "produto" | "produto-open";

export const CardProducts = () => {
  const classes = useStyles();
  const [data, setData] = useState<any[]>([]);
  const [produto, setProduto] = useState<any>([]);

  const [showComponent, setShowComponent] = useState<CardTypes>(() => {
    if (produto.length <= 0) {
      return "card";
    } else {
      return "produto";
    }
  });

  useEffect(() => {
    fetch("./src/api/mockjson.json", {
      headers: { Accept: "application/json" },
    })
      .then((res) => res.json())
      .then((response) => setData(response.data));
  }, []);

  const renderCard = () => {
    switch (showComponent) {
      case "card": {
        return (
          <>
            <RedText />
            <Box padding={1}>
              <InputContainer>
                <Input placeholder="Search..." />
              </InputContainer>
              {data.map(({ title, imagemurl, endereco, descricao, id }) => {
                return (
                  <Card className={classes.card} sx={{ minWidth: 275 }}>
                    <TitleContainer>
                      <Typography
                        style={{
                          backgroundColor: "rgb(190, 114, 48)",
                          color: "rgb(255, 255, 255)",
                          margin: "auto",
                          display: "flex",
                          justifyContent: "center",
                          padding: "10px",
                          fontWeight: "bold",
                          letterSpacing: "2px",
                          fontFamily: "Inter",
                        }}
                        component="h3"
                      >
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
                        style={{
                          color: "rgb(66, 66, 66)",
                          fontSize: "13px",
                          fontWeight: "bold",
                          minHeight: "16px",
                        }}
                      >
                        <LocationOn fontSize="small" /> {endereco}
                      </Typography>
                      <Typography
                        marginTop={2}
                        variant="body2"
                        color="text.secondary"
                        style={{ color: "rgb(66, 66, 66)", minHeight: "17px" }}
                      >
                        {descricao}
                      </Typography>
                    </CardContent>
                    <ButtonCard
                      onClick={(e: number) => {
                        const produto = data.find((item: any) =>
                          item.title.includes(title)
                        );
                        setProduto(produto);
                        setShowComponent("produto");
                      }}
                    >
                      VER PRODUTOS
                    </ButtonCard>
                  </Card>
                );
              })}
            </Box>
            <Footer />
          </>
        );
      }
      case "produto": {
        return (
          <Product
            product={produto?.content}
            title={produto?.title}
            imagemurl={produto?.headercover}
            endereco={produto?.endereco}
            setDisplay={() => {
              setShowComponent("card");
            }}
          />
        );
      }
    }
  };

  return (
    <>
      <Box>{renderCard()}</Box>
    </>
  );
};
