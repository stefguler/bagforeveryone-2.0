import Catalog from "../../components/ShopSection/Catalog/Catalog.js";
// import Sidebar from "../../components/ShopSection/Sidebar/Sidebar.js";
// import StickyCart from "../../components/ShopSection/StickyCart/StickyCart.js";
import { useState } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IconContext } from "react-icons";
import Sidebar from "react-sidebar";

import { PageSection, StickyCartContainer, testWidth } from "./Shop.styled";

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
              <testWidth>this will be the stuff</testWidth>
              <div>more content</div>
              <div>way content</div>
              <div>content never ends</div>
            </>
          }
          open={sidebarOpen}
          pullRight={true}
          onSetOpen={onSetSidebarOpen}
          styles={{ sidebar: { background: "white", width: "20rem" } }}
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
