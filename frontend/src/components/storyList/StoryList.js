import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StoryListWrapper, StoryPageWrapper } from './StoryList.styles'
import StoryCard from '../storyCard/StoryCard'
import StoryData from '../Utilities/helper_files/StoryData';
import { SlMagnifier } from 'react-icons/sl';
import SearchBar from '../Utilities/Filters/SearchBar/SearchBar';
import { Modal } from '../storyCard/StoryCard.styles';
import { PageButton } from '../../styles/global.styles';
import { UserHeader, ContentWrapper } from '../storyCard/StoryCard.styles';
import { FormWrapper } from '../../pages/create-product/CreateProduct.styles';

const StoryList = () => {

  const[inputModal, setInputModal] = useState('none');
  const [storyImage, setStoryImage] = useState(null);
  const [created, setCreated] = useState(false);
  const [storyData, setStoryData] = useState(
      {
      title: "",
      content: ""
      }
  )
  const navigate = useNavigate();
  const allStories = StoryData.map((story, index) => <StoryCard story={story} />)

  const handleStoryChange = e => {
    setStoryData(prevFormData => {
        return {
            ...prevFormData,
            [e.target.name]: e.target.value
        }
    })
}

    const handleImageUpload = e => {
        const imageUrl = e.target.files;
        // console.log(e.target.files)
        setStoryImage(imageUrl[0]);
      }

  // post button click:
  const handlePostClick = e => {
    setInputModal('flex');
  }

  const CreateStory = e => {
    e.preventDefault();
    setCreated(true);
    setTimeout(() => {
                navigate('/');
                setInputModal('none');
                setCreated(false);
                document.getElementById('title').value='';
                document.getElementById('story').value='';
                setStoryData({
                  title: "",
                  content: ""
                  })
                }, 2000)
    const formData = new FormData();

    // formData.append("title", storyData.title);
    formData.append("content", storyData.content);
    formData.append("image", storyImage);
    // const url = "https://bags.propulsion-learn.ch/backend/api/products/new/"
    // const config = {
    //     method: "POST",
    //     headers: {           
    //         // "Authorization": `Bearer ${localToken}`
    //     },
    //     body: formData,
    // }
    // fetch(url, config)
    //     .then(response => response.json())
    //     .then(data => {
    //         setTimeout(() => navigate('/home'), 2000)
    //         return data.response
    //     })
    //     .catch(error => console.log(error))
}

  return (
    <StoryPageWrapper>
      <div className='search'>
        <div>
        <SearchBar />
        </div>
        <SlMagnifier />
        <PageButton onClick={handlePostClick}>POST</PageButton>
      </div>
      <StoryListWrapper>
          {allStories}
      </StoryListWrapper>

      {/* Create a story MODAL:  */}
      <Modal style={{display: inputModal}}>
        <PageButton className='modal-close' onClick={() => setInputModal('none')}>X</PageButton>
        <div className='modal-story-wrapper'>
          <UserHeader>
            <div className='user-info-wrapper'>
              <img src='./assets/images/user/user.png' alt='user avatar'></img>
              <span>user12345</span>
            </div>
          </UserHeader>
          <ContentWrapper>
            <FormWrapper>
              <label>
              Your title *
              </label>
              <input id="title" type="text" name="title" onChange = {handleStoryChange} required></input>
              <label>
              Your story *
              </label>
              <textarea id="story" name="content" onChange = {handleStoryChange} required></textarea>
              <label htmlFor="select">Upload image:</label>
              <input id="select" multiple type='file' name='image' accept='image/' onChange={e => handleImageUpload(e)}></input>
              <button type={"submit"} onClick={CreateStory}>{created ? 'SUCCESS!' : 'Create'}</button>
            </ FormWrapper>
          </ContentWrapper>
        </div>
      </Modal>
      {/* Create a story MODAL:  */}
    </StoryPageWrapper>
  )
}

export default StoryList