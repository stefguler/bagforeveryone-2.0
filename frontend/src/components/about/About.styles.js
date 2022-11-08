import styled from "styled-components";
// import "@fontsource/montserrat";


export const LandingPageContainerDiv = styled.div`
    width: 100vw;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 113px;
`;

export const PictureContainerDiv = styled.div`
    display: flex;
    justify-content: flex-end;
    background: url('../assets/images/about/AboutMain.png');
    background-repeat: no-repeat;
    background-size: contain;
    background-position-y: center;
    background-size: cover;
    max-width: 100vw;
    height: 75vh;
`;

export const ContentConteinerDiv = styled.div`
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    max-width: 600px;
    height: auto;
    padding-right: 5vw;
    padding-bottom: 5vh;
    
    *{
        font-family: 'Montserrat', sans-serif;
    }

    p{
        text-align: right; 
        color: #FFFFFF;
        font-weight: 600;
        font-size: 32px;
    }

    button {
        background: #E1C23B;
        border: none;
        border-radius: 15px;
        width: 150px;
        height: 60px;
        font-size: 24px;
        align-self: flex-end;
    }

    @media only screen and (max-width: 450px) {
        p {
            font-size: 18px;
        }

        button {
            width: 100px;
            height: 40px;
            font-size: 14;
        }
    }
`;

export const StickyButtonDiv = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    left: 0;
    height: 100px;
    width: 50px;
    font-size: 20px;
    color: white;
    border-radius: 0 5px 5px 0;
    top: 65vh;
    background-color: rgba(225, 194, 59, 0.44);
    :hover{
     background-color: #DABC39;
    }
    
    button {
        cursor: pointer;
        border: none;
        background: none;
        transform: rotate(-90deg);
        font-family: 'Montserrat', sans-serif;
        font-size: 26px;
    }
`;

export const Link = styled.div`
    display: flex;
    justify-content: center;
`;

export const AboutContainerDiv = styled.div`
    background: #FAF5E1;
    display: flex;
    justify-content: center;
    width: 100vw;
    height: auto;
    margin-top: 122px;
    margin-bottom: 113px;
`;

export const ContentBoxDiv = styled.div` 
    display: flex;
    justify-content: space-evenly;
    max-width: 80vw;
    margin: auto;
    padding: 20px;
    background: #FFFFFF;
    border: 1px solid #DDD8C4;
    flex-direction: column;
`;

export const TextBoxDiv = styled.div`
    display: flex;
    justify-content: flex-start;
    align-self: center;
    flex-direction: column;
    max-width: 70vw;
    overflow: hidden;
    
    h1 {
        color: #DABC39;
        font-family: 'Montserrat', sans-serif;
        font-size: 48px;
        text-align: left;
        padding-left: 20px;
    }

    p {
        color: #000000;
        font-family: 'Montserrat', sans-serif;
        font-size: 18px;
        text-align: right;
    }

    img {
        float: right;
        width: 20vw;
        max-height: 28vh;
        border-radius: 15px;
        margin-left: 50px;
    }

 @media only screen and (max-width: 450px) {
        justify-content: space-evenly;
        
        h1 {
            font-size: 18px;
            margin: 0;
        }

        p {
            font-size: 12px;
            margin: 5px;
        }

        img {
            float: right;
            width: 40vw;
            max-height: 30vh;
            border-radius: 15px;
            margin-left: 5px;
        }
    }
`;  
