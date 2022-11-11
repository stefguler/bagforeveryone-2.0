// import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Collapsible from "react-collapsible";
import {
  PageContainer,
  NavigateContainer,
  BackToCatalogContainer,
  ProductContainer,
  MediaContainer,
  Avatar,
  ImageGallery,
  GalleryItem,
  Details,
  Title,
  Price,
  Colors,
  StockAmount,
  CartContainer,
  AmountInCartInput,
  ShareContainer,
  DetailDiv,
  DetailTitle,
  ToCartButton,
  SpecialColors
} from "./ProductPage.styled";

import { IoShareSocialSharp } from "react-icons/io5";
import { BsArrowLeft } from "react-icons/bs";
import { IconContext } from "react-icons";

function ProductPage(props) {
  const { id } = useParams();
  const [selectedProduct, setSelectedProduct] = useState({});
  const [products, setProducts] = useState([]);
  let [cart, setCart] = useState([]);
  let localCart = localStorage.getItem("cart");
  const [avatar, setAvatar] = useState("");
  const navigate = useNavigate();
  const emoji = require("emoji-dictionary");
  const [amountToCart, setAmountToCart] = useState(1);
  const [colors, setColors] = useState([
    "#B2AFA0",
    "#A51919",
    "#36658F",
    "#654A30",
    "#AA8A39",
    "#4B5C19",
  ]);
  const [imageGalleryPouch, setImageGalleryPouch] = useState([
    "../assets/images/product/product_pouch_2.jpg",
    "../assets/images/product/product_pouch_3.jpg",
    "../assets/images/product/product_pouch_4.jpg",
    "../assets/images/product/product_pouch.jpg",
  ]);
  const [imageGalleryBag, setImageGalleryBag] = useState([
    "../assets/images/product/product_all_backbag_stand.jpg",
    "../assets/images/product/product_all2_backbag.jpg",
    "../assets/images/product/product_view1_backbag.jpg",
  ]);

  useEffect(() => {
    localCart = JSON.parse(localCart);
    if (localCart) setCart(localCart);

    let newProd;
    setProducts(props.products);

    if (id === "1") {
      newProd = props.products?.filter((elem) => elem.name === "Shopper Gold");
      setSelectedProduct(newProd);
      setAvatar(newProd[0]?.image);
    } else if (id === "2") {
      newProd = props.products?.filter((elem) => elem.name === "Essential Bag");
      setSelectedProduct(newProd);
      setAvatar(newProd[0]?.image);
    }
  }, [props.products]);



  const handleChangeProduct = async (color) => {
    console.log("change gallery to color: ", color);
    // set product according to color
    let newProd;
    switch (color) {
      case "#B2AFA0":
        newProd = products?.filter((elem) => elem.name === "Shopper Sandgrey");
        setSelectedProduct(newProd);
        setAvatar(newProd[0]?.image);
        setAmountToCart(1);
        break;
      case "#A51919":
        newProd = products?.filter((elem) => elem.name === "Shopper Red");
        setSelectedProduct(newProd);
        setAvatar(newProd[0]?.image);
        setAmountToCart(1);
        break;
      case "#36658F":
        newProd = products?.filter((elem) => elem.name === "Shopper Blue");
        setSelectedProduct(newProd);
        setAvatar(newProd[0]?.image);
        setAmountToCart(1);
        break;
      case "#654A30":
        newProd = products?.filter((elem) => elem.name === "Shopper Brown");
        setSelectedProduct(newProd);
        setAvatar(newProd[0]?.image);
        setAmountToCart(1);
        break;
      case "#AA8A39":
        newProd = products?.filter((elem) => elem.name === "Shopper Gold");
        setSelectedProduct(newProd);
        setAvatar(newProd[0]?.image);
        setAmountToCart(1);
        break;
      case "#4B5C19":
        newProd = products?.filter((elem) => elem.name === "Shopper Olive");
        setSelectedProduct(newProd);
        setAvatar(newProd[0]?.image);
        setAmountToCart(1);
        break;
      default:
        break;
    }
  };

  const handleShareLink = (link) => {
    navigator.clipboard.writeText(link);
  };

  const handleChangeAvatar = (img) => {
    setAvatar(img);
  };

  const handleChangeAmountToCart = (e) => {
    setAmountToCart(e.target.value);
    console.log(amountToCart);
  };

  const handleAddToCart = (product) => {

    const amountInCart = cart?.filter(item => item?.id === product?.id).length

    if (product.stock === 0) {
      alert("Product currently out of Stock") 
    }

    else if (parseInt(amountToCart) > product.stock) {
      alert("The desired order quantity exceeds the available quantity")
    }
    
    else {
      
      let cartCopy = [...cart];

      for (let index = 0; index < amountToCart; index++) {
        
        if (product.stock > amountInCart) { 
          cartCopy.push(product);
        } else {
          alert("This would exceed the available quantity")
          return;
        }
      }

      setCart(cartCopy);
      let stringCart = JSON.stringify(cartCopy);
      localStorage.setItem("cart", stringCart);

    }      

    setAmountToCart(1);
  
  };

  return (
    <>
      <PageContainer>
        <NavigateContainer>
          <BackToCatalogContainer onClick={() => navigate("/shop")}>
            <IconContext.Provider value={{ size: "50px" }}>
              <BsArrowLeft />
            </IconContext.Provider>
            Back To Product Overview
          </BackToCatalogContainer>
        </NavigateContainer>

        <ProductContainer>
          <MediaContainer>
            <Avatar src={avatar}></Avatar>
            <ImageGallery>
              {id === "1"
                ? imageGalleryBag.map((img, idx) => {
                  return (
                    <GalleryItem
                      key={idx}
                      src={img}
                      onClick={() => handleChangeAvatar(img)}
                    ></GalleryItem>
                  );
                })
                : imageGalleryPouch.map((img, idx) => {
                  return (
                    <GalleryItem
                      key={idx}
                      src={img}
                      onClick={() => handleChangeAvatar(img)}
                    ></GalleryItem>
                  );
                })}
            </ImageGallery>
          </MediaContainer>
          <Details>
            <DetailDiv>
              <Title>{selectedProduct[0]?.name}</Title>
              <Price>chf {selectedProduct[0]?.price}</Price>
            </DetailDiv>

            <DetailDiv style={{ paddingBottom: "1rem" }}>
              {selectedProduct[0]?.stock > 5 ? (
                <StockAmount style={{ color: "green" }}>
                  {selectedProduct[0]?.stock} on Stock!{" "}
                  {emoji.getUnicode("blush")}
                </StockAmount>
              ) : selectedProduct[0]?.stock > 0 ? (
                <StockAmount style={{ color: "orange" }}>
                  {selectedProduct[0]?.stock} on Stock!{" "}
                  {emoji.getUnicode("cold_sweat")}
                </StockAmount>
              ) : (
                <StockAmount style={{ color: "red" }}>
                  currently out of stock {emoji.getUnicode("sob")}
                </StockAmount>
              )}
            </DetailDiv>

            <DetailDiv style={{ paddingBottom: "1rem" }}>
              <DetailTitle>Colors</DetailTitle>   
              <Colors>
                {id === "1"
                  ? colors.map((color, idx) => {
                    return (
                      <div
                        key={idx}
                        style={{ background: color }}
                        onClick={() => handleChangeProduct(color)}
                      />
                    );
                  })
                  : 
                  <SpecialColors>Essential Bags are created with surplus materials. The color is random. If you have specific color request, please tell us in the shipping form (checkout) in the extra field</SpecialColors>}
              </Colors>
            </DetailDiv>

            <DetailDiv style={{ paddingBottom: "1rem" }}>
              <DetailTitle>Add quantity</DetailTitle>
              <CartContainer>
                <AmountInCartInput
                  type="number"
                  min="1"
                  max="20"
                  value={amountToCart}
                  onChange={(e) => handleChangeAmountToCart(e)}
                />
                <ToCartButton
                  onClick={() => handleAddToCart(selectedProduct[0])}
                >
                  Add to cart
                </ToCartButton>
              </CartContainer>
            </DetailDiv>

            <DetailDiv style={{ paddingBottom: "0" }}>
              <Collapsible trigger="Material & measurements +">
                <span>{selectedProduct[0]?.material}</span>
                <span>{selectedProduct[0]?.dimensions}</span>
              </Collapsible>
            </DetailDiv>

            <DetailDiv style={{ paddingBottom: "0" }}>
              <Collapsible trigger="Description +">
                <span>{selectedProduct[0]?.description}</span>
              </Collapsible>
            </DetailDiv>

            <ShareContainer
              onClick={() => handleShareLink(selectedProduct[0]?.share_link)}
            >
              <IconContext.Provider value={{ size: "30px" }}>
                <IoShareSocialSharp />
              </IconContext.Provider>
              <span>Share this product</span>
            </ShareContainer>
          </Details>
        </ProductContainer>
      </PageContainer>
    </>
  );
}

export default ProductPage;
