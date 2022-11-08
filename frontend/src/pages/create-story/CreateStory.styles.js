import styled from "styled-components";
import { StoryWrapper } from "../story-page/StoryPage.styles";

export const CreateStoryWrapper = styled(StoryWrapper) `
    position: fixed;
    background-color: black;
    top: 0;
    bottom: 0;
    left: 0;
    flex-direction: column;
    align-items: center;
    width: 100%;

    .modal-story-wrapper {
        margin-top: 1em;
        background-color: white;

        @media (min-width: 480px) {
            width: 50%;
        }
    }

    .modal-story-button {
        align-self: flex-start;
        margin-top: 1em;
        margin-left: 1em;
    }

    .user-info-wrapper {
        display: flex;
        align-items: center;
        gap: 1em;
        margin: 1em 0;
    }

    .file-field {
        margin: 0 auto;
    }
`

export const FormWrapper = styled(StoryWrapper)`
    gap: 1em;
    padding: 1em;

    textarea {
        width: 95%;
        height: 10em;
    }
`