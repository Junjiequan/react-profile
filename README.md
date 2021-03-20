
# work in progress

[react-profile(WIP)](https://a331998513.github.io/react-profile/)


![image](https://user-images.githubusercontent.com/78078898/111752723-59eb5900-8896-11eb-918a-e907570f276a.png)





![image](https://user-images.githubusercontent.com/78078898/111866748-f59cc800-896f-11eb-986b-a502f67fdd6f.png)



**Hover effect**
```
export const ProjectsContainer = styled.div`
    font-family: 'Encode Sans', sans-serif;
    color: #070308;
    margin-bottom:8rem;
`
export const Projectswrapper = styled.div`
    margin: 8rem;
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
    margin-top:6rem;

    @media screen and (max-width:768px){
        margin-top:0;
        margin-bottom:3rem;
    }
`
export const ProjectsH1 = styled.h1`
    font-family: 'Kanit', sans-serif;
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
    padding:0 30px 0 30px;
    min-height:580px;

    @media screen and (max-width:768px){
        height: 100%;
        justify-content:center;
    }

`
export const Projectsinfo = styled.div`
    position:relative;
    max-width:290px;
    height:315px;
    background: linear-gradient(315deg, #27212c, #3c1053);
    margin: 30px 10px;
    padding:20px 15px;
    padding-bottom:35px;
    display:flex;
    flex-direction: column;
    border-radius:6px;
    box-shadow: 0 1px 5px rgba(0,0,0,0.4);
    transition: 0.3s ease-in-out;
    text-decoration:none;
    &:hover{
        height:400px;
    }
`
export const ImgWrapper = styled.a`
    position:relative;
    width:240px;
    height:220px;
    top: 2px;
    margin: 0 auto;
    box-shadow: 1px 5px 15px rgba(0,0,0,0.2);
    z-index:1;
    text-decoration:none;
    transition:all 0.8s ease-in-out;
    ${Projectsinfo}:hover &{
        top:-65px;
        transition:all 0.5s ease-in-out;
    }
    @media screen and (max-width:768px){
        top:-65px;
    } 
`
export const Img = styled.img`
    max-width: 100%;
    border:4px solid rgba(255,255,255,0.9);
    text-decoration:none;
    transition: 0.5s ease-in-out;
    ${Projectsinfo}:hover &{
        border:4px solid rgba(255,255,255,0.1);
        transition: 0.5s ease-in-out;
    }
`
export const TextWrapper = styled.div`
    font-family: 'Kanit', sans-serif;
    position:relative;
    margin-top:-60px;
    min-width:260px;
    padding: 4px 15px;
    text-align:center;
    visibility: hidden;
    opacity:0;
    transition: 0.3s ease-in;
    ${Projectsinfo}:hover &{
        visibility:visible;
        opacity:1;
        margin-top:-25px;
        transition-delay:0.3s;
    }
`
export const ProjectsTitle = styled.p`
    color:#fff;
    font-size:1.5rem;
    font-weight:bold;
`
export const ProjectsText = styled.p`
    margin-top:12px;
    color:#fff;
    opacity:0.8;
    font-size:14px;
    text-align:left;
    font-family: 'Encode Sans', sans-serif;
`
export const ImgTxt = styled.p`
    opacity:0;
    @media screen and (max-width:786px){
    text-decoration:none;
    opacity:1;
    color: #fff;
    text-align:center;
    font-size:1.5rem;
    font-weight:700;
    transform:translateY(10px);
    transition-delay: 1s;
    transition: 0.2s ease;
    ${Projectsinfo}:hover &{
        transform:translateY(-1px);
        opacity:0;
        transition-delay: 0.2s
    }
}   
`
export const PorjectButton = styled.a`
    font-family: 'Encode Sans', sans-serif;
    text-decoration:none;
    padding:1rem 2rem;
    background: #3c1053;
    border-radius:2px;
    color:#fff;
    font-size:1rem;
    font-weight:bold;
    transition: 0.3s ease-in-out;
    cursor:pointer;
    &:hover{
        transform: scale(1.1);
        transition: 0.3s ease-in-out;
        background: #8e26c5;
    }
`
```
