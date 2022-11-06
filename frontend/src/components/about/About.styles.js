import styled from "styled-components";
import "@fontsource/montserrat";
// import background_image from '../assets/images/about/AboutMain.png';



export const LandingPageContainerDiv = styled.div`
    height: auto;
    height: 100%; 
    margin: 0 auto -100px; /*Allow for footer height*/
    vertical-align:bottom;
`;

export const PictureContainerDiv = styled.div`
    display: flex;
    justify-content: flex-end;
    background-color: beige;
    width: 100vw;
    height: 60vh;
`;

export const ContentConteinerDiv = styled.div`
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    width: 730px;
    height: 160px;
    margin-right: 50px;
    text-align: right;
    font-family: 'Montserrat', sans-serif;
    font-size: 32px;

   .button{
    background-color: #FFFFFF;
    border: 3px solid #DABC39;
    border-radius: 15px;
    font-weight: 400;
    width: 139px;
    height: 60px;
    align-items: center;
    margin-right: 10px;
   }

`;

export const StickyButtonDiv = styled.div`
`;
