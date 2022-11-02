import { useEffect, useState } from "react";
import { render } from 'react-dom';
import styled from "styled-components";
import StarsRating from "stars-rating";
import {
    SimpleUserCardDiv,
    SimpleUserCardHeaderDiv,
    SimpleUserCardHeaderUserDiv,
    SimpleUserCardHeaderAvatarDiv,
    StarRatingDiv,
    DateAndTimeDiv,
    SimpleUserCardBodyDiv,
    SimpleUserCardBottomDiv,
    SimpleUserCardReactionsbuttonDiv,
    SeeAllCommentsDiv
} from "./SimpleUserCard.styles"

function SimpleUserCard (props) {


    return (
        <SimpleUserCardDiv>
            <SimpleUserCardHeaderDiv>

                <SimpleUserCardHeaderAvatarDiv>
                    <img src={require("../../assets/user_pic.jpeg")} alt='user avatar' />
                </SimpleUserCardHeaderAvatarDiv>

                <SimpleUserCardHeaderUserDiv>
                    <p>{props.user_or_review.first_name +" "+props.user_or_review.first_name}</p>
                    <p>6 Reviews in total</p>
                </SimpleUserCardHeaderUserDiv>



            </SimpleUserCardHeaderDiv>

            <SimpleUserCardBodyDiv>
                <p>{props.user_or_review.description}</p>
            </SimpleUserCardBodyDiv>
        </SimpleUserCardDiv>
    )
}

export default SimpleUserCard