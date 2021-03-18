import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'
import {Link as LinkS} from 'react-scroll'

export const Nav = styled.div`
    background:#0d050f;
    top:0;
    height: 80px;
    margin-top: -50px;
    display:flex;
    align-items:center;
    z-index:10;
    position:sticky;
    color: #fff;
    box-shadow: 0 1px 2px rgba(0,0,0,0.4);

    @media screen and (max-width: 960px){
        transition: 0.8s all ease;
    }
`
export const NavContainer = styled.div`
    display:flex;
    justify-content: space-between;
    z-index:1;
    width:100%;
    padding: 0 3rem;
    max-width:2200px;
`
export const NavLogo = styled(LinkR)`
    color: #fff;
    display:flex;
    justify-self:flex-start;
    cursor: pointer;
    font-size:1.8rem;
    align-items:center;
    margin-left:24px;
    font-weight:bold;
    text-decoration:none;
    font-family: 'Cedarville Cursive', cursive;
`
export const MobileIcon = styled.div`
    display: none;
    
    @media screen and (max-width: 768px){
        display:block;
        position:absolute;
        top:0;
        right:0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`
export const NavMenu = styled.ul`
    display:flex;
    align-items:center;
    text-align:center;
    list-style:none;
    font-size:16px;
    font-weight:600;
    /* margin-right: -22px; */
    @media screen and (max-width: 768px){
        display:none;

    }
`
export const NavItem = styled.li`
    height:80px;

`
export const NavLinks = styled(LinkS)`
    color:#fff;
    display:flex;
    height: 100%;
    align-items:center;
    margin: 0 0.5rem;
    padding: 0 1.3rem;
    text-decoration:none;
    cursor:pointer;
    border-bottom: 0px solid #7D3EC1;
    transition: 0.2s ease-in-out;
    &:hover{
        color:#7D3EC1;
        border-bottom: 5px solid #7D3EC1;
        transition: 0.2s ease-in-out;
    }
    &:active{
        color:#7D3EC1;
        border-bottom: 5px solid #7D3EC1;
        transition:0.2s ease-in-out;
    }
`
export const NavBtn = styled.nav`
    color:#fff;
    display:flex;
    align-items:center;
    width:100px;
    @media screen and (max-width: 768px){
        display:none;

    }
`

export const NavBtnLink = styled(LinkR)`
    border-radius:50px;
    font-size:1rem;
    background: #7D3EC1;
    text-transform: uppercase;
    white-space: nowrap;
    padding: 8px 28px;
    text-decoration:none;
    color:#170c1a;
    transition: all 0.2s ease-in-out;
    &:hover{
        background:#fff;
        color:#7D3EC1;
        transition: all 0.2s ease-in-out;
    }
    
`