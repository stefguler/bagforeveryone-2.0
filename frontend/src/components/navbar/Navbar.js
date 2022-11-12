import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavbarWrapper, Logo, GroupLeft, GroupRight } from './Navbar.styles';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  // This styling will be applied to a <NavLink> when the
  // route that it links to is currently selected.
  let activeStyle = {
    textDecoration: "underline"
  };
  let activeClassName = "underline";

  const navigate = useNavigate();
  const authSlice = useSelector((state) => state.auth)

  return (
      <NavbarWrapper>
        <GroupLeft>
          <Logo onClick={() => navigate('/')} src='../../assets/images/logo/logo.png'></Logo>
          <ul>
            <li>
              <NavLink to="/" style={({ isActive }) => isActive ? activeStyle : undefined}
              >
              ABOUT
              </NavLink>
            </li>
            <li>
              <NavLink to="/story" className={({ isActive }) => isActive ? activeClassName : undefined}
              >
                STORY
              </NavLink>
            </li>
            <li>
              <NavLink to="/team" className={({ isActive }) => isActive ? activeClassName : undefined}
              >
                TEAM
              </NavLink>
            </li>
            <li>
              <NavLink to="/shop" className={({ isActive }) => isActive ? activeClassName : undefined}
              >
                BUY
              </NavLink>
            </li>
          </ul>
        </GroupLeft>
        <GroupRight>
          <ul>
            <li>
              <NavLink id="donate" to="/donate" className={({ isActive }) => isActive ? activeClassName : undefined}
              >
                DONATE
              </NavLink>
            </li>
            {(!authSlice.accessToken || authSlice.accessToken.length < 1) &&
            <li>
              <NavLink id="login" to="/login" className={({ isActive }) => isActive ? activeClassName : undefined}
              >
                LOGIN
              </NavLink>
            </li>
            }
          </ul>
        </GroupRight>
      </NavbarWrapper>
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