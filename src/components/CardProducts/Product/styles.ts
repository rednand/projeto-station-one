import styled from "styled-components";

import { makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  card: { borderRadius: "15px", margin: "auto", marginTop: "15px" },
  title: {
    backgroundColor: "rgb(190, 114, 48)",
    color: "rgb(255, 255, 255)",
    margin: "auto",
    display: "flex",
    justifyContent: "center",
    padding: "10px",
    fontWeight: "bold",
    letterSpacing: "2px",
    fontFamily: "Inter",
  },
  address: {
    color: "rgb(66, 66, 66)",
    fontSize: "13px",
    fontWeight: "bold",
    minHeight: "16px",
  },
  description: {
    color: "rgb(66, 66, 66)",
    minHeight: "17px",
  },
}));

export const TitleContainer = styled.div`
  background-color: "rgb(190, 114, 48)";
  color: "rgb(255, 255, 255)";
  height: "50px";
  margin: "auto";
`;

export const ButtonProdutos = styled.div`
  background-color: rgb(244, 161, 93);
  width: 40%;
  font-family: "Inter", sans-serif;
  margin: 12px auto 20px;
  border-radius: 300px;
  display: flex;
  justify-content: center;
  padding: 10px;
  font-size: 13px;
  font-weight: 900;
`;
