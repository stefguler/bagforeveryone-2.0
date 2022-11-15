import styled from "styled-components";
import { BaseModalBackground, ModalProvider } from "styled-react-modal";
import Modal from "styled-react-modal";

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
        max-width: 400px;
    }

    .search-story {
        min-width: 75%;
        padding: 0.3rem;
        border: none;
        border-bottom: 1px solid #D3D3D3;
    }

    /* img {
        display: block;
        max-width: 100%;
        margin: 0 auto;
        width: 250px; 
        aspect-ratio: 1 / 1;
        object-fit: cover; 
        object-position: 100% 0;
    } */

    @media (min-width: 480px) {
            // new distance due to change of header and footer:
            margin: 5em 0;

        }
    
    .search-form {
        justify-content: center;
    }

    @media (min-width: 800px) {
        // new distance due to change of header:
            margin-top: 7em;
        }
    
    .search-form {
        justify-content: center;
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

export const FadingBackground = styled(BaseModalBackground)`
    color: #DABC39;
    .warning {
        background-color: white;
        border-radius: 20px;
        width: 20em;
        height: 20em;
        display: flex;
        gap: 2em;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

export const LoginWarningModal = styled(Modal)`

`;

export const WarningModalProvider = styled(ModalProvider)`
`;
    