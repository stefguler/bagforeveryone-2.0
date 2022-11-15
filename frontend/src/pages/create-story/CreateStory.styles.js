import styled from "styled-components";
import { PageButton } from "../../styles/global.styles";
import { StoryWrapper } from "../story-page/StoryPage.styles";
import { UserHeader } from '../story-page/StoryPage.styles';

export const CreateStoryWrapper = styled.section `
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(33, 33, 33, 0.7);
    width: 100%;
    height: 100%;


    .modal-story-wrapper {
        margin: 0 auto;
        background-color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 60%;
    }

    .modal-story-button {
        align-self: flex-start;
        margin-top: 1em;
        margin-left: 1em;
    }

    .select {
        padding: 1em;
        border: 1px solid lightgray;
        border-radius: 5px; 
        font-family: 'Montserrat', sans-serif;
    }
`

export const CreateStoryUserHeader = styled(UserHeader)`
    align-self: flex-start;
    margin-top: 2em;
    margin-left: 2em;
    display: flex;
    gap: 1em;
`

export const FormWrapper = styled(StoryWrapper)`
    gap: 1em;
    min-width: 60%;

    textarea {
        width: 95%;
        height: 10em;
    }
`

export const PostButton = styled(PageButton)`
    padding: .5em .8em;
`