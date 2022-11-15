import styled from "styled-components";
import { StoryWrapper } from "../story-page/StoryPage.styles";

export const CreateStoryWrapper = styled.section `
    position: fixed;
    top: 0;
    left: 0;
    background-color: black;
    width: 100%;
    height: 100%;

    .modal-story-wrapper {
        margin: 1em;
        background-color: white;

        @media (min-width: 480px) {
            width: 90%;
            margin: 0 auto;
        }
        @media (min-width: 650px) {
            width: 75%;
            margin: 0 auto;
        }
    }

    .close-comment {
        align-self: flex-start;
        margin-top: 1em;
        margin-left: 1em;
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