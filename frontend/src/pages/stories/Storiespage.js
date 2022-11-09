import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import { PageWrapper } from './Storiespage.styles'
import StoryList from '../../components/storyList/StoryList'
import Media from 'react-media'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useState } from 'react'

const Storiespage = () => {
  // for hamburger icon:
  const [showNavbar, setShowNavbar] = useState(false);
  const [showFooter, setShowFooter] = useState(false);
  
  const handleHeaderClick = () => {
    setShowNavbar(!showNavbar);
  }

  const handleFooterClick = () => {
    setShowFooter(!showFooter);
  }

  return (
    <PageWrapper>
        <Media queries={{ small: { minWidth: 480 } }}>
          {matches =>
            matches.small ? (
              <Navbar />
            ) : (
              <GiHamburgerMenu className='hamburger' onClick={handleHeaderClick} />
            )
          }
        </Media>
        {showNavbar && <Navbar />}
        <StoryList />
        <Media queries={{ small: { minWidth: 480 } }}>
          {matches =>
            matches.small ? (
              <Footer />
            ) : (
              <GiHamburgerMenu className='hamburger-footer' onClick={handleFooterClick} />
            )
          }
        </Media>
        {showFooter && <Footer />}
    </PageWrapper>
  )
}

export default Storiespage

