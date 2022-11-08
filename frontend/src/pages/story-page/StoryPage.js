import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { StoryWrapper, CloseButton, UserHeader, UserButton,
   OptionsMenu, ContentWrapper, StoryImages, FullImageModal, Image,
  DarkBackground, CloseModalButton } from '../../pages/story-page/StoryPage.styles';
import { PageButton } from '../../styles/global.styles';
// import StoryData from '../../components/Utilities/helper_files/StoryData'
import Comment from '../../components/comment/Comment';
import { SlOptionsVertical } from 'react-icons/sl';
import Collapsible from 'react-collapsible';

const StoryPage = () => {

  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY5NDY4NTc5LCJpYXQiOjE2Njc5MTMzNzksImp0aSI6ImI0MzVmZTJmMmE4NTQyYWE4NDYwY2YyOTRjZjk3YTJjIiwidXNlcl9pZCI6MX0.ppZOLHl3QOhKULkLS-4LfG7jgDKHHjSkCVMc_l_AxiM";

  // 

  const { id } = useParams();
  // const story = StoryData[id - 1];
  const navigate = useNavigate();
  const [showOptions, setShowOptions] = useState(false);
  const [imageModal, setImageModal] = useState('none');
  const [story, setStory] = useState('');

  const handleOptionClick = () => {
    setShowOptions(!showOptions);
  }

  // fetch single story corresponding to page:
  useEffect(() => {
    const config = {
      method: "GET",
      headers: new Headers ({
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      })
    };
  fetch(`https://bag-for-everyone.propulsion-learn.ch/backend/api/post/${id}/`, config).then(response => {
    return response.json();
    
  }).then(data => {
    setStory(data)});
}, []);

  return (
    <DarkBackground>
      <StoryWrapper>
            <CloseButton onClick={() => navigate('/story')}>X</CloseButton>
              <div className='modal-story-wrapper'>
                <UserHeader>
                    <div className='user-display'>
                      <img src={'../assets/images/user/user.png'} alt='user avatar'></img>
                      <div className='user-info'>
                        <span>Username</span>
                        <span>Created on: 12.03.1999</span>
                      </div>
                    </div>
                    <UserButton>
                      <SlOptionsVertical onClick={handleOptionClick} className='options-icon'/>
                      {showOptions && <OptionsMenu>
                        <PageButton onClick={handleOptionClick}>EDIT</PageButton>
                        <PageButton onClick={handleOptionClick}>DELETE</PageButton>
                        <PageButton onClick={handleOptionClick}>CANCEL</PageButton>
                      </OptionsMenu>}
                    </UserButton>
                </UserHeader>
                <ContentWrapper>
                  <section className='story-content'>
                      <p>{story.content}</p>
                  </section>
                  <StoryImages onClick={() => setImageModal('flex')}>
                    <img src={story.image} alt="description"></img>
                  </StoryImages>
                  <Collapsible trigger="Show/ Hide comments">
                    <Comment />
                    <Comment />
                  </Collapsible>
                </ContentWrapper>
              </div>
          <FullImageModal style={{display: imageModal}}>
            <CloseModalButton onClick={() => setImageModal('none')}>X</CloseModalButton>
              <Image src={story.image} alt="description"></Image>                        
          </FullImageModal>
        </StoryWrapper>
      </DarkBackground>
  )
}

export default StoryPage