import styled from 'styled-components';

export const EntirePageDiv = styled.div`
    display: flex;
    flex-direction: column;
  
`;
export const NavigationDiv = styled.div`
    display: flex;
    justify-content: center;
    background-color: #F2F2F2;
    margin-top: 6vh;
`;
export const SubNavigationDiv = styled.div`

        > h3 {
            margin-left: 3vh;
            margin-right: 3vh;
            font-size: 20px;
            :hover {
                border-bottom: darkorange solid 2px;
                cursor: pointer;
        }
`;

export const SearchPageContentDiv= styled.div`
  padding: 20px 20px 20px 20px;
  display: flex;
  column-gap: 20px;
  flex-wrap: wrap;
  row-gap: 20px;
  justify-content: center;
       
`;

export const SearchBarInput= styled.input`
  background: beige;
       
`;