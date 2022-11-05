import styled from "styled-components"

export const CommentWrapper = styled.div`
    border: 1px solid red;
    padding: .2rem;

    .comment-header {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 1em;
        margin: .2em;
    }

    img {
        width: 40px;
    }
`