import styled from "styled-components";

export const PageWrapper = styled.div `
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: #FAF5E1;
    align-items: center;
    justify-content: center;

    @media only screen and (max-width: 800px) {
        flex-direction: row;
        justify-content: center;
    }
`