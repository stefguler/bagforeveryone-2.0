import styled from "styled-components";
// import "@fontsource/montserrat";

// export const NavbarWrapper = styled.nav`
//     border: 1px solid #DDD8C4;
//     background-color: rgba(255, 255, 255, 0.7);
//     font-size: 0.8em;
//     display: flex;
//     flex-direction: column;
//     position: fixed;
//     z-index: 1;
//     top: 4em;
//     left: 1em;
//     padding: .5em;
//     gap: 1em;

//     ul {
//         /* border: 1px solid red; */
//         width: 100%;
//         list-style-type: none;
//         display: flex;
//         flex-direction: column;
//         align-items: center;
//         justify-content: center;
//         margin: 0;
//         padding: 0;
//         gap: 1em;
//     }

//     a {
//         color: black;
//     }

//     // whole navbar:
//     @media (min-width: 480px) {
//         top: 0;
//         left: 0;
//         width: 100%;
//         flex-direction: row;
//         justify-content: space-between;
// 	}

//     @media (min-width: 780px) {
//         font-size: 1em;
// 	}

//     #donate {
//         border: 1px solid #DABC39;
//         border-radius: 5px;

//         @media (min-width: 900px) {
//             padding: .5em;
//             border-radius: 10px;
// 	    }
//     }

//     #login {
//         border-left: 1px solid #DABC39;
//         padding-left: .1em;

//         @media (min-width: 900px) {
//             padding-left: 1em;
// 	    }
//     }
// `

// export const GroupLeft = styled.div`
//     /* border: 1px solid red; */

//     @media (min-width: 480px) {
//         width: 70%;
//         display: flex;
// 	}

//     ul {
//         @media (min-width: 480px) {
//             /* border: 1px solid green; */
//             display: flex;
//             width: 100%;
//             justify-content: space-around;
//             flex-direction: row;
// 	    }

//         @media (min-width: 800px) {
//             justify-content: flex-start;
//             gap: 3em;
//             margin-left: 2em;
// 	    }

//         @media (min-width: 1000px) {
//             justify-content: flex-start;
//             gap: 5em;
//             margin-left: 3em;
// 	    }
//     }
// `

// export const GroupRight = styled.div`
//     /* border: 1px solid red; */

//     @media (min-width: 480px) {
//         width: 30%;
//         display: flex;
//     }

// ul {
//     @media (min-width: 480px) {
//         width: 100%;
//         display: flex;
//         flex-direction: row;
//         justify-content: flex-end;
//         gap: 2em;
//         padding-right: 1em;
//     }
//     @media (min-width: 1000px) {
//         gap: 5em;
//         padding-right: 2em; 
//     }
// }
// `

export const Logo = styled.img`
    border: 5px solid red;
    width: 50px;

    /* @media (min-width: 480px) {
        width: 100px;
	}

    @media (min-width: 800px) {
        padding: 1em;
	} */

    /* @media (min-width: 1000px) {
        width: 70px;
        padding: 1em;
	} */
`

export const NavWrapper = styled.nav`
    display: flex;
    position: fixed;
    box-sizing: border-box;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 70px;
    justify-content: flex-start;
    align-items: center;
    background-color: rgba(255, 255, 255, 1);
    overflow: hidden;
`;

export const NavbarLogoContainerDiv = styled.img`
    display: flex;
    justify-content: flex-start;
    width: 70px;
    height: 50px;
    margin-left: 5vw;
    cursor: pointer;

    @media screen and (max-width: 480px) {
        margin-left: 2vw; 
    }
`;

export const NavbarLeftButtonsContainerDiv = styled.div`
    display: flex;
    width: 20vw;
    margin-left: 3vw;
    justify-content: space-between;

    :hover {
        text-decoration-color: #DABC39;
        }

        span {
            :hover{
            color: #DABC39;
        }
        }

    @media screen and (max-width: 480px) {
        width: 30vw;
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
        font-size: 18px;
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
    }

    @media screen and (max-width: 900px) {
        *{
            font-size: 10px;
        }
    }
`;

export const NavbarRightButtonsContainerDiv = styled.div`
    display: flex;
    justify-content: space-between;
    margin: auto 2vw auto auto;
    max-width: 50%;
    min-width: 10%;
`;

export const NavbarRightTabsDiv = styled.div`
    display: flex;
    justify-content: center;
   
    *{
        cursor: pointer;
        color: #1E1E1E;
        font-size: 18px;
        font-family: 'Montserrat', sans-serif;
    }
    &:first-child{
        background-color: rgba(255, 255, 255, 1);
        border: 2px solid #DABC39;
        border-radius: 10px;
        font-weight: 400;
        width: 90px;
        height: 40px;
        align-items: center;
        margin-right: 10px;
    }
    &:not(:first-child):not(:last-child){
        border: 1px solid #DABC39;
        width: 0;
        height: 40px;
    }
    &:last-child{
        border: none;
        width: 100px;
        height: 40px;
        align-items: center;
    }

    span {
            :hover{
            color: #DABC39;
        }
    }

    @media screen and (max-width:900px) {
        *{
            font-size: 10px;
        }
        &:first-child{
            border: 1px solid #DABC39;
            border-radius: 5px;
            font-weight: 400;
            width: 50px;
            height: 25px;
            margin-right: 10px;
        }
        &:not(:first-child):not(:last-child){
            border: 0.5px solid #DABC39;
            height: 25px;
        }
        &:last-child{
            width: 60px;
            height: 25px;
            }
    }
`;



