import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreateStoryWrapper } from './CreateStory.styles';
import { PageButton } from '../../styles/global.styles';
import { UserHeader } from '../story-page/StoryPage.styles';
import { FormWrapper } from './CreateStory.styles';


function CreateStory() {

    const navigate = useNavigate();
    const [storyImage, setStoryImage] = useState(null);
    const [storyData, setStoryData] = useState(
        {
        title: "",
        content: ""
        }
    )
    const [created, setCreated] = useState(false);

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
        setStoryImage(imageUrl[0]);
    }

    //   Post a story fetch:   
    const CreateStory = e => {
        // e.preventDefault();
        setCreated(true);
        setTimeout(() => {
                    navigate('/story');
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
        <CreateStoryWrapper>
                <PageButton onClick={() => navigate('/story')} className='modal-story-button'>X</PageButton>
                <div className='modal-story-wrapper'>
                    <UserHeader>
                    <div className='user-info-wrapper'>
                        <img src='../assets/images/user/user.png' alt='user avatar'></img>
                        <span>user12345</span>
                    </div>
                    </UserHeader>
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
                        <div className='file-field'>
                            <input id="select" multiple type='file' name='image' accept='image/' onChange={e => handleImageUpload(e)}></input>
                        </div>
                        <PageButton type={"submit"} onClick={CreateStory}>{created ? 'SUCCESS!' : 'Create'}</PageButton> 
                    </ FormWrapper>
                </div>
        </CreateStoryWrapper>
    )
}

export default CreateStory