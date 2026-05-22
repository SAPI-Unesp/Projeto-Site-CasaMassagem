import React from 'react';
import {
  HeroContainer,
  BackgroundImage,
  LogoContainer,
  HeroLogo,
} from './Hero.styles';

import { NavBar } from '../../../../components/NavBar/NavBar';
import logoImage from '../../../../assets/logo.png';
import massagistImage from '../../../../assets/foto-teste-social.png';

export function HeroSection() {
    return (
        <>
            <NavBar
                items={[
                    { label: 'Sobre Nós', href: '#about' },
                    { label: 'Projeto Social', href: '#social' },
                    { label: 'Serviços', href: '#service' },
                    { label: 'Contato', href: '#contact' },
                ]}
            />
            <HeroContainer id="hero">
                <BackgroundImage src={massagistImage} alt="Massoterapeuta Monique Ferraz" />
                
                <LogoContainer>
                    <HeroLogo src={logoImage} alt="Logo Monique Ferraz" />
                </LogoContainer>
            </HeroContainer>
        </>
    );
}
