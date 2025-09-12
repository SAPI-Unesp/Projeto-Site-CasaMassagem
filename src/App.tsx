import sapiLogo from './assets/logo-SAPI.png';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { AppContainer, Logo, Title } from './App.styles';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <AppContainer>
                <Logo src={sapiLogo} alt="SAPI"></Logo>
                <Title>SAPI</Title>
            </AppContainer>
        </ThemeProvider>
    );
}

export default App;
