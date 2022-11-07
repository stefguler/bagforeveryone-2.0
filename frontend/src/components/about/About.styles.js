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
