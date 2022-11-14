import React from 'react'
import styled from "styled-components";
import { useState } from 'react';
import Modal, { ModalProvider, BaseModalBackground } from "styled-react-modal";


const StyledModal = Modal.styled`
  width: 70vw;
  height: 50vh;
  display: flex;
  flex-direction: collumn;
  justify-content: flex-start;
  align-items: left;
  color: #DABC39;
  background-color: rgba(255, 255, 255, 0.0);
  transition : all 0.3s ease-in-out;
  font-family: 'Montserrat', sans-serif;
  
  h3 {
    font-size: 50px;
}
    p {
     font-size: 14px;
    }

    @media only screen and (max-width: 450px) {

        h3 { 
            font-size: 30px;
            width: 250px;
        }

        p {
            font-size: 18px;
           }
    }      
`;


const MissionModal = () => {

    const [isOpen, setIsOpen] = useState(true)

    function closeModal(e) {
      setIsOpen(!isOpen)
    }

    return (
            <ModalProvider backgroundComponent={FadingBackground}>
                <StyledModal
                        isOpen={isOpen}
                        onBackgroundClick={closeModal}
                        allowScroll = {false}
                        onClick={closeModal}
                        >
                        <h3>'We are living in the era of barbed wire and walls…please let us stop this shipwreck of civilization!'</h3>
                        { /*  <p>Pope Francis when visiting camp for refugees in Moria, on the Greek island of Lesvos  </p> */ }
                </StyledModal>
            </ModalProvider>
    )
}

const FadingBackground = styled(BaseModalBackground)`
  background-color: rgba(255, 255, 255, 0.92);
`; 

export default MissionModal