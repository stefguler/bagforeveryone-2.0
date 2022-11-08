import styled from "styled-components";
import "@fontsource/montserrat"

export const MissionWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: left;
    flex-direction: column;
    background-color: rgba(0, 0, 0, 0.9);
    font-family: 'Montserrat', sans-serif;
    color: #DABC39;
    padding: 0 80px;
    cursor: pointer;
`;

export const ModalBox = styled.div`
        position: fixed;
        top: 0;
        bottom: 0;
        display: flex;
        justify-content: center;
        align-items: left;
        flex-direction: column;
        background-color: rgba(0, 0, 0, 0.9);
        font-family: 'Montserrat', sans-serif;
        color: #DABC39;
        padding: 0 80px;
        cursor: pointer;

    h1{
        font-size: 50px;
        font-weight: 100;
        max-width: 1000px;
    }

    p {
        font-size: 10px;
    }

    @media only screen and (max-width: 450px) {

        h1{ 
            font-size: 30px;
            width: 250px;
        
        }

        p {
            font-size: 8px;
            width: 200px;
        }
    }
`;