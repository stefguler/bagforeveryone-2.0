import React from 'react'
import { StoryListWrapper, StoryPageWrapper } from './StoryList.styles'
import StoryCard from '../storyCard/StoryCard'
import StoryData from '../Utilities/helper_files/StoryData';
import { SlMagnifier } from 'react-icons/sl';
import SearchBar from '../Utilities/Filters/SearchBar/SearchBar';


const StoryList = () => {

  const allStories = StoryData.map((story, index) => <StoryCard story={story} />)

  return (
    <StoryPageWrapper>
      <div className='search'>
        <div>
        <SearchBar />
        </div>
        <SlMagnifier />
      </div>
      <StoryListWrapper>
          {allStories}
      </StoryListWrapper>
    </StoryPageWrapper>
  )
}

export default StoryList