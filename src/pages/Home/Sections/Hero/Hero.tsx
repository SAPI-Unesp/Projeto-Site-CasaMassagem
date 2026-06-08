import {
  HeroContainer,
  LogoContainer,
} from './Hero.styles';

import { NavBar } from '../../../../components/NavBar/NavBar';
import logoImage from '../../../../assets/logoA.png';
import massagistImage from '../../../../assets/fotoTesteSocial.png';

export function HeroSection() {
    return (
        <>
            <NavBar
                items={[
                    { label: 'Sobre Nós', href: '#about' },
                    { label: 'Projeto Social', href: '/projetosocial' },
                    { label: 'Serviços', href: '/servicos' },
                    { label: 'Contato', href: '#contact' },
                ]}
            />
            <HeroContainer id="hero" $backgroundImage={massagistImage}>
                <LogoContainer
                    $logoImage={logoImage}
                    role="img"
                    aria-label="Logo Monique Ferraz"
                />
            </HeroContainer>
        </>
    );
}
