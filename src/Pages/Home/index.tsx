import { TextField } from "@mui/material";
import React from "react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { CardProducts } from "../../components/CardProducts";
import { Input, InputContainer } from "./styles";

function Home() {
  return (
    <div className="App">
      <Header />
      <InputContainer>
        <Input placeholder="Search..." />
      </InputContainer>
      <CardProducts />
      <Footer />
    </div>
  );
}

export default Home;
