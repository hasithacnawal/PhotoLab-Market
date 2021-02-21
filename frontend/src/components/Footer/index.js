import React from 'react';
import logo from '../../videos/searching.svg';


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
                
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer