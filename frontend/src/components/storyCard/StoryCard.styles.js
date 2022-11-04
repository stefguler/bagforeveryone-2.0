import styled from "styled-components";

export const StoryWrapper = styled.section `
    position: relative;

    .preview {
        max-width: 400px;
    }

    h3 {
        opacity: 0;
        color: white;
        text-shadow: 2px 2px 2px black;
        width: 100%;
        height: 100%; 
        position: absolute;
        top: 0;
        left: 1em;
    }
    h3:hover{
        opacity: 1;
    }

`

export const Modal = styled.section `
    border: 1px solid red;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 3;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.7);
    color: white;

    button {
        position: absolute;
        top: 0;
        right: 0;
        align-self: flex-end;
        margin-top: 1em;
        margin-right: 1em;
    }

    .modal-story-wrapper {
        
    }
`
