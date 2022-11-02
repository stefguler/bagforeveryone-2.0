import styled from "styled-components";


   
export const CardContainer = styled.div`
margin-top: 4rem;
display: flex;
flex-direction: column;
gap: 1rem;
cursor: pointer;
`

export const Avatar = styled.img`
   width: 400px;
   border-radius: 0.5rem;
   object-fit: contain;
   object-position: center center;              
   :hover {
       width: 420px;
   }
`

export const Title = styled.span`
   font-weight: bold;
   text-transform: uppercase;
   text-align: center;
`

export const Price = styled.span`
   text-align: center;
`