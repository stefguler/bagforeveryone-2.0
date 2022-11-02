import styled from "styled-components";

export const CartContainer = styled.div`
    color: white;
    background: white;
    display: grid;
    width: 80%;
    grid-template-columns: repeat(2, 1fr);
    border: 1px solid white;
    border-radius: 0.5rem;
    align-items: center;
    margin: 0 auto;

    @media only screen and (max-width: 1450px) {
        
        grid-template-columns: repeat(1, 1fr);
  }
  
`
  
export const ItemsContainer = styled.div`
    align-self: flex-start;
    justify-self: center;
    width: 95%;
    background: black;
    border: 1px solid white;
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    margin: 1rem;
    padding: 1rem;
  `
 
  export const ItemHeaderContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;

    h1 {
        padding: 1rem 1rem;
    }

    button {
        width: 7rem;
        height: 3rem;
    }
`
  
export const CheckOutContainer = styled.div`
    display: flex;
    width: 95%;
    background: black;
    align-self: flex-start;
    justify-self: center;
    align-items: center;
    border: 1px solid white;
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    margin: 1rem;
    padding: 1rem;

    div {
        width: 30rem;
        height: 1rem;
        border-bottom: rgba(255, 255, 255, 0.301) solid 3px;
    }

    button {
        width: 50%;
        border-radius: 0.3rem;
        font-size: 16px;
        height: 4rem;
        margin: 1rem 0;
        background: rgb(238, 96, 231);
    }    
  `

export const DeliveryContainer = styled.div`
    align-self: flex-start;
    justify-self: center;
    text-align: center;
    border: 1px solid white;
    border-radius: 0.5rem;
    width: 95%;
    background: black;
    display: flex;
    flex-direction: column;
    margin: 1rem;
    padding: 1rem;

    span {
        padding: 1rem;
        font-size: 18px;
    }
`
   
export const PaymentContainer = styled.div`
    align-self: flex-start;
    justify-self: center;
    text-align: center;
    border: 1px solid white;
    border-radius: 0.5rem;
    margin: 1rem;
    width: 95%;
    background: black;
    display: flex;
    flex-direction: column;
    padding: 1rem; 

    span {
        padding: 1rem 0;
    }
`
  