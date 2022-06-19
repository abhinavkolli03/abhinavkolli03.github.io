import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const FooterContainer = styled.footer`
    background-color: #101522;
`

export const FooterWrap = styled.div`
    max-height: 500px;

    height: 100%;
    padding: 2px 2px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 0 auto;
`

export const FooterLinksContainer = styled.div`
    display: flex;
    justify-content: center;

    @media screen and (max-width: 820px) {
        padding-top: 32px;
    }
`

export const FooterLinksWrapper = styled.div`
    display: flex;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`

export const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0px;
    text-align: left;
    width: 500px;
    box-sizing: border-box;
    color: #fff;

    @media screen and (max-width: 420px) {
        margin: 0px;
        padding: 0px;
        width: 100%;
    }
`

export const FooterLinkTitle = styled.h2`
    font-size: 15px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-weight: 300;
    margin-top: 30px;
    margin-bottom: 30px;
    display: center;
`

export const SocialLogo = styled(Link)`
    color: #e83b36;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 2rem;
    display: flex;
    align-items: center;
    margin-top: 20px;
    font-weight: bold;
`