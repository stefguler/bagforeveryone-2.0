import { useEffect, useState } from "react";
import { render } from 'react-dom';
import styled from "styled-components";
import StarsRating from "stars-rating";
import {
    DetailedReviewCardDiv, 
    DetailedReviewCardHeaderDiv,
    DetailedReviewCardHeaderUserDiv,
    DetailedReviewCardHeaderAvatarDiv,
    StarRatingDiv,
    DateAndTimeDiv,
    DetailedReviewCardBodyDiv,
    DetailedReviewCardBottomDiv,
    DetailedReviewCardReactionsbuttonDiv,
    SeeAllCommentsDiv
} from "./DetailedReviewCard.styles"

function DetailedReviewCard (props) {
    const fetchComments=()=>{

    }

    return ( 
        <DetailedReviewCardDiv>
        <DetailedReviewCardHeaderDiv>

            <DetailedReviewCardHeaderAvatarDiv>
                <img src={require("../../assets/user_pic.jpeg")} alt='user avatar' />
            </DetailedReviewCardHeaderAvatarDiv>

            <DetailedReviewCardHeaderUserDiv>
                <p>{props.review.author.username}</p>
                <p>6 Reviews in total</p>
            </DetailedReviewCardHeaderUserDiv>

            <StarRatingDiv>
                <StarsRating
                    count={5}
                    value={props.review.rating}
                    size={20}
                    color2={'#ffd700'}
                    color1={'#EBEBEB'}
                    half={true}
                    edit={false}
                />
            </StarRatingDiv>
            
            <DateAndTimeDiv>
                <span>{props.review.date_created.substring(0,10)}</span>
            </DateAndTimeDiv>

        </DetailedReviewCardHeaderDiv>

        <DetailedReviewCardBodyDiv>
            <p>{props.review.text_content}</p>
        </DetailedReviewCardBodyDiv>

        <DetailedReviewCardBottomDiv>
            <DetailedReviewCardReactionsbuttonDiv>
                <button>{"Like" +(props.review.liked_by) }</button>
                <button>Comment</button>
            </DetailedReviewCardReactionsbuttonDiv>
            <SeeAllCommentsDiv >
                <span>View All Comments</span>
            </SeeAllCommentsDiv>
        </DetailedReviewCardBottomDiv>

    </DetailedReviewCardDiv>
    )
}

export default DetailedReviewCard