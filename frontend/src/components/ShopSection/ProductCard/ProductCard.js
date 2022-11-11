import { useNavigate } from "react-router-dom";
import {
  CardContainer,
  Overlay,
  Avatar,
  Title,
  Price,
  AvatarContainer,
} from "./ProductCard.styled.js";

function ProductCard(props) {
  const navigate = useNavigate();

  const handleNavigateToProduct = () => {
    navigate(`/shop/${props.product.id}`);
  };

  return (
    <>
      <CardContainer onClick={handleNavigateToProduct}>
        <AvatarContainer>
          <img className="preview" src={props.product.img} alt="product image - bag"></img>
          <div className="hide">Show more!</div>
        </AvatarContainer>
        <Title>{props.product.title}</Title>
        <Price>CHF {props.product.price}</Price>
      </CardContainer>
    </>
  );
}

export default ProductCard;
