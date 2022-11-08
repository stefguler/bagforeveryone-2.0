import React from 'react'
import { useNavigate } from 'react-router-dom';
import { StoryListWrapper, StoryPageWrapper } from './StoryList.styles';
import StoryCard from '../storyCard/StoryCard';
import StoryData from '../Utilities/helper_files/StoryData';
import { SlMagnifier } from 'react-icons/sl';
import SearchBar from '../Utilities/Filters/SearchBar/SearchBar';
import { PageButton } from '../../styles/global.styles';


const StoryList = () => {

  const navigate = useNavigate();
  const allStories = StoryData.map((story, index) => <StoryCard key={index} story={story} />)

  // post button click:
  const handlePostClick = e => {
    navigate('/story/create')
  }


  return (
    <StoryPageWrapper>
      <div className='search'>
        <div className='search-form'>
          <div className='search-field'>
            <SearchBar />
          </div>
          <SlMagnifier />
        </div>
        <PageButton onClick={handlePostClick}>POST</PageButton>
      </div>
      <StoryListWrapper>
          {allStories}
      </StoryListWrapper>
    </StoryPageWrapper>
  )
}

export default StoryList