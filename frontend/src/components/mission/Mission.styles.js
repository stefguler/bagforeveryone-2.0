import styled from "styled-components";

export const MissionWrapper = styled.div `

    .fade {
        position: absolute;
        z-index: 2;
        top: 0;
        bottom: 0;
        display: flex;
        display: none;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background-color: rgba(0, 0, 0, 0.5);
        height: 100vh;
        width: 100%;
    }

    button {
        width: fit-content;
        padding: 1em;
    }
`