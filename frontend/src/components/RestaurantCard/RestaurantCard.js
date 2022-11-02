// import packages
import React from "react";
import styled from "styled-components";
import StarsRating from "stars-rating";
import {useNavigate} from "react-router-dom";
function RestaurantCard(props){
    const RestaurantCardContainerDiv=styled.div`
      border-top:#E47D31 solid 5px;
      height: 350px;
      width: 250px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      
      box-shadow: 2px 1px 1px lightgray;
      :hover{
        transform: scale(1.02);
        cursor: pointer;
      }
    `;
    const RestaurantCardContainerHeaderDiv=styled.div`
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      font-size: 13px;
      color: #4C4C4C;
      
    ;
      >*{
        margin: 2px;
      }
    `;
    const RestaurantCardContainerMediaDiv=styled.div`
    
      >img{
        height: 240px;
        width: 250px;
        object-fit: cover;
      }
    `;
    const navigate =useNavigate()
    return <RestaurantCardContainerDiv onClick={() => navigate("/restaurant/"+props.res.id)}>
            <RestaurantCardContainerHeaderDiv>
                <p>{props.res.name}</p>
                <p>{props.res.street}</p>
                <StarsRating
                    count={5}
                    value={props.res.rating_average}
                    size={24}
                    color2={'#ffd700'}
                    half={true}
                    edit={false}
                />
            </RestaurantCardContainerHeaderDiv>
            <RestaurantCardContainerMediaDiv>
                <img src={props.res.image}/>
            </RestaurantCardContainerMediaDiv>
        </RestaurantCardContainerDiv>

}

export default RestaurantCard