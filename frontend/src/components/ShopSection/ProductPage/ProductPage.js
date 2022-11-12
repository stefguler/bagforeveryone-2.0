// import { useEffect } from "react";
import { generatePath, useNavigate } from "react-router-dom";
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
  const [selectedProduct, setSelectedProduct] = useState({});
  const [products, setProducts] = useState([]);
  let [cart, setCart] = useState([]);
  let localCart = localStorage.getItem("cart");
  const [avatar, setAvatar] = useState("");
  const [imageGallery, setImageGallery] = useState([]);
  const { id } = useParams()
  const [category, setCategory] = useState(props.category)
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

  console.log("product id: ", id)
  console.log(typeof id)

  useEffect(() => {
    localCart = JSON.parse(localCart);
    if (localCart) setCart(localCart);

    console.log("category in product page", category)
    console.log(props)

    let newProd;
    setProducts(props.products);

    if (category === "SH") {
      newProd = props.products?.filter((elem) => elem.name === "Shopper Gold");
      console.log("New Prod: ", newProd)
      setSelectedProduct(newProd);
      setAvatar(newProd[0]?.image);
      changeImageGallery(newProd[0])

    } else if (category === "PO") {
      newProd = props.products?.filter((elem) => elem.name === "Essential Bag");
      setSelectedProduct(newProd);
      setAvatar(newProd[0]?.image);
      changeImageGallery(newProd[0])
    }
    else if (category === "DO") {
      newProd = props.products?.filter((elem) => elem.id === parseInt(id));
      console.log("newProd DO: ", newProd)
      setSelectedProduct(newProd);
      setAvatar(newProd[0]?.image);
      changeImageGallery(newProd[0])
    }
  }, [props.products]);

  const changeImageGallery = (product) => {
    console.log("change gallery to: ", product)
    console.log("change gallery to img: ", product?.sub_image_1)
    setImageGallery([product?.sub_image_1, product?.sub_image_2, product?.sub_image_3, product?.image])
  }

  const handleChangeProduct = async (color) => {
    console.log("change gallery to color: ", color);
    // set product according to color
    let newProd;
    switch (color) {
      case "#B2AFA0":
        newProd = products?.filter((elem) => elem.name === "Shopper Sandgrey");
        setSelectedProduct(newProd);
        setAvatar(newProd[0]?.image);
        changeImageGallery(newProd[0])
        setAmountToCart(1);
        break;
      case "#A51919":
        newProd = products?.filter((elem) => elem.name === "Shopper Red");
        setSelectedProduct(newProd);
        setAvatar(newProd[0]?.image);
        changeImageGallery(newProd[0])
        setAmountToCart(1);
        break;
      case "#36658F":
        newProd = products?.filter((elem) => elem.name === "Shopper Blue");
        setSelectedProduct(newProd);
        setAvatar(newProd[0]?.image);
        changeImageGallery(newProd[0])
        setAmountToCart(1);
        break;
      case "#654A30":
        newProd = products?.filter((elem) => elem.name === "Shopper Brown");
        setSelectedProduct(newProd);
        setAvatar(newProd[0]?.image);
        changeImageGallery(newProd[0])
        setAmountToCart(1);
        break;
      case "#AA8A39":
        newProd = products?.filter((elem) => elem.name === "Shopper Gold");
        setSelectedProduct(newProd);
        setAvatar(newProd[0]?.image);
        changeImageGallery(newProd[0])
        setAmountToCart(1);
        break;
      case "#4B5C19":
        newProd = products?.filter((elem) => elem.name === "Shopper Olive");
        setSelectedProduct(newProd);
        setAvatar(newProd[0]?.image);
        changeImageGallery(newProd[0])
        setAmountToCart(1);
        break;
      default:
        break;
    }
  };

  const handleShareLink = (link) => {
    navigator.clipboard.writeText(window.location.href);
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

  const navigateToShopOrDonate = () => {
    category !== "DO" ? navigate("/shop") : navigate("/donate")
  }

  return (
    <>
      <PageContainer>
        <NavigateContainer>
          <BackToCatalogContainer onClick={() => navigateToShopOrDonate()}>
            <IconContext.Provider value={{ size: "50px" }}>
              <BsArrowLeft />
            </IconContext.Provider>
            {
              category !== "DO" ?
            <span>Back To Product Overview</span> : 
            <span>Back To Donation Overview</span> 
            }
          </BackToCatalogContainer>
        </NavigateContainer>

        <ProductContainer>
          <MediaContainer>
            <Avatar src={avatar}></Avatar>
            { category !== "DO" ? 
            <ImageGallery>
              {
                imageGallery.map((img, idx) => {
                  console.log("img: ", img)
                  return (
                    <GalleryItem
                      key={idx}
                      src={img}
                      onClick={() => handleChangeAvatar(img)}
                    ></GalleryItem>
                  );
                })
              }
            </ImageGallery> : null
          }
          </MediaContainer>
          <Details>
            <DetailDiv>
              <Title>{selectedProduct[0]?.name}</Title>
              <Price>chf {selectedProduct[0]?.price}</Price>
            </DetailDiv>

            <DetailDiv style={{ paddingBottom: "1rem" }}>
              {
                category === "SH" ?

                  selectedProduct[0]?.stock > 5 ? (
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
                  ) : null
              }
            </DetailDiv>

            <DetailDiv style={{ paddingBottom: "1rem" }}>          

              {category !== "DO" ?
                <>
                <DetailTitle>Colors</DetailTitle>
                <Colors>
                  {
                    category === "SH" ?
                      colors.map((color, idx) => {
                        return (
                          <div
                            key={idx}
                            style={{ background: color }}
                            onClick={() => handleChangeProduct(color)}
                          />
                        );
                      })
                      : category === "PO" ?
                        <SpecialColors>Essential Bags are created with surplus materials. The color is random. If you have specific color request, please tell us in the shipping form (checkout) in the extra field</SpecialColors>
                        : null
                  }
                </Colors> 
                </> :
                <DetailDiv style={{ paddingBottom: "0", fontSize: "16px" }}>
                    
                    <span>{selectedProduct[0]?.description}</span>

                </DetailDiv>
              }
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
              
            {
            category !== "DO" ?
            <>
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
            </> : null
            }

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
