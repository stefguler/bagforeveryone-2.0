import styled from "styled-components";

export const SimpleUserCardDiv = styled.div`
        width: 50%;
        display: flex;
        flex-direction: column;
        border: 1px solid black;
    `;
export const SimpleUserCardHeaderDiv = styled.div`
        display: flex;
        position: relative;
        border: 1px solid #EBEBEB;

    `;
export const SimpleUserCardHeaderUserDiv = styled.div`
        display: flex;
        flex-direction: column;
        align-items: left;
        margin: 20px 20px 20px 0;

        & p:first-child {
            font-family: Arial, Helvetica, sans-serif;
            font-size: 20px;
            font-weight: bold;
            color: #E47D31;
        }

        & p:last-child {
            font-family: Arial, Helvetica, sans-serif;
            font-size: 14px;
            font-weight: bold;
            color: #4C4C4C; 
        }
    `;
export const SimpleUserCardHeaderAvatarDiv = styled.image`
        display: flex;
        float: left;
    `;

export const StarRatingDiv = styled.div`
    display: flex;
    margin: 20px 30px 20px 5px;
`;

export const DateAndTimeDiv = styled.span`
    display: flex;
    margin: 10px 10px auto auto;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
`;
export const SimpleUserCardBodyDiv = styled.div`
    color: #000000;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    margin: 10px 10px 10px 10px;
`;
export const SimpleUserCardBottomDiv = styled.div`
`;
export const SimpleUserCardReactionsbuttonDiv = styled.div`
    display: flex;
    align-content: baseline;
    justify-content: center;
    float: left;
    column-gap: 1px;
    >*{
    background-color: rgba(145, 145, 145, 0.6);
    cursor: pointer;
    margin: 10px 0 10px 0;
    
    ;
    color: white;
    border: none;
    height: 33px;
    width: 125px;
    font-size: 16px;
    }
    & button:first-child{
    border-top-left-radius: 33px;
    border-bottom-left-radius: 33px;
    margin-left: 10px;
    
    }
    & button:last-child{
    border-top-right-radius: 33px;
    border-bottom-right-radius: 33px;
    }
`;

export const SeeAllCommentsDiv = styled.div`
    color: #E47D31;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    float: right;
    margin: 10px 10px 10px 10px;
`;

export const Comment = styled.div`

`;