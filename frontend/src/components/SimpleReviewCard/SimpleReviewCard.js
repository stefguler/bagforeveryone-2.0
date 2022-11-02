import { useEffect, useState } from "react";
import { render } from 'react-dom';
import styled from "styled-components";
import StarsRating from "stars-rating";
import {
    SimpleReviewCardDiv,
    SimpleReviewCardHeaderDiv,
    SimpleReviewCardHeaderUserDiv,
    SimpleReviewCardHeaderAvatarDiv,
    StarRatingDiv,
    DateAndTimeDiv,
    SimpleReviewCardBodyDiv,
    SimpleReviewCardBottomDiv,
    SimpleReviewCardReactionsbuttonDiv,
    SeeAllCommentsDiv
} from "./SimpleReviewCard.styles"

function SimpleReviewCard (props) {

    return ( 
        <SimpleReviewCardDiv>
        <SimpleReviewCardHeaderDiv>

            <SimpleReviewCardHeaderAvatarDiv>
                <img src={require("../../assets/user_pic.jpeg")} alt='user avatar' />
            </SimpleReviewCardHeaderAvatarDiv>

            <SimpleReviewCardHeaderUserDiv>
                <p>{props.review.author.username}</p>
                <p>6 Reviews in total</p>
            </SimpleReviewCardHeaderUserDiv>

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

        </SimpleReviewCardHeaderDiv>

        <SimpleReviewCardBodyDiv>
            <p>{props.review.text_content}</p>
        </SimpleReviewCardBodyDiv>

        <SimpleReviewCardBottomDiv>
            <SimpleReviewCardReactionsbuttonDiv>
                <button>{"Like "+ (props.review.liked_by?props.review.liked_by.length:0)}</button>
                <button>Comment 23</button>
            </SimpleReviewCardReactionsbuttonDiv>
        </SimpleReviewCardBottomDiv>

    </SimpleReviewCardDiv>
    )
}

export default SimpleReviewCard