import styled from "styled-components";
    
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

export const Text = styled.text`
    flex-direction: column;
    display: flex;
    text-align: center;
    align-self: center;
    color: #4C4C4C;
`;

export const FinishButtonButton = styled.button`
    flex-direction: column;
    align-items: center;
    padding-top: 15px;
    background-color: light-blue;
    height: 57px;
    width: 259px;
    background-color: rgba(228, 125, 49, 1);
    color: white;
    font-size: 18px;
    border-radius: 28px;
    line-height: 23px;
    border-style: none;
    margin-top: 3vh;
`;

export const InputItemGridDiv = styled.div`
    display: grid;
    flex-direction: column;
    align-self: center;
    height: 30vh;
    margin-top: 5vh;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 3vw;
`;

export const InputItemField = styled.input`
    border-radius: 3px;
    border: 1px solid #EBEBEB;
    width: 45vh;
    height: 45px;
    font-size: 14px;
    font-weight: bold;
    color: #979797;
    padding-left: 10px;
    ::placeholder,
    ::-webkit-input-placeholder {
        color: #979797;
    }
`;
