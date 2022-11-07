import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Mission from '../../components/mission/Mission'
import { PageWrapper } from './Storiespage.styles'
import StoryList from '../../components/storyList/StoryList'
import Media from 'react-media'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useState } from 'react'

const Storiespage = () => {
  // for hamburger icon:
  const [showNavbar, setShowNavbar] = useState(false);
  
  const handleClick = () => {
    setShowNavbar(!showNavbar);
  }

  return (
    <PageWrapper>
        <Media queries={{ small: { minWidth: 370 } }}>
          {matches =>
            matches.small ? (
              <Navbar />
            ) : (
              <GiHamburgerMenu className='hamburger' onClick={handleClick} />
            )
          }
        </Media>
        {showNavbar && <Navbar />}
        <StoryList />
        <Mission />
    </PageWrapper>
  )
}

export default Storiespage

