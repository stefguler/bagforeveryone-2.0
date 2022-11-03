import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Mission from '../../components/mission/Mission'
import { PageWrapper } from './Homepage.styles'
import StoryList from '../../components/storyList/StoryList'

const Homepage = () => {
  return (
    <PageWrapper>
        <Navbar />
        <StoryList />
        <Mission />
    </PageWrapper>
  )
}

export default Homepage

