import styled from 'styled-components'

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
    color:white;
`
export const HeroH1 = styled.h1``
export const HeroP = styled.p``
export const HeroBtnWrapper = styled.div``
export const Button = styled.div``
export const ArrowForward = styled.div``
export const ArrowRight = styled.div``