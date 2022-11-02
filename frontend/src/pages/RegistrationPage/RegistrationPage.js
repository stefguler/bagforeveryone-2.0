import '../../App.css';
import React, { useState } from "react";
// import styled components
import { EntirePageDiv } from "../AccessPage/accespage.styledcomponent";
// import react components
import Navbar from "../../components/Navbar/Navbar";
import Footer from '../../components/footer/Footer';
import RegistrationComponent from '../../components/RegistrationComponent/RegistrationComponent';
import RegistrationThanksComponent from '../../components/RegistrationComponent/RegistrationThanksComponent';
import VerificationComponent from '../../components/RegistrationComponent/VerificationComponent';

function RegistrationPage() {

    const [active, setActive] = useState("")

    return<>
        <EntirePageDiv>
            <Navbar/>
            <RegistrationComponent/>
            <Footer/>
        </EntirePageDiv>
    </>

}
export default RegistrationPage

