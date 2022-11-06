import styled from "styled-components";
import "@fontsource/montserrat";


export const FooterWrapperDiv = styled.div`
    display: flex;
    box-sizing: border-box;
    bottom: 0;
    left: 0;
    width: 100vw;
    height: 113px;
    align-items: center;
    border: 1px solid #DDD8C4;
    background-color: rgba(255, 255, 255, 1);
    flex-direction:column;
    margin-top: auto;
`;

export const TabsContainerDiv = styled.div`
    display: flex;
    width: 700px;
    height: 70px;
    justify-content: space-between;
    margin-top: 20px;

    *{
    cursor: pointer;
    color: #1E1E1E;
    font-size: 24px;
    font-family: 'Montserrat', sans-serif; 
    }
`;

export const TabsDiv = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    *{
        margin-right: 10px;
    }
`;

export const Signature = styled.div`
    margin: auto auto 0 0;
    display:flex;
    align-items:center;
    color: black;
    font-size:12px;

`;
