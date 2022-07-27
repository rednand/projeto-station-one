import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Product from "./Pages/Product";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route element={<App />} path="/" />
        <Route element={<Product />} path="/product" />
      </Routes>
    </Router>
  </React.StrictMode>
);
