import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setRefreshToken, setAccessToken } from '../../../redux/slices/Auth';

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
    NavLink,
    useNavigate
} from 'react-router-dom';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const dispatch = useDispatch();
    const authSlice = useSelector((state) => state.auth)
    const navigate = useNavigate()

    useEffect(() => {
        if (authSlice.accessToken && authSlice.accessToken.length > 0) {
            navigate('/shop')
        }
    }, [authSlice.accessToken])

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

        fetch('https://bag-for-everyone.propulsion-learn.ch/backend/api/auth/token/', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email, 
                password: password
            })
          })
          .then((response) => {
            return response.json();
          })
          .then((json) => {
            if (json.detail) {
                setError(json.detail);
                return;
            }
            dispatch(setAccessToken(json.access));
            dispatch(setRefreshToken(json.refresh));
          });    
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