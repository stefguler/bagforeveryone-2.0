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
          <img class="preview" src={props.product.img} alt="product image - bag"></img>
          <h3 className="hide">Show more!</h3>
        </AvatarContainer>
        <Title>{props.product.title}</Title>
        <Price>CHF {props.product.price}</Price>
      </CardContainer>
    </>
  );
}

export default ProductCard;
