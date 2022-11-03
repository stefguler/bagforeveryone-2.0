import React from 'react'
import { StoryWrapper } from './StoryCard.styles'

const StoryCard = () => {
  return (
    <StoryWrapper>
        <img src='./assets/images/product/product_essentialbag.jpg'></img>
        <h3>Title</h3>
        <div>Content</div>
        <div>Comments</div>
    </StoryWrapper>
  )
}

export default StoryCard