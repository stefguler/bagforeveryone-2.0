import styled from "styled-components";

export const PageSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
`;

export const StickyCartContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 2rem;
  bottom: 5rem;
  width: 10rem;
  height: 7rem;
  align-self: flex-end;
  cursor: pointer;
  
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #DABC39;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    color: black;
  }

  @media screen and (max-width: 1400px)  {
    right: 0;
    top: 5rem;
    position: sticky;
    flex-direction: column;
    gap: 1rem;
    height: 10rem;

    :hover {
      width: 8rem;
     }
    }
`

export const SidebarHeader = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
   
    span {
      padding-right: 5rem;
      font-size: 24px;
    }

`
