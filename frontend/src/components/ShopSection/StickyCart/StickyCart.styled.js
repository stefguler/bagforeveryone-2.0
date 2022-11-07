import styled from "styled-components";

export const StickyCartContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0rem;
  width: 10rem;
  align-self: flex-end;
  cursor: pointer;
  
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #DABC39;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    color: black;
  }

  :hover {
    width: 20rem;
  }

  @media screen and (max-width: 1400px)  {
    right: 0;
    top: 5rem;
    position: sticky;
    flex-direction: column;
    gap: 1rem;
    /* width: 7rem; */
    height: 10rem;


    :hover {
      width: 8rem;
     }
    }
`