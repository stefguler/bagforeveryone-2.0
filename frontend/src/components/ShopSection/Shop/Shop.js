import Catalog from "../Catalog/Catalog.js";
import { useState } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { BsArrowRight } from "react-icons/bs";
import { IconContext } from "react-icons";
import Sidebar from "react-sidebar";
import { useEffect } from "react";
import Cart from  "../Cart/Cart"
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

export default function Shop() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  let [cart, setCart] = useState([]);
  let localCart = localStorage.getItem("cart");
  const navigate = useNavigate();


  useEffect(() => {
    localCart = JSON.parse(localCart);
    if (localCart) setCart(localCart);
  }, [])
  

  const onSetSidebarOpen = (open) => {
    setSidebarOpen(open);
  };

  const handleAddToCart = (product) => {

    const amountInCart = cart?.filter(item => item?.id === product?.id).length
      
    if (product.stock > amountInCart) {
    let cartCopy = [...cart];
      cartCopy.push(product);

      setCart(cartCopy);
      let stringCart = JSON.stringify(cartCopy);
      localStorage.setItem("cart", stringCart);
    } else {
      alert("This would exceed the available quantity")
    }
  };

const handleRemoveFromCart = (product) => {

  let cartCopy = [...cart];
  const index = cartCopy.map(object => object.id).indexOf(product.id)
  console.log(index)
  cartCopy.splice(index, 1)


  setCart(cartCopy);
  let stringCart = JSON.stringify(cartCopy);
  localStorage.setItem("cart", stringCart);

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
              {/* <Cart/> */}
              <Content>
                <>
                {
                cart.filter((value, index, self) =>
                index === self.findIndex((t) => (
                  t?.place === value?.place && t?.name === value?.name
                ))
                ).map((product, idx) => {
                  return (
                    <>
                      <ProductContainer key = {idx}>
                        <img src={product?.image} alt="product in cart"></img>
                        <div>
                          <span>{product?.name}</span>
                          <span>CHF {product?.price}</span>
                          <AddRemoveContainer>
                            <div onClick={() => handleAddToCart(product)}>+</div>
                            {cart?.filter(item => item?.id === product?.id).length}
                            <div onClick={() => handleRemoveFromCart(product)}>-</div>
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
                    {cart?.reduce((prev, curr) => prev + curr?.price, 0)}                   
                    </span>
                </SubTotalContainer>
                <CheckoutContainer onClick={() => (navigate("/checkout"))}>Checkout</CheckoutContainer>
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
            <div>
              {
              JSON.parse(localCart)?.length != undefined ?
              JSON.parse(localCart)?.length : 0
              }
              </div>
          </StickyCartContainer>
          <Catalog />
        </Sidebar>
      </PageSection>
    </>
  );
}
