import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { StoryWrapper, CloseButton, UserHeader, UserButton,
   OptionsMenu, ContentWrapper, StoryImages, FullImageModal, Image,
  DarkBackground, CloseModalButton, DeleteModalProvider, FadingBackground,
DeleteWarningModal, CommentButton } from '../../pages/story-page/StoryPage.styles';
import { PageButton } from '../../styles/global.styles';
import Comment from '../../components/comment/Comment';
import { SlOptionsVertical } from 'react-icons/sl';
import Collapsible from 'react-collapsible';
import EditStory from '../../components/edit-story/EditStory';

const StoryPage = () => {

  const localToken = (JSON.parse(localStorage.getItem("bagsAuth"))).bagsToken;
  const { id } = useParams();
  
  const navigate = useNavigate();
  const [showOptions, setShowOptions] = useState(false);
  const [imageModal, setImageModal] = useState('none');
  const [story, setStory] = useState('');
  const [displayEdit, setDisplayEdit] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState('');
  const [comments, setComments] = useState([]);
  
  const displayComments = comments.map(elem => <Comment  
                                                  key={elem.id}
                                                  id={elem.id}
                                                  pageId={id}
                                                  user={elem.commenter}
                                                  created={elem.created}
                                                  content={elem.content}
                                                />)

  // Delete MODAL settings:
  const [isOpen, setIsOpen] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const toggleDeleteModal = () => {
        setIsOpen(!isOpen);
  }

  const handleOptionClick = () => {
    setShowOptions(!showOptions);
  }

  const handleStoryDelete = () => {
    // Delete the post:
      const url = `https://bag-for-everyone.propulsion-learn.ch/backend/api/post/${id}/`;
      const config = {
          method: "DELETE",
          headers: {          
              "Authorization": `Bearer ${localToken}`
          }
      }
      fetch(url, config)
      .then(() => {
        setIsDeleted(!isDeleted);
        setTimeout(() => navigate('/story'), 2000);
    })
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

  // fetch current story:
  useEffect(() => {
    const config = {
      method: "GET",
      headers: new Headers ({
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localToken}`
      })
    };
  fetch(`https://bag-for-everyone.propulsion-learn.ch/backend/api/post/${id}/`, config)
  .then(response => response.json())
  .then(data => {setStory(data)});
  }, []);

  // fetch all comments:
  useEffect(() => {
    const config = {
      method: "GET",
      headers: new Headers ({
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localToken}`
      })
    };
  fetch(`https://bag-for-everyone.propulsion-learn.ch/backend/api/post/comment/list/`, config)
  .then(response => response.json())
  // .then(data => {setComments(data)});
  .then(data => {setComments(data.filter(elem => elem.post == id))});
  }, []);

  return (
    <DarkBackground>
      <StoryWrapper>
            <CloseButton onClick={() => navigate('/story')}>X</CloseButton>
              <div className='modal-story-wrapper'>
                <UserHeader>
                    <div className='user-display'>
                      <img src={'../assets/images/user/avatar.png'} alt='user avatar'></img>
                      <div className='user-info'>
                        <span>Author: {story.author}</span>
                        <span>Created on: {story ? story.created.substring(0, 10) : ''}
                        </span>
                      </div>
                    </div>
                    {/* The User button (edit, delete, cancel) will only show if the
                    Author is the logged-in user: */}
                    { loggedInUser ?
                    loggedInUser[0].id === story.author &&
                      <UserButton>
                      <SlOptionsVertical onClick={handleOptionClick} className='options-icon'/>
                      {showOptions && <OptionsMenu>
                        <PageButton onClick={() => setDisplayEdit(!displayEdit)}>EDIT</PageButton>
                        <PageButton onClick={toggleDeleteModal}>DELETE</PageButton>
                        <PageButton onClick={handleOptionClick}>CANCEL</PageButton>
                      </OptionsMenu>}
                    </UserButton>
                    : ''}
                </UserHeader>
                <ContentWrapper>
                  <section className='story-content'>
                      <p>{story.content}</p>
                  </section>
                  <StoryImages onClick={() => setImageModal('flex')}>
                    <img src={story.image} alt="description"></img>
                  </StoryImages>

                  {/* COMMENTS SECTION */}
                  <CommentButton onClick={() => navigate(`/comment/create/${id}`)}>POST A NEW COMMENT</CommentButton>
                  <Collapsible trigger={comments.length !== 0 ? "Show/ Hide comments" : "There are currently no comments."}>
                    { comments && displayComments }
                  </Collapsible>
                </ContentWrapper>
              </div>
          <FullImageModal style={{display: imageModal}}>
            <CloseModalButton onClick={() => setImageModal('none')}>X</CloseModalButton>
              <Image src={story.image} alt="description"></Image>                     
          </FullImageModal>
        </StoryWrapper>
        {displayEdit && <EditStory 
                          title={story.title}
                          content={story.content}
                        />
        }
        <DeleteModalProvider backgroundComponent={FadingBackground}>
          <DeleteWarningModal 
            isOpen={isOpen}
            onBackgroundClick={toggleDeleteModal}
            allowScroll = {false}
          >
            <div className='delete-warning'>
              <p>Are you sure? This will delete the post for good!</p>
              <PageButton onClick={handleStoryDelete}>
                { isDeleted ? 'SUCCESS!' : 'DELETE' }
                </PageButton>
              <PageButton onClick={toggleDeleteModal}>CANCEL</PageButton>
            </div>
          </DeleteWarningModal>
        </DeleteModalProvider>
      </DarkBackground>
  )
}

export default StoryPage