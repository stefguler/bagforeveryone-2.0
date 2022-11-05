import {
    StyledButton,
    StyledInput,
    StyledLoginSectionContainer,
    StyledText
} from '../LoginSection.styled';

import {
    StyledLoginContainer
} from './Login.styled'

import {
    NavLink
} from 'react-router-dom';

const Login = () => {
    return (
        <StyledLoginSectionContainer>
            <StyledLoginContainer>
                <StyledInput type="email" placeholder="Email" />
                <StyledInput type="password" placeholder="Password" />
                <StyledButton>LOG IN</StyledButton>
                <StyledText>
                    Not signed up yet? <NavLink to="/register">Sign up</NavLink>
                </StyledText>
            </StyledLoginContainer>
        </StyledLoginSectionContainer>
    )
}

export default Login;