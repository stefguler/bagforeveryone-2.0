import { useNavigate } from "react-router-dom";

import {
  CheckoutContainer,
  CheckoutHeader,
  CheckoutForm,
  FormTitle,
  ShippingForm,
  DeliveryInfoForm,
  RightSide,
  LeftSide,
  ShoppingCart,
  AdressFormContainer,
  Content,
  ProductContainer,
  CartItemControl,
  ProductDetails,
  TotalsContainer,
  Separator,
  Subtotal,
  OrderButton,
  Price,
} from "./Checkout.styled.js";
import { useState, useEffect } from "react";


export default function Checkout() {
  let [cart, setCart] = useState([]);
  let localCart = localStorage.getItem("cart");
  const navigate = useNavigate();
  //form states
  const [checkOutData, setCheckoutData] = useState({
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
    orderItems: [],
  });

  useEffect(() => {
    localCart = JSON.parse(localCart);
    if (localCart) setCart(localCart);
  }, []);

  const handleChange = (e) => {

    setCheckoutData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
    console.log(checkOutData);
  };

  const handleOrderSubmit = (e) => {
    e.preventDefault();

    setCheckoutData((prev) => {
      return {
        ...prev,
        orderItems: cart,
      };
    });
    console.log("order submitted");
    console.log(checkOutData)
    localStorage.removeItem("cart")
    // navigate("/orderconfirmed");
  };

  const handleAddToCart = (e, product) => {
    e.preventDefault();
    let cartCopy = [...cart];
    cartCopy.push(product);

    setCart(cartCopy);
    let stringCart = JSON.stringify(cartCopy);
    localStorage.setItem("cart", stringCart);
  };

  const handleRemoveFromCart = (e, product) => {
    e.preventDefault();
    let cartCopy = [...cart];
    const index = cartCopy.map((object) => object.id).indexOf(product.id);
    console.log(index);
    cartCopy.splice(index, 1);

    setCart(cartCopy);
    let stringCart = JSON.stringify(cartCopy);
    localStorage.setItem("cart", stringCart);
  };

  const handleClearCart = (e) => {
    e.preventDefault();
    localStorage.removeItem("cart")
  };

  return (
    <>
      <CheckoutContainer>
        <CheckoutHeader>Checkout</CheckoutHeader>
        <CheckoutForm onSubmit={(e) => handleOrderSubmit(e)}>
          <LeftSide>
            <FormTitle>1. Shipping</FormTitle>
            <ShippingForm>
              <input
                type="email"
                name="email"
                placeholder="Email adress"
                onChange={(e) => handleChange(e)}
              ></input>
              <input
                type="text"
                name="first_name"
                placeholder="First Name"
                onChange={(e) => handleChange(e)}
              ></input>
              <input
                type="text"
                name="last_name"
                placeholder="Last Name"
                onChange={(e) => handleChange(e)}
              ></input>
              <AdressFormContainer>
                <input
                  type="text"
                  name="street"
                  placeholder="Street"
                  onChange={(e) => handleChange(e)}
                ></input>

                <input
                  type="number"
                  name="street_number"
                  placeholder="Street Number"
                  onChange={(e) => handleChange(e)}
                ></input>

                <input
                  type="number"
                  name="zip"
                  placeholder="ZIP"
                  onChange={(e) => handleChange(e)}
                ></input>

                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  onChange={(e) => handleChange(e)}
                ></input>

                <input
                  type="text"
                  name="region"
                  placeholder="Canton / Region"
                  onChange={(e) => handleChange(e)}
                ></input>

                <input
                  type="text"
                  name="country"
                  placeholder="Country"
                  onChange={(e) => handleChange(e)}
                ></input>
              </AdressFormContainer>
              <input
                type="phone"
                name="phone"
                placeholder="Phone"
                onChange={(e) => handleChange(e)}
              ></input>
            </ShippingForm>
            <FormTitle>2. Delivery Information</FormTitle>
            <p>
              The products are shipped regularly by mail from Lesvos, Greece to
              the destination address. Normally a delivery takes 12-14 weekdays,
              but there may be some delays. If you are unsure about your
              delivery, please do not hesitate to contact us.
            </p>

            <FormTitle>3. Shipping Notes</FormTitle>
            <p>
              At this point you have the opportunity to provide us with any
              additional order information. For example, specific color requests
              for the "Essential Bag" product, special packaging requests or
              additional address information. Please note that we cannot take
              all special requests into account, but we will do our best to
              fulfill your wishes.
            </p>
            <DeliveryInfoForm>
              <textarea
                name="shippingnotes"
                placeholder="Share your additional requests and comments... "
                onChange={(e) => handleChange(e)}
              ></textarea>
            </DeliveryInfoForm>

            <FormTitle>4. Payment</FormTitle>
            <p>
              After clicking the "Place Order" buttone you will be redirected to
              the payment section. Once you proceed the payment, your order is
              fulfilled
            </p>

            <FormTitle>5. Order Confirmation</FormTitle>
            <p>
              As soon as your payment process is completed, you will receive an
              order confirmation by email.
            </p>
          </LeftSide>
          <RightSide>
            <ShoppingCart>
              <span style={{ fontWeight: "bold", fontSize: "24px" }}>
                Order Summary
              </span>
              <Content>
                {
                cart.filter((value, index, self) =>
                index === self.findIndex((t) => (
                  t?.place === value?.place && t?.name === value?.name
                ))
                ).map((product, idx) => {
                  return (
                    <>
                      <ProductContainer key={idx}>
                        <div style={{ display: "flex" }}>
                          <img src={product.image} alt="product in cart"></img>
                          <CartItemControl>
                            <button
                              typeof="button"
                              name={product.name}
                              onClick={(e) => handleAddToCart(e,product)}
                            >
                              +
                            </button>
                            <button
                              typeof="button"
                              name={product.title}
                              onClick={(e) => handleRemoveFromCart(e, product)}
                            >
                              -
                            </button>
                          </CartItemControl>
                        </div>
                        <ProductDetails>
                          <div>{product.name}</div>
                          <div>Qty: {cart?.filter(item => item?.id === product?.id).length}</div>
                        </ProductDetails>
                        <Price>
                          Price {cart?.filter(item => item?.id === product?.id)[0].price}
                        </Price>
                      </ProductContainer>
                    </>
                  );
                })}
              </Content>

              <button
                type="button"
                name="orderItems"
                onClick={(e) => handleClearCart(e)}
              >
                Clear Cart
              </button>

              <TotalsContainer>
                <Separator></Separator>
                <Subtotal>
                  <div>Subtotal</div>
                  <div>CHF {cart?.reduce((prev, curr) => prev + curr?.price, 0)}</div>
                </Subtotal>
              </TotalsContainer>
            </ShoppingCart>

            <OrderButton type="submit" onClick={handleOrderSubmit}>
              {" "}
              Place Order
            </OrderButton>
          </RightSide>
        </CheckoutForm>
      </CheckoutContainer>
    </>
  );
}
