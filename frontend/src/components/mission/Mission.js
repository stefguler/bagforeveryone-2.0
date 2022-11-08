import React from 'react'
import styled from "styled-components";
import { useState } from 'react';
import Modal, { ModalProvider, BaseModalBackground } from "styled-react-modal";


const StyledModal = Modal.styled`
  width: 20rem;
  height: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  opacity: ${(props) => props.opacity};
  transition : all 0.3s ease-in-out;`;

const MissionModal = () => {

    const [isOpen, setIsOpen] = useState(true)

    function closeModal(e) {
      setIsOpen(!isOpen)
    }

    return (
            <ModalProvider  onClick={closeModal} backgroundComponent={FadingBackground}>
                <StyledModal
                        isOpen={isOpen}
                        onBackgroundClick={closeModal}
                        allowScroll = {false}
                        style={{
                            overlay: {
                            position: 'fixed',
                            zIndex: 5,
                            top: 0,
                            left: 0,
                            width: '100vw',
                            height: '100vh',
                            background: 'rgba(255, 255, 255, 0.75)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            },

                            content: {
                            background: 'white',
                            width: '45rem',
                            maxWidth: 'calc(100vw - 2rem)',
                            maxHeight: 'calc(100vh - 2rem)',
                            overflowY: 'auto',
                            position: 'relative',
                            border: '1px solid #ccc',
                            borderRadius: '0.3rem',
                            }
                        }}>
                        <h1>‘We are living in the era of barbed wire and walls…please let us stop this shipwreck of civilization!’</h1>
                        <p>Pope Francis when visiting camp for refugees in Moria, on the Greek island of Lesvos  </p>
                </StyledModal>
            </ModalProvider>
    )
}

const FadingBackground = styled(BaseModalBackground)`
  transition: all 0.3s ease-in-out;
`;

export default MissionModal