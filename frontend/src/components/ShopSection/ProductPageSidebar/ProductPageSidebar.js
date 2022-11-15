import { useState } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { BsArrowRight } from "react-icons/bs";
import { IconContext } from "react-icons";
import Sidebar from "react-sidebar";
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
  CheckoutContainer,
  FadingBackground
} from "./ProductPageSidebar.styled";
import { useNavigate } from "react-router-dom";
import ProductPage from "../ProductPage/ProductPage.js";
import { ModalProvider } from "styled-react-modal";
import StockInfoModal from "../../Utilities/Modals/StockInfoModal/StockInfoModal";
import { StickyButtonDiv } from "../../about/About.styles";

export default function ProductPageSidebar(props) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  let [cart, setCart] = useState([]);
  let localCart = localStorage.getItem("cart");
  const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY5NjQwNjYwLCJpYXQiOjE2NjgwODU0NjAsImp0aSI6IjU4NjNkOWY1MjUxZDRiNzM4NzY0NTc3MTNkZWI3YTk5IiwidXNlcl9pZCI6MX0.9gMDpZdC1yI3Os1QWDpmDOU-KU1XVeo-m-Qz-nuYiBQ";
  const [isOpen, setIsOpen] = useState(false);
  const [opacity, setOpacity] = useState(0);
  const [scenario, setScenario] = useState();


  useEffect(() => {

    localCart = JSON.parse(localCart);
    if (localCart) setCart(localCart);

   const config = {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      }),
    };
    fetch("https://bag-for-everyone.propulsion-learn.ch/backend/api/product/", config)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProducts(data);
      });
  }, [JSON.parse(localCart)?.length]);


  const handleAddToCart = (product) => {

    const amountInCart = cart?.filter(item => item?.id === product?.id).length
      
    if (product.stock > amountInCart) {
    let cartCopy = [...cart];
      cartCopy.push(product);

      setCart(cartCopy);
      let stringCart = JSON.stringify(cartCopy);
      localStorage.setItem("cart", stringCart);
    } else {
      setScenario("low stock")
      toggleModal()
      // alert("This would exceed the available quantity")
    }

  };

  const handleRemoveFromCart = (product) => {

    let cartCopy = [...cart];
    const index = cartCopy.map(object => object.id).indexOf(product.id)
    // console.log(index)
    cartCopy.splice(index, 1)


    setCart(cartCopy);
    let stringCart = JSON.stringify(cartCopy);
    localStorage.setItem("cart", stringCart);
  }

  const onSetSidebarOpen = (open) => {
    setSidebarOpen(open);
  };

  function toggleModal(e) {
    console.log("toggled")
    setOpacity(0);
    setIsOpen(!isOpen);
    console.log(isOpen)
  }

  const resetIsOpen = () => {
    setIsOpen(false)
  }


  return (
    <>
    <ModalProvider backgroundComponent={FadingBackground}>
      <PageSection>
        <Sidebar
          sidebar={
            <>
              <SidebarHeader>
                <IconContext.Provider
                  value={{ size: "50px", className: "arrow" }}
                >
                  <BsArrowRight onClick={() => onSetSidebarOpen(false)} />
                </IconContext.Provider>
                <p>Cart</p>
              </SidebarHeader>
              <Content>
                <>
                  {
                    cart?.filter((value, index, self) =>
                      index === self.findIndex((t) => (
                        t?.place === value?.place && t?.name === value?.name
                      ))
                    ).map((product, idx) => {
                      return (
                        <>
                          <ProductContainer key={idx}>
                            <img src={product?.image} alt="product in cart"></img>
                            <div>
                              <span>{product?.name}</span>
                              <span>CHF {product?.price}</span>
                              <AddRemoveContainer >
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
                  <span style={{ fontWeight: "bold" }}>
                    CHF {cart?.reduce((prev, curr) => prev + curr?.price, 0)}
                  </span>
                </SubTotalContainer>
                <CheckoutContainer onClick={() => navigate("/checkout")}>
                  Checkout
                </CheckoutContainer>
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
          <ProductPage products={products} category={props.category}/>
          <StickyButtonDiv>
                <button onClick={() => navigate("/story")}>Story</button>
          </StickyButtonDiv>
        </Sidebar>
        <StockInfoModal isOpen={isOpen} scenario={scenario} onClick={resetIsOpen}/>
      </PageSection>
      </ModalProvider>
    </>
  );

}
