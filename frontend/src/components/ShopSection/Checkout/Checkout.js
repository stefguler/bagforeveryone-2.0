// import { useNavigate } from "react-router-dom";

import {CheckoutContainer, CheckoutHeader, CheckoutForm, FormTitle, ShippingForm} from "./Checkout.styled.js";
import { useState } from "react";


export default function Checkout() {
  // const navigate = useNavigate();
  //form states
  const [email, setEmail] = useState()
  const [first_name, setFirstName] = useState()
  const [last_name, setLastName] = useState()
  const [street, setStreet] = useState()
  const [street_number, setStreetNumber] = useState()
  const [zip, setZip] = useState()
  const [city, setCity] = useState()
  const [country, setCountry] = useState()
  const [phone, setPhone] = useState()


const handleInputChange = (inputField, data) =>
{
  switch (inputField) {
    case "email": 
      setEmail(data);      
      break;    
    case "first_name": 
      setFirstName(data);      
      break;
    case "last_name": 
      setLastName(data);      
      break;
    case "street": 
      setStreet(data);      
      break;    
    case "street_number": 
      setStreetNumber(data);      
      break;
    case "zip": 
      setZip(data);      
      break;    
    case "city": 
      setCity(data);      
      break;
    case "country": 
      setCountry(data);      
      break;
    case "phone": 
      setPhone(data);      
      break;  

    default:
      break;
  }
} 

const newFun = () => {
  
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
        <p>checkout implementation</p>
        <CheckoutForm onSubmit={(e) => handleOrderSubmit(e)}>
          <FormTitle>1. Shipping</FormTitle>
          <ShippingForm>
            
          </ShippingForm>
        
        
        </CheckoutForm>     
      </CheckoutContainer>
    </>
  );
}
