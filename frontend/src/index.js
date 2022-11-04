import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./styles/global.styles";
import Shop from "./pages/shop/Shop.js";
import Homepage from '../src/pages/homepage/Homepage'
import CreateProduct from '../src/pages/create-product/CreateProduct'
import Product from "./pages/product/Product";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<>
    <GlobalStyle />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/create" element={<CreateProduct />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:id" element={<Product />} />
      </Routes>
    </BrowserRouter>
</>
);
