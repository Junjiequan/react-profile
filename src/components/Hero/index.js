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
    Button,
    ArrowForward,
    ArrowRight
} from './HeroElements'
const Hero = () => {
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
            </HeroBg>
            <HeroContent>
                <HeroH1>I dream my painting and I paint my dream.</HeroH1>
                <HeroP>
                        Talk is cheap. Don't be a loser.
                </HeroP>
                <HeroBtnWrapper>
                    <Button to="signup">
                        {/* View projects {hover ? <ArrowForward />: <ArrowRight />} */}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero
