import React, { useState } from 'react';
import NavbarLinks from '../navbar-links/NavbarLinks';
import Media from 'react-media';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
  // This styling will be applied to a <NavLink> when the
  // route that it links to is currently selected.
  const [showNavbar, setShowNavbar] = useState(false);

  const handleHamburgerClick = () => {
    setShowNavbar(!showNavbar);
  }

  return (
    <>
    {showNavbar && <NavbarLinks />}
      <Media queries={{ small: { minWidth: 480 } }}>
          {matches =>
            matches.small ? (
              <NavbarLinks />
              ) : (
                <GiHamburgerMenu className='hamburger' onClick={handleHamburgerClick} />
              )
          }
      </Media>
    </>
  )
}   

  export default Navbar

  // ALINA/ backup:
// import { 
// import { useNavigate } from 'react-router-dom';
  // NavWrapper,
//   NavbarLogoContainerDiv,
//   NavbarLeftButtonsContainerDiv,
//   NavbarLeftTabsDiv,
//   NavbarRightButtonsContainerDiv,
//   NavbarRightTabsDiv,
//   } from './Navbar.styles';

    // <>
    //     <NavWrapper> 
    //       {/* make logo clickable and return to landing page onClick */}
    //         <NavbarLogoContainerDiv src="../assets/images/logo/logo.png" onClick={() => handleNavigateTo("")}/>
    //         <NavbarLeftButtonsContainerDiv> 
    //           {/* need to add navigation to other pages onClick */}
    //             <NavbarLeftTabsDiv> 
    //               <span onClick={() => handleNavigateTo("about")}>ABOUT</span>
    //             </NavbarLeftTabsDiv>
    //             <NavbarLeftTabsDiv> 
    //               <span onClick={() => handleNavigateTo("story")}>STORY</span>
    //             </NavbarLeftTabsDiv>
    //             <NavbarLeftTabsDiv> 
    //               <span onClick={() => handleNavigateTo("team")}>TEAM</span>
    //             </NavbarLeftTabsDiv>
    //             <NavbarLeftTabsDiv> 
    //               <span onClick={() => handleNavigateTo("shop")}>BUY</span>
    //             </NavbarLeftTabsDiv>
    //         </NavbarLeftButtonsContainerDiv>
    //         <NavbarRightButtonsContainerDiv>
    //             <NavbarRightTabsDiv> 
    //               <span onClick={() => handleNavigateTo("donate")}>DONATE</span>
    //             </NavbarRightTabsDiv>
    //             <NavbarRightTabsDiv> 
    //               <span></span> { /* that line between the buttons */}
    //             </NavbarRightTabsDiv>
    //             <NavbarRightTabsDiv> 
    //               <span onClick={() => handleNavigateTo("login")}>LOG IN</span>
    //             </NavbarRightTabsDiv>
    //         </NavbarRightButtonsContainerDiv>  
    //     </NavWrapper>
    // </>