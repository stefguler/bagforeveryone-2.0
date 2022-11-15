import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { PageButton } from '../../styles/global.styles';
import { FormWrapper, CreateStoryWrapper } from './CreateComment.styles';

const CreateComment = () => {

    const localToken = (JSON.parse(localStorage.getItem("bagsAuth"))).bagsToken;
    const { id } = useParams();
    const [comment, setComment] = useState('');
    const navigate = useNavigate();
    const [created, setCreated] = useState(false);

    const handleCommentChange = e => {
        setComment(e.target.value);
    }

    const handleCommentCreate = e => {
        e.preventDefault();
        console.log(comment)
        // after successful posting:
        const cleanUp = () => {
            setCreated(false);
            document.getElementById('comment').value='';
            setComment({
                content: ""
            })
            navigate(`/story/${id}`);
        }
        const url = `https://bag-for-everyone.propulsion-learn.ch/backend/api/post/comment/new/${id}/`
        const requestBody = {              
            content: comment         
        }
        const config = {
        method: "POST",
            headers: new Headers({
                "Authorization": `Bearer ${localToken}`,
                "Content-Type": "application/json"
            }),
        body: JSON.stringify(requestBody)
        }

        if (!comment) {
            alert ('Content cannot be empty.')
            return;
        };

        fetch(url, config)
            .then(response => {
                response.json();
                if (response.ok) {
                    setCreated(true);
                } else {
                    throw new Error('Something went wrong!');
                }
            })
            .then(data => {
                setTimeout(cleanUp, 2000);
            })
            .catch(error => alert(error))
        }
   
    return (
        <CreateStoryWrapper>
                    <FormWrapper>
                        <PageButton 
                            className='close-comment' 
                            onClick={() => navigate(`/story/${id}`)}
                        >X</PageButton>
                        <label>
                        Your Comment *
                        </label>
                        <textarea id="comment" name="content" onChange = {handleCommentChange} required></textarea>
                        <PageButton type={"submit"} 
                                    onClick={handleCommentCreate}
                        >{created ? 'CREATED!' : 'Post'}
                        </PageButton>
                    </ FormWrapper>
        </CreateStoryWrapper>
    )
}

export default CreateComment