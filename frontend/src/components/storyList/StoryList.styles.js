import styled from "styled-components";
import { BaseModalBackground, ModalProvider } from "styled-react-modal";
import Modal from "styled-react-modal";
import { PageButton } from '../../styles/global.styles'

// mobile designs first (480px width and less):
export const StoryPageWrapper = styled.section `
    display: flex;
    margin-top: 3em;
    border: 1px solid lightgray;
    overflow-y: scroll;
    flex-direction: column;
    justify-content: flex-start; 
    width: 100%;
    height: 100%;
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
    
    .search-form {
        justify-content: center;
    }
    
    .search-form {
        justify-content: center;
    }
`
// wrapper around stories (excluding searchbar and post button). It
// will change to grid and adjust column numbers:
export const StoryListWrapper = styled.div `

    margin: 0 auto;

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
    
export const PostButton = styled(PageButton)`
    padding: 1em 2em;
    border-radius: 20px;
    font-size: 1em;
`;