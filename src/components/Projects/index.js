import React from 'react'
// import {data} from './Data'
import img from '../../images/svg-star.svg'
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
       <ProjectsContainer id="Projects">
           <Projectswrapper>
                <Projectstitlewrapper>
                    <ProjectsH1>Our Services</ProjectsH1>
                </Projectstitlewrapper>
                <ProjectsContentwrapper>
                    <Projectsinfo>
                        <Img src={img} alt="1"/>
                        <ProjectsTitle>Tetris is really fun</ProjectsTitle>
                        <ProjectsText>Tetris was the first game I have developed. I was really enjoying the process of building Tetris. I am looking forward to the next challenge.</ProjectsText>
                    </Projectsinfo>
                    <Projectsinfo>
                        <Img src={img} alt="1"/>
                        <ProjectsTitle>I really enjoy building game</ProjectsTitle>
                        <ProjectsText>Tetris was the first game I have developed. I was really enjoying the process of building Tetris. I am looking forward to the next challenge.</ProjectsText>
                    </Projectsinfo>
                    <Projectsinfo>
                        <Img src={img} alt="1"/>
                        <ProjectsTitle>What should I build next?</ProjectsTitle>
                        <ProjectsText>Tetris was the first game I have developed. I was really enjoying the process of building Tetris. I am looking forward to the next challenge.</ProjectsText>
                    </Projectsinfo>
                </ProjectsContentwrapper>
            </Projectswrapper>
       </ProjectsContainer>
    )
}

export default Projects
