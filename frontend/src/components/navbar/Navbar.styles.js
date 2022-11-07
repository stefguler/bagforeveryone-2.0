import styled from "styled-components";
// import "@fontsource/montserrat";

export const NavWrapper = styled.nav`
    display: flex;
    position: fixed;
    box-sizing: border-box;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 122px;
    justify-content: left;
    align-items: center;
    border: 1px solid #DDD8C4;
    background-color: rgba(255, 255, 255, 0.54);
    flex-direction: row;
`;

export const NavbarLogoContainerDiv = styled.img`
    display: flex;
    justify-content: flex-start;
    max-width: 120px;
    min-width: 80px;
    max-height: 90px;
    min-height: 60px;
`;

export const NavbarLeftButtonsContainerDiv = styled.div`
    display: flex;
    max-width: 350px;
    justify-content: space-between;
    
    :hover {
        text-decoration-color: #DABC39;
        }

        span {
            :hover{
            color: #DABC39;
        }
        }
`;

export const NavbarLeftTabsDiv = styled.span`
    display: flex;
    justify-content: center;
    *{
        background: none;
        cursor: pointer;
        color: #1E1E1E;
        border: none;
        height: 30px;
        font-size: 24px;
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
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

export const NavbarRightButtonsContainerDiv = styled.div`
    display: flex;
    justify-content: space-between;
    margin: auto 20px auto auto;
    max-width: 50vw;
    min-width: 10vw;
`;

export const NavbarRightTabsDiv = styled.div`
    display: flex;
    justify-content: center;
    *{
        cursor: pointer;
        color: #1E1E1E;
        font-size: 24px;
        font-family: 'Montserrat', sans-serif;
    }
    &:first-child{
        background-color: rgba(255, 255, 255, 0.54);
        border: 3px solid #DABC39;
        border-radius: 15px;
        font-weight: 400;
        width: 139px;
        height: 60px;
        align-items: center;
        margin-right: 10px;
    }
    &:not(:first-child):not(:last-child){
        border: 1.5px solid #DABC39;
        width: 0;
        height: 60px;
    }
    &:last-child{
        border: none;  
        width: 100px;
        height: 60px;
        align-items: center;
    }

    span {
            :hover{
            color: #DABC39;
        }
        }
`;



