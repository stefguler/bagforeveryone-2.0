import styled from "styled-components";

export const StoryPageWrapper = styled.section `
    border: 2px solid lightgray;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-self: center;
    gap: 1em;
    background-color: white;
    margin-left: 1rem;
    margin-top: 15rem;

    .search {
        width: fit-content;
        display: flex;
        gap: 1em;
        margin-top: 1rem;
    }

    @media only screen and (max-width: 800px) {
        align-self: flex-start;
        margin-top: 1rem;
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