import React, { useState } from 'react'
import { StoryWrapper, Modal, UserHeader, ContentWrapper, Comments, StoryImages } from './StoryCard.styles'
import Collapsible from 'react-collapsible';
import Comment from '../comment/Comment';

const StoryCard = props => {

  const[modal, setModal] = useState('none');

  const handleStoryClick = e => {
    setModal('flex');
  }

  return (
    <>
      <StoryWrapper onClick={handleStoryClick}>
          <img class="preview" src={props.story.image}></img>
          <h3 className='hide'>{props.story.title}</h3>
      </StoryWrapper>
      <Modal style={{display: modal}}>
        <button className='modal-close' onClick={() => setModal('none')}>X</button>
        <div className='modal-story-wrapper'>
          <UserHeader>
            <div className='user-info-wrapper'>
              <img src='./assets/images/user/user.png' alt='user avatar'></img>
              <div className='user-info'>
                <span>Username</span>
                <span>Created</span>
              </div>
            </div>
            <div className='user-buttons'>
              <button>Edit</button>
              <button>Delete</button>
            </div>
          </UserHeader>
          {/* <h2>{props.story.title}</h2>  Display title?? */}
          <ContentWrapper>
            <p className='story-content'>{props.story.content}</p>
            <StoryImages>
              <img src={props.story.image}></img>
            </StoryImages>
            <Collapsible trigger="Show/ Hide comments">
              <Comment />
              <Comment />
            </Collapsible>
          </ContentWrapper>
        </div>
      </Modal>
  </>
  )
}

export default StoryCard