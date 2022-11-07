import styled from "styled-components";

export const NavWrapper = styled.nav `
    width: fit-content;
    border: 1px solid lightgray;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    position: fixed;
    z-index: 4;
    left: .6em;
    top: 3.5em;
    background-color: white;

    //LOGO:
    img {
        width: 100px;
    }

    ul {
        padding: 0;
        display: flex;
        flex-direction: column;
        gap: .2em;
        list-style-type: none;
        margin-bottom: .2em;
    }

    li {
        text-align: center;
        font-size: .8em;
        border: 1px solid lightgray;
    }

    /* @media only screen and (max-width: 800px) {
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
    } */
`

export const Logo = styled.img `
    // in mobile design it is a hamburger icon!
    max-width: 200px;

    /* @media only screen and (min-width: 800px) {
        width: 100px;
    } */

`
