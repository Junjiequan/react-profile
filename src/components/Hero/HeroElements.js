import styled from 'styled-components'
import {MdKeyboardArrowRight,MdArrowForward} from 'react-icons/md'

export const HeroContainer = styled.div`
    background-color: #060005;
    display:flex;
    justify-content:center;
    align-items:center;
    height: 800px;
    position:relative;
    z-index:1;
`
export const HeroBg = styled.div`
    position:absolute;
    top:0;
    right:0;
    bottom:0;
    left:0;
    width:100%;
    height:100%;
`

export const VideoBg = styled.video`
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
    height:100%;
    width:100%;

`
export const HeroContent = styled.div`
    z-index:3;
    max-width:1200px;
    position:absolute;
    padding:8px 24px;

    display:flex;
    flex-direction:column;
    align-items:center;
`
export const HeroH1 = styled.h1`
    text-align:center;
    color: #fff;
    font-size:3rem;
    text-shadow: 0 0 1px darkcyan;
    
    @media screen and (max-width: 768px){
        font-size:2.5rem;
    }
    @media screen and (max-width: 480px){
        font-size:2rem;
    }
`
export const HeroP = styled.p`
    margin-top: 2rem;
    font-size:1.5rem;
    color: #fff;
    text-align:center;
    max-width: 500px;
    @media screen and (max-width: 768px){
        font-size:1.3rem;
    }
    @media screen and (max-width: 480px){
        font-size:1.1rem;
    }
`
export const HeroBtnWrapper = styled.div`
    margin-top: 1.5rem;
    display:flex;
    flex-direction:column;
    align-items:center;
`
export const Button = styled.div`
    background:#7D3EC1;
    padding:10px 25px;
    border-radius:50px;
    display:flex;
    letter-spacing: 1px;
    align-items:center;
    font-size:1rem;
    font-weight:600;
    color:#000;
    cursor:pointer;
    text-align:center;
    &:hover {
        background:#fff;
        color:#7D3EC1;
    }

`
export const ArrowForward = styled(MdKeyboardArrowRight)`
    margin-left:4px;
    font-size:1.5rem;
    transition: transformX(6px);
    transition: transform 0.3s ease-in-out;
    &:hover,
    ${Button}:hover &{
        transform: translateX(14px);
        transition: transform 0.3s ease-in-out;
    }
`
