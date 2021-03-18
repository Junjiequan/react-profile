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
    // Button,
    ArrowForward,
    ArrowRight
} from './HeroElements'
import {GlobalBtn} from '../../GlobalBtn'
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
                 Talk is cheap. Don't be a loser.
                </HeroH1>
                <HeroP>
                I dream my painting and I paint my dream.
                </HeroP>
                <HeroBtnWrapper>
                    <GlobalBtn to="signup" onMouseEnter={MouseOver} onMouseLeave={MouseOver}>
                        View Projects {OnMouse? <ArrowForward /> : <ArrowRight />}
                    </GlobalBtn>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero
