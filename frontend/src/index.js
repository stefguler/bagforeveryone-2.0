import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import store from "./redux/Store";
import { GlobalStyle } from "./styles/global.styles";
import ShopSection from "./components/ShopSection";
import ProductPage from "./components/ShopSection/ProductPage/ProductPage";
import Cart from "./components/ShopSection/Cart";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<>
  {/*<Provider store={store}>*/}
    <GlobalStyle />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/shop" element={<ShopSection />} />
        <Route path="/shop/:id" element={<ProductPage />} />
        <Route path="/shop/cart" element={<Cart/>} />
      </Routes>
    </BrowserRouter>
  {/*</Provider>*/}
</>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
