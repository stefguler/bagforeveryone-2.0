import '../../App.css';
import {useEffect, useState} from 'react';
// Component import
import CreateRestaurant from '../../components/CreateRestaurantComponent/CreateRestaurantComponent';
// Styled Component imports
import {
    EntirePageDiv,
    SubNavigationDiv,
    NavigationDiv,
    SearchPageContentDiv,
    SearchBarInput
} from './searchpage.styledcomponent';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/footer/Footer';
import CreateReview from '../../components/CreateReviewCard/CreateReview';
import Reviews from '../../components/Reviews/Reviews';
import {makeConfigNoAuth} from "../../axios";
import RestaurantCard from "../../components/RestaurantCard/RestaurantCard";
import SimpleReviewCard from "../../components/SimpleReviewCard/SimpleReviewCard";
import SimpleUserCard from "../../components/SimpleUserCard/SimpleUserCard";

// eslint-disable-next-line react-hooks/rules-of-hooks
function SearchPage() {

    // Conditional rendering of subcomponents
    const [searchField, setSearchField] = useState("");
    const [currentComponent, setCurrentComponent] = useState("REST")
    const [currentContent,setCurrentContent]=useState(undefined)
    const goToRestaurants = (e) => {
        setCurrentComponent("REST")
    }
    const goToReviews = (e) => {
        setCurrentComponent("REVI")
    }
    const goToUsers = (e) => {
        setCurrentComponent("USER")
    }
    const goToCreateReview = (e) => {
        setCurrentComponent("CREA")
    }

    const fetchContent=()=>{
        let url="https://team-2-luna-project.propulsion-learn.ch/backend/api/restaurants"
        if (currentComponent=="REST"){
            url="https://team-2-luna-project.propulsion-learn.ch/backend/api/users/?search="+searchField+"&type=restaurants"
        }else if(currentComponent=="REVI"){
            url="https://team-2-luna-project.propulsion-learn.ch/backend/api/users/?search="+searchField+"&type=reviews"
        }else{
            // Figma page is weird, although it shows user, it is actually comments
            url="https://team-2-luna-project.propulsion-learn.ch/backend/api/users/?search="+searchField+"&type=users"
        }
        console.log("current url is "+ url)
        return fetch(url, makeConfigNoAuth("GET"))
            .then(response=>{
                return response.json()
            })
            .then(data=>{
                console.log(data)
                if (data){
                    setCurrentContent(data)
                }
            })
    }

    const passContentToContainer=()=>{
        console.log("passContentToContainer")
        if (currentContent){
            if (currentComponent=="REST"){
                return currentContent.map(content=><RestaurantCard res={content}></RestaurantCard>)
            }else if(currentComponent=="REVI"){
                return currentContent.map(content=><SimpleReviewCard review={content}></SimpleReviewCard>)
            }else if (currentComponent=="USER"){
                return currentContent.map(content=><SimpleUserCard user_or_review={content}></SimpleUserCard>)
            }else if (currentComponent=="CREA"){
                return currentContent.map(content=><CreateReview user_or_review={content}></CreateReview>)
            }
            
        }

    }

    useEffect(()=>{
        console.log("search page: about to run fetch content again")
        fetchContent()

    },[currentComponent])

  return (
    <div className="App">
        <EntirePageDiv>
            <Navbar/>
            <SearchBarInput onChange={(e) => setSearchField(e.target.value)}/>
            <NavigationDiv>
                <SubNavigationDiv>
                    <h3 onClick={goToRestaurants}>Restaurants</h3>
                </SubNavigationDiv>
                <SubNavigationDiv>
                    <h3 onClick={goToReviews}>Reviews</h3>
                </SubNavigationDiv>
                <SubNavigationDiv>
                    <h3 onClick={goToUsers}>Users</h3>
                </SubNavigationDiv>
                <SubNavigationDiv>
                    <h3 onClick={goToCreateReview}>Create Review</h3>
                </SubNavigationDiv>
            </NavigationDiv>
            {/* Conditional Rendering of Components: */}
            <SearchPageContentDiv>
                {passContentToContainer()}
            </SearchPageContentDiv>


            {/* <CreateRestaurant /> */}
                
            <Footer/>
        </EntirePageDiv>
    </div>
  );
}

export default SearchPage;
