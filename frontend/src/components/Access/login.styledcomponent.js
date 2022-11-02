import styled from 'styled-components';
    
export const BodyForm = styled.form`
    height: 90vh;
    background-color: #F2F2F2;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const TitleDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: rgba(76, 76, 76, 1);
    font-size: 24;
        > h3 {
            margin-top: 50px;
            font-size: 24px;
        }
        > img {
            margin-top: 16px;
            margin-bottom: 40px;
        }
`;
export const InputItemDiv = styled.div`
    top: 4.44%;
    display: flex;
    flex-direction: column;
    margin-top: 5vh;
`;
export const InputItemInputField = styled.input`
    border-radius: 3px;
    border: 1px solid #EBEBEB;
    width: 340px;
    height: 52px;
    font-size: 16px;
    margin-top: 20px;
`;
export const SubmitButtonButton = styled.button`
    background-color: light-blue;
    height: 57px;
    width: 200px;
    background-color: rgba(228, 125, 49, 1);
    color: white;
    font-size: 20px;
    border-radius: 28px;
    line-height: 23px;
    border-style: none;
    margin-top: 6vh;
`;