import styled from 'styled-components'
import {FaTimes} from 'react-icons/fa'
import {Link as LinkS} from 'react-scroll'
import {Link as LinkR} from 'react-router-dom'

export const SidebarContainer = styled.aside`
    position:absolute;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #0d0d0d;
    display: grid;
    align-items:center;
    top:0;
    right:0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen}) => (isOpen ? '98%': '0')};
    top: ${({isOpen}) => (isOpen? '0' : '-100%')};
`
export const CloseIcon = styled(FaTimes)`
    cursor:pointer;
    color: #050308;
    font-size: 1.3rem;
    border-radius:100%;
    opacity: 0.7;
    background-color: #fff;
`
export const Icon = styled.div`
    position:absolute;
    top:1.2rem;
    right:1.5rem;
    height:25px;
    background:transparent;
`
export const SidebarWrapper = styled.div`
    color:#fff;
    width:100%;

`
export const SidebarMenu = styled.ul`
    display:grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align:center;

    @media screen and (max-width:480px){
        grid-template-rows: repeat(6, 60px);
    }
`
export const SidebarLink = styled(LinkS)`
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:1.5rem;
    cursor:pointer;
    text-decoration:none;
    border-left:0 solid #7D3EC1;
    transition: 0.2s ease-in-out;
    &:hover{
        color:#7D3EC1;
        border-left:8px solid #7D3EC1;
        transition: 0.2s ease-in-out;
        align-items:center;
    }
    &:active{
        color:#7D3EC1;
        border-left:8px solid #7D3EC1;
        transition: 0.2s ease-in-out;
    }
    
`
export const SidebarBtn = styled.div`
    display:flex;
    justify-content:center;
    color:#fff;
`
export const SidebarRoute = styled(LinkR)`
     text-decoration:none;
     color:#fff;
     font-weight: bold;
     font-size: 17px;
     cursor:pointer;
     background-color:#7D3EC1;
     border-radius:50px;
     padding: 15px 60px;
     transition: 0.2s ease-in-out;
     &:hover{
        background-color:#fff;
        color:#7D3EC1;
        transition: 0.2s ease-in-out;
     }

`