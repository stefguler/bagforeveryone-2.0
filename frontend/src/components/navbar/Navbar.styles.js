import styled from "styled-components";

export const NavWrapper = styled.nav `

    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 3;
    gap: 1em;
    justify-content: space-between;
    align-items: center;
    background-color: white;

    ul {
        list-style-type: none;
        display: flex;
        gap: 1em;
        margin-right: 1em;
    }

    li {
        background-color: lightgray;
        min-width: fit-content;
        border-radius: 5px; 
        height: fit-content;
        padding: .5em;
    }

    @media only screen and (max-width: 800px) {
        position: static;
        height: fit-content;
        flex-direction: column;
        margin: 1em 1em 0 1em;
        justify-items: center;
        width: fit-content;
        padding: 0.5em;

        ul {
            margin: 0 auto;
            flex-direction: column;
            padding: .1em;
            gap: .1em;
        }
        li {
            text-align: center;
        }
    }
`

export const Logo = styled.img `
    width: 200px;

    @media only screen and (max-width: 800px) {
        width: 100px;
    }

`
