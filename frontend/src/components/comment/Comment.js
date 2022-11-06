import React from 'react'
import { CommentWrapper } from './Comment.styles'

const Comment = () => {
  return (
    <CommentWrapper>
        <div className='comment-header'>
            <img src='./assets/images/user/user.png'></img>
            <span>User12345</span>
        </div>
        <p>This is definitely a comment</p>
    </CommentWrapper>
  )
}

export default Comment