import styled from "styled-components";

import { makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  card: { borderRadius: "15px", margin: "auto", marginTop: "15px" },
}));

export const ButtonCard = styled.div`
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
export const TitleContainer = styled.div`
  background-color: "rgb(190, 114, 48)";
  color: "rgb(255, 255, 255)";
  height: "50px";
  margin: "auto";
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: -10px;
`;

export const Input = styled.input`
  width: 80%;
  justify-content: center;
  background-color: rgb(255, 255, 255);
  border-radius: 20.5px;
  border-color: rgb(189, 189, 189);
  border-width: 1px;
  font-size: 16px;
  height: 40px;
  padding: 0 23px;
`;
