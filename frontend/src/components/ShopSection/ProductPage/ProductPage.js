// import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Collapsible from "react-collapsible";
import {
  PageContainer,
  NavigateContainer,
  BackToCatalogBtn,
  ProductContainer,
  Avatar,
  Details,
  Title,
  Category,
  Price,
  Colors,
  Materials,
  Dimensions,
  StockAmount,
  CartContainer,
  AmountInCartInput,
  AddToCartButton,
  ShareContainer,
  DetailDiv,
  DetailTitle,
} from "./ProductPage.styled";

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const backbag = {
      id: 1,
      img: "./assets/images/product/product_olive_backbag.jpg",
      title: "Shopper Bag",
      description:
        "Handmade vegan bags. All exclusive pieces, created by refugee women on the greek island lesvos.",
      colors: ["red", "sand grey", "olive", "gold", "blue", "brown"],
      material: "Polyester (wildleather-look, vegane leather)",
      dimensions: "35cm x 34cm (lxb)",
      stock: "16",
      category: "Shopper",
      price: 100,
      share_link: "bagforeveryone.com/shop/essentialbag",
    };

    const essential_bag = {
      id: 2,
      img: "./assets/images/product/product_essentialbag.jpg",
      title: "Essentials Bag",
      description:
        "The perfect piece to store your glasses or mobile phone in, use as a pencil case,  or for keeping your keys, money, and essentials safe! Made with the leftovers of the vegan materials of our shopper bags, the essential bags show that no inch of material is wasted in the bagforeveryone workshop",
      colors: ["random"],
      material: "Polyester (wildleather-look, vegane leahter)",
      dimensions: "17cm x 9.5cm (lxb)",
      stock: "12",
      category: "Pouch",
      price: 27.0,
      share_link: "bagforeveryone.com/shop/essentialbag",
    };

    if (id === "1") {
      setProduct(backbag);
    } else if (id === "2") {
      setProduct(essential_bag);
    }
  }, [id]);

  const handleChangeProduct = (id) => {
    navigate(`/shop/${id}`);
  };

  const handleNavigateToCatalog = () => {
    navigate("/shop/");
  };

  return (
    <>
      <PageContainer>
        <NavigateContainer>
          <BackToCatalogBtn onClick={handleNavigateToCatalog}>
            Back To Shop Overview
          </BackToCatalogBtn>
          {id === "1" ? (
            <span onClick={() => handleChangeProduct(2)}>
              Check Essential Bag{" "}
            </span>
          ) : (
            <span onClick={() => handleChangeProduct(1)}>Check Shopper</span>
          )}
        </NavigateContainer>

        <ProductContainer>
          <Avatar src={`.${product.img}`}></Avatar>
          <Details>
            <DetailDiv>
              <Title>{product.title}</Title>
            </DetailDiv>
            {
              product.description === undefined ? null :
            product.description.length < 100 ? (
              <DetailDiv>
                <Category>{product.description}</Category>
              </DetailDiv>
            ) : (
              <DetailDiv>
                <Collapsible trigger="Description +">
                  <Materials>{product.description}</Materials>
                </Collapsible>
              </DetailDiv>
            )}
            <DetailDiv>
              <DetailTitle>Category:</DetailTitle>
              <Category>{product.category}</Category>
            </DetailDiv>
            <DetailDiv>
              <DetailTitle>Price:</DetailTitle>
              <Price>{product.price}.00 CHF</Price>
            </DetailDiv>
            <DetailDiv>
              <DetailTitle>Color:</DetailTitle>
              <Colors>
                {product.colors !== undefined
                  ? product.colors.map((color, idx) => {
                      return <option key={idx}>{color}</option>;
                    })
                  : null}
              </Colors>
            </DetailDiv>
            <DetailDiv>
              <Collapsible trigger="Material +">
                <Materials>{product.material}</Materials>
              </Collapsible>
            </DetailDiv>
            <DetailDiv>
              <Collapsible trigger="Dimensions +">
                <Dimensions>{product.dimensions}</Dimensions>
              </Collapsible>
            </DetailDiv>
            <DetailDiv>
              <StockAmount>{product.stock} on Stock!</StockAmount>
            </DetailDiv>
          </Details>
        </ProductContainer>

        <CartContainer>
          <AmountInCartInput
            type="number"
            min="1"
            max="20"
            placeholder="1"
          ></AmountInCartInput>
          <AddToCartButton>Add to Cart</AddToCartButton>
        </CartContainer>
      </PageContainer>

      <ShareContainer>
        <span>Share this product</span>
      </ShareContainer>
    </>
  );
}

export default ProductPage;
