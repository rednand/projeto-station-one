import { Box, Card, CardContent, Typography } from "@mui/material";
import React, { FC, useState } from "react";
import { ImageHeader, useStyles } from "./styles";
import { Header } from "../../Header";
import { PickerTimeComponent } from "../../PickerTime";
import ArrowBack from "@material-ui/icons/ArrowBack";
import { CardTypes } from "..";
import { ButtonBottom, DivButton } from "../../../styles";

interface Props {
  title: string;
  product: [];
  imagemurl: string;
  setDisplay: Function;
  endereco: string;
}

export const Product: FC<Props> = ({
  endereco,
  title,
  product,
  imagemurl,
  setDisplay,
}) => {
  const classes = useStyles();

  console.log(endereco, title, product, imagemurl);
  const [address, setAddress] = useState<any>("");
  const [showComponent, setShowComponent] = useState<CardTypes>(() => {
    if (address.length <= 0) {
      return "card";
    } else {
      return "produto";
    }
  });

  const renderProduct = () => {
    switch (showComponent) {
      case "card": {
        return (
          <>
            <Box style={{ marginBottom: "10px" }}>
              <Header
                children={
                  <ArrowBack
                    className={classes.arrowbackicon}
                    onClick={() => {
                      setAddress("");
                      setShowComponent("card");
                      setDisplay();
                    }}
                  ></ArrowBack>
                }
                title={title}
              ></Header>
              <ImageHeader src={imagemurl} alt="" className={classes.media} />
              <Card className={classes.card} sx={{ minWidth: 275 }}>
                <>
                  <Typography
                    style={{
                      backgroundColor: "rgb(255, 255, 255)",
                      color: "rgb(0, 0, 0)",
                      margin: "auto",
                      display: "flex",
                      justifyContent: "center",
                      padding: "10px 0",
                      fontSize: "20px",
                      fontWeight: "bolder",
                      fontFamily: "Inter",
                      position: "absolute",
                      width: "94%",
                      top: "32vh",
                      zIndex: -1,
                      borderRadius: "6px",
                    }}
                    component="h3"
                  >
                    {title}
                  </Typography>
                  {product.map(({ descricao, delivery, preco, produto }) => {
                    return (
                      <>
                        <Typography
                          color="text.secondary"
                          style={{ padding: "20px 2px 10px" }}
                        >
                          {delivery}
                        </Typography>
                        <Card
                          sx={{
                            minWidth: 275,
                            height: "40vh",
                            borderRadius: "4px",
                          }}
                        >
                          <CardContent>
                            <Typography
                              color="text.secondary"
                              style={{
                                display: "flex",
                                justifyContent: "right",
                                marginTop: "10rem",
                              }}
                            >
                              {preco}
                            </Typography>
                            <Typography style={{ fontWeight: "bolder" }}>
                              {produto}
                            </Typography>
                            <Typography variant="body2">{descricao}</Typography>
                          </CardContent>
                        </Card>
                      </>
                    );
                  })}
                </>
              </Card>
            </Box>
            <DivButton>
              <ButtonBottom
                onClick={(e: number) => {
                  setAddress(endereco);
                  setShowComponent("produto");
                }}
              >
                START ORDER
              </ButtonBottom>
            </DivButton>
          </>
        );
      }
      case "produto": {
        return (
          <PickerTimeComponent
            endereco={endereco}
            title={title}
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
      <Box>{renderProduct()}</Box>
    </>
  );
};
