import styled from "styled-components";


export const CheckoutContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 8rem;
    align-items: flex-start;
    margin: 8rem auto auto;
    max-width: 60%;
    padding-bottom: 10rem;
    /* padding-top: 12rem; */
    margin-top: 12rem;

    p {
      margin: 0;
      text-align: center;
    }
`

export const CheckoutHeader = styled.div`
    display: flex;
    text-transform: uppercase;
    color: #DABC39;
    padding: 0.5rem;
    font-size: 36px;

`

export const CheckoutForm = styled.form`
  display: flex;
  gap: 0.5rem;
  margin: 0 auto;
`
export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 50%;
 
  @media screen and (max-width: 360px)  {
    max-width: 100%;
    }
`

export const FormTitle = styled.div`
    font-weight: bold;
    padding: 1rem 0 0.5rem;
`

export const ShippingForm = styled.div`
  display: flex;
  flex-direction: column;

input {
      font-family: 'Montserrat', sans-serif;
      padding: 1rem;
      margin: 0.5rem auto;
      border-radius: 1rem;
      border: 1px solid #DABC39;
      min-width: 100%;
    }
`

export const AdressFormContainer = styled.div`
      display: grid;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      grid-template-columns: repeat(2, 1fr);

      input {
        margin: 0.5rem 0.1rem;
        max-width: 50%;
      }

`

export const DeliveryInfoForm = styled.div`
      
      textarea {
      font-family: 'Montserrat', sans-serif;
      padding: 1rem;
      height: 7rem;
      margin: 0.5rem auto;
      border-radius: 1rem;
      border: 1px solid #DABC39;
      min-width: 100%;}

`
export const RightSide = styled.div`
    display: flex;
    position: fixed;
    right: 10%;
    flex-direction: column;
    min-width: 25%;
    padding: 1rem;
    gap: 1rem;

    @media screen and (max-width: 360px)  {
      position: fixed;
    }

    button {
      font-family: 'Montserrat', sans-serif;
      background:#DABC39;
      border: none;
      border-radius: 1rem;
      padding: 0.5rem;
      max-width: 50%;
      align-self: flex-start;
      cursor: pointer;

      :hover {
        opacity: 0.6;
      }
    }

`

export const ShoppingCart = styled.div`

  display: flex;
  flex-direction: column;  
  background: #FAF5E1;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid #DABC39;
`

export const Price = styled.div`

@media screen and (max-width: 1200px)  {
      visibility: hidden;
    }



`

// export const Content = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 1rem;
        
//   span{
//     font-size: 20px;
//   }

// `

// export const ProductContainer = styled.div`

//     display: flex;
//     width: 100%;
//     gap: 1rem;
//     justify-content: space-between;

//   img {
//     width: 100px;
//     height: 100px;
//     object-fit: scale-down;
//   }

//   div {
//       font-size: 20px;
//       display: flex;
//       flex-direction: column;
//       align-items: flex-start;

//     }

//     button {
//       padding: 0;
//       margin: 0;
//       width: 100%;
//       height: 100%;
//       border-radius: 1rem;
//       border: 1px solid black;
//       background: none;
//       font-size: 24px;
//       font-weight: bold;
//     }
// `
export const CartItemControl = styled.div`
  display: flex;
  flex-direction: row !important;
  align-items: center;
  justify-content: center;
  min-width: 5.5rem;
  padding: 0.5rem;
  gap: 0.5rem;

 .cartItemsControlAdd{
    cursor: pointer;
    :hover {
      color: #DABC39;
    }
 }

 .cartItemsControlRemove{
    cursor: pointer;    
    :hover {
      color: #DABC39;
    }
 }

`

export const ProductDetails = styled.div`
  display: flex !important;
  flex-direction: column !important;

`

export const TotalsContainer = styled.div`
  padding: 0 1rem;

`

export const Separator = styled.div`
  min-width: 100%;
  height: 0.1rem;
  background: #DABC39;;

`

export const Subtotal = styled.div`
  display: flex;
  margin-top: 1rem;
  justify-content: space-between;
  font-weight: bold;
  font-size: 24px;
`

export const OrderButton = styled.button`

font-family: 'Montserrat', sans-serif;
  background:#DABC39;
  border: none;
  border-radius: 1rem;
  min-width: 100%;
  padding: 0.5rem;
  align-self: center;
  cursor: pointer;

  :hover {
    opacity: 0.6;
  }

`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  `

export const ProductContainer = styled.div`

    display: flex;
    gap: 1rem;

  img {
    width: 100px;
  }

  div {
      font-size: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;

    }
`

export const AddRemoveContainer = styled.div`
        flex-direction: row !important;
        gap: 1.5rem !important;
        border: 1px solid #DABC39;

        div {
          padding: 0.5rem;
          cursor: pointer;
          
          :hover {
            color: #DABC39;
            
          }

        }`
