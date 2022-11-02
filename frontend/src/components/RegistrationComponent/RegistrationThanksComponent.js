import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom';
import line from "../../assets/line.png"
import {
    BodyForm,
    InputItemDiv,
    TitleDiv,
    Text
} from './RegistrationComponent.styledcomponent';


function RegistrationThanksComponent() {

    // // // Logic
    //     const navigate = useNavigate()
    
    //     // creating local states to control the input fields
    //     const [email, setEmail] = useState("")
    //     const [token, setToken] = useState("")
    
    //     // handle inputs
    //     const handleEmailChange = (e) => {
    //         setEmail(e.target.value)
    //     }
        
    
    //     // Handle Submit
    //     const handleSubmit = (e) => {
    //         e.preventDefault()
    //         const url = "https://team-2-luna-project.propulsion-learn.ch/backend/api/auth/token/"
    //         const tokenFromLs = localStorage.getItem("auth")
    //         const tokenJsObject = JSON.parse(tokenFromLs)
    
    //         const jsBody = {
    //             "email": email,
    //         }
    
    //         const config = {
    //             method: "POST",
    //             headers: new Headers({
    //                 "Content-Type": "application/json",
    //             }),
    //             body: JSON.stringify(jsBody)
    //         }
    
    //         fetch(url, config)
    //         .then((response) => {
    //             if (response.status === 200) {
    //                 console.log("fetch worked")
    //                 const json = response.json();
    //                 return json
    //             }
    //             else {
    //                 console.log(response.json())
    //             }
    //         })
    //         .then(data => { setToken(data.access)
    //             console.log(token)});
    //     }
    
    //     useEffect(() => {
    //         const jsObject = {
    //             lunaToken: token
    //         } 
    //         if (token) {
    //             localStorage.setItem("auth", JSON.stringify(jsObject));
    //             console.log("the token was stored to local storage");
    //             navigate("/")
    //         }
    //       }, [token]);
    
    return (
        <BodyForm /* onSubmit={handleSubmit} */ >

            <TitleDiv>
                <h3>REGISTRATION</h3>
                <img src={ line } width={"100px"} height={"4px"} alt=""/>                    
            </TitleDiv>

            <InputItemDiv>
                <Text>Thanks for your registration.<br />
                    Our hard working monkeys are preparing a digital<br />
                    message called E-Mail that will be sent to you soon.<br /> 
                    Since monkeys aren't good in writing the message could<br /> 
                    end up in your junk folder. Our appologies for any<br /> 
                    inconvenience.</Text>
            </InputItemDiv>

        
        </BodyForm>
    )
    
}
    
    export default RegistrationThanksComponent