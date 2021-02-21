import React from 'react';
import logo from '../../videos/searching.svg';
import { FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa';
import { 
    FooterContainer, 
    FooterWrap, 
    FooterLinksContainer, 
    FooterLinksWrapper, 
    FooterLinkItems, 
    FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink} from './FootersectionElements';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLink >About Us</FooterLink>
                            <hr style={{
                                width: "100%",
                                color: 'white'
                            }}/>                            
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLink  >Contact Us</FooterLink> 
                            <hr style={{
                                width: "100%",
                                color: 'white'
                            }}/> 
                                    
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLink >Terms of Service</FooterLink>
                            <hr style={{
                                width: "100%",
                                color: 'white'
                            }}/>           
                        </FooterLinkItems>
                    
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/'>
                            <img src={logo} alt="Footer Logo" style={{
                                width: "150px",
                                height: "80px",
                                borderRadius: "10px"}}/>
                        </SocialLogo>
                        <WebsiteRights>PhotoLab Market © {new Date().getFullYear()}
                        All rights reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank" arial-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" arial-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" arial-label="Twitter">
                                <FaTwitter />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
