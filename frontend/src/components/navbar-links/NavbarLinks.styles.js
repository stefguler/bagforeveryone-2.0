import styled from "styled-components";
// import "@fontsource/montserrat";

export const NavbarWrapper = styled.nav`
    border: 1px solid #DDD8C4;
    background-color: rgba(255, 255, 255, 0.9);
    font-size: 0.8em;
    display: flex;
    flex-direction: column;
    position: fixed;
    z-index: 1;
    top: 1em;
    left: 4em;
    padding: .5em;
    gap: 1em;

    ul {
        /* border: 1px solid red; */
        width: 100%;
        list-style-type: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 0;
        padding: 0;
        gap: 1em;
    }
    
    .underline {
        border-bottom: 3px solid #DABC39;
    }

    a {
        text-decoration: none;
        color: black;
    }

    // whole navbar:
    @media (min-width: 480px) {
        top: 0;
        left: 0;
        width: 100%;
        flex-direction: row;
        justify-content: space-between;
	}

    @media (min-width: 780px) {
        font-size: 1em;
	}

    #donate {
        border: 1px solid #DABC39;
        border-radius: 5px;

        @media (min-width: 900px) {
            padding: .5em;
            border-radius: 10px;
	    }
    }

    #login {
        border-left: 1px solid #DABC39;
        padding-left: .1em;

        @media (min-width: 900px) {
            padding-left: 1em;
	    }
    }
`

export const GroupLeft = styled.div`
    /* border: 1px solid red; */

    @media (min-width: 480px) {
        width: 70%;
        display: flex;
	}

    ul {
        @media (min-width: 480px) {
            /* border: 1px solid green; */
            display: flex;
            width: 100%;
            justify-content: space-around;
            flex-direction: row;
	    }

        @media (min-width: 800px) {
            justify-content: flex-start;
            gap: 3em;
            margin-left: 2em;
	    }

        @media (min-width: 1000px) {
            justify-content: flex-start;
            gap: 5em;
            margin-left: 3em;
	    }
    }
`

export const GroupRight = styled.div`
    /* border: 1px solid red; */

    @media (min-width: 480px) {
        width: 30%;
        display: flex;
    }

ul {
    @media (min-width: 480px) {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        gap: 2em;
        padding-right: 1em;
    }
    @media (min-width: 1000px) {
        gap: 5em;
        padding-right: 2em; 
    }
}
`

export const Logo = styled.img`
    width: 80px;
    padding: .5em;

    @media (min-width: 480px) {
        width: 100px;
	}

    @media (min-width: 800px) {
        width: 120px;
        padding: 1em;
	}

    @media (min-width: 1000px) {
        width: 150px;
        padding: 1em;
	}
`

// ALINA/ backup:

// import styled from "styled-components";
// // import "@fontsource/montserrat";

// export const NavWrapper = styled.nav`
//     display: flex;
//     position: fixed;
//     box-sizing: border-box;
//     z-index: 1;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 122px;
//     justify-content: flex-start;
//     align-items: center;
//     border: 1px solid #DDD8C4;
//     background-color: rgba(255, 255, 255, 0.54);
// `;

// export const NavbarLogoContainerDiv = styled.img`
//     display: flex;
//     justify-content: flex-start;
//     width: 120px;
//     height: 90px;
//     margin-left: 95px;
//     cursor: pointer;
// `;

// export const NavbarLeftButtonsContainerDiv = styled.div`
//     display: flex;
//     width: 350px;
//     margin-left: 30px;
//     justify-content: space-between;

//     :hover {
//         text-decoration-color: #DABC39;
//         }

//         span {
//             :hover{
//             color: #DABC39;
//         }
//         }
// `;

// export const NavbarLeftTabsDiv = styled.span`
//     display: flex;
//     justify-content: center;
//     *{
//         background: none;
//         cursor: pointer;
//         color: #1E1E1E;
//         border: none;
//         height: 30px;
//         font-size: 24px;
//         font-family: 'Montserrat', sans-serif;
//         font-weight: 400;
//     }
// `;

// export const NavbarRightButtonsContainerDiv = styled.div`
//     display: flex;
//     justify-content: space-between;
//     margin: auto 20px auto auto;
//     max-width: 50%;
//     min-width: 10%;
// `;

// export const NavbarRightTabsDiv = styled.div`
//     display: flex;
//     justify-content: center;
//     *{
//         cursor: pointer;
//         color: #1E1E1E;
//         font-size: 24px;
//         font-family: 'Montserrat', sans-serif;
//     }
//     &:first-child{
//         background-color: rgba(255, 255, 255, 0.54);
//         border: 3px solid #DABC39;
//         border-radius: 15px;
//         font-weight: 400;
//         width: 139px;
//         height: 60px;
//         align-items: center;
//         margin-right: 10px;
//     }
//     &:not(:first-child):not(:last-child){
//         border: 1.5px solid #DABC39;
//         width: 0;
//         height: 60px;
//     }
//     &:last-child{
//         border: none;
//         width: 100px;
//         height: 60px;
//         align-items: center;
//     }

//     span {
//             :hover{
//             color: #DABC39;
//         }
//         }
// `;