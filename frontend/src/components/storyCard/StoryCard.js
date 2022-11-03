import React, { useState } from 'react'
import { StoryWrapper, Modal } from './StoryCard.styles'

const StoryCard = props => {

  const[modal, setModal] = useState('none');

  const handleStoryClick = e => {
    setModal('flex');
  }

  return (
    <>
      <StoryWrapper onClick={handleStoryClick}>
          <img src={props.story.image}></img>
          <h3 className='hide'>{props.story.title}</h3>
      </StoryWrapper>
      <Modal style={{display: modal}}>
        <button onClick={() => setModal('none')}>CLOSE</button>
        <img src='./assets/images/product/product_essentialbag.jpg'></img>
        <p>{props.story.content}</p>
        <p>Here we'll map out story comments</p>
      </Modal>
  </>
  )
}

export default StoryCard