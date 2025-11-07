import React from "react";
import {
  HeroContainer,
  TextContainer,
  HeroLogo,
  HeroSlogan,
  ImageFrame,
  MassagistImage,
} from './Hero.styles';

import logoImage from '../../../../assets/logo.png';
import massagistImage from '../../../../assets/image.png';


export function HeroSection() {
    return (
        <>
            <HeroContainer>
                    <TextContainer>
                        <HeroLogo src={logoImage} alt="Logo Monique Ferraz" />
                    </TextContainer>
                    <ImageFrame>
                        <MassagistImage src={massagistImage} alt="Massoterapeuta Monique Ferraz" />
                    </ImageFrame>
                    <HeroSlogan>ALIVIO, EQUILIBRIO E CUIDADO EM CADA SESSÃO</HeroSlogan>
            </HeroContainer>
        </>
    );
}