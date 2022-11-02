import React from "react";
import BackgroundHeader from "../../assets/background-header.jpg";
import ProfileImage from '../../assets/man.jpg'; 
import ReviewIcon from "../../assets/star.svg";
import CommentIcon from "../../assets/comment.svg";
import RestaurantIcon from "../../assets/restaurant.svg";
import PencilIcon from "../../assets/edit.svg";
import {
  Profile,
  Header,
  HeaderImg,
  UserProfile,
  SideBar,
  ProfilePhoto,
  ProfileName,
  ActionMenu,
  Reviews,
  ReviewsIcon,
  ReviewsText,
  Comments,
  CommentsIcon,
  CommentsText,
  Restaurants,
  RestaurantsIcon,
  RestaurantsText,
  Edit,
  EditIcon,
  EditText,
  Info,
  TopContainer,
  UserName,
  Location,
  ReviewsCount,
  CommentsCount,
  MoreInfoContainer,
  AboutProfile,
  AboutTitle,
  AddressContainer,
  AddressTitle,
  Address,
  MemberSinceContainer,
  MemberSinceTitle,
  MemberSince,
  ThingsILoveContainer,
  ThingsILoveTitle,
  ThingsILove,
  DescriptionContainer,
  DescriptionTitle,
  Description,
} from "./ProfileStyles/ProfilePage.styled";
import ProfileReview from "./ProfileReview";

const ProfilePage = () => {
  return (
    <Profile>
      <Header>
        <HeaderImg src={BackgroundHeader} alt="luzern" />
      </Header>
      <UserProfile>
        <SideBar>
          <ProfilePhoto src={ProfileImage} alt="luzern" />
          <ProfileName>Laurent's Profile</ProfileName>
          <ActionMenu>
            <Reviews>
              <ReviewsIcon src={ReviewIcon} alt="star" />
              <ReviewsText>Reviews</ReviewsText>
            </Reviews>
            <Comments>
              <CommentsIcon src={CommentIcon} alt="comment" />
              <CommentsText>Comments</CommentsText>
            </Comments>
            <Restaurants>
              <RestaurantsIcon src={RestaurantIcon} alt="restaurant" />
              <RestaurantsText>Restaurants</RestaurantsText>
            </Restaurants>
            <Edit>
              <EditIcon src={PencilIcon} alt="pencil" />
              <EditText>Edit profile</EditText>
            </Edit>
          </ActionMenu>
        </SideBar>

        <Info>
          <TopContainer>
            <UserName>Laurent H.</UserName>
            <Location>Zürich, CH.</Location>
            <ReviewsCount>6 Reviews</ReviewsCount>
            <CommentsCount>210 Comments</CommentsCount>
          </TopContainer>

          <MoreInfoContainer>
            {/* This is the component that changes depending on what action the user clicks */}
            <ProfileReview />
            {/*  */}
            <AboutProfile>
              <AboutTitle>ABOUT LAURENT</AboutTitle>
              <AddressContainer>
                <AddressTitle>Address</AddressTitle>
                <Address>Zürich, CH</Address>
              </AddressContainer>
              <MemberSinceContainer>
                <MemberSinceTitle>Luna Member since</MemberSinceTitle>
                <MemberSince>April, 2018</MemberSince>
              </MemberSinceContainer>
              <ThingsILoveContainer>
                <ThingsILoveTitle>Things I Love</ThingsILoveTitle>
                <ThingsILove>Everything</ThingsILove>
              </ThingsILoveContainer>
              <DescriptionContainer>
                <DescriptionTitle>Description</DescriptionTitle>
                <Description>
                  I'm a professional photographer with an eye for details in
                  every thing I do in my life. Everytime I pass by a nice
                  restaurant I have to stop by and take notes
                </Description>
              </DescriptionContainer>
            </AboutProfile>
          </MoreInfoContainer>
        </Info>
      </UserProfile>
    </Profile>
  );
};

export default ProfilePage;
