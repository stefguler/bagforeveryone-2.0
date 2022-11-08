import Catalog from "../Catalog/Catalog.js";
import { useState } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { BsArrowRight } from "react-icons/bs";
import { IconContext } from "react-icons";
import Sidebar from "react-sidebar";
import { useCookies } from 'react-cookie';
import { useEffect } from "react";

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

} from "./Shop.styled";
import { useNavigate } from "react-router-dom";


// const product1 = {
//   id: 1,
//   img: "../assets/images/product/product_olive_backbag.jpg",
//   title: "Shopper Olive",
//   price: 100,
// };

// const product2 = {
//   id: 2,
//   img: "../assets/images/product/product_red_backbag.jpg",
//   title: "Shopper red",
//   price: 100,
// };

// const product3 = {
//   id: 2,
//   img: "../assets/images/product/product_red_backbag.jpg",
//   title: "Shopper red",
//   price: 100,
// };

// let products = [product1, product2, product3];

export default function Shop() {
  const [cookies, setCookie, removeCookie] = useCookies(['shoppingcart']);
  const [sidebarOpen, setSidebarOpen] = useState(false);
 
  const navigate = useNavigate();

  // useEffect(() => {
  //   removeCookie(['shoppingcart'])
    
  // }, [])
  

  const onSetSidebarOpen = (open) => {
    setSidebarOpen(open);
  };

  const handleNavigateToCheckout = () => {
    navigate("/checkout")
  }

const handleAddItem = () => {

  // setCookie('Products', products, { path: "/"});
  // console.log(cookies.Products)
  // console.log(cookies.Products.length)

}

// const handleAddProduct = (id) => {
//   console.log(id)
//   console.log(products[id])
//   setCookie(prev => [...prev, products[id]],  { path: "/"});
//   console.log(cookies.Products)

// }

const handleRemoveProduct = (id) => {

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
                <>
                {cookies.Products?.map((product, idx) => {
                  return (
                    <>
                      <ProductContainer key = {idx}>
                        <img src={product.img} alt="product in cart"></img>
                        <div>
                          <span>{product.title}</span>
                          <span>CHF {product.price}</span>
                          <AddRemoveContainer>
                            {/* <div onClick={() => handleAddProduct(product.id)}>+</div> */}
                            {cookies.Products.filter(elem => elem.id === product.id).length}
                            <div onClick={() => handleRemoveProduct(product.id)}>-</div>
                          </AddRemoveContainer>
                        </div>
                      </ProductContainer>
                    </>
                  );
                })}
                </>
              </Content>
              <SidebarFooter>
                <SubTotalContainer>
                  <span>Subtotal</span>
                  <span style={{fontWeight:"bold"}}>
                  CHF {" "}
                    {/* {products.reduce((prev, curr) => prev + curr.price, 0)}                    */}
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
              position: "fixed",
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
            {/* <div>{cookies.Products.length}</div> */}
          </StickyCartContainer>
          <Catalog />
        </Sidebar>
      </PageSection>
    </>
  );
}
