// import { useNavigate } from "react-router-dom";
import { OrderConfirmationContainer, Content } from "./OrderConfirmation.styled.js";
import { TbHeartHandshake } from 'react-icons/tb';
import { IconContext } from "react-icons";

export default function OrderConfirmation() {
  // const navigate = useNavigate();

  return (
    <>
      <OrderConfirmationContainer >
        <IconContext.Provider value={{ size: "400px", color: "#DABC39" }}>
          <TbHeartHandshake />
        </IconContext.Provider>
        <Content>
          <p style={{ fontWeight: "bold" }}>Thank you for submitting your order!</p>
          <p>Shortly you will receive order confirmation on your email address.
            Please get in touch with us if you do not receive any.</p>
        </Content>
      </OrderConfirmationContainer>
    </>
  );
}
