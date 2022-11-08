import {
    StyledLoginSectionContainer,
    StyledText,

} from '../LoginSection.styled';

import {
    StyledVerifiedContainer
} from './Verified.styled';

const Verified = () => {

    return (
        <StyledLoginSectionContainer>
            <StyledVerifiedContainer >
                <StyledText >
                    Your email address has been successfully verified!
                </StyledText>
                <StyledText>
                Head back to the log-in page in order to access full potential of our page.
                </StyledText>

            </StyledVerifiedContainer>
        </StyledLoginSectionContainer>
    )
}

export default Verified;