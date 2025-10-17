import sapiLogo from '../../assets/logo-SAPI.png';
import { AppContainer, Logo, Title } from './Home.styles';

export function Home() {
    return (
        <AppContainer>
            <Logo src={sapiLogo} alt="SAPI" />
            <Title>SAPI</Title>
        </AppContainer>
    );
}