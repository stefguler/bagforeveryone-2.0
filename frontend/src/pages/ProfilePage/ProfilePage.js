import '../../App.css';
import { React, useEffect } from "react";
// import styled components
import { EntirePageDiv } from "./profilepage.styledcomponent.js";
// import react components
import Navbar from "../../components/Navbar/Navbar"
import Footer from '../../components/footer/Footer';

function ProfilePage() {

    return<>
        <EntirePageDiv>
            <Navbar/>
            <div>Components</div>
            <Footer/>
        </EntirePageDiv>
    </>

}
export default ProfilePage