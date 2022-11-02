import styled from "styled-components";

export const ReviewSection = styled.section`
  background-color: #f2f2f2;
  height: 85vh;
`;
export const ReviewContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 8vh;
`;
export const Button = styled.button`
  background-color: #e47d31;
  border: 0;
  border-radius: 28px;
  width: 200px;
  height: 57px;
  margin-top: 30px;
  font-size: 18px;
`;
export const Textarea = styled.textarea`
  font-size: 20px;
  padding: 20px 20px 10px 10px;
  border: 1px solid #bbb7b7;
`;
export const RatingDiv = styled.div`
    display: flex;
    color: rgba(126, 126, 126, 1);
    height: 8vh;
    margin-bottom: 20px;
        > p {
            margin-top: 20px;
            margin-left: 12px;
            font-size: 18px;
        }
`;
export const IdInput = styled.input`
  font-size: 20px;
  padding: 20px 20px 10px 10px;
  border: 1px solid #bbb7b7;
  margin-top: 20px;
`;