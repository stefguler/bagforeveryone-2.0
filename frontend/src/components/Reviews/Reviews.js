import React from "react";
import { useState } from "react";
import StarsRating from 'stars-rating'
import { BodyDiv, ReviewsGridDiv } from "./review.styledcomponent.js";

function Reviews() {

    // // Handle Click
    // const handleClick = (e) => {
    //     e.preventDefault()
    //     console.log("clicked")
    //     const url = "https://team-2-luna-project.propulsion-learn.ch/backend/api/reviews/new/"

    //     const jsBody = {
    //         // "text_content": reviewText,
    //         // "rating": rating,
    //     }

    //     const config = {
    //         method: "POST",
    //         headers: new Headers({
    //             "Content-Type": "application/json",
    //             "Authorization": `Bearer ${JSON.parse(localStorage.getItem("auth")).lunaToken}`
    //         }),
    //         body: JSON.stringify(jsBody)
    //     }

    //     fetch(`${url}${5}/`, config)
    //     .then((response) => {
    //         if (response.status === 200) {
    //             console.log(response)
    //         }
    //         else {
    //             console.log(response.json())
    //         }
    //     })
    // }


    return (
        <BodyDiv>
            <ReviewsGridDiv>
            <p>review</p>
            <p>review</p>
            <p>review</p>
            <p>review</p>
            <p>review</p>
            <p>review</p>
            <p>review</p>
            <p>review</p>
            <p>review</p>
            <p>review</p>
            <p>review</p>
            <p>review</p>           
            <p>review</p>
            <p>review</p>
            <p>review</p>
            <p>review</p>
            <p>review</p>
            <p>review</p>          
            <p>review</p>
            <p>review</p>
            <p>review</p>
            <p>review</p>
            <p>review</p>
            <p>review</p>
            </ReviewsGridDiv>
        </BodyDiv>
    )
}

export default Reviews;
