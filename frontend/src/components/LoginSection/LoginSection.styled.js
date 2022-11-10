import styled from "styled-components";

export const StyledInput = styled.input`
font-family: 'Montserrat';
width: 455px;
height: 97px;
box-sizing: border-box;
background-color: #FFFFFF;
border: 3px solid #DABC39;
border-radius: 15px;
font-size: 32px;
padding-left: 42px;

&::placeholder {
    color: #969595;
    font-style: normal;
    font-size: 32px;
    font-weight: 400;
    line-height: 39px;
    
    }

`;

export const StyledButton = styled.button`
font-family: 'Montserrat';
background-color: #DABC39;
border-radius: 15px;
border-color:  #DABC39;
font-style: normal;
color: #000000;
font-size: 32px;
font-weight: 400;
line-height: 39px;
width: 220px;
height: 80px;


`;

export const StyledLoginSectionContainer = styled.div`
    background-color: #FAF5E1;
    height: 100vh;
`;

export const StyledTitle = styled.div`
color: #000000;
font-size: 36px;
font-weight: 500;
line-height: 44px;
`;

export const StyledText = styled.div`
color: #000000;
font-size: 20px;
font-weight: 500;
line-height: 24px;

a {
    color: #000000;
    font-weight: bold;
}
`;

export const ErrorContainer = styled.div`
    color: #979797;
    padding: 24px;
    font-size: 18px;
    font-weight: bold;
`;