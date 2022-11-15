import styled from "styled-components";
import { PageButton } from "../../styles/global.styles";
import { StoryWrapper } from "../story-page/StoryPage.styles";

export const CreateStoryWrapper = styled.section `
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(33, 33, 33, 0.7);
    width: 100%;
    height: 100%;


    .modal-story-wrapper {
        background-color: white;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;

        @media (min-width: 480px) {
            width: 90%;
            margin: 0 auto;
        }
        @media (min-width: 650px) {
            max-width: 60%;
            margin: 0 auto;
        }
    }

    .modal-story-button {
        align-self: flex-start;
        margin-top: 1em;
        margin-left: 1em;
    }

    .user-info-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
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

export const PostButton = styled(PageButton)`
    padding: .5em;
`