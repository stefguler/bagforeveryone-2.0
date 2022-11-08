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
} from "./ProductPage.styled";

import { IoShareSocialSharp } from "react-icons/io5";
import { BsArrowLeft } from "react-icons/bs";
import { IconContext } from "react-icons";
import { useCookies } from "react-cookie";

function ProductPage() {
  const { id } = useParams();
  const [selectedProduct, setSelectedProduct] = useState({});
  const [products, setProducts] = useState([]);
  const [avatar, setAvatar] = useState("");
  const navigate = useNavigate();
  const emoji = require("emoji-dictionary");
  const [cookies, setCookie] = useCookies(["shoppingcart"]);
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY5NDY2MDk0LCJpYXQiOjE2Njc5MTA4OTQsImp0aSI6IjlmNDIzYThhMmRlODQyNGViYzljZDRkNmRlZTlhNmEzIiwidXNlcl9pZCI6MX0.DFOLGAOVNAg6udQZbwdSe12tNofJSlj0y3KJ9-tp3og";
  const [amountToCart, setAmountToCart] = useState()
  const [colors, setColors] = useState(["#B2AFA0", "#A51919", "#36658F", "#654A30", "#AA8A39", "#4B5C19"])
  const [imageGalleryPouch, setImageGalleryPouch] = useState([
    "../assets/images/product/product_pouch_2.jpg",
    "../assets/images/product/product_pouch_3.jpg",
    "../assets/images/product/product_pouch_4.jpg",
    "../assets/images/product/product_pouch.jpg",
  ])
  const [imageGalleryBag, setImageGalleryBag] = useState(
    [
    "../assets/images/product/product_all_backbag_stand.jpg",
    "../assets/images/product/product_all2_backbag.jpg",
    "../assets/images/product/product_view1_backbag.jpg",
  ])


  useEffect(() => {
    // const backbag_olive = {
    //   id: 1,
    //   img: "../assets/images/product/product_olive_backbag.jpg",
    //   img_gallery: [
    //     "../assets/images/product/product_all_backbag_stand.jpg",
    //     "../assets/images/product/product_sandgrey_2_backbag.jpg",
    //     "../assets/images/product/product_olive_backbag.jpg",
    //   ],
    //   title: "Shopper Bag olive",
    //   description:
    //     "Handmade vegan bags. All exclusive pieces, created by refugee women on the greek island lesvos.",
    //   colors: ["#B2AFA0", "#A51919", "#36658F", "#654A30", "#AA8A39", "#4B5C19"],
    //   material: "Polyester (wildleather-look, vegane leather)",
    //   dimensions: "35cm x 34cm (lxb)",
    //   stock: 6,
    //   category: "Shopper",
    //   price: 100,
    //   share_link: "https://bagforeveryone.com/shop/1",
    // };

    // const backbag_red = {
    //   id: 1,
    //   img: "../assets/images/product/product_red_backbag.jpg",
    //   img_gallery: [
    //     "../assets/images/product/product_all_backbag_stand.jpg",
    //     "../assets/images/product/product_sandgrey_2_backbag.jpg",
    //     "../assets/images/product/product_red_backbag.jpg",
    //   ],
    //   title: "Shopper Bag red",
    //   description:
    //     "Handmade vegan bags. All exclusive pieces, created by refugee women on the greek island lesvos.",
    //   colors: ["#B2AFA0", "#A51919", "#36658F", "#654A30", "#AA8A39", "#4B5C19"],
    //   material: "Polyester (wildleather-look, vegane leather)",
    //   dimensions: "35cm x 34cm (lxb)",
    //   stock: 0,
    //   category: "Shopper",
    //   price: 100,
    //   share_link: "https://bagforeveryone.com/shop/1",
    // };

    // const backbag_gold = {
    //   id: 1,
    //   img: "../assets/images/product/product_gold_backbag.jpg",
    //   img_gallery: [
    //     "../assets/images/product/product_all_backbag_stand.jpg",
    //     "../assets/images/product/product_sandgrey_2_backbag.jpg",
    //     "../assets/images/product/product_gold_backbag.jpg",
    //   ],
    //   title: "Shopper Bag gold",
    //   description:
    //     "Handmade vegan bags. All exclusive pieces, created by refugee women on the greek island lesvos.",
    //   colors: ["#B2AFA0", "#A51919", "#36658F", "#654A30", "#AA8A39", "#4B5C19"],
    //   material: "Polyester (wildleather-look, vegane leather)",
    //   dimensions: "35cm x 34cm (lxb)",
    //   stock: 4,
    //   category: "Shopper",
    //   price: 100,
    //   share_link: "https://bagforeveryone.com/shop/1",
    // };

    // const backbag_blue = {
    //   id: 1,
    //   img: "../assets/images/product/product_blue_backbag.jpg",
    //   img_gallery: [
    //     "../assets/images/product/product_all_backbag_stand.jpg",
    //     "../assets/images/product/product_sandgrey_2_backbag.jpg",
    //     "../assets/images/product/product_blue_backbag.jpg",
    //   ],
    //   title: "Shopper Bag blue",
    //   description:
    //     "Handmade vegan bags. All exclusive pieces, created by refugee women on the greek island lesvos.",
    //   colors: ["#B2AFA0", "#A51919", "#36658F", "#654A30", "#AA8A39", "#4B5C19"],
    //   material: "Polyester (wildleather-look, vegane leather)",
    //   dimensions: "35cm x 34cm (lxb)",
    //   stock: 3,
    //   category: "Shopper",
    //   price: 100,
    //   share_link: "https://bagforeveryone.com/shop/1",
    // };

    // const backbag_brown = {
    //   id: 1,
    //   img: "../assets/images/product/product_brown_backbag.jpg",
    //   img_gallery: [
    //     "../assets/images/product/product_all_backbag_stand.jpg",
    //     "../assets/images/product/product_sandgrey_2_backbag.jpg",
    //     "../assets/images/product/product_brown_backbag.jpg",
    //   ],
    //   title: "Shopper Bag brown",
    //   description:
    //     "Handmade vegan bags. All exclusive pieces, created by refugee women on the greek island lesvos.",
    //   colors: ["#B2AFA0", "#A51919", "#36658F", "#654A30", "#AA8A39", "#4B5C19"],
    //   material: "Polyester (wildleather-look, vegane leather)",
    //   dimensions: "35cm x 34cm (lxb)",
    //   stock: 12,
    //   category: "Shopper",
    //   price: 100,
    //   share_link: "https://bagforeveryone.com/shop/1",
    // };

    // const backbag_sandgrey = {
    //   id: 1,
    //   img: "../assets/images/product/product_sandgrey_backbag.jpg",
    //   img_gallery: [
    //     "../assets/images/product/product_all_backbag_stand.jpg",
    //     "../assets/images/product/product_sandgrey_2_backbag.jpg",
    //     "../assets/images/product/product_sandgrey_backbag.jpg",
    //   ],
    //   title: "Shopper Bag sandgrey",
    //   description:
    //     "Handmade vegan bags. All exclusive pieces, created by refugee women on the greek island lesvos.",
    //   colors: ["#B2AFA0", "#A51919", "#36658F", "#654A30", "#AA8A39", "#4B5C19"],
    //   material: "Polyester (wildleather-look, vegane leather)",
    //   dimensions: "35cm x 34cm (lxb)",
    //   stock: 14,
    //   category: "Shopper",
    //   price: 100,
    //   share_link: "https://bagforeveryone.com/shop/1",
    // };

    // const essential_bag = {
    //   id: 2,
    //   img: "../assets/images/product/product_pouch.jpg",
    //   img_gallery: ["../assets/images/product/product_pouch_2.jpg",
    //     "../assets/images/product/product_pouch_3.jpg",
    //     "../assets/images/product/product_pouch_4.jpg",
    //     "../assets/images/product/product_pouch.jpg",
    //   ],
    //   title: "Essentials Bag",
    //   description:
    //     "The perfect piece to store your glasses or mobile phone in, use as a pencil case,  or for keeping your keys, money, and essentials safe! Made with the leftovers of the vegan materials of our shopper bags, the essential bags show that no inch of material is wasted in the bagforeveryone workshop",
    //   colors: ["random"],
    //   material: "Polyester (wildleather-look, vegane leahter)",
    //   dimensions: "17cm x 9.5cm (lxb)",
    //   stock: 4,
    //   category: "Pouch",
    //   price: 27.0,
    //   share_link: "www.bagforeveryone.com/shop/2",
    // };
    // setProducts([backbag_olive, backbag_red, backbag_blue, backbag_brown, backbag_gold, backbag_sandgrey, essential_bag])

    const config = {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      }),
    };
    fetch("http://localhost:8001/backend/api/product/", config)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProducts(data)})
      .then((data) => {
        if (id === "1") {
          setSelectedProduct(products?.filter(elem => elem.id === 1));
          setAvatar(selectedProduct[0]?.image);
        } else if (id === "2") {
          setSelectedProduct(products?.filter(elem => elem.name === "Essential Bag"));
          setAvatar(selectedProduct[0]?.image);
        }
      });
  },[]);

  const handleChangeProduct = async (color) => {
    console.log("change gallery to color: ", color);
    // set product according to color
    let newProd
    switch (color) {
      case "#B2AFA0":
        newProd = products?.filter(elem => elem.name === "Shopper Sandgrey")
        setSelectedProduct(newProd);
        setAvatar(newProd[0]?.image);
        break;
      case "#A51919":
        newProd = products?.filter(elem => elem.name === "Shopper Red")
        setSelectedProduct(newProd);
        setAvatar(newProd[0]?.image);
        break;
      case "#36658F":;
      newProd = products?.filter(elem => elem.name === "Shopper Blue")
      setSelectedProduct(newProd);
      setAvatar(newProd[0]?.image);
        break;
      case "#654A30":
        newProd = products?.filter(elem => elem.name === "Shopper Brown")
        setSelectedProduct(newProd);
        setAvatar(newProd[0]?.image);
        break;
      case "#AA8A39":
        newProd = products?.filter(elem => elem.name === "Shopper Gold")
        setSelectedProduct(newProd);
        setAvatar(newProd[0]?.image);
        break;
      case "#4B5C19":
        newProd = products?.filter(elem => elem.name === "Shopper Olive")
        setSelectedProduct(newProd);
        setAvatar(newProd[0]?.image);     
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
    setAmountToCart(e.target.value)
    console.log(amountToCart)
  }

  const handleAddToCart = () => {
    const cookieObj = {
      product: selectedProduct,
      amount: amountToCart,
    }
    console.log("CookieObj", JSON.stringify(cookieObj))
    setCookie('Inventory', JSON.stringify(cookieObj))
    console.log("CookieContent: ", cookies)
  }

  console.log(avatar)

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
              {
              id === "1" ?
              imageGalleryBag.map((img, idx) => {
                return (
                  <GalleryItem
                    key={idx}
                    src={img}
                    onClick={() => handleChangeAvatar(img)}
                  ></GalleryItem>
                );
              })
               : 
              imageGalleryPouch.map((img, idx) => {
                return (
                  <GalleryItem
                    key={idx}
                    src={img}
                    onClick={() => handleChangeAvatar(img)}
                  ></GalleryItem>
                );
              })  
              }
            </ImageGallery>
          </MediaContainer>
          <Details>
            <DetailDiv>
            {/* <Title>{products[1]?.name}</Title> */}
              <Title>{selectedProduct[0]?.name}</Title>
              <Price>chf {selectedProduct[0]?.price}</Price>
            </DetailDiv>

            <DetailDiv style={{ paddingBottom: "1rem" }}>
              {selectedProduct[0]?.stock > 5 ? (
                <StockAmount style={{ color: "green" }}>
                  {selectedProduct[0]?.stock} on Stock! {emoji.getUnicode("blush")}
                </StockAmount>
              ) : selectedProduct[0]?.stock > 0 ? (
                <StockAmount style={{ color: "orange" }}>
                  {selectedProduct[0]?.stock} on Stock! {emoji.getUnicode("cold_sweat")}
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
                { id === "1" ?
                
                  colors.map((color, idx) => {
                      return (
                        <div
                          key={idx}
                          style={{ background: color }}
                          onClick={() => handleChangeProduct(color)}
                        />
                      );
                    })
                  : null}
              </Colors>
            </DetailDiv>
            
            <DetailDiv style={{ paddingBottom: "1rem" }}>
              <DetailTitle>Add quantity</DetailTitle>
              <CartContainer>
                <AmountInCartInput
                  type="number"
                  min="1"
                  max="20"
                  placeholder="1"
                  onChange={(e) => handleChangeAmountToCart(e)}
                />
                <ToCartButton onClick={handleAddToCart}>Add to cart</ToCartButton>
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

            <ShareContainer onClick={() => handleShareLink(selectedProduct[0]?.share_link)}>
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
