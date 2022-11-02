import '../../App.css';
import React from "react";
// import styled components
import { EntirePageDiv } from "./accespage.styledcomponent";
// import react components
import Navbar from "../../components/Navbar/Navbar";
import Footer from '../../components/footer/Footer';
import LoginComponent from '../../components/Access/LoginComponent';

function AcessPage() {

    return<>
        <EntirePageDiv>
            <Navbar/>
            <LoginComponent/>
            <Footer/>
        </EntirePageDiv>
    </>

}
export default AcessPage