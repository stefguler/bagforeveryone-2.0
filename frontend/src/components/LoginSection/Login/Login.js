import { useState } from 'react';

import {
    StyledButton,
    StyledInput,
    StyledLoginSectionContainer,
    StyledText,
    ErrorContainer
} from '../LoginSection.styled';

import {
    StyledLoginContainer
} from './Login.styled'

import {
    NavLink
} from 'react-router-dom';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const onSubmit = (args) => {
        args.preventDefault();
    
        if (email.length < 1) {
            setError('Please enter your email.');
            return;
        }
        if (password.length < 1) {
            setError('Please enter your password.');
            return;
        }     
        setError('');
    }

    return (
        <StyledLoginSectionContainer>
            <StyledLoginContainer onSubmit={onSubmit}>
                <StyledInput type="email" placeholder="Email" value={email} onChange={(args) => setEmail(args.target.value)}/>
                <StyledInput type="password" placeholder="Password" value={password} onChange={(args) => setPassword(args.target.value)} />
                <StyledButton  type='submit'>LOG IN</StyledButton>
                
                <StyledText>
                    Not signed up yet? <NavLink to="/register">Sign up</NavLink>
                </StyledText>
                {
                    error.length > 0 &&
                    <ErrorContainer>
                        {error}
                    </ErrorContainer>
                }
            </StyledLoginContainer>
        </StyledLoginSectionContainer>
    )
}

export default Login;