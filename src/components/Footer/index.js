import React from 'react'
import {
    FooterContainer,
    FooterWrapper,
    FooterLinkWrapper,
    FooterLinkItemsWrap,
    FooterTitle,
    FooterItems,
    FooterBottom,
    FooterBOTWrapper,
    FooterLogo,
    FooterCopy,
    FooterIcons,
    FooterIcon
} from '../Footer/FooterElements'
import {
    FaFacebook,
    FaInstagram,
    FaTwitter
} from 'react-icons/fa';

const Footer = () => {
    return (
       <FooterContainer id="contact">
           <FooterWrapper>
               <FooterLinkWrapper>
                   <FooterLinkItemsWrap>
                       <FooterTitle >About Me</FooterTitle>
                       <FooterItems href="https://github.com/a331998513" target="_blank" rel="noopener noreferrer">Github</FooterItems>
                       <FooterItems >phone</FooterItems>
                       <FooterItems >address</FooterItems>
                       <FooterItems >linkedin</FooterItems>
                   </FooterLinkItemsWrap>
                   <FooterLinkItemsWrap>
                       <FooterTitle>Contact Us</FooterTitle>
                       <FooterItems >Contact</FooterItems>
                       <FooterItems >Support</FooterItems>
                       <FooterItems >Destinations</FooterItems>
                       <FooterItems >Sponsorships</FooterItems>
                   </FooterLinkItemsWrap>
                   <FooterLinkItemsWrap>
                       <FooterTitle>About us</FooterTitle>
                       <FooterItems >How it works</FooterItems>
                       <FooterItems >Testionials</FooterItems>
                       <FooterItems >Careers</FooterItems>
                       <FooterItems >Tutorials</FooterItems>
                   </FooterLinkItemsWrap>
                   <FooterLinkItemsWrap>
                       <FooterTitle>About them</FooterTitle>
                       <FooterItems >How it works</FooterItems>
                       <FooterItems >Testionials</FooterItems>
                       <FooterItems >Careers</FooterItems>
                       <FooterItems >Tutorials</FooterItems>
                   </FooterLinkItemsWrap>
               </FooterLinkWrapper>
               <FooterBottom>
                    <FooterBOTWrapper>
                        <FooterLogo to="home">Jay</FooterLogo>
                        <FooterCopy>Jay &#169; 2021 All rights reserved.</FooterCopy>
                        <FooterIcons> 
                            <FooterIcon href="https://www.Instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagram /></FooterIcon>
                            <FooterIcon href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><FaFacebook /></FooterIcon>
                            <FooterIcon href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer"><FaTwitter /></FooterIcon>
                        </FooterIcons>
                    </FooterBOTWrapper>
               </FooterBottom>
           </FooterWrapper>
       </FooterContainer>
    )
}

export default Footer
