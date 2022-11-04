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
`

export const Avatar = styled.img`
   width: 500px;
      
`

export const Title = styled.span`
   font-weight: bold;
   text-transform: uppercase;
   text-align: center;
   font-size: 36px;
`

export const Price = styled.p`
   text-align: center;
   margin: 0;
   font-size: 28px;
`
