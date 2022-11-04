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

    @media screen and (max-width: 1300px)  {
      grid-template-columns: 1fr;
      gap: 0;
    }

`

export const PageBottom = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`