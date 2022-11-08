import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./styles/global.styles";
import ShopPage from "./pages/shop/ShopPage.js";
import CheckouPage from "./pages/checkout/CheckoutPage.js";
import Homepage from '../src/pages/homepage/Homepage'
import CreateProduct from '../src/pages/create-product/CreateProduct'
import Product from "./pages/product/Product";
import Login from "./components/LoginSection/Login/Login";
import Register from "./components/LoginSection/Register/Register";
import Validate from "./components/LoginSection/Validate/Validate";
import OrderConfirmationPage from "./pages/orderConfirmation/OrderConfirmationPage";
import AboutPage from "./pages/about/About";
import UpdateStockPage from "./pages/updateStock/UpdateStock"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<>
    <GlobalStyle />
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Homepage />} />
        <Route path="/story" element={<Homepage />} />
        <Route path="/create" element={<CreateProduct />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/shop/:id" element={<Product />} />
        <Route path="/checkout" element={<CheckouPage />} />
        <Route path="/orderconfirmed" element={<OrderConfirmationPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/validate" element={<Validate />} />  
        <Route path="/about" element={<AboutPage />} /> 
        <Route path="/updateStock" element={<UpdateStockPage />} /> 

      </Routes>
    </BrowserRouter>
</>
);
