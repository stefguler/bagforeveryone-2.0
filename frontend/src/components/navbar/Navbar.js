import React from 'react'

import { 
  NavWrapper,
  NavbarLogoContainerDiv,
  NavbarLeftButtonsContainerDiv,
  NavbarLeftTabsDiv,
  NavbarRightButtonsContainerDiv,
  NavbarRightTabsDiv,
  } from './Navbar.styles';

const Navbar = () => {

  return (
    <>
        <NavWrapper> 
          {/* make logo clickable and return to landing page onClick */}
            <NavbarLogoContainerDiv src="../assets/images/logo/logo.png" />
            <NavbarLeftButtonsContainerDiv> 
              {/* need to add navigation to other pages onClick */}
                <NavbarLeftTabsDiv> 
                  <span>ABOUT</span>
                </NavbarLeftTabsDiv>
                <NavbarLeftTabsDiv> 
                  <span>STORY</span>
                </NavbarLeftTabsDiv>
                <NavbarLeftTabsDiv> 
                  <span>TEAM</span>
                </NavbarLeftTabsDiv>
                <NavbarLeftTabsDiv> 
                  <span>BUY</span>
                </NavbarLeftTabsDiv>
            </NavbarLeftButtonsContainerDiv>
            <NavbarRightButtonsContainerDiv>
                <NavbarRightTabsDiv> 
                  <span>DONATE</span>
                </NavbarRightTabsDiv>
                <NavbarRightTabsDiv> 
                  <span></span> { /* that line between the buttons */}
                </NavbarRightTabsDiv>
                <NavbarRightTabsDiv> 
                  <span>LOG IN</span>
                </NavbarRightTabsDiv>
            </NavbarRightButtonsContainerDiv>  
        </NavWrapper>
    </>
  )
}

export default Navbar