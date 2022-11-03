import styled from "styled-components";

export const StoryPageWrapper = styled.section `
    display: flex;
    flex-direction: column;
    align-items: center;
    align-self: center;
    padding: 1em;
    gap: 1em;
    background-color: white;
    width: 100%;
    height: 100%;
    margin-top: 1rem;
    margin-left: 1rem;

    .search {
        width: fit-content;
        display: flex;
        gap: 1em;
    }

    @media only screen and (max-width: 900px) {
        margin-top: 3rem;
    }
`

export const StoryListWrapper = styled.div `
    align-self: center;
    width: fit-content;
    padding: .5em;
    display: grid;
    justify-items: center;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1em 1em;
    border-radius: 5px;

    img {
        max-width: 400px;
    }

    @media only screen and (max-width: 1400px) {
        flex-direction: column;
        grid-template-columns: 1fr 1fr;
        align-items: center;
    }

    @media only screen and (max-width: 900px) {
        display: flex;
        flex-direction: column;
        margin: .5em;
        padding: .5em;
        align-items: center;
    }
`