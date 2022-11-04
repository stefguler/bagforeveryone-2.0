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
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 3;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.9);
    color: white;

    button.modal-close {
        position: absolute;
        top: 0;
        right: 0;
        align-self: flex-end;
        margin-top: 1em;
        margin-right: 1em;
    }

    .modal-story-wrapper {
        border: 5px solid green;
        overflow-y: scroll;
        background-color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: black;
        max-width: 1000px;
        width: 90%;
        height: 90%;
        min-width: 480px;
        min-height: 800px;
    }
`

export const ContentWrapper = styled.div `
    width: 90%;
    margin: 1em 0;

    .story-content {
        border: 1px solid magenta;
        text-align: center;
    }
`


export const UserHeader = styled.div `
    border: 1px solid red;
    margin-top: 2em;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;

    img {
        width: 50px;
    }

    .user-info-wrapper {
        display: flex;
        align-items: center;
        gap: 1em;
        margin: 1rem;
    }

    .user-info {
        display: flex;
        flex-direction: column;
    }

    .user-buttons {
        display: flex;
        margin: 1rem;
        flex-direction: column;
    }

`

export const StoryImages = styled.section `
    border: 1px solid yellow;
    padding: 1em;
`

