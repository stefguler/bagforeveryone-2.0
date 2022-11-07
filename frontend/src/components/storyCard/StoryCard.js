import React, { useState } from 'react'
import { StoryWrapper, Modal, UserHeader, 
  OptionsMenu, ContentWrapper, StoryImages, UserButtons,
FullImage, Image } from './StoryCard.styles'
import Collapsible from 'react-collapsible';
import Comment from '../comment/Comment';
import { SlOptionsVertical } from 'react-icons/sl';
import { PageButton } from '../../styles/global.styles';

const StoryCard = props => {

  const[modal, setModal] = useState('none');
  const[imageModal, setImageModal] = useState('none');
  const[options, setOptions] = useState('none');
  
  const handleStoryClick = e => {
    setModal('flex');
  }

  const handleImageClick = e => {
    setImageModal('flex');
  }

  const handleOptionsClick = e => {
    setOptions('flex');
  }

  return (
    <>
      <StoryWrapper onClick={handleStoryClick}>
          <img class="preview" src={props.story.image} alt="description"></img>
          <h3 className='hide'>{props.story.title}</h3>
      </StoryWrapper>
      <Modal style={{display: modal}}>
        <PageButton className='modal-close' onClick={() => {
                                                  setModal('none')
                                                  setOptions('none')
                                                  }}
        >X</PageButton>
        <div className='modal-story-wrapper'>
          <UserHeader>
            <div className='user-info-wrapper'>
              <img src='./assets/images/user/user.png' alt='user avatar'></img>
              <div className='user-info'>
                <span>Username</span>
                <span>Created on: 12.03.1999</span>
              </div>
            </div>
            <UserButtons>
            <SlOptionsVertical className='options-icon' onClick={handleOptionsClick}/>
            <OptionsMenu style={{display: options}}>
              <PageButton onClick={() => setOptions('none')}>EDIT</PageButton>
              <PageButton onClick={() => setOptions('none')}>DELETE</PageButton>
            </OptionsMenu>
            </UserButtons>
          </UserHeader>
          {/* <h2>{props.story.title}</h2>  Display title?? */}
          <ContentWrapper>
            <p className='story-content'>{props.story.content}</p>
            <StoryImages>
              <img src={props.story.image} alt="description" onClick={handleImageClick}></img>
            </StoryImages>
            <Collapsible trigger="Show/ Hide comments">
              <Comment />
              <Comment />
            </Collapsible>
          </ContentWrapper>
        </div>
        {/* Modal displaying full image; mapped out if multiple images: */}
        <Modal style={{display: imageModal}}>
          <FullImage>
          <PageButton className='modal-close' onClick={() => setImageModal('none')}>X</PageButton>
            <Image src={props.story.image} alt="description"></Image>                         
          </FullImage>
        </Modal>
      </Modal>
  </>
  )
}

export default StoryCard