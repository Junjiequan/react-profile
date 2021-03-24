import React from 'react'
import { Button } from '../../GlobalBtn'

import {
    AboutContainer,
    AboutWrapper,
    AboutRow,
    Content1,
    Content2,
    TxtWrapper,
    TopLine,
    Heading,
    Subtitle,
    BtnWrap,
    ImgWrapper,
    Img
} from './AboutElements'

const About = ({
    id,
    whitebg,
    gridStart,
    headLine2,
    topLine,
    whiteText,
    headLine,
    whiteTextSub,
    description,
    buttonLabel,
    img,
    alt,
    small,
    primary,
    white,
    fontbig,
    secondary,
    to
}) => {
    return (
        //whitebg={whitebg} first one
        <AboutContainer  whitebg={whitebg} id={id}>  
            <AboutWrapper>
                <AboutRow gridStart={gridStart}>
                    <Content1>
                        <TxtWrapper>
                            <TopLine>{topLine}</TopLine>
                            <Heading whiteText={whiteText}>{headLine} <br />{headLine2}</Heading>
                            <Subtitle whiteTextSub={whiteTextSub}>{description}</Subtitle>
                            <BtnWrap>
                                <Button to={to} small={small} primary={primary} white={white} fontbig={fontbig} secondary={secondary}>{buttonLabel}</Button>
                            </BtnWrap>
                        </TxtWrapper>
                    </Content1>
                    <Content2>
                        <ImgWrapper>
                            <Img src={img} alt={alt}/>
                        </ImgWrapper>
                    </Content2>
                </AboutRow>
            </AboutWrapper>
        </AboutContainer>

    )
}

export default About
