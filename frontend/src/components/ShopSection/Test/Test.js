import Catalog from "../Catalog/Catalog.js";
import { useState } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { BsArrowRight } from "react-icons/bs";
import { IconContext } from "react-icons";
import Sidebar from "react-sidebar";

import {
  PageSection,
  StickyCartContainer,
  SidebarHeader,
  Content,
  ProductContainer,
  AddRemoveContainer,
  SidebarFooter,
  SubTotalContainer,
  CheckoutContainer

} from "./Test.styled";
import { useNavigate } from "react-router-dom";
import ProductPage from "../ProductPage/ProductPage.js";

const product1 = {
  img: "../assets/images/product/product_olive_backbag.jpg",
  title: "Shopper Olive",
  price: 100,
};

const product2 = {
  img: "../assets/images/product/product_red_backbag.jpg",
  title: "Shopper red",
  price: 100,
};

const product3 = {
  img: "../assets/images/product/product_red_backbag.jpg",
  title: "Shopper red",
  price: 100,
};

let products = [product1, product2, product3, product3];

export default function Shop() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const onSetSidebarOpen = (open) => {
    setSidebarOpen(open);
  };

  const handleNavigateToCheckout = () => {
    navigate("/shop/1")
  }

  return (
    <>
      <PageSection>
        <Sidebar
          sidebar={
            <>
              <SidebarHeader>
                <IconContext.Provider value={{ size: "50px", className: "arrow"}}>
                  <BsArrowRight onClick={() => onSetSidebarOpen(false)} />
                </IconContext.Provider>
                <p>Cart</p>
              </SidebarHeader>
              <Content>
                {products.map((product, idx) => {
                  return (
                    <>
                      <ProductContainer key = {idx}>
                        <img src={product.img} alt="product in cart"></img>
                        <div>
                          <span>{product.title}</span>
                          <span>CHF {product.price}</span>
                          <AddRemoveContainer>
                            <div>+</div>
                            1
                            <div>-</div>
                          </AddRemoveContainer>
                        </div>
                      </ProductContainer>
                    </>
                  );
                })}
              </Content>
              <SidebarFooter>
                <SubTotalContainer>
                  <span>Subtotal</span>
                  <span style={{fontWeight:"bold"}}>
                  CHF {" "}
                    {products.reduce((prev, curr) => prev + curr.price, 0)}                   
                    </span>
                </SubTotalContainer>
                <CheckoutContainer onClick={handleNavigateToCheckout}>Checkout</CheckoutContainer>
              </SidebarFooter>
            </>
          }
          open={sidebarOpen}
          pullRight={true}
          onSetOpen={onSetSidebarOpen}
          styles={{
            sidebar: {
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
              alignItems: "center",
              background: "white",
              width: "20rem",
            },
          }}
        >
          <StickyCartContainer onClick={() => onSetSidebarOpen(true)}>
            <IconContext.Provider value={{ size: "100px" }}>
              <HiOutlineShoppingBag />
            </IconContext.Provider>
            <div>5</div>
          </StickyCartContainer>
          <ProductPage />
        </Sidebar>
      </PageSection>
    </>
  );
}
