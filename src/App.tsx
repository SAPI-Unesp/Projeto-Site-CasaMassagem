import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home/Home'
import { Social } from './pages/Social/Social'
import { GlobalStyles } from './styles/global'
import { Servicos } from './pages/Servicos/Servicos'

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <BrowserRouter>
                <Routes> 
                    <Route path="/" element={<Home />}/>
                    <Route path="/projetosocial" element={<Social />}/>
                    <Route path="/servicos" element={<Servicos />}/>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;