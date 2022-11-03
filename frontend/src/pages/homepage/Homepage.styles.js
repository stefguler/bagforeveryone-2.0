import styled from "styled-components";

export const PageWrapper = styled.div `
    width: 100%;
    display: flex;
    flex-direction: column;

    @media only screen and (max-width: 800px) {
        flex-direction: row;
    }
`