import React from 'react'


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
               </FooterLinkWrapper>
               <FOoterBottom></FOoterBottom>
           </FooterWrapper>
       </FooterContainer>
    )
}

export default Footer
