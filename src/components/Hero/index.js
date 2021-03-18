import React from 'react'
import Video from '../../videos/matrix.mp4';
import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight
} from './HeroElements'
import {Button} from '../../GlobalBtn'

const Hero = () => {
    const [OnMouse, setOnMouse] = React.useState(false)
    const MouseOver = () =>{
        setOnMouse(!OnMouse)
    }

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
            </HeroBg>
            <HeroContent>
                <HeroH1>
                 Hello, I'm Jay.
                </HeroH1>
                <HeroP>
                 Welcome to my world.<br/> Here you can find all of my finished projects.  
                </HeroP>
                <HeroBtnWrapper>
                    <Button to="signup" onMouseEnter={MouseOver} onMouseLeave={MouseOver}
                        primary='true' fontbig ="true" white="" primaryhover="true" whitehover="true">
                        View Projects {OnMouse? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero
