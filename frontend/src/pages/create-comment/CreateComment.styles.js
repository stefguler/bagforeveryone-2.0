import styled from "styled-components";
import { StoryWrapper } from "../story-page/StoryPage.styles";

export const CreateCommentWrapper = styled(StoryWrapper) `
    position: fixed;
    top: 0;
    left: 0;
    background-color: black;
    width: 100%;
    height: 100%;

    .close-comment {
        align-self: flex-start;
        margin-top: 1em;
        margin-left: 1em;
    }

`

export const FormWrapper = styled(StoryWrapper)`
    width: 60%;
    gap: 1em;
    padding: 1em;

    textarea {
        width: 95%;
        height: 10em;
    }
`