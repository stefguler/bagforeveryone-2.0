import React from 'react'
import { StoryListWrapper } from './StoryList.styles'
import StoryCard from '../storyCard/StoryCard'

const StoryList = () => {
  return (
    <StoryListWrapper>
        <StoryCard />
        <StoryCard />
        <StoryCard />
    </StoryListWrapper>
  )
}

export default StoryList