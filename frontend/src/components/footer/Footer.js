import React, { useState } from 'react'
import {
    FooterWrapperDiv,
    TabsContainerDiv,
    TabsDiv,
    Signature,
} from './Footer.styles';
import { 
    SlSocialInstagram,
    SlSocialFacebook,
    SlSocialTwitter,
} from "react-icons/sl";
import { SiWhatsapp } from "react-icons/si"
import styled from "styled-components";
import Modal, { ModalProvider, BaseModalBackground } from "styled-react-modal";

{/* problem with displaying modals - both at the same time */}

const Footer = () => {

    const [isOpen, setIsOpen] = useState(false)

    function toggleModal(e) {
        setIsOpen(!isOpen);
      }

    return (
        <> 
        <ModalProvider backgroundComponent={FadingBackground}>
            <FooterWrapperDiv>
                <TabsContainerDiv>
                    <TabsDiv>
                        <p onClick={toggleModal}>Find Us</p>
                        <StyledStoreModal
                        isOpen={isOpen}
                        onBackgroundClick={toggleModal}
                        allowScroll = {false}
                        >
                        <h1>Stores</h1>
                        <p>Our bagforeveryone-Shopperbags also can be discovered, touched and experienced in Shops. We are happy to announce our first cooperation with the shop “Esperanto” in Rapperswill, where our sustainable, fairly produced bags are accesible. Our goal is to support shops with a product, who care for sustainable products and to raise awareness.</p>
                        <h3>Esperanto’s address</h3>
                        <p>Esperanto Rapperswil</p>
                        <p>Tiefenaustrasse</p> 
                        <p>28640 Rapperswil</p>
                        <h3>Is a Shopperbag from the store a donation?</h3>
                        <p>After purchaising a bag, you wont receive a receipt of a donation. But with your bag, you automatically support the project in lesvos and the refugees who crafted the bags. There are no shipping costs, but you support the Shop Owner. As well as refugees in lesvos, we also want to support Shop Owners, who support sustainable and social products. With presenting our the bagforeveryone-Shopperbags they support us to spread the message about the situation in Lesvos.</p>
                </StyledStoreModal>
                    </TabsDiv>
                    <TabsDiv>
                        <p onClick={toggleModal}>Contact Us</p>
                        <StyledContactModal
                        isOpen={isOpen}
                        onBackgroundClick={toggleModal}
                        allowScroll = {false}
                        >
                        <h1>Contact</h1>
                        <p>This project is a cooperation of the two Non-Profit Organizations #EducationEveryone (CH) und Starfish Foundation (GR).</p>
                        <AddressesDiv>
                            <div>
                                <h3>#EducationEveryone</h3>
                                <p>#EducationEveryone</p>
                                <p>c/o Markus Böniger</p>
                                <p>Böndlerstrasse 2</p>
                                <p>8803 Rüschlikon</p>
                                <p>Switzerland</p>
                                <p>info@educationeveryone.org</p>
                            </div>
                            <div>
                                <h3>Starfish Foundation</h3>
                                <p>Starfish Foundation</p>
                                <p>Vournazon 25</p>
                                <p>Mytilene</p>
                                <p>81132</p>
                                <p>Greece</p>
                                <p>starfish@asterias-starfish.org</p>
                            </div>
                            </AddressesDiv>
                </StyledContactModal>
                    </TabsDiv>
                    <TabsDiv>
                        <p>FOLLOW</p>
                        <div className='social'>
                        <a href="https://www.instagram.com/bag.foreveryone/">
                            <SlSocialInstagram />     
                        </a>  
                        <a href="https://m.facebook.com/bagforeveryonelesvos/">
                            <SlSocialFacebook />   
                        </a> 
                        </div>
                    </TabsDiv>
                    <TabsDiv>
                        <p>SHARE</p>
                        <div className='social'>
                        <a href="">  {  /* how do i share page on social media? */ }
                            <SlSocialInstagram />     
                        </a>
                        <a href="">
                            <SlSocialFacebook />    
                        </a>
                        <a href="">
                            <SlSocialTwitter />    
                        </a>
                        <a href="">
                            <SiWhatsapp />   
                        </a>
                         </div>
                    </TabsDiv>
                </TabsContainerDiv>
                <Signature>&copy;bagforeveryone 2022</Signature>
            </FooterWrapperDiv>
            </ModalProvider>
        </>
    )
}

const FadingBackground = styled(BaseModalBackground)`
  background-color: rgba(33, 33, 33, 0.7);
`; 

const StyledStoreModal = Modal.styled`
  width: 60vw;
  height: 55vh;
  display: flex;
  align-items: left;
  flex-direction: column;
  color: #DABC39;
  background: #FFFFFF;
  border-radius: 15px;
  transition : all 0.3s ease-in-out;
  font-family: 'Montserrat', sans-serif;
  padding: 0 20px 0 30px;

  h1 {
    font-size: 30px;
    color:#DABC39;
    margin-bottom: 0;
  }
  
  h3 {
    font-size: 20px;
    color: #DABC39;
    margin-bottom: 0;
  }

    p {
     font-size: 14px;
     margin-top:0;
     color: #000000;
    }

    @media only screen and (max-width: 450px) {
        height: 65vh;
        width: 70vw;
        margin-top: 100px;
        padding: 0 10px 0 15px;
        h1 {
            font-size: 18px;
          }

        h3 { 
            font-size: 16px;
            
        }

        p {
            font-size: 10px;
           }
    }      
`;

const StyledContactModal = Modal.styled`
  width: 40vw;
  height: 40vh;
  display: flex;
  align-items: left;
  flex-direction: column;
  color: #DABC39;
  background: #FFFFFF;
  border-radius: 15px;
  transition : all 0.3s ease-in-out;
  font-family: 'Montserrat', sans-serif;
  padding: 0 20px 0 30px;

  h1 {
    font-size: 30px;
    color:#DABC39;
    margin-bottom: 0;
  }
  
  h3 {
    font-size: 20px;
    color: #DABC39;
    margin-bottom: 0;
  }

    p {
     font-size: 14px;
     margin-top: 0;
     margin-bottom:0;
     color: #000000;
    }

    @media only screen and (max-width: 450px) {
        height: 50vh;
        width: 70vw;
        padding: 0 10px 0 15px;
        h1 {
            font-size: 18px;
          }

        h3 { 
            font-size: 16px;
            
        }

        p {
            font-size: 10px;
           }
    }      
`;

const AddressesDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-right: 20px;

    @media only screen and (max-width: 450px) {
        flex-direction: column;
    }
`;

export default Footer