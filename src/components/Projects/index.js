import React from 'react'
import {
    ProjectsContainer,
    Projectstitlewrapper,
    ProjectsH1,
    Projectswrapper,
    ProjectsContentwrapper,
    Projectsinfo,
    Img,
    ProjectsTitle,
    ProjectsText,
    ImgWrapper,
    TextWrapper
} from './ProjectsElements'


const Projects = ({data}) => {

    return (
       <ProjectsContainer id="Services">
           <Projectswrapper>
                <Projectstitlewrapper>
                    <ProjectsH1>My Projects</ProjectsH1>
                </Projectstitlewrapper>
                <ProjectsContentwrapper>
                    {data.map((profile,index)=>{
                        return(
                            <Projectsinfo href={profile.link} key={index} target="_blank" >
                            <ImgWrapper>
                                <Img src={profile.img}  alt={profile.alt}/>
                            </ImgWrapper>
                            <TextWrapper>
                                <ProjectsTitle>{profile.name}</ProjectsTitle>
                                <ProjectsText>{profile.desc}</ProjectsText>
                            </TextWrapper>
                        </Projectsinfo>
                    )})}
                </ProjectsContentwrapper>
            </Projectswrapper>
       </ProjectsContainer>
    )
}

export default Projects
