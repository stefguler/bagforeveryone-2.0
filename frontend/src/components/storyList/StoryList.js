import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { StoryListWrapper, StoryPageWrapper, 
  FadingBackground, LoginWarningModal, WarningModalProvider } from './StoryList.styles';
import StoryCard from '../storyCard/StoryCard';
import { SlMagnifier } from 'react-icons/sl';
import SearchBar from '../Utilities/Filters/SearchBar/SearchBar';
import { PageButton } from '../../styles/global.styles';

const StoryList = () => {

  const [stories, setStories] = useState([]);
  // check for token in local storage:
  const localToken = localStorage.getItem("bagsAuth");
  const navigate = useNavigate();

  //MODAL SETTINGS
  const [isOpen, setIsOpen] = useState(false)
  const toggleModal = () => {
        setIsOpen(!isOpen);
  }
  
  // fetch all stories:
  useEffect(() => {
      fetch("https://bag-for-everyone.propulsion-learn.ch/backend/api/post/").then(response => {
        return response.json();
      }).then(data => {
        setStories(data)});
  }, []);
  const allStories = stories.map((story, index) => <StoryCard key={index} story={story} />)

  // post button click:
  const handlePostClick = () => {
    // check if logged in:
    if (localToken === null) {
      toggleModal();
    } else {
      navigate('/story/create');
    }
  };

  const handleLoginRequest = () => {
      setIsOpen(!isOpen);
      navigate('/login');
  }

  return (
    <>
      <WarningModalProvider backgroundComponent={FadingBackground}>
        <LoginWarningModal
          isOpen={isOpen}
          onBackgroundClick={toggleModal}
          allowScroll = {false}
        >
          <div className='warning'>
            <p>To post a story, please login</p>
            <PageButton onClick={handleLoginRequest}>Login</PageButton>
            <PageButton onClick={toggleModal}>Back to stories</PageButton>
          </div> 
        </LoginWarningModal>
      </WarningModalProvider>
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
    </>
  )
}

export default StoryList