import React, {useEffect, useState} from "react";
import styled from "styled-components";

import "./activeStatus.styles.css"
import { useNavigate } from "react-router-dom";

function Navbar() {
    const [activePage,setActivePage]=useState("/")
    const currentURL=window.location.href
    useEffect(()=>{
            console.log("use effect on the navbar triggered")
            if (currentURL.includes("search")){
                console.log("current active page: search")
                setActivePage("Search");
            }else if (currentURL.includes("profile")){
                console.log("current active page: profile")
                setActivePage("Profile");
            }else if (currentURL.includes("createRestaurant")) {
                console.log("current active page: create new res")
                setActivePage("createRestaurant");
            }else{
                console.log("current active page: Home")
                setActivePage("/")
            }

    },[activePage])
    // Styled Components
    const NavbarContainerDiv=styled.div`
      
      display: flex;
      justify-content: space-between;
      height:50px;
      padding:2px 10px 2px 10px;
      font-weight: 400;
    `;
    const NavbarLogoContainerDiv=styled.div`
    
      display: flex;
      justify-content: flex-start;
      >*{
        width: 80px;
      }
    `;
    const NavbarLogoPageTabsDiv=styled.div`
      cursor:pointer;
      height:100%;
      display:flex;
      align-items:center;
      :hover{
        font-weight: bold;
      }
      
      >span {
        display: inline-block;
        vertical-align: middle;
        line-height: normal;
      }
    `;
    const NavbarButtonsContainerDiv=styled.div`
      display: flex;
      justify-content: space-between;
      max-width: 90%;
      min-width: 40%;
      align-items: center;
      align-items: center;
    `;
    const NavbarSignUpButtonGroupsDiv=styled.div`
      display: flex;
      align-content: baseline;
      justify-content: center;
      column-gap: 1px;
      >*{
        background-color:#E47D31;
        cursor:pointer;
        color: white;
        border: none;
        height: 25px;
        width: 75px;
        font-size: 0.7rem;
      }
      & button:first-child{
        border-top-left-radius: 25px;
        border-bottom-left-radius: 25px;
      }
      & button:last-child{
        border-top-right-radius: 25px;
        border-bottom-right-radius: 25px;
      }
    `;

    // Logic

    const navigate = useNavigate()

    const handleGoHome = event => navigate("/")
    const handleGoSearch = event => navigate("/search")
    const handleGoProfile = event => navigate("/profile")

    // Render
    return <NavbarContainerDiv>
        <NavbarLogoContainerDiv>
            <img src={require("../../assets/logo.svg").default}/>
        </NavbarLogoContainerDiv>
        <NavbarButtonsContainerDiv>
            <NavbarLogoPageTabsDiv onClick={()=>navigate("/createRestaurant")} className={activePage=="createRestaurant"?"active":"not-active"}>
                <span>Create Restaurant</span>
            </NavbarLogoPageTabsDiv>
            <NavbarLogoPageTabsDiv onClick={handleGoHome} className={activePage=="/"?"active":"not-active"}>
                <span>Home</span>
            </NavbarLogoPageTabsDiv>
            <NavbarLogoPageTabsDiv onClick={handleGoSearch} className={activePage=="Search"?"active":"not-active"}>
                <span>Search</span>
            </NavbarLogoPageTabsDiv>
            <NavbarLogoPageTabsDiv onClick={handleGoProfile} className={activePage=="Profile"?"active":"not-active"}>
                <span>Profile</span>
            </NavbarLogoPageTabsDiv>
            <NavbarSignUpButtonGroupsDiv>
                <button >SIGNUP</button>
                <button onClick={()=>navigate("/access")}>LOGIN</button>
            </NavbarSignUpButtonGroupsDiv>
        </NavbarButtonsContainerDiv>
    </NavbarContainerDiv>
}

export default Navbar