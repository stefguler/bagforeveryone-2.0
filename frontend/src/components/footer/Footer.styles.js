import styled from "styled-components";
// import "@fontsource/montserrat";


export const FooterWrapperDiv = styled.div`
    border: 1px solid #DDD8C4;
    background: rgba(255, 255, 255, 1);
    font-size: .8em;
    position: fixed;
    bottom: 4em;
    left: 1em;

    svg, a {
        margin: .1em;
        font-size: 1em;
    }

    p {
        margin: 0;
        width: fit-content;
    }

    div.social {
        margin: 0;
    }

    @media (min-width: 480px) {
        bottom: 0;
        left: 0;
        width: 100%;

        svg, a {
        font-size: 1.3em;
        }
	}
`;

export const TabsContainerDiv = styled.div`
    border-bottom: 1px solid #DDD8C4;
    display: flex;
    flex-direction: column;

    *{
    cursor: pointer;
    color: #1E1E1E;
    font-family: 'Montserrat', sans-serif; 
    }

    @media (min-width: 480px) {
        flex-direction: row;
	}

    @media (min-width: 800px) {
        justify-content: center;
        gap: 6em;
	}
`;

export const TabsDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    *{
        margin-right: 10px;
    }

    text {
            :hover{
            color: #DABC39;
            }
        }

    @media (min-width: 480px) {
        width: 25%;
	}

    @media (min-width: 800px) {
       width: auto;
	}

`;

export const Signature = styled.div`
    /* border: 1px solid magenta; */
    color: black;
    font-size: .6em;
    padding: .2em;

    @media (min-width: 480px) {
        font-size: 1em;
	}

`;
