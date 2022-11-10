import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./styles/global.styles";
import ShopPage from "./pages/shop/ShopPage.js";
import CheckoutPage from "./pages/checkout/CheckoutPage.js";
import Homepage from '../src/pages/homepage/Homepage'
import CreateProduct from '../src/pages/create-product/CreateProduct'
import Product from "./pages/product/Product";
import RegisterPage from "./pages/login/RegisterPage";
import ValidatePage from "./pages/login/ValidatePage";
import LoginPage from "./pages/login/LoginPage";
import VerifiedPage from "./pages/login/VerifiedPage";
import TeamPage from "./pages/team/TeamPage";
import OrderConfirmationPage from "./pages/orderConfirmation/OrderConfirmationPage";
import AboutPage from "./pages/about/About";
import UpdateStockPage from "./pages/updateStock/UpdateStock"
import { Provider } from 'react-redux'
import { store } from './redux/store';
import Storiespage from './pages/stories/Storiespage';
import StoryPage from "./pages/story-page/StoryPage";
import CreateStory from "./pages/create-story/CreateStory";
import { CookiesProvider } from "react-cookie";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <GlobalStyle />
    <CookiesProvider>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<AboutPage />} />
        <Route path="/story" element={<Storiespage />} />
        <Route path="/story/:id" element={<StoryPage />} />
        <Route path="/story/create" element={<CreateStory />} />
        <Route path="/create" element={<CreateProduct />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/shop/:id" element={<Product />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/orderconfirmed" element={<OrderConfirmationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/validate" element={<ValidatePage />} />  
        <Route path="/verified" element={<VerifiedPage />} />     
        <Route path="/team" element={<TeamPage />} /> 
        <Route path="/updateStock" element={<UpdateStockPage />} /> 
      </Routes>
    </BrowserRouter>
    </CookiesProvider>
  </Provider>
);
