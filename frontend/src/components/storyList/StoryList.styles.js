import styled from "styled-components";

// mobile designs first (370px width and less):
export const StoryPageWrapper = styled.section `
    /* border: 2px solid red; */
    margin-top: 3em;
    background-color: white;
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: .5em;
    padding: .5em;
    border-radius: 7px;
    
    // searchbar with magnifier and post button:
    .search {
        display: flex;
        justify-content: space-around;
        gap: 1em;
        margin: .5em 0;
    }

    // image set for responsiveness:
    img {
        display: block;
        max-width: 100%;
        margin: 0 auto;
    }

    /* @media only screen and (max-width: 800px) {
        align-self: flex-start;
        margin-top: 1rem;
    } */
`
// wrapper around stories (excluding searchbar and post button). It
// will change to grid and adjust column numbers:
export const StoryListWrapper = styled.div `
    /* border: 5px solid red; */
    /* align-self: center;
    width: fit-content;
    padding: .5em;
    display: grid;
    justify-items: center;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1em 1em;
    border-radius: 5px; */

    /* img {
        max-width: 400px;
    } */

    /* @media only screen and (max-width: 1400px) {
        flex-direction: column;
        grid-template-columns: 1fr 1fr;
        padding-left: 1em; 
        align-items: center;
    } */

    /* @media only screen and (max-width: 900px) {
        display: flex;
        flex-direction: column;
        margin: .5em;
        padding: .5em;
        align-items: center;
    } */
 `