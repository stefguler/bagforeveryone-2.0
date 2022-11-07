import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./styles/global.styles";
import Shop from "./pages/shop/Shop.js";
import Storiespage from '../src/pages/stories/Storiespage';
import StoryPage from "./pages/story-page/StoryPage";
import CreateProduct from '../src/pages/create-product/CreateProduct';
import Product from "./pages/product/Product";
import Login from "./components/LoginSection/Login/Login";
import Register from "./components/LoginSection/Register/Register";
import Validate from "./components/LoginSection/Validate/Validate";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<>
    <GlobalStyle />
    <BrowserRouter>
      <Routes>
        <Route path="/story" element={<Storiespage />} />
        <Route path="/story/:id" element={<StoryPage />} />
        <Route path="/create" element={<CreateProduct />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:id" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/validate" element={<Validate />} />      
      </Routes>
    </BrowserRouter>
</>
);
