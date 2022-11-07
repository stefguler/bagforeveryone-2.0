import styled, { createGlobalStyle } from "styled-components";

// ------------------- GLOBAL STYLES ------------------

export const GlobalStyle = createGlobalStyle`
    body, #root {
        font-family: 'Montserrat', sans-serif;
        background: pink;
        display: flex;
        margin: 0 auto;
        padding: 0;
        box-sizing: border-box;
        width: 100%;
    }
    // hamburger icon in mobile size (it is
    // a flex item):
    .hamburger {
        padding: .5em;
        background-color: white;
        border: 1px solid lightgray;
        border-radius: 5px;
        color: #DABC39;
        align-self: flex-start;
        position: fixed;
        z-index: 1;
        left: .8em;
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

    
