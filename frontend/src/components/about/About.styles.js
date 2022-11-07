import styled from "styled-components";
// import "@fontsource/montserrat";




export const LandingPageContainerDiv = styled.div`
    height: auto;
    height: 100%; 
    margin: 0 auto -100px;
`;

export const PictureContainerDiv = styled.div`
    display: flex;
    justify-content: flex-end;
    background: url('../assets/images/about/AboutMain.png');
    background-repeat: no-repeat;
    background-size: cover;
    width: 100vw;
    height: 75vh;
`;

export const ContentConteinerDiv = styled.div`
    display: flex;
    justify-content: right;
    flex-direction: column;
    width: 730px;
    height: 300px;
    margin-top: 20vh;
    margin-right: 50px;
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

export const AboutContainerDiv = styled.div`
    margin: auto;
    background: #FAF5E1;
    display: flex;
    justify-content: center;
    box-sizing: border-box;
 
    width: 100vw;
    height: 80vh;
    margin-top: 122px;
    margin-bottom: 113px;
`;

export const ContentBoxDiv = styled.div` 
    display: flex;
    
    justify-content: space-evenly;
    width: 80vw;
    background: #FFFFFF;
    border: 1px solid #DDD8C4;
    flex-direction: row;
`;

export const TextBoxDiv = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    max-width: 40vw;
    
    h1 {
        color: #DABC39;
        font-family: 'Montserrat', sans-serif;
        font-size: 48px;
        text-align: right;
        
    }

    p {
        color: #000000;
        font-family: 'Montserrat', sans-serif;
        font-size: 20px;
        text-align: right;
       
    }

 @media only screen and (max-width: 450px) {
        justify-content: flex-start;
        
        h1 {
            font-size: 18px;
            margin: 0;
        }

        p {
            font-size: 11px;
            margin: 5px;
        }
    }
`;  

export const PictureBoxDiv = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    max-width: 30vw;

    @media only screen and (max-width: 450px) {
        justify-content: space-evenly;
    }
`;

export const PictureDiv = styled.img`
    width: 25vw;
    height: 33vh;
    border-radius: 15px;
    align-content: left;

    @media only screen and (max-width: 450px) {
        width: 30vw;
        height: 13vh;
        border-radius: 15px;
    }
`;
