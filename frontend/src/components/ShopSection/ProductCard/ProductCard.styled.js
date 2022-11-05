import styled from "styled-components";

export const CardContainer = styled.div`
  margin-top: 4rem;
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  cursor: pointer;

  :hover span {
    color: #dabc39;
  }
`;

export const AvatarContainer = styled.div`
  position: relative;

  .preview {
    max-width: 500px;
  }

  h3 {
    opacity: 0;
    color: white;
    text-shadow: 2px 2px 2px black;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 1em;
  }
  h3:hover {
    opacity: 1;
  }

  img {
    width: 500px;
  }
`;


export const Title = styled.span`
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
  font-size: 36px;
`;

export const Price = styled.p`
  text-align: center;
  margin: 0;
  font-size: 28px;
`;
