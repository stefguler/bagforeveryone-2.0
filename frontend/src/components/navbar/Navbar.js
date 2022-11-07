import React from 'react'
import Media from 'react-media';
import { GiHamburgerMenu } from 'react-icons/gi'
import { useState } from 'react';
import { 
  NavWrapper,
  NavbarLogoContainerDiv,
  NavbarLeftButtonsContainerDiv,
  NavbarLeftTabsDiv,
  NavbarRightButtonsContainerDiv,
  NavbarRightTabsDiv,
  NavbarButtonsContainerDiv
  } from './Navbar.styles';

const Navbar = () => {

  const [showTabs, setShowTabs] = useState(false);

  const handleClick = () => {
    setShowTabs(!showTabs)
  }

  return (
    <>
        <NavWrapper> 

          {/* make logo clickable and return to landing page onClick */}
            <NavbarLogoContainerDiv src="../assets/images/logo/logo.png" />

            <Media queries={{small: {minWidth: 500}  }}>
            {matches => 
            matches.small ? ( 
              <GiHamburgerMenu className='hamburger' onClick={handleClick} />
            ) : (
              <>
              <NavbarLeftButtonsContainerDiv /><NavbarRightButtonsContainerDiv />
              </> 
            )
            }
            </Media>

            {showTabs && 
              <>
              <NavbarLeftButtonsContainerDiv /><NavbarRightButtonsContainerDiv />
              </> }



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