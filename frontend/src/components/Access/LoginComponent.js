import '../../App.css';
import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom';
// Image import
import line from "../../assets/line.png"
// Styled Component imports
import {
    BodyForm,
    InputItemDiv,
    InputItemInputField,
    SubmitButtonButton,
    TitleDiv,
} from './login.styledcomponent';


function LoginComponent() {

// Logic
    const navigate = useNavigate()

    // creating local states to control the input fields
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [token, setToken] = useState("")

    // handle inputs
    const handleUsernameChange = (e) => {
        setUsername(e.target.value)
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    // Handle Submit
    const handleSubmit = (e) => {
        e.preventDefault()
        const url = "https://team-2-luna-project.propulsion-learn.ch/backend/api/auth/token/"
        const tokenFromLs = localStorage.getItem("auth")
        const tokenJsObject = JSON.parse(tokenFromLs)

        const jsBody = {
            "username": username,
            "password": password,
        }

        const config = {
            method: "POST",
            headers: new Headers({
                "Content-Type": "application/json",
            }),
            body: JSON.stringify(jsBody)
        }

        fetch(url, config)
        .then((response) => {
            console.log(response)
            if (response.status === 200) {
                console.log("fetch worked")
                const json = response.json();
                return json
            }
            else {
                console.log(response.json())
            }
        })
        .then(data => { setToken(data.access)
            console.log(token)});
    }

    useEffect(() => {
        const jsObject = {
            lunaToken: token
        } 
        if (token) {
            localStorage.setItem("auth", JSON.stringify(jsObject));
            console.log("the token was stored to local storage");
            navigate("/")
        }
      }, [token]);

  return (
    <BodyForm onSubmit={handleSubmit}>
        <TitleDiv>
            <h3>LOGIN</h3>
            <img src={ line } width={"100px"} height={"4px"}/>                    
        </TitleDiv>
        <InputItemDiv>
            <InputItemInputField value={username} onChange={handleUsernameChange}></InputItemInputField>
            <InputItemInputField type={"password"} value={password} onChange={handlePasswordChange}></InputItemInputField>
        </InputItemDiv>
            <SubmitButtonButton type="submit">SUBMIT</SubmitButtonButton>
    </BodyForm>
  );
}

export default LoginComponent
