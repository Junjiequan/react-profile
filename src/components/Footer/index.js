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
                       <FooterItems href="https://github.com/a331998513" target="_blank">Github</FooterItems>
                       <FooterItems to="/">phone</FooterItems>
                       <FooterItems to="/">address</FooterItems>
                       <FooterItems to="/">linkedin</FooterItems>
                       <FooterItems to="/">Terms of Service</FooterItems>
                   </FooterLinkItemsWrap>
                   <FooterLinkItemsWrap>
                       <FooterTitle>Contact Us</FooterTitle>
                       <FooterItems to="/">Contact</FooterItems>
                       <FooterItems to="/">Support</FooterItems>
                       <FooterItems to="/">Destinations</FooterItems>
                       <FooterItems to="/">Sponsorships</FooterItems>
                   </FooterLinkItemsWrap>
                   <FooterLinkItemsWrap>
                       <FooterTitle>About us</FooterTitle>
                       <FooterItems to="/">How it works</FooterItems>
                       <FooterItems to="/">Testionials</FooterItems>
                       <FooterItems to="/">Careers</FooterItems>
                       <FooterItems to="/">Tutorials</FooterItems>
                   </FooterLinkItemsWrap>
                   <FooterLinkItemsWrap>
                       <FooterTitle>About them</FooterTitle>
                       <FooterItems to="/">How it works</FooterItems>
                       <FooterItems to="/">Testionials</FooterItems>
                       <FooterItems to="/">Careers</FooterItems>
                       <FooterItems to="/">Tutorials</FooterItems>
                   </FooterLinkItemsWrap>
               </FooterLinkWrapper>
               <FooterBottom>
                    <FooterBOTWrapper>
                        <FooterLogo to="home">Jay</FooterLogo>
                        <FooterCopy>Jay &#169; 2020 All rights reserved.</FooterCopy>
                        <FooterIcons> 
                            <FooterIcon href="https://www.Instagram.com/" target="_blank"><FaInstagram /></FooterIcon>
                            <FooterIcon href="https://www.facebook.com/" target="_blank"><FaFacebook /></FooterIcon>
                            <FooterIcon href="https://www.twitter.com/" target="_blank"><FaTwitter /></FooterIcon>
                        </FooterIcons>
                    </FooterBOTWrapper>
               </FooterBottom>
           </FooterWrapper>
       </FooterContainer>
    )
}

export default Footer
