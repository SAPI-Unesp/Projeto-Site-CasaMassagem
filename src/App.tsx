import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Social } from './pages/Social/Social';
import { Servicos } from './pages/Servicos/Servicos';
import { GlobalStyles } from './styles/global';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';

import backgroundImage from './assets/backgroundImage.png';
import backgroundImagePc from './assets/backgroundImagePc.png';
import Parallax1 from './assets/Parallax1.png';
import Parallax2 from './assets/Parallax2.png';
import Parallax3 from './assets/Parallax3.png';
import Parallax4 from './assets/Parallax4.png';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <ParallaxProvider>
                <GlobalStyles />

                {/* ---------------------------------------- PARALLAX ---------------------------------------------- */}
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                    zIndex: -10,
                }}>
                <picture style={{ width: '100%', height: '100%' }}>
                <source media="(max-width: 768px)" srcSet={backgroundImage} />
                    <img
                        src={backgroundImagePc}
                        alt="Fundo do site"
                        style={{
                            width: '100%',
                            height: '120%',
                            objectFit: 'cover',
                            display: 'block',
                            filter: 'brightness(90%)',
                            transform: 'scale(1.05)',       
                            transformOrigin: 'center center'
                        }}
                    />
                    <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    
                    background: 'linear-gradient(to right, ' +
                    'rgba(0, 0, 0, 0.2) 0%, ' +
                    'rgba(0, 0, 0, 0.2) calc(50% - 808px), ' +
                    'rgba(0, 0, 0, 0) calc(50% - 808px), ' +
                    'rgba(0, 0, 0, 0) calc(50% + 790px), ' +
                    'rgba(0, 0, 0, 0.2) calc(50% + 790px), ' +
                    'rgba(0, 0, 0, 0.2) 100%)',
                    pointerEvents: 'none'
                  
                }} />
                </picture>
                    <img src={Parallax1} alt="Parallax 1" style={{ width: '100%', height: 'auto' , opacity: 0.7, objectFit: 'cover'}} />
                </div>
 
              
                <div style={{ position: 'relative', minHeight: '100vh' }}>
                    
                  
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        zIndex: -1, 
                        pointerEvents: 'none', 
                        overflow: 'hidden'
                    }}>
                        
                        <Parallax speed={-110} style={{ position: 'absolute', width: '100%', zIndex: 3 }}>
                            <img src={Parallax3} alt="Parallax 3" style={{ width: '100%', height: 'auto', opacity: 0.9}} />
                        </Parallax>
                      
                        <Parallax speed={-160} style={{ position: 'absolute', width: '100%', zIndex: 4 }}>
                            <img src={Parallax2} alt="Parallax 2" style={{ width: '100%', height: 'auto' , opacity: 0.9, display: 'flex', justifyContent: 'center', alignItems: 'center'}} />
                        </Parallax>   

                        <div className="no-mobile">
                            <Parallax speed={-220} style={{ position: 'absolute', width: '100%', zIndex: 2 }}>
                                <img src={Parallax1} alt="Parallax 1" style={{ width: '100%', height: 'auto' , opacity: 0.5, display: 'flex', justifyContent: 'center', alignItems: 'center'}} />
                            </Parallax>   
                        </div> 
                        
                        <Parallax speed={-700} style={{ position: 'absolute', width: '100%', zIndex: 1 }}>
                            <img 
                            src={Parallax4} 
                            alt="Parallax 4" 
                            style={{ width: '100%', height: 'auto', opacity: 0.90, display: 'block' }} 
                            />
                        </Parallax>
                    
                          
                    
                                   

                    </div>

                  {/* ---------------------------------------- FIM PARALLAX ---------------------------------------------- */}
                    <div style={{ position: 'relative', zIndex: 10 }}>
                        <BrowserRouter>
                            <Routes>
                                <Route path="/" element={<Home />}/>
                                <Route path="/projetosocial" element={<Social />}/>
                                <Route path="/servicos" element={<Servicos />}/>
                            </Routes>
                        </BrowserRouter>
                    </div>
                   
                </div>
            </ParallaxProvider>
        </ThemeProvider>
    );
}

export default App;
