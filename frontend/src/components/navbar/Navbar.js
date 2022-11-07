import React from 'react'
import { NavWrapper, Logo } from './Navbar.styles';

const Navbar = () => {

  return (
    <>
      <NavWrapper>
          <Logo src="../assets/images/logo/logo.png" />
          <ul>
              <li>Storyboard</li>
              <li>About Us</li>
              <li>Donate</li>
              <li>Shop</li>
              <li>Login/ Signup</li>
          </ul>
      </NavWrapper>
    </>
  )
}

export default Navbar