import React from 'react'
import Social from '../Social'
import {animateScroll as scroll} from 'react-scroll'
import { FooterContainer, FooterWrap, FooterLinksContainer, 
    FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, SocialLogo } from './FooterElements'


const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <SocialLogo to='/' onClick={toggleHome}>
                                @abhinavkolli
                            </SocialLogo>
                            <Social /> 
                            <FooterLinkTitle>©{new Date().getFullYear()} Abhinav Kolli. All rights reserved.</FooterLinkTitle>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer