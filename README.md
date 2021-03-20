
# work in progress

[react-profile(WIP)](https://a331998513.github.io/react-profile/)


![image](https://user-images.githubusercontent.com/78078898/111752723-59eb5900-8896-11eb-918a-e907570f276a.png)





![image](https://user-images.githubusercontent.com/78078898/111854395-5cde5c00-891f-11eb-800d-38c95f4e1def.png)
**Hover effect**
```
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
    max-width:290px;
    height:315px;
    background: linear-gradient(315deg, #27212c, #3c1053);
    margin: 30px 10px;
    padding:20px 15px;
    margin-bottom:50px;
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
    height:260px;
    top: 1px;
    margin: 0 auto;
    box-shadow: 1px 5px 15px rgba(0,0,0,0.2);
    z-index:1;
    transition:all 0.8s ease-in-out;
    &:hover{
        top:-65px;
        transition:all 0.5s ease-in-out;
    }
`
export const Img = styled.img`
    max-width: 100%;
    border:4px solid rgba(255,255,255,0.6);
    transition: 0.5s ease-in-out;
    ${ImgWrapper}:hover &{
        border:4px solid rgba(255,255,255,0.1);
        transition: 0.5s ease-in-out;
    }
    
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
    transition: 0.4s ease-in-out;
    ${Projectsinfo}:hover &{
        visibility:visible;
        opacity:1;
        margin-top:-38px;
        transition-delay:0.3s;
    }
`

export const ProjectsTitle = styled.p`
    color:#fff;
    font-family: 2.5rem;
    font-weight:bold;
    letter-spacing:1.5px;
`
export const ProjectsText = styled.p`
    color:#fff;
`
```
