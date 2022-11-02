import React from 'react'
import styled from 'styled-components';
import FacebookIcon from '../../assets/facebook.svg'
import GoogleIcon from '../../assets/googleplus.svg'
import TwitterIcon from '../../assets/twitter.svg'
import InstagramIcon from '../../assets/instagram.svg'
import {Link} from 'react-router-dom'

const Footer = () => {
    const FooterLinks = styled.div `
      padding: 0px 25px 0px 25px;
      display:flex;
      height:60px;
      justify-content:space-between;
      border-bottom:1px solid #ebebeb;

    `
    const FooterContainer = styled.div `
      font-size: 0.9rem;
      height:91px;
      display:flex;
      flex-direction:column;
      justify-content:space-between;
    `
    const InfoLinks = styled.div`
      padding:0px 25px;
      width:50%;
      height:100%;
      display:flex;
      justify-content:space-between;
      align-items:center;

    a {
        max-width:85px;
        height:100%;
        padding: 0px 10px;
        text-decoration:none;
        color:grey;
        display:flex;
        align-items:center;
    }
    `
    const SocialLinks= styled.div`
    max-width:30%;
    display:flex;
    justify-content:space-between;
    `
    const SocialIcons=styled.img`
    width:40px;
    padding:12px 3px;

    `
    const Signature=styled.p`
    padding:0px 35px;
    display:flex;
    align-items:center;
    color: grey;
    font-size:12px;
    `

return (
    <div>
        <FooterContainer>
            <FooterLinks>
                <InfoLinks>
                    <Link to='/about-us'>About Us</Link>
                    <Link to='/press'>Press</Link>
                    <Link to='/blog'>Blog</Link>
                    <Link to='/ios'>IOS</Link>
                    <Link to='/android'>Android</Link>

                </InfoLinks>
                <SocialLinks >
                    <SocialIcons src={FacebookIcon} alt='facebook' />
                    <SocialIcons src={TwitterIcon} alt='twitter' />
                    <SocialIcons src={GoogleIcon} alt='google' />
                    <SocialIcons src={InstagramIcon} alt='instagram' />
                </SocialLinks>
            </FooterLinks>
            <Signature>&copy; Copyright Luna 2018</Signature>
        </FooterContainer>
   
    </div>
  )
}

export default Footer