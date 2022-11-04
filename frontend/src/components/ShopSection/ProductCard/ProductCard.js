import { useNavigate } from "react-router-dom";
import {CardContainer, Avatar, Title, Price} from "./ProductCard.styled.js"

function ProductCard(props) {

    const navigate = useNavigate()

    const handleNavigateToProduct = () => {
        navigate(`/shop/${props.product.id}`)
    }
    
    
    return (
    <>  
        <CardContainer onClick={handleNavigateToProduct} >
        <Avatar src={props.product.img}></Avatar>
        <Title>{props.product.title}</Title>
        <Price>CHF {props.product.price}</Price>
        
        </CardContainer>
    </>
      );
}

export default ProductCard ;