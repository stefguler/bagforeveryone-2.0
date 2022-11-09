import styled from "styled-components";

// mobile designs first (480px width and less):
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
    
    // whole searchbar with magnifier and post button:
    .search {
        display: flex;
        justify-content: space-around;
        gap: 1em;
        margin: .5em 0;
    }

    // search from with magnifier:
    .search-form {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 70%;
    }

    // search-form:
    .search-field {
        width: 75%;
    }

    // image set for responsiveness:
    img {
        display: block;
        max-width: 100%;
        margin: 0 auto;
    }

    @media (min-width: 480px) {
            // new distance due to change of header:
            margin-top: 5em;
        }
    
    .search-form {
        justify-content: space-around;
    }

    @media (min-width: 800px) {
        // new distance due to change of header:
            margin-top: 7em;
        }
    
    .search-form {
        justify-content: space-around;
    }
`
// wrapper around stories (excluding searchbar and post button). It
// will change to grid and adjust column numbers:
export const StoryListWrapper = styled.div `

    @media (min-width: 420px) {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: .5em;
            padding: .5em;
        }

    @media (min-width: 865px) {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: .5em;
        padding: .5em;
    }
    
 `

    