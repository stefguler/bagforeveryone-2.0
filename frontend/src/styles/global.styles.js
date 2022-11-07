import styled, { createGlobalStyle } from "styled-components";

// ------------------- GLOBAL STYLES ------------------

export const GlobalStyle = createGlobalStyle`
    body, #root {
        font-family: 'Montserrat', sans-serif;
        background: white;
        display: flex;
        /* align-items: center; */
        margin: 0 auto;
        padding: 0;
        box-sizing: border-box;
        width: 100%;
        height: 100vh;
    }

    *{
        box-sizing: border-box;
    }
`;



export const PageButton = styled.button `
    background: #DABC39;
    border: 3px solid #DABC39;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
    border-radius: 15px;
    font-family: 'Montserrat', sans-serif;
    color: black;
`

    
