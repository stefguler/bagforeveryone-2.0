import React from "react";
import StarIcon from "../../assets/yellow-star.svg";
import {
  ReviewContainer,
  ReviewItem,
  ReviewTitle,
  RestaurantAndDate,
  RestaurantName,
  Date,
  Stars,
  Star,
  Review,
  Content,
} from "./ProfileStyles/ProfileReview.styled";
const ProfileReview = () => {
  return (
    <ReviewContainer>
      <ReviewTitle>REVIEWS</ReviewTitle>
      <ReviewItem>
        <RestaurantAndDate>
          <RestaurantName>Läderach Chocolatier Suisse</RestaurantName>
          <Date>01.01.2018 15:22</Date>
        </RestaurantAndDate>
        <Stars>
          <Star src={StarIcon} alt="star" />
          <Star src={StarIcon} alt="star" />
          <Star src={StarIcon} alt="star" />
          <Star src={StarIcon} alt="star" />
          <Star src={StarIcon} alt="star" />
        </Stars>
        <Review>
          <Content>
            This location at the Bahnhofstrasse is quite friendly and easily
            located across the street from the train station. The people there
            seem to be quite good and helpful in their service.{" "}
          </Content>
        </Review>
      </ReviewItem>
      {/* Comment repeated */}
        <ReviewItem>
          <RestaurantAndDate>
            <RestaurantName>Läderach Chocolatier Suisse</RestaurantName>
            <Date>01.01.2018 15:22</Date>
          </RestaurantAndDate>
          <Stars>
            <Star src={StarIcon} alt="star" />
            <Star src={StarIcon} alt="star" />
            <Star src={StarIcon} alt="star" />
            <Star src={StarIcon} alt="star" />
            <Star src={StarIcon} alt="star" />
          </Stars>
          <Review>
            <Content>
              This location at the Bahnhofstrasse is quite friendly and easily
              located across the street from the train station. The people there
              seem to be quite good and helpful in their service.{" "}
            </Content>
          </Review>
        </ReviewItem>
    </ReviewContainer>
  );
};

export default ProfileReview;
