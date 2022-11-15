import React from 'react'
import { useState } from 'react';
import  { ModalProvider } from "styled-react-modal";
import { useNavigate } from 'react-router-dom';
import { Statement, StyledModal, FadingBackground, 
Sentence, Reference } from './Mission.styles';

const MissionModal = () => {  

    const [isOpen, setIsOpen] = useState(true);
    const navigate = useNavigate();

    setTimeout(() => navigate('/about'), 8000);

    const handleModal = () => {
      setIsOpen(!isOpen);
      navigate('/about');
    }

    return (
            <ModalProvider backgroundComponent={FadingBackground}>
                <StyledModal
                        isOpen={isOpen}
                        onBackgroundClick={handleModal}
                        allowScroll = {false}
                        onClick={handleModal}
                        >
                        <Statement>
                          <Sentence>
                            <span>'We</span>
                            <span>are</span>
                            <span> living </span>
                            <span>in</span>
                            <span>an</span>
                            <span>era</span>
                            <span>of</span>
                            <span>barbed</span>
                            <span>wire</span>
                            <span>and</span>
                            <span>walls...</span>
                          </Sentence>
                          <Sentence>
                            <span>please</span>
                            <span>let</span>
                            <span>us</span>
                            <span>stop</span>
                            <span>this</span>
                            <span>shipwreck</span>
                            <span>of</span>
                            <span>civilization!'</span>
                          </Sentence>
                          <Reference>
                          <span>Pope Francis while visiting camp for refugees in Moria, on the Greek island of Lesvos</span>
                          </Reference>
                        </Statement>
                        {/* <Statement>'We are living in the era of barbed wire and walls… please let us stop this shipwreck of civilization!'</Statement> */}
                        {/* 'We are living in the era of barbed wire and walls… please let us stop this shipwreck of civilization! */}
                        { /*  <p>Pope Francis when visiting camp for refugees in Moria, on the Greek island of Lesvos  </p> */ }
                </StyledModal>
            </ModalProvider>
    )
}

export default MissionModal