import { useNavigate } from "react-router-dom";
import {
  CardContainer,
  Title,
  Price,
  AvatarContainer,
} from "./ProductCard.styled.js";

function ProductCard(props) {
  const navigate = useNavigate();

  const handleNavigateToProduct = () => {
      navigate(`/shop/${props.product.category}`);
  };

  return (
    <>
      <CardContainer onClick={handleNavigateToProduct}>
        <AvatarContainer>
          <img className="preview" src={props.product.image} alt="product image - bag"></img>
          <div className="hide">Show more!</div>
        </AvatarContainer>
        <Title>{props.product.name}</Title>
        <Price>CHF {props.product.price}</Price>
      </CardContainer>
    </>
  );
}

export default ProductCard;
