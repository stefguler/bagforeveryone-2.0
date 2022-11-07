import styled from "styled-components";
import "@fontsource/montserrat";


export const FooterWrapperDiv = styled.div`
    position:absolute;
    display: flex;
    box-sizing: border-box;
    justify-content: flex-start;
    bottom: 0;
    left: 0;
    width: 100vw;
    max-height: 113px;
   
    align-items: center;
    border: 1px solid #DDD8C4;
    background-color: rgba(255, 255, 255, 1);
    flex-direction:column;
    margin-top: auto;
`;

export const TabsContainerDiv = styled.div`
    display: flex;
    max-width: 700px;
    min-width: 350px;
    height: 70px;
    justify-content: space-between;
    margin-top: 20px;

    *{
    cursor: pointer;
    color: #1E1E1E;
    font-size: 24px;
    font-family: 'Montserrat', sans-serif; 
    }

    @media screen and (min-width: 401px) {
        *{ 
        font-size: 24px;
        }
    }

    @media screen and (max-width: 400px) {
        *{ 
        font-size: 14px;
        }   
    }
`;

export const TabsDiv = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    *{
        margin-right: 5px;
    }

`;

export const Signature = styled.div`
    margin: auto auto 0 0;
    display:flex;
    align-items:center;
    color: black;
    font-size:12px;
`;
