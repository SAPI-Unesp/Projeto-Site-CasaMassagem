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
                

                <div style={{ position: 'relative', minHeight: '100vh' }}>
                    

                    <div style={{ 
                        position: 'absolute', 
                        top: 0, 
                        left: 0, 
                        width: '100%', 
                        height: '100%', 
                        zIndex: -1, 
                        overflow: 'hidden' 
                    }}>
                        <Parallax speed={-45}>
                            <img 
                                src={backgroundImage} 
                                alt="Fundo do site"
                                style={{ 
                                    width: '100%', 
                                    height: 'auto', 
                                    display: 'block' 
                                }} 
                            />
                        </Parallax>
                    </div>

                    
                    <BrowserRouter>
                        <Routes> 
                            <Route path="/" element={<Home />}/>
                            <Route path="/projetosocial" element={<Social />}/>
                        </Routes>
                    </BrowserRouter>
                    
                </div>
            </ParallaxProvider>
        </ThemeProvider>
    );
}

export default App;