import { useState } from 'react';

import {
    StyledButton,
    StyledInput,
    StyledLoginSectionContainer,
    StyledTitle,
    ErrorContainer
} from '../LoginSection.styled';

import {
    StyledRegisterContainer
} from './Register.styled';

const Register = () => {

    const [emailAddress, setEmailAddress] = useState('');
    const [error, setError] = useState('');

    const onSubmit = (args) => {
        args.preventDefault();

        if (emailAddress.length < 1) {
            setError('Please enter your email.');
            return;
        }
        setError('');
    }


    return (
        <StyledLoginSectionContainer>
            <StyledRegisterContainer onSubmit={onSubmit}>
                <StyledTitle className='register-title'>
                    <strong>
                        Step 1:&nbsp;
                    </strong>
                    Please register with your email address
                </StyledTitle>
                <StyledInput type="email" placeholder="Email address" value={emailAddress} onChange={(args) => setEmailAddress(args.target.value)} />
                <StyledButton type='submit'>SIGN UP</StyledButton>
                {
                    error.length > 0 &&
                    <ErrorContainer>
                        {error}
                    </ErrorContainer>
                }
            </StyledRegisterContainer>
        </StyledLoginSectionContainer>
    )
}

export default Register;