import Catalog from "../../components/ShopSection/Catalog/Catalog.js";
// import Sidebar from "../../components/ShopSection/Sidebar/Sidebar.js";
// import StickyCart from "../../components/ShopSection/StickyCart/StickyCart.js";
import { useState } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi";
import {BsArrowRight} from 'react-icons/bs'
import { IconContext } from "react-icons";
import Sidebar from "react-sidebar";

import { PageSection, StickyCartContainer, SidebarHeader } from "./Shop.styled";

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
              <div>more content</div>
              <div>way content</div>
              <div>content never ends</div>
            </>
          }
          open={sidebarOpen}
          pullRight={true}
          onSetOpen={onSetSidebarOpen}
          styles={{
            sidebar: {
              display: "flex",
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
