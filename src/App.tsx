import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home/Home'
import { Social } from './pages/Social/Social'
import { GlobalStyles } from './styles/global'

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <BrowserRouter>
                <Routes> 
                    <Route path="/" element={<Home />}/>
                    <Route path="/ProjetoSocial" element={<Social />}/>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;