import{
    Container,
    NavItems,
    NavLogo,
    Divider
} from './NavBar.styles';

import logoNav from '../../../../assets/logoNav.png';
import backNav from '../../../../assets/backNav.png';

import { useEffect, useState } from "react";

export function NavBar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <Container $scrolled={scrolled}>
            <NavLogo $scrolled={scrolled}>
                <img className='logoNav' src={logoNav} alt="Logo Monique Ferraz"/>
                <img className='backNav' src={backNav} alt="Background"/>
            </NavLogo>
            <NavItems $scrolled={scrolled}>
                <a href="#about">Sobre Nós</a>
                <Divider />
                <a href="#services">Serviços</a>
                <Divider />
                <a href="#social">Projeto Social</a>
                <Divider />
                <a href="#contact">Contato</a>
            </NavItems>
        </Container>
    );
}
