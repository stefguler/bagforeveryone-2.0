import styled from "styled-components"
// import "@fontsource/montserrat";


export const AboutContainerDiv = styled.div`
    background: #fff;
    display: flex;
    justify-content: space-evenly;
    width: 100vw;
    margin-top: 7em;
    margin-bottom: 6em;
    flex-direction: column;
`;

export const ImageSliderDiv = styled.div` 
    height: 100%;

    @media only screen and (max-width: 900px) {
        flex-direction: column;
        justify-content: flex-start;
        padding: 0;
    }
`;

export const StickyButtonDiv = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    left: 0;
    height: 70px;
    width: 30px;
    color: white;
    border-radius: 0 5px 5px 0;
    background-color: rgba(225, 194, 59, 0.44);
    top: 80vh;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    :hover{
     background-color: #DABC39;
    }
    
    button {
        cursor: pointer;
        border: none;
        background: none;
        transform: rotate(-90deg);
        font-family: 'Montserrat', sans-serif;
        font-size: 15px;
    }
`;

export const TextBoxDiv = styled.div`
    display: flex;
    justify-content: flex-start;
    align-self: center;
    flex-direction: column;
    max-width: 80vw;
    overflow: hidden;
    
    h1 {
        color: #DABC39;
        font-family: 'Montserrat', sans-serif;
        font-size: 30px;
        margin-bottom: 0;
        align-self: center;
    }

    p {
        color: #000000;
        font-family: 'Montserrat', sans-serif;
        font-size: 16px;
        
    }

    img {
        width: 60vw;
        align-self: center;
    }

 @media only screen and (max-width: 450px) {
        justify-content: space-evenly;
        max-width: 100vw;
        padding: 10px;
        
        h1 {
            font-size: 14px;
        }

        p {
            font-size: 10px;
            margin: 5px;
        }

        img {
            width: 100vw;
        }
    }
`;  

