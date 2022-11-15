import React from 'react'
import { NavLink } from 'react-router-dom';
import { NavbarWrapper, Logo, GroupLeft, GroupRight } from './NavbarLinks.styles';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const NavbarLinks = () => {

    let activeStyle = {
        borderBottom: "3px solid #DABC39"
      };
    
      let activeClassName = "underline";

      const navigate = useNavigate();
      const authSlice = useSelector((state) => state.auth)

    return (
        <NavbarWrapper>
            <GroupLeft>
                <Logo onClick={() => navigate('/about')} src='../../assets/images/logo/logo.png'></Logo>
                <ul>
                    <li>
                    <NavLink to="/about" style={({ isActive }) => isActive ? activeStyle : undefined}
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

export default NavbarLinks