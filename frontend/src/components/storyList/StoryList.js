import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { StoryListWrapper, StoryPageWrapper } from './StoryList.styles';
import StoryCard from '../storyCard/StoryCard';
import { SlMagnifier } from 'react-icons/sl';
import SearchBar from '../Utilities/Filters/SearchBar/SearchBar';
import { PageButton } from '../../styles/global.styles';


const StoryList = () => {

  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY5NDY4NTc5LCJpYXQiOjE2Njc5MTMzNzksImp0aSI6ImI0MzVmZTJmMmE4NTQyYWE4NDYwY2YyOTRjZjk3YTJjIiwidXNlcl9pZCI6MX0.ppZOLHl3QOhKULkLS-4LfG7jgDKHHjSkCVMc_l_AxiM";
  const [stories, setStories] = useState([]);

  // fetch all stories:
  useEffect(() => {
        const config = {
          method: "GET",
          headers: new Headers ({
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          })
        };
      fetch("https://bag-for-everyone.propulsion-learn.ch/backend/api/post/", config).then(response => {
        return response.json();
        
      }).then(data => {
        setStories(data)});
  }, []);

  const navigate = useNavigate();
  const allStories = stories.map((story, index) => <StoryCard key={index} story={story} />)

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
          {stories && allStories}
      </StoryListWrapper>
    </StoryPageWrapper>
  )
}

export default StoryList