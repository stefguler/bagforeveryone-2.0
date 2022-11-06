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
// modal covering the whole screen:
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
        // white background story container:
        overflow-y: scroll;
        margin-top: 3em;
        background-color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: black;
        max-width: 1000px;
        max-height: 85%;
        min-width: 480px;
        min-height: 800px;
    }
`

export const ContentWrapper = styled.div `
    width: 90%;
    margin: 1em 0;

    .story-content {
        text-align: center;
    }
`

export const UserHeader = styled.div `
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
`
// Part with react icon and settings to edit or delete story:
export const UserButtons = styled.div `
    display: flex;
    position: relative;
    margin: 1rem;
    flex-direction: column;

    .options-icon {
        border: 1px solid lightgray;
        border-radius: 10px;
        padding: .1rem;
    }
`

export const OptionsMenu = styled.div `
    gap: .2rem;
    position: absolute;
    top: 1.5em;
    flex-direction: column;
    margin: .2rem;
`

export const StoryImages = styled.section `
    padding: 1em;
    display: flex;
`

