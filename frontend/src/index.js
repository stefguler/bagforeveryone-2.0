import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import store from "./redux/Store";
import { GlobalStyle } from "./styles/global.styles";
import ShopSection from "./components/ShopSection";
import ProductPage from "./components/ShopSection/ProductPage/ProductPage";
import Cart from "./components/ShopSection/Cart";
import Homepage from '../src/pages/homepage/Homepage'
import CreateProduct from '../src/pages/create-product/CreateProduct'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<>
  {/*<Provider store={store}>*/}
    <GlobalStyle />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/create" element={<CreateProduct />} />
        <Route path="/shop" element={<ShopSection />} />
        <Route path="/shop/:id" element={<ProductPage />} />
        <Route path="/shop/cart" element={<Cart/>} />
      </Routes>
    </BrowserRouter>
  {/*</Provider>*/}
</>
);
