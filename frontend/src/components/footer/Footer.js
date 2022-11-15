import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
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

const Footer = () => {

    const [contactIsOpen, setContactIsOpen] = useState(false)
    const [storesIsOpen, setStoresIsOpen] = useState(false)

    function toggleContact(e) {
        setContactIsOpen(!contactIsOpen);
      }

      function openStores(e) {
        setStoresIsOpen(!storesIsOpen);
      }

      const navigate = useNavigate();

      const handleNavigateTo = (destination) => {
        navigate(`/${destination}`)
      }
    

    return (
        <> 
        <ModalProvider backgroundComponent={FadingBackground}>
            <FooterWrapperDiv>
            <div id="fb-root"></div>
<script async defer crossOrigin="anonymous" src="https://connect.facebook.net/de_DE/sdk.js#xfbml=1&version=v15.0" nonce="gi0i2cN5"></script>
                <TabsContainerDiv>
                    <TabsDiv>
                    <p onClick={() => handleNavigateTo("team")}>Team</p>
                    </TabsDiv>
                    <TabsDiv>
                        <p onClick={openStores}>Find Us</p>
                        <StyledStoreModal
                            isOpen={storesIsOpen}
                            onBackgroundClick={openStores}
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
                        <p onClick={toggleContact}>Contact Us</p>
                        <StyledContactModal
                            isOpen={contactIsOpen}
                            onBackgroundClick={toggleContact}
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
                        <p>Follow Us</p>
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
                        <p>Share Us</p>
                        <div className='social'>
                        <a href="https://www.instagram.com">  {  /* how do i share page on social media? */ }
                            <SlSocialInstagram />     
                        </a>
                        <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fbag-for-everyone.propulsion-learn.ch%2F&amp;src=sdkpreparse" className="fb-xfbml-parse-ignore">
                            <SlSocialFacebook />    
                        </a>
                        <a target="_blank" href="https://twitter.com/intent/tweet?url=https://bag-for-everyone.propulsion-learn.ch&text=Check%20out%20this%20website%20and%20do%20some%20good%20by%20buying%20something%20or%20making%20a%20donation..!">
                            <SlSocialTwitter />    
                        </a>
                        <a target="_blank" href="whatsapp://send?text=https://bag-for-everyone.propulsion-learn.ch Check out this page" data-action="share/whatsapp/share">
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
  height: 60vh;
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
    margin-top: 5px;
  }
  
  h3 {
    font-size: 20px;
    color: #DABC39;
    margin-bottom: 0;
    margin-top: 5px;
  }

    p {
     font-size: 14px;
     margin-top: 0;
     
     color: #000000;
    }

    @media only screen and (max-width: 900px) {
        height: 55vh;
        width: 70vw;
        margin-top: 5vh;
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
  height: 45vh;
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

    @media only screen and (max-width: 900px) {
        height: 30vh;
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