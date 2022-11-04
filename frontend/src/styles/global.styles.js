import { createGlobalStyle } from "styled-components";

// ------------------- GLOBAL STYLES ------------------

export const GlobalStyle = createGlobalStyle`
    body, #root {
        font-family: 'Montserrat', sans-serif;
        background: white;
        display: flex;
        align-items: center;
        margin: 0 auto;
        padding: 0;
        box-sizing: border-box;
        width: 100%;
        height: 100vh;
    }
`;
