import { 
    HeroContainer,
    StyledHeroBackground,
    LogoContainer,
    LogoImage
} from './Social.styles';

import logoImage from '../../assets/logo.png';

export function Social() {
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
