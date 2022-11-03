import styled from "styled-components";

export const StoryWrapper = styled.section `
    position: relative;

    h3 {
        opacity: 0;
        color: white;
        width: 100%;
        height: 100%; 
        position: absolute;
        top: -1em;
        left: 1em;
    }
    h3:hover{
        opacity: 1;
        color: black;
    }

`

export const Modal = styled.section `
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
    color: white;
`
