import React, { FC } from "react";
import { RedText } from "./styles";
import { Typography } from "@mui/material";

interface Props {
  title: string;
  children: any;
}

export const Header: FC<Props> = ({ title, children }) => {
  return (
    <RedText>
      {children}
      <Typography
        style={{
          color: "#ffffff",
          padding: "20px 0",
          marginLeft: "-25px",
          fontSize: "20px",
          letterSpacing: "1px",
          fontWeight: "bold",
        }}
        component="h1"
      >
        {title}
      </Typography>
      <div></div>
    </RedText>
  );
};
