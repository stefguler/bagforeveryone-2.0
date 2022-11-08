import { useState } from 'react';

import {
    StyledButton,
    StyledInput,
    StyledLoginSectionContainer,
    StyledTitle,
    ErrorContainer
} from '../LoginSection.styled';

import {
    Link
} from 'react-router-dom';

import {
    StyledRegisterContainer
} from './Register.styled';

const Register = () => {

    const [emailAddress, setEmailAddress] = useState('');
    const [error, setError] = useState('');
    const [showValidation, setShowValidation] = useState(false);

    const onSubmit = (args) => {
        args.preventDefault();

        if (emailAddress.length < 1) {
            setError('Please enter your email.');
            return;
        }
        setError('');
        fetch('https://bag-for-everyone.propulsion-learn.ch/backend/api/auth/registration/', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: emailAddress
            })
          })
          .then((response) => {
            if (!response.ok) {
                setError("An error occurred or this e-mail is already taken");
            } else {
                setError("Success! We have sent you a validation email");    
                setEmailAddress('');
                setShowValidation(true);
            }

        });        
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
                    <ErrorContainer>
                        {
                            error.length > 0 && <span>{error}</span>
                        }
                        <br />
                        <br />
                        {
                            showValidation && <span>Please validate your account <Link to="/validate">here</Link></span>
                        }
                    </ErrorContainer>
            </StyledRegisterContainer>
        </StyledLoginSectionContainer>
    )
}

export default Register;