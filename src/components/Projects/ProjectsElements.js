import styled from 'styled-components'


export const ProjectsContainer = styled.div`
    font-family: 'Encode Sans', sans-serif;
    color: #070308;
`
export const Projectswrapper = styled.div`
    margin: 10rem;
    max-width:1600px;
    min-height:760px;
    height:100%;
    width:100%;
    margin:0 auto;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:center;
    @media screen and (max-width:768px){
        margin: 6rem 0;
    }
`
export const Projectstitlewrapper = styled.div`
    margin-top:5rem;
`
export const ProjectsH1 = styled.h1`
    color:#070308;
    font-size: 3rem;
    @media screen and (max-width:480px){
        font-size:2rem;
    }
`
export const ProjectsContentwrapper = styled.div`
    display:flex;
    position:relative;
    justify-content:flex-start;
    align-items:center;
    flex-wrap:wrap;
    padding:30px;
    min-height:580px;

    @media screen and (max-width:768px){
        height: 100%;
    }
    
`
export const Projectsinfo = styled.div`
    position:relative;
    max-width:300px;
    height:280px;
    background: #fff;
    margin: 30px 10px;
    padding:20px 15px;
    margin-bottom:50px;
    display:flex;
    flex-direction: column;
    border-radius:10px;
    box-shadow: 0 5px 20px rgba(0,0,0,0.3);
    transition: 0.3s ease-in-out;
    text-decoration:none;
    &:hover{
        height:400px;
    }
`
export const ImgWrapper = styled.div`
    position:relative;
    width:240px;
    height:260px;
    top: -60px;
    margin: 0 auto;
    box-shadow: 0 5px 20px rgba(0,0,0,0.2);
    z-index:1;
`
export const Img = styled.img`
    max-width: 100%;
    border-radius:6px;
`

export const TextWrapper = styled.div`
    font-family: 'Kanit', sans-serif;
    position:relative;
    margin-top:-50px;
    min-width:260px;
    padding: 4px 15px;
    text-align:center;
    visibility: hidden;
    opacity:0;
    transition: 0.2s ease-in-out;
    ${Projectsinfo}:hover &{
        visibility:visible;
        opacity:1;
        margin-top:-38px;
        transition-delay:0.3s;
    }
`

export const ProjectsTitle = styled.p`
    color:#7D3EC1;
    font-family: 2.5rem;
    font-weight:bold;
`
export const ProjectsText = styled.p`
    color:#62575c;
`

