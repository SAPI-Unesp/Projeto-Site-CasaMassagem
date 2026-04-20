import React from 'react';
import {
    HeroContainer,
    TextContainer,
    HeroLogo,
    HeroSlogan,
    ImageFrame,
    MassagistImage,
} from './Hero.styles';

import { NavBar } from '../NavBar/NavBar';
import logoImage from '../../../../assets/logo.png';
import massagistImage from '../../../../assets/template.jpg';

export function HeroSection() {
    return (
        <>
            <NavBar />
            <HeroContainer>
                <TextContainer>
                    <HeroLogo src={logoImage} alt="Logo Monique Ferraz" />
                </TextContainer>
                <ImageFrame>
                    <MassagistImage
                        src={massagistImage}
                        alt="Massoterapeuta Monique Ferraz"
                    />
                </ImageFrame>
                <HeroSlogan>
                    ALIVIO, EQUILIBRIO E CUIDADO EM CADA SESSÃO
                </HeroSlogan>
            </HeroContainer>
        </>
    );
}
