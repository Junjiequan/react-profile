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
       <FooterContainer>
           <FooterWrapper>
               <FooterLinkWrapper>
                   <FooterLinkItemsWrap>
                       <FooterTitle>About us</FooterTitle>
                       <FooterItems to="/">How it works</FooterItems>
                       <FooterItems to="/">Testionials</FooterItems>
                       <FooterItems to="/">Careers</FooterItems>
                       <FooterItems to="/">Tutorials</FooterItems>
                       <FooterItems to="/">Terms of Service</FooterItems>
                   </FooterLinkItemsWrap>
                   <FooterLinkItemsWrap>
                       <FooterTitle>About us</FooterTitle>
                       <FooterItems to="/">How it works</FooterItems>
                       <FooterItems to="/">Testionials</FooterItems>
                       <FooterItems to="/">Careers</FooterItems>
                       <FooterItems to="/">Tutorials</FooterItems>
                       <FooterItems to="/">Terms of Service</FooterItems>
                   </FooterLinkItemsWrap>
                   <FooterLinkItemsWrap>
                       <FooterTitle>About us</FooterTitle>
                       <FooterItems to="/">How it works</FooterItems>
                       <FooterItems to="/">Testionials</FooterItems>
                       <FooterItems to="/">Careers</FooterItems>
                       <FooterItems to="/">Tutorials</FooterItems>
                       <FooterItems to="/">Terms of Service</FooterItems>
                   </FooterLinkItemsWrap>
                   <FooterLinkItemsWrap>
                       <FooterTitle>About us</FooterTitle>
                       <FooterItems to="/">How it works</FooterItems>
                       <FooterItems to="/">Testionials</FooterItems>
                       <FooterItems to="/">Careers</FooterItems>
                       <FooterItems to="/">Tutorials</FooterItems>
                       <FooterItems to="/">Terms of Service</FooterItems>
                   </FooterLinkItemsWrap>
               </FooterLinkWrapper>
               <FooterBottom>
                    <FooterBOTWrapper>
                        <FooterLogo>Jay</FooterLogo>
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
