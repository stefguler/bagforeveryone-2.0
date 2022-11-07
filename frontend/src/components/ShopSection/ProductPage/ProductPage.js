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

import { IoShareSocialSharp } from 'react-icons/io5';
import { BsArrowLeft } from 'react-icons/bs';
import { IconContext } from "react-icons";

function ProductPage() {

  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [products, setProducts] = useState({})
  // const [alternateProduct, setAlternateProduct] = useState({});
  const [avatar, setAvatar] = useState();
  const navigate = useNavigate();
  const emoji = require("emoji-dictionary");

  useEffect(() => {
    const backbag_olive = {
      id: 1,
      img: "../assets/images/product/product_olive_backbag.jpg",
      img_gallery: [
        "../assets/images/product/product_all_backbag_stand.jpg",
        "../assets/images/product/product_sandgrey_2_backbag.jpg",
        "../assets/images/product/product_olive_backbag.jpg",
      ],
      title: "Shopper Bag olive",
      description:
        "Handmade vegan bags. All exclusive pieces, created by refugee women on the greek island lesvos.",
      colors: ["#B2AFA0", "#A51919", "#36658F", "#654A30", "#AA8A39", "#4B5C19"],
      material: "Polyester (wildleather-look, vegane leather)",
      dimensions: "35cm x 34cm (lxb)",
      stock: 6,
      category: "Shopper",
      price: 100,
      share_link: "https://bagforeveryone.com/shop/1",
    };

    const backbag_red = {
      id: 1,
      img: "../assets/images/product/product_red_backbag.jpg",
      img_gallery: [
        "../assets/images/product/product_all_backbag_stand.jpg",
        "../assets/images/product/product_sandgrey_2_backbag.jpg",
        "../assets/images/product/product_red_backbag.jpg",
      ],
      title: "Shopper Bag red",
      description:
        "Handmade vegan bags. All exclusive pieces, created by refugee women on the greek island lesvos.",
      colors: ["#B2AFA0", "#A51919", "#36658F", "#654A30", "#AA8A39", "#4B5C19"],
      material: "Polyester (wildleather-look, vegane leather)",
      dimensions: "35cm x 34cm (lxb)",
      stock: 0,
      category: "Shopper",
      price: 100,
      share_link: "https://bagforeveryone.com/shop/1",
    };

    const backbag_gold = {
      id: 1,
      img: "../assets/images/product/product_gold_backbag.jpg",
      img_gallery: [
        "../assets/images/product/product_all_backbag_stand.jpg",
        "../assets/images/product/product_sandgrey_2_backbag.jpg",
        "../assets/images/product/product_gold_backbag.jpg",
      ],
      title: "Shopper Bag gold",
      description:
        "Handmade vegan bags. All exclusive pieces, created by refugee women on the greek island lesvos.",
      colors: ["#B2AFA0", "#A51919", "#36658F", "#654A30", "#AA8A39", "#4B5C19"],
      material: "Polyester (wildleather-look, vegane leather)",
      dimensions: "35cm x 34cm (lxb)",
      stock: 4,
      category: "Shopper",
      price: 100,
      share_link: "https://bagforeveryone.com/shop/1",
    };

    const backbag_blue = {
      id: 1,
      img: "../assets/images/product/product_blue_backbag.jpg",
      img_gallery: [
        "../assets/images/product/product_all_backbag_stand.jpg",
        "../assets/images/product/product_sandgrey_2_backbag.jpg",
        "../assets/images/product/product_blue_backbag.jpg",
      ],
      title: "Shopper Bag blue",
      description:
        "Handmade vegan bags. All exclusive pieces, created by refugee women on the greek island lesvos.",
      colors: ["#B2AFA0", "#A51919", "#36658F", "#654A30", "#AA8A39", "#4B5C19"],
      material: "Polyester (wildleather-look, vegane leather)",
      dimensions: "35cm x 34cm (lxb)",
      stock: 3,
      category: "Shopper",
      price: 100,
      share_link: "https://bagforeveryone.com/shop/1",
    };

    
    const backbag_brown = {
      id: 1,
      img: "../assets/images/product/product_brown_backbag.jpg",
      img_gallery: [
        "../assets/images/product/product_all_backbag_stand.jpg",
        "../assets/images/product/product_sandgrey_2_backbag.jpg",
        "../assets/images/product/product_brown_backbag.jpg",
      ],
      title: "Shopper Bag brown",
      description:
        "Handmade vegan bags. All exclusive pieces, created by refugee women on the greek island lesvos.",
      colors: ["#B2AFA0", "#A51919", "#36658F", "#654A30", "#AA8A39", "#4B5C19"],
      material: "Polyester (wildleather-look, vegane leather)",
      dimensions: "35cm x 34cm (lxb)",
      stock: 12,
      category: "Shopper",
      price: 100,
      share_link: "https://bagforeveryone.com/shop/1",
    };

    
    const backbag_sandgrey = {
      id: 1,
      img: "../assets/images/product/product_sandgrey_backbag.jpg",
      img_gallery: [
        "../assets/images/product/product_all_backbag_stand.jpg",
        "../assets/images/product/product_sandgrey_2_backbag.jpg",
        "../assets/images/product/product_sandgrey_backbag.jpg",
      ],
      title: "Shopper Bag sandgrey",
      description:
        "Handmade vegan bags. All exclusive pieces, created by refugee women on the greek island lesvos.",
      colors: ["#B2AFA0", "#A51919", "#36658F", "#654A30", "#AA8A39", "#4B5C19"],
      material: "Polyester (wildleather-look, vegane leather)",
      dimensions: "35cm x 34cm (lxb)",
      stock: 14,
      category: "Shopper",
      price: 100,
      share_link: "https://bagforeveryone.com/shop/1",
    };

    const essential_bag = {
      id: 2,
      img: "../assets/images/product/product_pouch.jpg",
      img_gallery: ["../assets/images/product/product_pouch_2.jpg",
        "../assets/images/product/product_pouch_3.jpg",
        "../assets/images/product/product_pouch_4.jpg",
        "../assets/images/product/product_pouch.jpg",
      ],
      title: "Essentials Bag",
      description:
        "The perfect piece to store your glasses or mobile phone in, use as a pencil case,  or for keeping your keys, money, and essentials safe! Made with the leftovers of the vegan materials of our shopper bags, the essential bags show that no inch of material is wasted in the bagforeveryone workshop",
      colors: ["random"],
      material: "Polyester (wildleather-look, vegane leahter)",
      dimensions: "17cm x 9.5cm (lxb)",
      stock: 4,
      category: "Pouch",
      price: 27.0,
      share_link: "www.bagforeveryone.com/shop/2",
    };

    setProducts([backbag_olive, backbag_red, backbag_blue, backbag_brown, backbag_gold, backbag_sandgrey, essential_bag])

    if (id === "1") {
      setProduct(backbag_olive);
      setAvatar(backbag_olive.img)
      // setAlternateProduct(essential_bag)
    } else if (id === "2") {
      setProduct(essential_bag);
      setAvatar(essential_bag.img)
      // setAlternateProduct(backbag)
    }
  }, [id]);

  // const handleChangeProduct = (id) => {
  //   navigate(`/shop/${id}`);
  // };

  const handleNavigateToCatalog = () => {
    navigate("/shop/");
  };

  const handleChangeProduct = (color) => {
    console.log("change gallery to color: ", color)
    // set product according to color
    switch (color) {
      case "#B2AFA0": setProduct('')
      setProduct(products[5])
      setAvatar(products[5].img)
        break;
      case "#A51919": 
      setProduct(products[1])
      setAvatar(products[1].img)
        break;
      case "#36658F": setProduct('')
      setProduct(products[2])
      setAvatar(products[2].img)
        break;
      case "#654A30": setProduct('')
      setProduct(products[3])
      setAvatar(products[3].img)
        break;
      case "#AA8A39": setProduct('')
      setProduct(products[4])
      setAvatar(products[4].img)
        break;
      case "#4B5C19": setProduct('')
      setProduct(products[0])
      setAvatar(products[0].img)
        break;

      default:
        break;
    }

  }

  const handleShareLink = (link) => {
    navigator.clipboard.writeText(link);

  }

  
  const handleChangeAvatar = (img) => {
    setAvatar(img)
  }

  return (
    <>
      <PageContainer>
        <NavigateContainer>
          <BackToCatalogContainer onClick={handleNavigateToCatalog}>
            <IconContext.Provider value={{ size: "50px" }}>
              <BsArrowLeft />
            </IconContext.Provider>
            Back To Product Overview
          </BackToCatalogContainer>
          {/* <SwitchProductContainer>
            {id === "1" ? (
              <>
              <AlternateProductAvatar src={alternateProduct.img} alt="change to other product"></AlternateProductAvatar>
              <span onClick={() => handleChangeProduct(2)}>
                Check Essential Bag
              </span>
              </>
            ) : (
              <>
              <AlternateProductAvatar src={alternateProduct.img} alt="change to other product"></AlternateProductAvatar>
              <span onClick={() => handleChangeProduct(1)}>Check Shopper</span>
              </>
            )}
          </SwitchProductContainer> */}
        </NavigateContainer>

        <ProductContainer>
          <MediaContainer>
            <Avatar src={avatar}></Avatar>
            <ImageGallery>
              {
                product.img_gallery?.map((img, idx) => {
                  return <GalleryItem key={idx} src={img} onClick={() => handleChangeAvatar(img)}></GalleryItem>
                })

              }
              <img src=""></img>

            </ImageGallery>
          </MediaContainer>
          <Details>
            <DetailDiv>
              <Title>{product.title}</Title>
              <Price>chf {product.price}</Price>
            </DetailDiv>

            <DetailDiv style={{ paddingBottom: "1rem" }}>
              {
                product.stock > 5 ? <StockAmount style={{ color: "green" }}>{product.stock}  on Stock! {emoji.getUnicode("blush")}</StockAmount> :
                  product.stock > 0 ? <StockAmount style={{ color: "orange" }}>{product.stock} on Stock! {emoji.getUnicode("cold_sweat")}</StockAmount> :
                    <StockAmount style={{ color: "red" }}>currently out of stock {emoji.getUnicode("sob")}</StockAmount>
              }
            </DetailDiv>

            <DetailDiv style={{ paddingBottom: "1rem" }}>
              <DetailTitle>Colors</DetailTitle>
              <Colors>
                {product.colors !== undefined
                  ? product.colors.map((color, idx) => {
                    return <div key={idx} style={{ background: color }} onClick={() => handleChangeProduct(color)} />
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
                />
                <ToCartButton>Add to cart</ToCartButton>
              </CartContainer>
            </DetailDiv>

            <DetailDiv style={{ paddingBottom: "0" }}>
              <Collapsible trigger="Material & measurements +">
                <span>{product.material}</span>
                <span>{product.dimensions}</span>
              </Collapsible>
            </DetailDiv>

            <DetailDiv style={{ paddingBottom: "0" }}>
              <Collapsible trigger="Description +">
                <span>{product.description}</span>
              </Collapsible>
            </DetailDiv>

            <ShareContainer onClick={() => handleShareLink(product.share_link)}>
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
