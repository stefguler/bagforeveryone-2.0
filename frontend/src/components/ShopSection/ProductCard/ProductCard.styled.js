import styled from "styled-components";

export const CardContainer = styled.div`
margin-top: 4rem;
display: flex;
flex-direction: column;
gap: 1rem;
cursor: pointer;

   :hover span {
       color: #DABC39;
   }

   :hover img {
      width: 420px;
   }

`

export const Avatar = styled.img`
   width: 400px;
   border-radius: 1rem;
       
`

export const Title = styled.span`
   font-weight: bold;
   text-transform: uppercase;
   text-align: center;
`

export const Price = styled.p`
   text-align: center;
   margin: 0;
`
