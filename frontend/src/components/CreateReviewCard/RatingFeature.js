import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";

export default function StarRating() {
  const [rating, setRating] = useState(); // initial rating value

  const handleRating = (rate) => {
    console.log(rate);
    setRating(rate); // catch the rating value
  };

  return (
    <Rating
      fillColor="#FFE333"
      allowHalfIcon
      transition
      showTooltip
      onClick={handleRating}
      ratingValue={rating}
      allowFraction="true"
      tooltipDefaultText="Select your rating"
      tooltipStyle={{
        background: "transparent",
        border: "0",
        color: "#bbb7b7",
        fontFamily: "Roboto",
        fontSize: "20px"
      }}
    />
  );
}
