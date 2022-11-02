import {React, useEffect, useState} from "react";
// import styled component
import {
    HomepageDiv,
    HomepageBannerContainerDiv,
    HomepageBannerSearchbarButton,
    HomepageBannerSearchbarContainerDiv,
    HomepageBannerSearchbarInputField,
    HomepageBody,
    HomepageHighligherLine,
    RestaurantCardsContainerDiv
} from "./homepage.styledcomponent";

// import react components
import Navbar from "../../components/Navbar/Navbar"
import RestaurantCard from "../../components/RestaurantCard/RestaurantCard";
import Footer from "../../components/footer/Footer"
import {useNavigate, useParams} from "react-router-dom";
import {makeConfigNoAuth} from "../../axios";
import styled from "styled-components";

function Homepage() {
    const [currentRestaurantList, setCurrentRestaurantList]=useState(undefined)
    const fetchRestaurant =()=>{
        console.log("home page trying to fetch")
        fetch("https://team-2-luna-project.propulsion-learn.ch/backend/api/home/",
            makeConfigNoAuth("GET"))
            .then(response=>response.json())
            .then(data=>{
                console.log("set current page res")
                setCurrentRestaurantList(data)
                console.log(data[0].image)
            })
            .catch(error=>
                console.log(error)
            )
    }

    useEffect(()=>{
        fetchRestaurant()
    },[])

    return<HomepageDiv>
        <Navbar/>
        <HomepageBody>
            <HomepageBannerContainerDiv>
                <HomepageBannerSearchbarContainerDiv>
                    <HomepageBannerSearchbarInputField type="text" placeholder=" Search..."/>
                    <HomepageBannerSearchbarButton>Search</HomepageBannerSearchbarButton>
                </HomepageBannerSearchbarContainerDiv>
            </HomepageBannerContainerDiv>

            <h4> BEST RATED RESTAURANTS</h4>
            <HomepageHighligherLine/>

            <RestaurantCardsContainerDiv>
                {currentRestaurantList?currentRestaurantList.map(res=><RestaurantCard res={res} ></RestaurantCard>):<div></div>}
            </RestaurantCardsContainerDiv>
        </HomepageBody>
        <Footer/>
    </HomepageDiv>



}
export default Homepage