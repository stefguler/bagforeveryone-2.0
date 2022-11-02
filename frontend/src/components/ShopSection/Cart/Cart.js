// import { useDispatch, useSelector } from "react-redux";

// import {
//   clearCart,
//   addItemFromCart,
//   removeItemFromCart,
//   CheckOutContainer,
// } from "../../redux/slices/Cart";
import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom"
import {
  CartContainer,
  ItemsContainer,
  ItemHeaderContainer,
  DeliveryContainer,
  PaymentContainer,
  CheckOutContainer
} from "./Cart.styled.js";

export default function Cart() {
  //   const dispatch = useDispatch();
  //   const authState = useSelector(state => state.token.token)
  // const navigate = useNavigate();
 const [inventory, setInventory] = useState([]);
 const [totalPrice, setTotalPrice] = useState(0.00);
 const [deliveryCost, setDeliveryCost] = useState(0.00);

    useEffect(() => {
        const backbag = {
            id: 1,
            img: "./assets/images/product/product_olive_backbag.jpg",
            title: "Shopper Bag",
            description:
              "Handmade vegan bags. All exclusive pieces, created by refugee women on the greek island lesvos.",
            colors: ["red", "sand grey", "olive", "gold", "blue", "brown"],
            material: "Polyester (wildleather-look, vegane leather)",
            dimensions: "35cm x 34cm (lxb)",
            stock: 16,
            cart: 2,
            category: "Shopper",
            price: 100,
            share_link: "bagforeveryone.com/shop/essentialbag",
          };
      
          const essential_bag = {
            id: 2,
            img: "./assets/images/product/product_essentialbag.jpg",
            title: "Essentials Bag",
            description:
              "The perfect piece to store your glasses or mobile phone in, use as a pencil case,  or for keeping your keys, money, and essentials safe! Made with the leftovers of the vegan materials of our shopper bags, the essential bags show that no inch of material is wasted in the bagforeveryone workshop",
            colors: ["random"],
            material: "Polyester (wildleather-look, vegane leahter)",
            dimensions: "17cm x 9.5cm (lxb)",
            stock: 12,
            cart: 2,
            category: "Pouch",
            price: 27.0,
            share_link: "bagforeveryone.com/shop/essentialbag",
          };

          setInventory([backbag, essential_bag])
          setTotalPrice( 
            inventory.length > 0 ?
            inventory.reduce((prev, curr) => {
                  return prev + (curr.cart * curr.price)
                }, 0) : 0
          )
          setDeliveryCost(
            totalPrice > 0 ? 
            10.00 : 0.00
          )

    }, []);

  //   const products = useSelector(state => state.cart.products)
  //   const totalPrice = useSelector(state => state.cart.totalPrice)
  //   const deliveryCost = 10;

    const totalAmountInCart = () => {
      if (inventory.length > 0) {
        return inventory.reduce((prev, curr) => {
          return prev + curr.cart
        }, 0)
      }
      return 0;
    }

  const handleClearAll = () => {
    console.log("Clear all clicked -> ");

    // dispatch(clearCart());
  };

  const handleClickAdd = (event) => {
    console.log("Add clicked -> ");
    // dispatch(addItemFromCart(parseInt(event.target.id)));
  };

  const handleClickRemove = (event) => {
    console.log("Remove clicked -> ");
    // dispatch(removeItemFromCart(parseInt(event.target.id)));
  };

  return (
    <>
      <CartContainer>
        <ItemsContainer>
          <ItemHeaderContainer>
            <h1>Your cart ({totalAmountInCart()} pce)</h1>
            <button onClick={() => handleClearAll()}>Clear Cart</button>
          </ItemHeaderContainer>

          <table>
            <tr>
              <th>Amount</th>
              <th>Avatar</th>
              <th>Product Name</th>
              <th>Price (CHF)</th>
              <th>&minus;</th>
              <th>&#43;</th>
            </tr>

            {inventory.map((product) => {
              return (
                <tr key={product.id}>
                  <td> {product.cart}x</td>
                  <td>
                    <img width="50" src={`.${product.img}`} alt="" />
                  </td>
                  <td> {product.title}</td>
                  <td>{product.price * product.cart}.00</td>
                  <td>
                    <button
                      id={product.productId}
                      onClick={(event) => handleClickRemove(event)}
                    >
                      Remove
                    </button>
                  </td>
                  <td>
                    <button
                      id={product.productId}
                      onClick={(event) => handleClickAdd(event)}
                    >
                      Add more
                    </button>
                  </td>{" "}
                </tr>
              );
            })}
          </table>
        </ItemsContainer>

        <CheckOutContainer>
          <h1>Total</h1>
          <h3> Subtotal {totalPrice}.00 CHF</h3>
          <h4> Delivery {deliveryCost}.00 CHF</h4>
          <div></div>
          <h2>
            Total (VAT-Incl.) {totalPrice + deliveryCost}.00 CHF
          </h2>
          <button>GO TO CHECKOUT</button>
        </CheckOutContainer>

        <DeliveryContainer>
          <h1>Estimated delivery</h1>
          <span>We, 21.09. - Sa, 24.09.</span>
        </DeliveryContainer>

        <PaymentContainer>
          <h1>We accept</h1>
          <div>

          </div>
      </PaymentContainer>
      </CartContainer>
    </>
  );
}
