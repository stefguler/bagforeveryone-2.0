import Catalog from "../../components/ShopSection/Catalog/Catalog.js";
// import Sidebar from "../../components/ShopSection/Sidebar/Sidebar.js";
// import StickyCart from "../../components/ShopSection/StickyCart/StickyCart.js";
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
  SidebarFooter
} from "./Shop.styled";

const product1 = {
  img: "../assets/images/product/product_olive_backbag.jpg",
  title: "Shopper Olive",
  price: 100,
};

let products = [product1];

export default function Shop() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const onSetSidebarOpen = (open) => {
    setSidebarOpen(open);
  };

  return (
    <>
      <PageSection>
        <Sidebar
          sidebar={
            <>
              <SidebarHeader>
                <IconContext.Provider value={{ size: "50px" }}>
                  <BsArrowRight />
                </IconContext.Provider>
                <span>Cart</span>
              </SidebarHeader>
              <Content>
                {products.map((product, idx) => {
                  return (
                    <>
                      <ProductContainer>
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
              <SidebarFooter>content never ends</SidebarFooter>
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
              padding: "1rem",
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
          <Catalog />
        </Sidebar>
      </PageSection>
    </>
  );
}
