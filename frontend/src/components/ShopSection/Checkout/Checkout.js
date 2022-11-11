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
} from "./Checkout.styled.js";
import { useEffect, useState } from "react";
import { GoDiffAdded, GoDiffRemoved } from "react-icons/go";
import { IconContext } from "react-icons";


export default function Checkout() {
  let [cart, setCart] = useState([]);
  let [localCart, setLocalCart] = useState(localStorage.getItem("cart"));
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
  const [rerenderPage, setRerender] = useState(false)

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
    e.preventDefault()
    let apiCart = JSON.stringify(cart);
    console.log("submited")
    const url = "https://bag-for-everyone.propulsion-learn.ch/backend/api/order/"
    const formData = new FormData()
    formData.append("buyer", buyer)
    formData.append("products", apiCart)
    formData.append("email", email)
    formData.append("first_name", first_name)
    formData.append("last_name", last_name)
    formData.append("street", street)
    formData.append("street_number", street_number)
    formData.append("zip", zip)
    formData.append("city", city)
    formData.append("country", country)
    formData.append("phone", phone)
    formData.append("shopping_note", note)

    console.log("cart: ", cart)
    console.log("formData: ", formData)
    for (var pair of formData.entries()) {
      console.log("item in formdata", pair[0]+ ', ' + pair[1]); 
  }

    const config = {
      method: "POST",
      headers: new Headers({
        "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY5NDc5MDExLCJpYXQiOjE2Njc5MjM4MTEsImp0aSI6ImVlYWVkOGIwYWI3YjQyOWNhMDQ0YWFmODdiZGQ4ZGNhIiwidXNlcl9pZCI6MX0.Y7KK4Ajr-eJo-ewpiRjzZyGmhpADWtky8pmdlhXJg_U`

      }),
      body: formData
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

    const url = "https://bag-for-everyone.propulsion-learn.ch/backend/api/user/me/"

    const config = {
      method: "GET",
      headers: new Headers({
        "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY5NDc5MDExLCJpYXQiOjE2Njc5MjM4MTEsImp0aSI6ImVlYWVkOGIwYWI3YjQyOWNhMDQ0YWFmODdiZGQ4ZGNhIiwidXNlcl9pZCI6MX0.Y7KK4Ajr-eJo-ewpiRjzZyGmhpADWtky8pmdlhXJg_U`
      })
    }

    fetch(url, config)
      .then(response => response.json())
      .then(data => setUserData(data), console.log(userData))
  }, []);

  // Put the following content into the useEffect
  const handleAutoFill = (e) => {

    // if true should be "if userdata"
    if (true) {
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
      alert("This would exceed the available quantity")
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


  return (
    <>
      <CheckoutContainer >
        <OrderButton onClick={handleAutoFill}>Auto Fill</OrderButton>
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
              {cart.filter((value, index, self) =>
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
      </CheckoutContainer>
    </>
  );
}

