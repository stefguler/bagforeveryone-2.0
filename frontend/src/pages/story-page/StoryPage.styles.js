import styled from "styled-components";
import { PageButton } from "../../styles/global.styles";

export const CloseButton = styled(PageButton) `
    margin: 1em 0 1em 1em;
    align-self: flex-start;
`
export const DarkBackground = styled.div `
    position: absolute;
    display: inline-block;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.9);
`

export const StoryWrapper = styled.section `
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    color: black;

    .modal-story-wrapper {
        font-size: .8em;
        padding: 1em;
        overflow-y: scroll;
        border: 1px solid lightgray;
        border-radius: 5px;
    }

    img {
        display: block;
        max-width: 100%;
        margin: 0 auto;
    }

    // story text:
    .story-content {
        line-height: 1.5em;
        margin: .5em 0;
        padding: 1em;
        text-align: justify;

        @media (min-width: 480px) {
        font-size: 1.2em;
    }

        @media (min-width: 780px) {
        font-size: 1.5em;
	    }
    }
`

export const ContentWrapper = styled.div `
    // story wrapper (below user header)
`

export const UserHeader = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 3em;

    img {
        // user avatar:
        width: 50px;
        margin: 0;
    }

    .user-display {
        display: flex;
        align-items: center;
        gap: 1em;
    }

    .user-info {
        display: flex;
        flex-direction: column;
    }
`
// Part with react icon and settings to edit or delete story:
export const UserButton = styled.div `
    position: relative;
    display: flex;
    gap: .5em;
    justify-content: center;
    align-items: center;
    align-self: flex-start;

    // react 3 dot icon:
    .options-icon {
        border: 1px solid lightgray;
        border-radius: 10px;
        padding: .1rem;
    }
`

export const OptionsMenu = styled.div `
    position: absolute;
    display: flex;
    gap: .2rem;
    top: 2em;
    flex-direction: column;
    margin: .2rem;
`

export const StoryImages = styled.section `
    
`

export const FullImageModal = styled.div `
    display: flex;
    position: fixed;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: black;
`

export const Image = styled.img `
    // full image displayed upon click on story images.
`

export const CloseModalButton = styled(PageButton) `
    position: fixed;
    top: 0;
    left: 0;
    margin-top: 1em;
    margin-left: 1em;
`