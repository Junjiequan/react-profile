import styled from 'styled-components'

export const AboutContainer = styled.div`
    color:#fff;
    background:${({whitebg}) => (whitebg? '#f9f9f9' : '#070308')};
    @media screen and (max-width: 768px){
        padding: 6rem 0;
    }
    font-family: 'Encode Sans', sans-serif;
`
export const AboutWrapper= styled.div`
    display:grid;
    z-index:1;
    height:400px;
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 1.7rem;
    justify-content:center;
`
export const AboutRow= styled.div`
    display:grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items:center;
    grid-template-areas: ${({gridStart}) => (gridStart? `'col1 col2'`:`'col1 col2'`)};
    @media screen and (max-width:768px){
    
    }
`
export const Content1= styled.div`
    margin-bottom:1rem;
    padding: 0 1rem;
    grid-area: col1;
`
export const Content2= styled.div`
    margin-bottom:1rem;
    padding: 0 1rem;
    grid-area: col2;
`
export const TxtWrapper= styled.div`
    max-width:540px;
    padding-top: 0;
    padding-bottom: 4rem;
`
export const TopLine= styled.p`
    color: #7D3EC1;
    font-size:1rem;
    line-height:1rem;
    font-weight:700;
    letter-spacing:1;
    text-transform: uppercase;
    margin-bottom:0.5rem;
`
export const Heading= styled.h1`
    margin-bottom:1.5rem;
    font-size: 3rem;
    line-height:1;
    font-weight:600;
    color:${({whiteText}) => (whiteText? '#f9f9f9':'#070308')};

    @media screen and (max-width:480px){
        font-size:2rem;
    }
`
export const Subtitle= styled.p`
    max-width:440px;
    margin-bottom:2rem;
    font-size:1.1rem;
    line-height:1.5rem;
    color: ${({whiteTextSub})=>(whiteTextSub?'#f9f9f9':'#070308')};
`
export const BtnWrap= styled.div`
    display:flex;
    justify-content:flex-start;
`
export const ImgWrapper = styled.div`
    max-width:555px;
    height:100%;
`
export const Img = styled.img`
    width: 100%;
    margin-bottom: 10px; 
`