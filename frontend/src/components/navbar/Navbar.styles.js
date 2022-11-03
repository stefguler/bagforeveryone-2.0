import styled from "styled-components";

export const NavWrapper = styled.nav `

    display: flex;
    gap: 1em;
    justify-content: space-between;
    align-items: center;

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
        height: fit-content;
        flex-direction: column;
        margin-top: 1em;
        margin-left: 1em;
        justify-items: center;

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
