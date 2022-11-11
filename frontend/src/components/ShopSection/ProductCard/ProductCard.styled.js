import styled from "styled-components";

export const CardContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  cursor: pointer;

  :hover span {
    color: #dabc39;
  }
`;

export const AvatarContainer = styled.div`
  position: relative;

  .preview {
    max-width: 100%;
    object-fit: cover;
  }

  div {
   display: flex;
   justify-content: center;
   font-size: 36px;
   padding-top: 1rem;
   opacity: 0;
   color: white;
   min-width: 100%;
   object-fit: cover;
   height: 99.5%;
   position: absolute;
   top: 0;
   left: 0;
   background: black;

  }
      div:hover {
         opacity: 0.2;
   }

  img {
    width: 400px;
  }
`;


export const Title = styled.span`
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
  font-size: 36px;
`;

export const Price = styled.p`
  text-align: center;
  margin: 0;
  font-size: 28px;
`;
