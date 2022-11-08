import styled from "styled-components"

export const CommentWrapper = styled.div`
    border: 1px solid lightgray;
    padding: .2rem;
    display: flex;
    align-items: center;
    flex-direction: column;

    .comment-header {
        display: flex;
        align-self: flex-start;
        align-items: center;
        justify-content: center;
        gap: 1em;
        margin: .5em;
    }

    img {
        width: 40px;
    }
`