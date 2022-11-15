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
  AddRemoveContainer,
  TotalsContainer,
  Separator,
  Subtotal,
  OrderButton,
  Price,
  ProductGrid,
  FadingBackground
} from "./Checkout.styled.js";
import { useEffect, useState } from "react";
import { ModalProvider } from "styled-react-modal";
import StockInfoModal from "../../Utilities/Modals/StockInfoModal/StockInfoModal";
import { loadStripe } from "@stripe/stripe-js"


export default function Checkout() {
  let [cart, setCart] = useState([]);
  let localCart = localStorage.getItem("cart");


  // STRIPE START
  const handleOrderClick = (orderId) => {
      let stripeCart = [];
      const stripeCounter = {};
      cart.forEach(elem => {
        if (!stripeCounter.hasOwnProperty(elem.stripe_price)) {
          stripeCounter[elem.stripe_price] = 1;
        } else {
          stripeCounter[elem.stripe_price] += 1;
        }
      })
        let stripeList = Object.entries(stripeCounter);
        stripeList.forEach(elem => {
          stripeCart.push({price: elem[0], quantity: elem[1]})
        })
        redirectToCheckout(stripeCart, orderId)
  }

  const [stripeError, setStripeError] = useState(null);
  if (stripeError) alert(stripeError);
  const [loading, setLoading] = useState(false);
  let stripePromise;

  const redirectToCheckout = async (list, orderId) => {
    console.log(list)
    const checkoutOptions = {
      // lineItems: [{price: "price_1M2ygqIbEDX1qYr8ObgkRsnK", quantity: 1 }],
      mode: "payment",
      successUrl: `${window.location.origin}/orderconfirmed/${orderId}`,
      cancelUrl: `${window.location.origin}/cancel`
    }
    setLoading(true);
    // console.log("redirecting to checkout");

    const stripe = await getStripe();

    const { error } = await stripe.redirectToCheckout(checkoutOptions);
    console.log("Stripe checkout error", error)

    if (error) setStripeError(error.message);
    setLoading(false);
  }

  const getStripe = () => {
      if (!stripePromise) {
          stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);
      }
      return stripePromise;
  }
  // STRIPE COMPLETE

  const navigate = useNavigate();
  // // form states
  //   const [checkOutData, setCheckoutData] = useState(
  //     {
  //       email: "",
  //       first_name: "",
  //       last_name: "",
  //       street: "",
  //       street_number: "",
  //       zip: "",
  //       region: "",
  //       city: "",
  //       country: "",
  //       phone: "",
  //       shippingnotes: "",
  //       orderItems: [
  //         {
  //           img: "../assets/images/product/product_olive_backbag.jpg",
  //           title: "Shopper Olive",
  //           price: 100,
  //           amount_in_cart: 2,
  //         },
  //       ],
  //     }
  //   )

  // Manu's Logic -----------------------------------------

  // creating local states to control the input fields
  const [userData, setUserData] = useState("")
  const [buyer, setBuyer] = useState("")
  const [products, setProducts] = useState("")
  const [email, setEmail] = useState("")
  const [first_name, setFirst] = useState("")
  const [last_name, setLast] = useState("")
  const [city, setCity] = useState("")
  const [zip, setZip] = useState("")
  const [street, setStreet] = useState("")
  const [street_number, setNumber] = useState("")
  const [country, setCountry] = useState("")
  const [phone, setPhone] = useState("")
  const [note, setNote] = useState("")
  const [isOpen, setIsOpen] = useState(false);
  const [opacity, setOpacity] = useState(0);
  const [scenario, setScenario] = useState();

  // handle inputs
  const handleBuyerChange = (e) => {
    setBuyer(e.target.value)
  }
  const handleProductsChange = (e) => {
    setProducts(e.target.value)
  }
  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }
  const handleFirstChange = (e) => {
    setFirst(e.target.value)
  }
  const handleLastChange = (e) => {
    setLast(e.target.value)
  }
  const handleCityChange = (e) => {
    setCity(e.target.value)
  }
  const handleZipChange = (e) => {
    setZip(e.target.value)
  }
  const handleStreetChange = (e) => {
    setStreet(e.target.value)
  }
  const handleNumberChange = (e) => {
    setNumber(e.target.value)
  }
  const handleCountryChange = (e) => {
    setCountry(e.target.value)
  }
  const handlePhoneChange = (e) => {
    setPhone(e.target.value)
  }
  const handleNoteChange = (e) => {
    setNote(e.target.value)
  }

  const handleChange = (e) => {
    // setCheckoutData((prev) => {
    //   return {
    //     ...prev,
    //     [e.target.name]: e.target.value,
    //   };
    // });

  }

  const handleOrderSubmit = (e) => {
    // STRIPE:
    handleOrderClick(1);

    e.preventDefault();
    
    const apiCart = cart.map(product => product.id);
    

    const apiCartFormatted = JSON.stringify(apiCart);
    
    console.log("submited")
    const url = "https://bag-for-everyone.propulsion-learn.ch/backend/api/order/"
    // const formData = new FormData()
    // formData.append("products", apiCart)
    // formData.append("email", email)
    // formData.append("first_name", first_name)
    // formData.append("last_name", last_name)
    // formData.append("street", street)
    // formData.append("street_number", street_number)
    // formData.append("zip", zip)
    // formData.append("city", city)
    // formData.append("country", country)
    // formData.append("phone", phone)
    // formData.append("shopping_note", note)

    const body = {
      products: apiCart,
      email: email,
      first_name: first_name,
      last_name: last_name,
      street: street,
      street_number: street_number,
      zip: zip,
      city: city,
      country: country,
      phone: phone,
      shopping_note: note
    }

    console.log("cart: ", cart);
  //   console.log("formData: ", formData)
  //   for (var pair of formData.entries()) {
  //     console.log("item in formdata", pair[0]+ ', ' + pair[1]);
  // }

    const config = {
      method: "POST",
            headers: new Headers({
                "Authorization": `Bearer ${JSON.parse(localStorage.getItem("bagsAuth")).bagsToken}`,
                "Content-Type": "application/json"
      }),
      body: JSON.stringify(body)
    }

    fetch(url, config)
      .then((response) => {
        if (response.status === 200) {
          console.log(response)
        }
        else {
          console.log(response.json())
        }
      })
  }

  useEffect(() => {
    localCart = JSON.parse(localCart);
    if (localCart) setCart(localCart);

     if (localStorage.getItem("bagsAuth")) {

    const url = "https://bag-for-everyone.propulsion-learn.ch/backend/api/user/me/"

    const config = {
      method: "GET",
      headers: new Headers({
        "Authorization": `Bearer ${JSON.parse(localStorage.getItem("bagsAuth")).bagsToken}`
      })
    }

    fetch(url, config)
      .then(response => response.json())
      .then(data => setUserData(data))
}
  }, [JSON.parse(localCart)?.length]);

  // If the user is logged in... autofill his information
    useEffect(() => {

        if (userData) {handleAutoFill()}
        console.log(userData)
    }, [userData]);

  const handleAutoFill = (e) => {

      setFirst(userData[0].first_name)
      setLast(userData[0].last_name)
      setBuyer(userData[0].id)
      setEmail(userData[0].email)
      setStreet(userData[0].street)
      setNumber(userData[0].street_number)
      setZip(userData[0].zip)
      setCity(userData[0].city)
      setCountry(userData[0].country)
  
  }

  const handleAddToCart = (product) => {

    const amountInCart = cart?.filter(item => item?.id === product?.id).length

    if (product.stock > amountInCart) {
    let cartCopy = [...cart];
      cartCopy.push(product);

      setCart(cartCopy);
      let stringCart = JSON.stringify(cartCopy);
      localStorage.setItem("cart", stringCart);
    } else {
      setScenario("low stock")
      toggleModal()
      // alert("This would exceed the available quantity")
    }
  };

  const handleRemoveFromCart = (product) => {
    let cartCopy = [...cart];
    const index = cartCopy.map(object => object.id).indexOf(product.id)
    console.log(index)
    cartCopy.splice(index, 1)


    setCart(cartCopy);
    let stringCart = JSON.stringify(cartCopy);
    localStorage.setItem("cart", stringCart);

  }


  const handleClearCart = (e) => {
      e.preventDefault();
      let cartCopy = [...cart];
      cartCopy = []
      setCart(cartCopy);
      let stringCart = JSON.stringify(cartCopy);
      localStorage.setItem("cart", stringCart);
   }

   function toggleModal(e) {
    setOpacity(0);
    setIsOpen(!isOpen);
  }

  const resetIsOpen = () => {
    setIsOpen(false)
  }


  return (
    <>
     <ModalProvider backgroundComponent={FadingBackground}>
      <CheckoutContainer >
        <CheckoutHeader>Checkout</CheckoutHeader>
        <CheckoutForm onSubmit={(e) => handleOrderSubmit(e)}>
          <LeftSide>
            <FormTitle>1. Shipping</FormTitle>
            <ShippingForm>
              <input type="email" name="email" value={email} placeholder="Email adress" onChange={handleEmailChange}></input>
              <input type="text" name="first_name" value={first_name} placeholder="First Name" onChange={handleFirstChange}></input>
              <input type="text" name="last_name" value={last_name} placeholder="Last Name" onChange={handleLastChange}></input>
              <AdressFormContainer>
                <input
                  type="text"
                  name="street"
                  placeholder="Street"
                  onChange={(e) => handleChange(e)}
                ></input>

                <input type="text" name="street" value={street} placeholder="Street" onChange={handleStreetChange}></input>

                <input type="number" name="street_number" value={street_number} placeholder="Street Number" onChange={handleNumberChange}></input>

                <input type="number" name="zip" value={zip} placeholder="ZIP" onChange={handleZipChange}></input>

                <input type="text" name="city" value={city} placeholder="City" onChange={handleCityChange}></input>

                <input type="text" name="country" value={country} placeholder="Country" onChange={handleCountryChange}></input>

                {/* These two will be feed from the cart or user fetch */}
                <input type="number" name="buyer" value={buyer} placeholder="Buyer" onChange={handleBuyerChange}></input>
                <input type="number" name="product" value={products} placeholder="Product ID" onChange={handleProductsChange}></input>


              </AdressFormContainer>
              <input type="phone" name="phone" value={phone} placeholder="Phone" onChange={handlePhoneChange}></input>
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
              <textarea name="shippingnotes" value={note} placeholder="Share your additional requests and comments... " onChange={handleNoteChange}>

              </textarea>
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
              <span style={{ fontWeight: "bold", fontSize: "24px" }}>Order Summary</span>
              <ProductGrid>
              {cart?.filter((value, index, self) =>
                index === self.findIndex((t) => (
                  t?.place === value?.place && t?.name === value?.name
                ))
              ).map((product, idx) => {
                return (
                  <>
                    <ProductContainer key={idx}>
                      <img src={product?.image} alt="product in cart"></img>
                      <div>
                        <span>{product?.name}</span>
                        <span>CHF {product?.price}</span>
                        <AddRemoveContainer>
                          <div onClick={() => handleAddToCart(product)}>+</div>
                          {cart?.filter(item => item?.id === product?.id).length}
                          <div onClick={() => handleRemoveFromCart(product)}>-</div>
                        </AddRemoveContainer>
                      </div>
                    </ProductContainer>
                  </>
                );
              })}
              </ProductGrid>
              <button type="button" name="orderItems" onClick={handleClearCart}>Clear Cart</button>

              <TotalsContainer>
                <Separator></Separator>
                <Subtotal>
                  <div>Subtotal</div>
                  <div>CHF {cart?.reduce((prev, curr) => prev + curr?.price, 0)}</div>
                </Subtotal>
              </TotalsContainer>
            </ShoppingCart>

            <OrderButton type="submit" onClick={handleOrderSubmit}>Place Order</OrderButton>

          </RightSide>
        </CheckoutForm>
        <StockInfoModal isOpen={isOpen} scenario={scenario} onClick={resetIsOpen}/>
      </CheckoutContainer>
      </ModalProvider>
    </>
  );
}


