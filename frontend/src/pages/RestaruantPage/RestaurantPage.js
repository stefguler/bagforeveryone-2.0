// import packages
import React, {useState, useEffect} from "react";
import StarsRating from "stars-rating";
import {useParams} from "react-router-dom";
import styled from "styled-components";
import "./button.styles.css"
// import react component
import DetailedReviewCard from "../../components/DetailedReviewCard/DetailedReviewCard";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/footer/Footer";

// import styled component
import {
    BannerContainerDiv,
    BannerContainerResInfoDiv,
    BannerContainerResNameDiv,
    BannerContainerResTypeDiv,
    GoogleMapContactInfoContainerDiv,
    GoogleMapContactInfoEntryContainerDiv,
    GoogleMapInfoContainerDiv, IconTextWrapperDiv,
    PageContainerDiv,
    RestaurantPageBody,
    RestaurantPageInfoDiv,
    RestaurantPageInfoLeftPanelDiv,
    RestaurantPageInfoLeftPanelReviewGroupsDiv,
    RestaurantPageInfoLeftPanelSearchbarButton,
    RestaurantPageInfoLeftPanelSearchBarDiv,
    RestaurantPageInfoLeftPanelSearchBarInputField, RestaurantPageInfoRightPanelDiv,
    StarAndNumberContainerDic
} from "./restaurantPage.styledcomponent";
import {makeConfig, makeConfigNoAuth, makeConfigSendReview} from "../../axios";

