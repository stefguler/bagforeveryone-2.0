import React from 'react'
import { useNavigate } from 'react-router-dom';

import { 
  NavWrapper,
  NavbarLogoContainerDiv,
  NavbarLeftButtonsContainerDiv,
  NavbarLeftTabsDiv,
  NavbarRightButtonsContainerDiv,
  NavbarRightTabsDiv,
  } from './Navbar.styles';

const Navbar = () => {
  const navigate = useNavigate();

  const handleNavigateTo = (destination) => {
    navigate(`/${destination}`)
  }
  

  return (
    <>
        <NavWrapper> 

          {/* make logo clickable and return to landing page onClick */}
            <NavbarLogoContainerDiv src="../assets/images/logo/logo.png" onClick={() => handleNavigateTo("")}/>
            <NavbarLeftButtonsContainerDiv> 
              {/* need to add navigation to other pages onClick */}
                <NavbarLeftTabsDiv> 
                  <span onClick={() => handleNavigateTo("/about")}>ABOUT</span>
                </NavbarLeftTabsDiv>
                <NavbarLeftTabsDiv> 
                  <span onClick={() => handleNavigateTo("story")}>STORY</span>
                </NavbarLeftTabsDiv>
                <NavbarLeftTabsDiv> 
                  <span onClick={() => handleNavigateTo("team")}>TEAM</span>
                </NavbarLeftTabsDiv>
                <NavbarLeftTabsDiv> 
                  <span onClick={() => handleNavigateTo("shop")}>BUY</span>
                </NavbarLeftTabsDiv>
            </NavbarLeftButtonsContainerDiv>
            <NavbarRightButtonsContainerDiv>
                <NavbarRightTabsDiv> 
                  <span onClick={() => handleNavigateTo("donate")}>DONATE</span>
                </NavbarRightTabsDiv>
                <NavbarRightTabsDiv> 
                  <span></span> { /* that line between the buttons */}
                </NavbarRightTabsDiv>
                <NavbarRightTabsDiv> 
                  <span onClick={() => handleNavigateTo("login")}>LOG IN</span>
                </NavbarRightTabsDiv>
            </NavbarRightButtonsContainerDiv> 
        </NavWrapper>
    </>
  )
}

export default Navbar