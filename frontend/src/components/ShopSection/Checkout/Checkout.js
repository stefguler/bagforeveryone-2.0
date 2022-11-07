// import { useNavigate } from "react-router-dom";

import {CheckoutContainer, CheckoutHeader, CheckoutForm, FormTitle, ShippingForm, DeliveryInfoForm, RightSide, LeftSide, ShoppingCart} from "./Checkout.styled.js";
import { useState } from "react";


export default function Checkout() {
  // const navigate = useNavigate();
  //form states
  const [checkOutData, setCheckoutData] = useState(
    {
      email: "",
      first_name: "",
      last_name: "",
      street: "",
      street_number: "",
      zip: "",
      region: "",
      city: "",
      country: "",
      phone: "",
      shippingnotes: "",
  }
  )


const handleChange = (e) =>
{
  setCheckoutData(prev => {
    return {
      ...prev, [e.target.name]: e.target.value
    }
  })
  console.log(checkOutData)
}



const handleOrderSubmit = (e) => 
{
  e.preventDefault();
  console.log('order submitted')
}

  return (
    <>
      <CheckoutContainer >
        <CheckoutHeader>Checkout</CheckoutHeader>
        <CheckoutForm onSubmit={(e) => handleOrderSubmit(e)}>
          <LeftSide>
          <FormTitle>1. Shipping</FormTitle>
          <ShippingForm>
            <input type="email" name="email" placeholder="Email adress" onChange={(e) => handleChange(e)}></input>
            <input type="text" name="first_name" placeholder="First Name" onChange={(e) => handleChange(e)}></input>
            <input type="text" name="last_name" placeholder="Last Name" onChange={(e) => handleChange(e)}></input>
            <input type="text" name="street" placeholder="Street" onChange={(e) => handleChange(e)}></input>
            <input type="number" name="street_number" placeholder="Street Number" onChange={(e) => handleChange(e)}></input>
            <input type="number" name="zip" placeholder="ZIP" onChange={(e) => handleChange(e)}></input>
            <input type="text" name="city" placeholder="City" onChange={(e) => handleChange(e)}></input>
            <input type="text" name="region" placeholder="Canton / Region" onChange={(e) => handleChange(e)}></input>
            <input type="text" name="country" placeholder="Country" onChange={(e) => handleChange(e)}></input>
            <input type="phone" name="phone" placeholder="Phone" onChange={(e) => handleChange(e)}></input>
          </ShippingForm>
          <FormTitle>2. Delivery Information</FormTitle>
          <p>The products are shipped regularly by mail from Lesvos, Greece to the destination address. Normally a delivery takes 12-14 weekdays, but there may be some delays. If you are unsure about your delivery, please do not hesitate to contact us.</p>
         
          <FormTitle>3. Shipping Notes</FormTitle>
          <p>At this point you have the opportunity to provide us with any additional order information. For example, specific color requests for the "Essential Bag" product, special packaging requests or additional address information. Please note that we cannot take all special requests into account, but we will do our best to fulfill your wishes.</p>
          <DeliveryInfoForm>
            <textarea>

            </textarea>
          </DeliveryInfoForm>

          <FormTitle>4. Payment</FormTitle>
          <p>After clicking the "Place Order" buttone you will be redirected to the payment section. Once you proceed the payment, your order is fulfilled</p>

          <FormTitle>5. Order Confirmation</FormTitle>
          <p>As soon as your payment process is completed, you will receive an order confirmation by email.</p>
          </LeftSide>
          <RightSide>
            <ShoppingCart>
              This is a shopping Cart
            </ShoppingCart>
            <button onClick={handleOrderSubmit}> Place Order</button>
          </RightSide>
        </CheckoutForm>     
      </CheckoutContainer>
    </>
  );
}
