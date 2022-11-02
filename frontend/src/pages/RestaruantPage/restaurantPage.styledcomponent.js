import styled from "styled-components";


export const PageContainerDiv=styled.div`
      height: 100vh;
      display: flex;
      flex-direction: column;
      
    `;
export const RestaurantPageBody=styled.div`

    `;
export const BannerContainerDiv=styled.div`
      
      //image related attributes
      background-image: url(${props => props.url});
      height: 300px;
      width: 100vw;
      object-fit: cover;
      background-size: cover;
      position: relative;
      
      &:after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 50%;
        background-color: black;
        opacity: 0.5;
      }
      >*{
        z-index: 100;
        position: relative;
        color:white;
      }
    `;


export const RestaurantPageInfoDiv=styled.div`
      display: flex;
      padding: 20px 35px 20px 35px;
      background-color: #F5F5F5;
    `;
export const BannerContainerResInfoDiv=styled.div`
      
        padding: 20px 20px 20px 50px;
    `;
export const BannerContainerResNameDiv=styled.div`
        font-size: 30px;
    `;

export const BannerContainerResTypeDiv=styled.div`
      font-size: 24px;
      font-weight: 300;
    `;
export const StarAndNumberContainerDic=styled.div`
      display: flex;
      align-items: center;
      column-gap: 15px;
    `;
export const GoogleMapInfoContainerDiv=styled.div`
      position: absolute;
      width: 25%;
      height: 80%;
      top: 20px;
      right: 100px;
      background-color: white;
      display: flex;
      flex-direction: column;
      >img{
        width: 100%;
        height: 50%;
        object-fit: cover;
      }
    `;
export const GoogleMapContactInfoContainerDiv=styled.div`{
      color:black;
      font-size: 15px;
      padding: 20px 20px 20px 20px;
      display: flex;
      flex-direction: column;
      row-gap: 10px;
      }
    `;
export const GoogleMapContactInfoEntryContainerDiv=styled.div`{
      display: flex;
      column-gap: 15px;
      }
    `;
export const RestaurantPageInfoLeftPanelDiv=styled.div`{
      display: flex;
      flex-direction: column;
      
      //size
      min-width: 70%;
      }
    `;
export const RestaurantPageInfoRightPanelDiv=styled.div`{
      display: flex;
      flex-direction: column;
      }
    `;
export const RestaurantPageInfoLeftPanelSearchBarDiv=styled.div`{
      display: flex;
      flex-direction: row;
      column-gap: 20px;
      
      //regarding the size
      width: 100%;
      }
    `;

export const RestaurantPageInfoLeftPanelSearchBarInputField=styled.input`
      height: 25px;
      width: 50%;
      ::placeholder {
        color: grey;
      }
      :focus{
        outline: none; 
      }
    `;

export const RestaurantPageInfoLeftPanelSearchbarButton=styled.button`
      border: transparent;
      border-radius: 20px;
      background-color: #E47D31;
      width: 100px;
    `;
export const IconTextWrapperDiv=styled.div`
      display: flex;
      column-gap: 10px;
      align-items: baseline;
    `;
export const RestaurantPageInfoLeftPanelReviewGroupsDiv=styled.div`
      padding:20px 20px 20px 20px;
      display: flex;
      flex-direction: column;
      row-gap: 10px;
      column-gap: 10px;
      flex-wrap: wrap;
    `;