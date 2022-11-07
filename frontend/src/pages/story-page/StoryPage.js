import React from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { StoryWrapper, CloseButton, UserHeader, UserButton,
   OptionsMenu, ContentWrapper, StoryImages, FullImageModal, Image,
  DarkBackground } from '../../pages/story-page/StoryPage.styles';
import { PageButton } from '../../styles/global.styles';
import StoryData from '../../components/Utilities/helper_files/StoryData'
import Comment from '../../components/comment/Comment';
import { SlOptionsVertical } from 'react-icons/sl';
import Collapsible from 'react-collapsible';

const StoryPage = () => {

  const { id } = useParams();
  const story = StoryData[id - 1];
  const navigate = useNavigate();

  return (
    <DarkBackground>
      <StoryWrapper>
            <CloseButton onClick={() => navigate('/story')}>X</CloseButton>
              <div className='modal-story-wrapper'>
                <UserHeader>
                    <img src='../assets/images/user/user.png' alt='user avatar'></img>
                    <div className='user-info'>
                      <span>Username</span>
                      <span>Created on: 12.03.1999</span>
                    </div>
                    <UserButton>
                      <SlOptionsVertical className='options-icon'/>
                      <OptionsMenu>
                        <PageButton>EDIT</PageButton>
                        <PageButton>DELETE</PageButton>
                        <PageButton>CANCEL</PageButton>
                      </OptionsMenu>
                    </UserButton>
                </UserHeader>
                <ContentWrapper>
                  <p className='story-content'>{story.content}</p>
                  <StoryImages>
                    <img src={`.${story.image}`} alt="description"></img>
                  </StoryImages>
                  <Collapsible trigger="Show/ Hide comments">
                    <Comment />
                    <Comment />
                  </Collapsible>
                </ContentWrapper>
              </div>
          <FullImageModal style={{display: 'none'}}>
            <PageButton>X</PageButton>
              <Image src={story.image} alt="description"></Image>                         
          </FullImageModal>
        </StoryWrapper>
      </DarkBackground>
  )
}

export default StoryPage