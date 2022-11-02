
import { useState, setSuccess } from "react"
import line from "../../assets/line.png"
import {
    BodyForm,
    InputItemDiv,
    InputItemInputField,
    SubmitButtonButton,
    TitleDiv,
} from './RegistrationComponent.styledcomponent';
import RegistrationThanksComponent from './RegistrationThanksComponent';


function RegistrationComponent() {

    // // Logic
    const [email, setEmail] = useState("")
    const [ success, setSuccess] = useState(false)

    // handle inputs
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    // Handle Submit
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(email)
        setSuccess(true)
        const url = "https://team-2-luna-project.propulsion-learn.ch/backend/api/auth/registration/"
        const tokenFromLs = localStorage.getItem("auth")
        const tokenJsObject = JSON.parse(tokenFromLs)


        const jsBody = {
            "email": email,
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
                } else {
                    console.log(response.json())
                }
            })
    }

    return (
        <>
            {success ? ( 
                <RegistrationThanksComponent />
            ) : (

                <BodyForm onSubmit={handleSubmit}>

                    <TitleDiv>
                        <h3>REGISTRATION</h3>
                        <img src={line} width={"100px"} height={"4px"} alt="" />
                    </TitleDiv>

                    <InputItemDiv>
                        <InputItemInputField onChange={handleEmailChange}></InputItemInputField>
                    </InputItemDiv>
                    <SubmitButtonButton type="submit">Register</SubmitButtonButton>
                </BodyForm>
            )}
        </>
    )
}

export default RegistrationComponent
