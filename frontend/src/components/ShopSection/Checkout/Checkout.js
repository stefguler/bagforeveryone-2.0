import { useNavigate } from "react-router-dom";

import {
  CheckoutContainer, CheckoutHeader, CheckoutForm,
  FormTitle, ShippingForm, DeliveryInfoForm, RightSide, LeftSide,
  ShoppingCart, AdressFormContainer, Content, ProductContainer, CartItemControl, ProductDetails,
  TotalsContainer, Separator, Subtotal, OrderButton, Price
} from "./Checkout.styled.js";
import { useState } from "react";
import { GoDiffAdded, GoDiffRemoved } from "react-icons/go";
import { IconContext } from "react-icons";


export default function Checkout() {
  const navigate = useNavigate();
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
      orderItems: [
        {
          img: "../assets/images/product/product_olive_backbag.jpg",
          title: "Shopper Olive",
          price: 100,
          amount_in_cart: 2,
        },
      ],
    }
  )

  const product1 = {
    img: "../assets/images/product/product_olive_backbag.jpg",
    title: "Shopper Olive",
    price: 100,
    amount_in_cart: 1,
  };

  const product2 = {
    img: "../assets/images/product/product_red_backbag.jpg",
    title: "Shopper red",
    price: 100,
    amount_in_cart: 2,
  };

  const product3 = {
    img: "../assets/images/product/product_red_backbag.jpg",
    title: "Shopper red",
    price: 100,
    amount_in_cart: 1,
  };

  let products = [product1, product2];

  const handleChange = (e) => {
    setCheckoutData(prev => {
      return {
        ...prev, [e.target.name]: e.target.value
      }
    })
    console.log(checkOutData)
  }



  const handleOrderSubmit = (e) => {
    e.preventDefault();
    console.log('order submitted')
    navigate("/orderconfirmed")
  }

  const handleAddItem = (e) => {
    e.preventDefault();
    console.log("add item");
    console.log(e.target.name)
    checkOutData.orderItems.forEach(item => {
      console.log(item)
      if (item.title === e.target.name) {
        console.log("Add + 1")
      }
    })
  }

  const handleRemoveItem = (e) => {
    e.preventDefault();
    console.log("remove item")
    console.log(e.target.name)
    checkOutData.orderItems.forEach(item => {
      console.log(item)
      if (item.title === e.target.name && item.amount_in_cart < 2) {
        console.log("need to remove from cart")

      }
      else if (item.title === e.target.name && item.amount_in_cart > 1) {
        console.log("need to remove 1")
      }
    }
    )
  }

  const handleClearCart = (e) => {
    e.preventDefault();
    console.log("clear Cart")
    setCheckoutData(prev => {
      return {
        ...prev, [e.target.name]: []
      }
    })
    console.log(checkOutData)
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
              <AdressFormContainer>

                <input type="text" name="street" placeholder="Street" onChange={(e) => handleChange(e)}></input>

                <input type="number" name="street_number" placeholder="Street Number" onChange={(e) => handleChange(e)}></input>

                <input type="number" name="zip" placeholder="ZIP" onChange={(e) => handleChange(e)}></input>

                <input type="text" name="city" placeholder="City" onChange={(e) => handleChange(e)}></input>

                <input type="text" name="region" placeholder="Canton / Region" onChange={(e) => handleChange(e)}></input>

                <input type="text" name="country" placeholder="Country" onChange={(e) => handleChange(e)}></input>


              </AdressFormContainer>
              <input type="phone" name="phone" placeholder="Phone" onChange={(e) => handleChange(e)}></input>
            </ShippingForm>
            <FormTitle>2. Delivery Information</FormTitle>
            <p>The products are shipped regularly by mail from Lesvos, Greece to the destination address. Normally a delivery takes 12-14 weekdays, but there may be some delays. If you are unsure about your delivery, please do not hesitate to contact us.</p>

            <FormTitle>3. Shipping Notes</FormTitle>
            <p>At this point you have the opportunity to provide us with any additional order information. For example, specific color requests for the "Essential Bag" product, special packaging requests or additional address information. Please note that we cannot take all special requests into account, but we will do our best to fulfill your wishes.</p>
            <DeliveryInfoForm>
              <textarea name="shippingnotes" placeholder="Share your additional requests and comments... " onChange={(e) => handleChange(e)}>

              </textarea>
            </DeliveryInfoForm>

            <FormTitle>4. Payment</FormTitle>
            <p>After clicking the "Place Order" buttone you will be redirected to the payment section. Once you proceed the payment, your order is fulfilled</p>

            <FormTitle>5. Order Confirmation</FormTitle>
            <p>As soon as your payment process is completed, you will receive an order confirmation by email.</p>
          </LeftSide>
          <RightSide>
            <ShoppingCart>
              <span style={{ fontWeight: "bold", fontSize: "24px" }}>Order Summary</span>
              <Content>
                {checkOutData.orderItems.map((product, idx) => {
                  return (
                    <>
                      <ProductContainer key={idx}>
                        <div style={{ display: "flex" }}>
                          <img src={product.img} alt="product in cart"></img>
                          <CartItemControl>
                            {/* <IconContext.Provider value={{ size: "25px", className: "cartItemsControlAdd" }}> */}
                            {/* <GoDiffAdded/> */}
                            {/* </IconContext.Provider> */}
                            <button typeof="button" name={product.title} onClick={(e) => handleAddItem(e)}>
                              +
                            </button>
                            <button typeof="button" name={product.title} onClick={(e) => handleRemoveItem(e)}>
                              -
                            </button>
                            {/* <IconContext.Provider value={{ size: "25px", className: "cartItemsControlRemove" }}>
                              <GoDiffRemoved name={product.title} onClick={(e) => handleRemoveItem(e)} />
                            </IconContext.Provider> */}
                          </CartItemControl>
                        </div>
                        <ProductDetails>
                          <div>{product.title}</div>
                          <div>Qty: {product.amount_in_cart}</div>

                        </ProductDetails>
                        <Price>Price {product.amount_in_cart * product.price}</Price>
                      </ProductContainer>
                    </>
                  );
                })}
              </Content>

              <button type="button" name="orderItems" onClick={(e) => handleClearCart(e)}>Clear Cart</button>

              <TotalsContainer>
                <Separator></Separator>
                <Subtotal>
                  <div>Subtotal</div>
                  <div>CHF 100</div>
                </Subtotal>

              </TotalsContainer>
            </ShoppingCart>

            <OrderButton type="submit" onClick={handleOrderSubmit}> Place Order</OrderButton>

          </RightSide>
        </CheckoutForm>
      </CheckoutContainer>
    </>
  );
}
