import { 
    HeroContainer,
    StyledHeroBackground,
    LogoContainer,
    LogoImage
} from './Hero.styles';

import logoImage from '../../../assets/logo.png';

export function Hero() {
    return (
        <>
            <HeroContainer>
                <StyledHeroBackground />
                <LogoContainer>
                    <LogoImage src={logoImage} alt="Logo Monique Ferraz" />
                </LogoContainer>
            </HeroContainer>
        </>
    );
}
