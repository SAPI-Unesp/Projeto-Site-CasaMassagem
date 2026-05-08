import React from "react";
import {
  HeroContainer,
  BackgroundImage,
  LogoContainer,
  HeroLogo,
} from './Hero.styles';

import logoImage from '../../../../assets/logo.png';
import massagistImage from '../../../../assets/foto-teste-social.png';

export function HeroSection() {
    return (
        <HeroContainer>
            <BackgroundImage src={massagistImage} alt="Massoterapeuta Monique Ferraz" />
            
            <LogoContainer>
                <HeroLogo src={logoImage} alt="Logo Monique Ferraz" />
            </LogoContainer>
        </HeroContainer>
    );
}