import styled from "styled-components";

import { makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  card: {
    borderRadius: "15px",
    margin: "auto",
    marginTop: "15px",
    padding: "10px",
  },
  arrowbackicon: {
    margin: "20px 10px 0",
    color: "#ffffff",
  },
  media: { position: "relative", zIndex: -1 },
}));

export const ImageHeader = styled.img`
  height: 195px;
  opacity: 1;
  width: 100%;
`;

export const RedText = styled.div`
  background-color: rgb(134, 41, 36);
  height: 9vh;
  position: sticky;
  top: 0;
  display: flex;
  box-shadow: rgb(0 0 0 / 30%) 0px 2px 4px;
`;
