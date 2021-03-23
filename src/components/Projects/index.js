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
    TextWrapper,
    ImgTxt,
    PorjectButton,
    Title
} from './ProjectsElements'

const Projects = ({data}) => {

    return (
       <ProjectsContainer id="projects">
           <Projectswrapper>
                <Projectstitlewrapper>
                    <ProjectsH1>My Projects</ProjectsH1>
                </Projectstitlewrapper>
                <ProjectsContentwrapper>
                    {data.map((profile,index)=>{
                        return(
                            <Projectsinfo key={index}>
                                <ImgWrapper href={profile.link} target="_blank" rel="noopener noreferrer" >
                                    <Img src={profile.img} alt={profile.alt}/>
                                </ImgWrapper>
                                <ImgTxt>{profile.name}</ImgTxt>
                                <TextWrapper>
                                    <ProjectsTitle>{profile.name}</ProjectsTitle>
                                    <ProjectsText><Title>{profile.descTitle}</Title>{profile.desc}</ProjectsText>
                                </TextWrapper>
                            </Projectsinfo>
                    )})}
                </ProjectsContentwrapper>
                <PorjectButton href="https://github.com/a331998513" target="_blank" rel="noopener noreferrer" >View more</PorjectButton>
            </Projectswrapper>
       </ProjectsContainer>
    )
}

export default Projects
