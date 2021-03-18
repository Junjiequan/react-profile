import React from 'react'
// import {data} from './Data'
import star from '../../images/svg-star.svg'
import walkdog from '../../images/svg-walkdog.svg'
import snowglass from '../../images/svg-snowglass.svg'
import {
    ProjectsContainer,
    Projectstitlewrapper,
    ProjectsH1,
    Projectswrapper,
    ProjectsContentwrapper,
    Projectsinfo,
    Img,
    ProjectsTitle,
    ProjectsText
} from './ProjectsElements'



const Projects = () => {
    return (
       <ProjectsContainer id="Services">
           <Projectswrapper>
                <Projectstitlewrapper>
                    <ProjectsH1>My Services</ProjectsH1>
                </Projectstitlewrapper>
                <ProjectsContentwrapper>
                    <Projectsinfo>
                        <Img src={star} alt="1"/>
                        <ProjectsTitle>Chatting service</ProjectsTitle>
                        <ProjectsText>I cant't guarantee I will always respond on time though. Nevertheless, at least you know there's someone you can expect for.</ProjectsText>
                    </Projectsinfo>
                    <Projectsinfo>
                        <Img src={walkdog} alt="1"/>
                        <ProjectsTitle>Being company for a walk</ProjectsTitle>
                        <ProjectsText>No commentes here.<br />It won't be cheap.</ProjectsText>
                    </Projectsinfo>
                    <Projectsinfo>
                        <Img src={snowglass} alt="1"/>
                        <ProjectsTitle>Walk dog for you</ProjectsTitle>
                        <ProjectsText>Gosh, I've spent so much time on thinking what to write on this section. Gotta stop here. </ProjectsText>
                    </Projectsinfo>
                </ProjectsContentwrapper>
            </Projectswrapper>
       </ProjectsContainer>
    )
}

export default Projects