function RestaurantPage(){
    const restaurantID = useParams().restaurantID
    const [currentRestaurantStatus, setCurrentRestaurantStatus]=useState(undefined)
    const [currentRestaurantReview, setCurrentRestaurantReviewStatus]=useState(undefined)
    const [activeReview,setActiveReview]=useState("")
    const updateReview=(event)=>{
        setActiveReview(event.target.value)
    }
    const submitReview=(event)=>{
        const fd =new FormData()
        fd.append("text_content",activeReview)
        fetch("https://team-2-luna-project.propulsion-learn.ch/backend/api/reviews/new/"+restaurantID+"/",
            makeConfigSendReview("POST",fd))
            .then(response=>response.json())
            .then(data=>console.log(data))
            .catch(error=>error.log(error))
    }
    const fetchRestaurant =()=>{
        fetch("https://team-2-luna-project.propulsion-learn.ch/backend/api/restaurants/"+restaurantID,
            makeConfigNoAuth("GET"))
            .then(response=>response.json())
            .then(data=>{
                console.log("set current page res")
                setCurrentRestaurantStatus(data)
                console.log(data.image)
                reviewLoader(restaurantID)
            }).catch(error=>{
                console.error(error)
                console.log("---eror from restaurant page---")
            }

        )
    }
    const UrlDiv=styled.a`
      /* These are technically the same, but use both */
      overflow-wrap: break-word;
      word-wrap: break-word;

      -ms-word-break: break-all;
      /* This is the dangerous one in WebKit, as it breaks things wherever */
      word-break: break-all;
      /* Instead use this non-standard one: */
      word-break: break-word;

      /* Adds a hyphen where the word breaks, if supported (No Blink) */
      -ms-hyphens: auto;
      -moz-hyphens: auto;
      -webkit-hyphens: auto;
      hyphens: auto;
    `
    const reviewLoader=(id)=>{
        fetch("https://team-2-luna-project.propulsion-learn.ch/backend/api/reviews/restaurant/"+id+"/"
            ,makeConfigNoAuth("GET"))
            .then(response=>response.json())
            .then(data=>{
                console.log("individual res page: get current restaurant reviews")
                console.log(data)
                setCurrentRestaurantReviewStatus(data)
            })
    }
    const pageLoader=()=>{
        if (currentRestaurantStatus){
            return <RestaurantPageBody>
                <BannerContainerDiv url={'"'+currentRestaurantStatus.image+'"'}>
                    <BannerContainerResInfoDiv>
                        <BannerContainerResNameDiv><span>{currentRestaurantStatus.name}</span></BannerContainerResNameDiv>
                        <BannerContainerResTypeDiv>{currentRestaurantStatus.category}</BannerContainerResTypeDiv>
                        <StarAndNumberContainerDic>
                            <StarsRating
                                count={5}
                                value={currentRestaurantStatus.rating_average}
                                size={24}
                                color2={'#ffd700'}
                                half={true}
                                edit={false}
                            />
                            <span> {currentRestaurantStatus.rating_average.toFixed(1)} </span>
                        </StarAndNumberContainerDic>
                    </BannerContainerResInfoDiv>
                    <GoogleMapInfoContainerDiv>
                        <img src={require("../../assets/restaurant_location_map.jpg")}/>
                        <GoogleMapContactInfoContainerDiv>
                            <GoogleMapContactInfoEntryContainerDiv>
                                <i className="fa-solid fa-map-location"></i>
                                <span>{currentRestaurantStatus.street}</span>
                            </GoogleMapContactInfoEntryContainerDiv>
                            <GoogleMapContactInfoEntryContainerDiv>
                                <i className="fa-solid fa-phone"></i>
                                <span>{currentRestaurantStatus.phone}</span>
                            </GoogleMapContactInfoEntryContainerDiv>
                            <GoogleMapContactInfoEntryContainerDiv>
                                <i className="fa-solid fa-laptop"></i>
                                <UrlDiv href={currentRestaurantStatus.website}>{currentRestaurantStatus.website}</UrlDiv>
                            </GoogleMapContactInfoEntryContainerDiv>

                        </GoogleMapContactInfoContainerDiv>

                    </GoogleMapInfoContainerDiv>
                </BannerContainerDiv>

                <RestaurantPageInfoDiv>
                    <RestaurantPageInfoLeftPanelDiv>
                        <RestaurantPageInfoLeftPanelSearchBarDiv>
                            <RestaurantPageInfoLeftPanelSearchBarInputField type="text" placeholder=" Search...">
                            </RestaurantPageInfoLeftPanelSearchBarInputField>

                            <RestaurantPageInfoLeftPanelSearchbarButton>Filter</RestaurantPageInfoLeftPanelSearchbarButton>
                        </RestaurantPageInfoLeftPanelSearchBarDiv>
                        {/*-----------here comes the reviews!!!---------*/}
                        <RestaurantPageInfoLeftPanelReviewGroupsDiv>
                            {currentRestaurantReview?currentRestaurantReview.map(
                                review=><DetailedReviewCard review={review}></DetailedReviewCard>):<div>review not loading correctly</div>}
                        </RestaurantPageInfoLeftPanelReviewGroupsDiv>
                    </RestaurantPageInfoLeftPanelDiv>
                    <RestaurantPageInfoRightPanelDiv>
                        <IconTextWrapperDiv>
                            <i className="fa-regular fa-clock"></i>
                            <span>Monday to Friday 10:00-16:00</span>
                        </IconTextWrapperDiv>
                        <IconTextWrapperDiv>
                            <i className="fa-solid fa-money-bill-1-wave"></i>
                            <span>Price level: $$$</span>
                        </IconTextWrapperDiv>

                        <div className="button_groups">
                            <input type="text" placeholder="I think..." onChange={updateReview}></input>
                            <button className="orange_buttons" onClick={submitReview}>Write A Review</button>
                        </div>
                    </RestaurantPageInfoRightPanelDiv>
                </RestaurantPageInfoDiv>
            </RestaurantPageBody>
        }else {
            return <div/>
        }

    }

    useEffect(()=>{
        fetchRestaurant()

    },[])

    return <PageContainerDiv>
        <Navbar></Navbar>
        {pageLoader()}
        <Footer></Footer>
    </PageContainerDiv>
}

export default RestaurantPage