import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'
import {Link as LinkS} from 'react-scroll'

export const Nav = styled.div`
    background:#000;
    height: 80px;
    display:flex;
    align-items:center;
    z-index:99;
    margin-top:-50px;
    top:0;
    position:sticky;
    color: #fff;

    @media screen and (max-width: 960px){
        transition: 0.8s all ease;
    }
`
export const NavContainer = styled.div`
    display:flex;
`
export const NavLogo = styled(LinkR)``
export const NavLink = styled.div``
