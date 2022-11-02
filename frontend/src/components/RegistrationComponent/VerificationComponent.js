
import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom';
import line from "../../assets/line.png"
import {
    BodyForm,
    TitleDiv,
    FinishButtonButton,
    InputItemGridDiv,
    InputItemField
} from './RegistrationComponent.styledcomponent';


function VerificationComponent() {

    // // Logic
    
        // creating local states to control the input fields
        const [email, setEmail] = useState("")
        const [username, setUsername] = useState("")
        const [code, setCode] = useState("")
        const [password, setPassword] = useState("")
        const [password_rep, setPasswordRep] = useState("")
        const [location, setLocation] = useState("")
        const [token, setToken] = useState("")
    
        // handle inputs
        const handleEmailChange = (e) => {
            setEmail(e.target.value)
        }
        const handleCodeChange = (e) => {
            setCode(e.target.value)
        }
        const handlePasswordChange = (e) => {
            setPassword(e.target.value)
        }
        const handleLocationChange = (e) => {
            setLocation(e.target.value)
        }
        const handleUsernameChange = (e) => {
            setUsername(e.target.value)
        }
        const handlePasswordRepChange = (e) => {
            setPasswordRep(e.target.value)
        }
        
    
        // Handle Submit
        const handleSubmit = (e) => {
            e.preventDefault()
            const url = "https://team-2-luna-project.propulsion-learn.ch/backend/api/auth/registration/validation"
    
            const jsBody = {
                "email": email,
                "username": username,
                "code": code,
                "password": password,
                "password_repeat": password,
                "location": location,



            }
    
            const config = {
                method: "POST",
                headers: new Headers({
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${JSON.parse(localStorage.getItem("auth")).lunaToken}`
                }),
                body: JSON.stringify(jsBody)
            }
    
            fetch(url, config)
            .then((response) => {
                if (response.status === 200) {
                    console.log("fetch worked")
                    const json = response.json();
                    return json
                }
                else {
                    console.log(response.json())
                }
            })
            .then(data => { setToken(data.registration)
                console.log(token)});
        }
    
    
    return (
        <BodyForm onSubmit={handleSubmit}>

            <TitleDiv>
                <h3>VERIFICATION</h3>
                <img src={ line } width={"100px"} height={"4px"} alt=""/>                    
            </TitleDiv>

            <InputItemGridDiv>
                <InputItemField value={email} placeholder="Email address" onChange={handleEmailChange}></InputItemField>
                <InputItemField value={code} placeholder="Validation code" onChange={handleCodeChange}></InputItemField>
                <InputItemField value={location} placeholder="Location" onChange={handleLocationChange}></InputItemField>
                <InputItemField value={password} placeholder="Password" onChange={handlePasswordChange}></InputItemField>
                <InputItemField value={username} placeholder="Username" onChange={handleUsernameChange}></InputItemField>
                <InputItemField value={password} placeholder="Password repeat" onChange={handlePasswordRepChange}></InputItemField>
            </InputItemGridDiv>

            <FinishButtonButton type="submit">Finish registration</FinishButtonButton>
        </BodyForm>
    )
    
}
    
    export default VerificationComponent
    