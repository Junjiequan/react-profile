import styled from 'styled-components'
import {MdKeyboardArrowRight, MdForward} from 'react-icons/md'
import ImgBg from '../../images/bgIMG.png'
import { Link as LinkS} from 'react-scroll'
export const HeroContainer = styled.div`
    background-color: #060005;
    display:flex;
    justify-content:center;
    align-items:center;
    height: 100vh;
    position:relative;
    z-index:1;

    :before{
        content: '';
        position:absolute;
        top:0;
        left:0;
        right:0;
        bottom:0;
        background: linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.4) 100%),
        linear-gradient(180deg, rgba(0,0,0,0.1) 0%, transparent 100%);
        z-index:2;
    }
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
    background:url(${ImgBg});
    background-position:center;
    background-size:cover;
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
    max-width: 700px;
    @media screen and (max-width: 768px){
        font-size:1.3rem;
    }
    @media screen and (max-width: 480px){
        font-size:1.1rem;
    }
`
export const HeroBtnWrapper = styled(LinkS)`
    margin-top: 1.5rem;
    display:flex;
    flex-direction:column;
    align-items:center;
`
export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left:5px;
    font-size:1.5rem;
`
export const ArrowForward = styled(MdForward)`
    margin-left:5px;
    font-size:1.5rem;
`
