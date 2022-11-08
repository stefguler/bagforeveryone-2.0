import styled from "styled-components";


export const PageHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10rem;
    p {
      font-size: 24px;
    }
`;

export const CatalogGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    font-weight: 400;
    margin: 0 auto;
    gap: 5rem;
    max-width: 1000px;
    padding-bottom: 10rem;

    @media screen and (max-width: 1300px)  {
      grid-template-columns: 1fr;
      gap: 0;
    }

    @media screen and (max-width: 700px)  {
      padding: 0;
    }
`