import styled from 'styled-components';

export const BodyDiv = styled.div`
    height: 110vh;
    background-color: #F2F2F2;
`;
export const ReviewsGridDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin-left: 15vh;
    margin-right: 15vh;
     > p {
         height: 400px;
     }
`;