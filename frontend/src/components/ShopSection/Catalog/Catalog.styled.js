import styled from "styled-components";


export const PageHeader = styled.div`
    display: flex;
    flex-direction: column;

    p {
      font-size: 24px;
    }
`;

export const CatalogGrid = styled.div`
    display: grid;
    align-self: center;
    justify-self: center;
    grid-template-columns: repeat(2, 1fr);
    font-weight: 400;
    gap: 5rem;
    margin: 0 auto;

    @media screen and (max-width: 1150px)  {
      grid-template-columns: 1fr;
      gap: 0;
    }

`

export const StickyCart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 2rem;
  bottom: 20rem;
  width: 10rem;
  height: 7rem;
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

  @media screen and (max-width: 1200px)  {
    right: 0;
    top: 5rem;
    position: sticky;
    flex-direction: column;
    gap: 1rem;
    width: 7rem;
    height: 10rem;


    :hover {
      width: 8rem;
     }
    }
`

export const PageBottom = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`