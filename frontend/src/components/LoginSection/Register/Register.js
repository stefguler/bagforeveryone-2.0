import {
    StyledButton,
    StyledInput,
    StyledLoginSectionContainer,
    StyledTitle
} from '../LoginSection.styled';

import {
    StyledRegisterContainer
} from './Register.styled';

const Register = () => {
    return (
        <StyledLoginSectionContainer>
            <StyledRegisterContainer>
                <StyledTitle className='register-title'>
                    <strong>
                    Step 1:&nbsp; 
                    </strong>
                    Please register with your email address
                    </StyledTitle>
                <StyledInput type="email" placeholder="Email address"/>
                <StyledButton>SIGN UP</StyledButton>
            </StyledRegisterContainer>
        </StyledLoginSectionContainer>
    )
}

export default Register;