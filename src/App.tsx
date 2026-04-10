import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Social } from './pages/Social/Social';
import { GlobalStyles } from './styles/global';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';


import backgroundImage from './assets/backgroundImage.png';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <ParallaxProvider> 
                <GlobalStyles />
                
<Parallax speed={-50} style={{ position: 'absolute', top: 300, left: 0, zIndex: -1 }}>
    <img src={backgroundImage} alt="teste" style={{ width: '100vw', height: 'auto' }}/>
</Parallax>

                <BrowserRouter>
                    <Routes> 
                        <Route path="/" element={<Home />}/>
                        <Route path="/projetosocial" element={<Social />}/>
                    </Routes>
                </BrowserRouter>
            </ParallaxProvider>
        </ThemeProvider>
    );
}
//teste
export default App;