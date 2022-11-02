import React from "react";
import { ReviewSection, ReviewContainer, Textarea, Button, RatingDiv, IdInput } from "./createreview.styledcomponenets.js";
import { useState } from "react";
import StarsRating from 'stars-rating'

function CreateReview() {

    // LOGIC 

  const [reviewText, setReview] = useState("");
  const [reviewId, setId] = useState("");
  const [rating, setRating] = useState("");

  const ratingChanged = (newRating) => {
    setRating(newRating)
    console.log(rating)
}

const idChanged = (e) => {
    e.preventDefault()
    setId(e.target.value)
}

    // Handle Submit
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("submited")
        console.log(rating)
        const url = "https://team-2-luna-project.propulsion-learn.ch/backend/api/reviews/new/"

        const jsBody = {
            "text_content": reviewText,
            "rating": rating,
        }

        const config = {
            method: "POST",
            headers: new Headers({
                "Content-Type": "application/json",
                "Authorization": `Bearer ${JSON.parse(localStorage.getItem("auth")).lunaToken}`
            }),
            body: JSON.stringify(jsBody)
        }

        fetch(`${url}${reviewId}/`, config)
        .then((response) => {
            if (response.status === 200) {
                console.log(response)
            }
            else {
                console.log(response.json())
            }
        })
    }

  return (
    <ReviewSection>
        <ReviewContainer onSubmit={handleSubmit} action="#">
            <RatingDiv>
                <StarsRating
                    count={5}
                    value={rating}
                    onChange={ratingChanged}
                    size={40}
                    color1={"#d2d2d2"}
                    color2={'#ffd700'} />
                    <p>Select your rating</p>
            </RatingDiv>
            <Textarea
            type="text"
            value={reviewText}
            placeholder="Your review helps others lern about great local businesses. Please don't review this business if you received a freebie for writing review, or if you're connected in any way to the owner or employees."
            onChange={(e) => setReview(e.target.value)}
            rows="10"
            cols="80"
            />
            <IdInput value={reviewId} onChange={idChanged}></IdInput>
            <Button type="submit">SUBMIT</Button>
        </ReviewContainer>
    </ReviewSection>
  );
}

export default CreateReview;
