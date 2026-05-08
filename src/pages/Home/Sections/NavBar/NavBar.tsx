import{
    Container,
    NavItems,
    NavLogo,
    Divider
} from './NavBar.styles';

import logoNav from '../../../../assets/logoNav.png';
import backNav from '../../../../assets/backNav.png';

export function NavBar() {
    return (
        <Container>
            <NavLogo>
                <img className='logoNav' src={logoNav} alt="Logo Monique Ferraz"  width={236} height={140}/>
                <img className='backNav' src={backNav} alt="Background" width={422} height={170}/>
            </NavLogo>
            <NavItems>
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
