import React from 'react'
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


const Footer = () => {

    return (
        <> 
            <FooterWrapperDiv>
                <TabsContainerDiv>
                    <TabsDiv>
                        <span>Find Us</span>
                    </TabsDiv>
                    <TabsDiv>
                        <span>Contact Us</span>
                    </TabsDiv>
                    <TabsDiv>
                        <span>Follow Us</span>
                        <div>
                        <a href="https://www.instagram.com/bag.foreveryone/">
                            <SlSocialInstagram />     
                        </a>  
                        <a href="https://m.facebook.com/bagforeveryonelesvos/">
                            <SlSocialFacebook />   
                        </a> 
                        </div>
                    </TabsDiv>
                    <TabsDiv>
                        <span>Share Us</span>
                        <div>
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
        </>
    )
}

export default Footer