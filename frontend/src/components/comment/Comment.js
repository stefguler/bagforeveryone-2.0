import React, { useState, useEffect } from 'react';
import { CommentWrapper, CommenterButton, 
  CommentOptionsMenu } from './Comment.styles';
import { PageButton } from '../../styles/global.styles';
import { SlOptionsVertical } from 'react-icons/sl';
import { useNavigate } from 'react-router-dom';
import { DeleteModalProvider, FadingBackground,
DeleteWarningModal } from '../../pages/story-page/StoryPage.styles';

const Comment = ({ id, pageId, user, created, content }) => {

  const localToken = (JSON.parse(localStorage.getItem("bagsAuth"))).bagsToken;
  const navigate = useNavigate();
  const [loggedInUser, setLoggedInUser] = useState('');
  const [showOptions, setShowOptions] = useState(false);
  console.log(pageId)

  // Delete Comment MODAL settings:
  const [isOpen, setIsOpen] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const toggleDeleteModal = () => {
        setIsOpen(!isOpen);
  }

  // fetch logged-in user:
  useEffect(() => {
    const url = "https://bag-for-everyone.propulsion-learn.ch/backend/api/user/me/";
    const config = {
        method: "GET",
        headers: {          
            "Authorization": `Bearer ${localToken}`
        }
    }
    fetch(url, config)
        .then(response => response.json())
        .then(data => setLoggedInUser(data))
        .catch(error => console.log(error))
  }, []);

  const handleOptionClick = () => {
    setShowOptions(!showOptions);
  }

  const handleCommentDelete = e => {
    console.log(id)
    // Delete the comment:
      const url = `https://bag-for-everyone.propulsion-learn.ch/backend/api/post/comment/id/${id}`;
      const config = {
          method: "DELETE",
          headers: {       
              "Authorization": `Bearer ${localToken}`
          }
      }
      fetch(url, config)
      .then(() => {
        setIsDeleted(!isDeleted);
        setTimeout(() => {
          setIsDeleted(!isDeleted);
          toggleDeleteModal();
          window.location.reload();
        }, 2000);
    })
  }

  return (
    <CommentWrapper>
      { loggedInUser ?
        loggedInUser[0].id === user &&
        <CommenterButton>
          <SlOptionsVertical 
            className='options-icon'
            onClick={handleOptionClick}/>
          {showOptions && <CommentOptionsMenu>
            {/* <PageButton >EDIT</PageButton> */}
            <PageButton
              onClick={toggleDeleteModal}>
               DELETE
            </PageButton>
            <PageButton onClick={handleOptionClick}>CANCEL</PageButton>
          </CommentOptionsMenu>}
        </CommenterButton>
        : ''}
        <div className='comment-header'>
            <img src='../assets/images/user/avatar.png' alt='user avatar'></img>
            <div className='commenter-info'>
              <span>User: {user}</span>
              <span>Posted: {created.substring(0, 10)}</span>
            </div>
        </div>
        <p>{content}</p>     
        <DeleteModalProvider backgroundComponent={FadingBackground}>
          <DeleteWarningModal
            isOpen={isOpen}
            onBackgroundClick={toggleDeleteModal}
            allowScroll = {false}
          >
            <div className='delete-warning'>
              <p style={{color: "black"}}>Are you sure? This will delete the comment for good!</p>
              <PageButton onClick={handleCommentDelete}>
                { isDeleted ? 'SUCCESS!' : 'DELETE' }
                </PageButton>
              <PageButton onClick={toggleDeleteModal}>CANCEL</PageButton>
            </div>
          </DeleteWarningModal>
        </DeleteModalProvider>
    </CommentWrapper>
  )
}

export default Comment