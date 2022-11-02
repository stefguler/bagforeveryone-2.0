import styled from "styled-components";

export const Profile = styled.div`
  box-sizing: border-box;
  font-family: Helvetica, Arial, sans-serif;
`;
export const Header = styled.div`
  width: 1440px;
  height: 155px;
`;
export const HeaderImg = styled.img`
  width: 100%;
  height: 100%;
  background-size: cover;
  object-fit: cover;
  filter: brightness(0.7);
`;
export const UserProfile = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  right: 65px;
  left: 65px;
  top: -117px;
`;
export const SideBar = styled.div`
  width: 232px;
  height: 516px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const ProfilePhoto = styled.img`
  width: 232px;
  height: 234px;
  background-size: cover;
  object-fit: cover;
`;
export const ProfileName = styled.p`
  font-size: 18px;
  margin: 28px 0;
  color: #4c4c4c;
  font-weight: 700;
  font-family: Helvetica;
  font-style: normal;
`;
export const ActionMenu = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const Reviews = styled.div`
  width: 100%;
  height: 46.24px;
  padding: 2px 0;
  text-align: start;
  border-top: 1px solid #ebebeb;
  border-bottom: 1px solid #ebebeb;
  display: flex;
  align-items: center;
`;
export const ReviewsIcon = styled.img`
  width: 30px;
  height: 30px;
  padding: 0 16px;
  fill: none;
`;
export const ReviewsText = styled.button`
  font-family: Helvetica, Arial, sans-serif;
  border: none;
  background: transparent;
  font-size: 18px;
  font-weight: 300;
  cursor: pointer;
`;
export const Comments = styled.div`
  width: 100%;
  height: 46.24px;
  padding: 2px 0;
  text-align: start;
  border-bottom: 1px solid #ebebeb;
  display: flex;
  align-items: center;
`;
export const CommentsIcon = styled.img`
  width: 30px;
  height: 30px;
  padding: 0 16px;
`;
export const CommentsText = styled.button`
  font-family: Helvetica, Arial, sans-serif;
  border: none;
  background: transparent;
  font-size: 18px;
  font-weight: 300;
  cursor: pointer;
`;
export const Restaurants = styled.div`
  width: 100%;
  height: 46.24px;
  padding: 2px 0;
  text-align: start;
  border-bottom: 1px solid #ebebeb;
  display: flex;
  align-items: center;
`;
export const RestaurantsIcon = styled.img`
  width: 30px;
  height: 30px;
  padding: 0 16px;
`;
export const RestaurantsText = styled.button`
  font-family: Helvetica, Arial, sans-serif;
  border: none;
  background: transparent;
  font-size: 18px;
  font-weight: 300;
  cursor: pointer;
`;
export const Edit = styled.div`
  width: 100%;
  height: 46.24px;
  padding: 2px 0;
  text-align: start;
  border-bottom: 1px solid #ebebeb;
  display: flex;
  align-items: center;
`;
export const EditIcon = styled.img`
  width: 30px;
  height: 30px;
  padding: 0 16px;
`;
export const EditText = styled.button`
  font-family: Helvetica, Arial, sans-serif;
  border: none;
  background: transparent;
  font-size: 18px;
  font-weight: 300;
  cursor: pointer;
`;
export const Info = styled.div`
  width: 1077px;
  height: 119px;
  align-items: flex-start;
`;

export const TopContainer = styled.div`
  padding: 0 16px;
  color: #fff;
`;
export const UserName = styled.p`
  text-align: start;
  font-size: 24px;
  font-weight: 700;
  padding-bottom:7px;
  margin: 0;
  `;
export const Location = styled.p`
  text-align: start;
  font-size: 18px;
  margin: 0;
  padding-bottom:4px;
  `;
export const ReviewsCount = styled.p`
  text-align: start;
  margin: 0;
  font-size: 18px;
  padding-bottom:4px;
  `;
export const CommentsCount = styled.p`
  text-align: start;
  font-size: 18px;
  margin: 0;
  padding-bottom:4px;
`;

export const MoreInfoContainer = styled.div`
  display: flex;
  `;
export const AboutProfile = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
  width: 456px;
  position: relative;
  top: 11px;
  padding: 23px 15px;

`;
export const AboutTitle = styled.p`
margin: 0;
font-size:20px;
font-weight: 700;
color: #303030;
text-align: start;
padding-bottom: 20px;
`;
export const AddressContainer  = styled.div`
margin: 0;
font-size:20px;
color: #303030;
text-align: start;
`;
export const AddressTitle = styled.div`
font-weight: 700;
`;
export const Address = styled.div`
font-weight: 300;
`;
export const MemberSinceContainer = styled.div`
margin: 0;
font-size:20px;
color: #303030;
text-align: start;
`;
export const MemberSinceTitle = styled.div`
font-weight: 700;

`;
export const MemberSince  = styled.div`
font-weight: 300;

`;
export const ThingsILoveContainer = styled.div`
margin: 0;
font-size:20px;
color: #303030;
text-align: start;
`;
export const ThingsILoveTitle = styled.div`
font-weight: 700;

`;
export const ThingsILove = styled.div`
font-weight: 300;

`;
export const DescriptionContainer = styled.div`
margin: 0;
font-size:20px;
color: #303030;
text-align: start;
`;
export const DescriptionTitle = styled.div`
font-weight: 700;

`;
export const Description = styled.div`
font-weight: 300;

`;

