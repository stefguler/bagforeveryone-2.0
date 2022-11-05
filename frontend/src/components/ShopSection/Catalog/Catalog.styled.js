import styled from "styled-components";


export const PageHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
      font-size: 24px;
    }
`;

export const CatalogGrid = styled.div`
    display: grid;
    /* justify-self: ; */
    grid-template-columns: repeat(2, 1fr);
    font-weight: 400;
    /* gap: 5rem; */
    margin: 0 auto;
    padding: 0 10rem;
    gap: 0;

    @media screen and (max-width: 1300px)  {
      grid-template-columns: 1fr;
      gap: 0;
    }
`