import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Link, Element } from 'react-scroll' //utilizar para fazer os redirecionamentos na propria landing page
import { Home } from './pages/Home/Home'
import { Social } from './pages/Social/Social'
import { GlobalStyles } from './styles/global'

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <BrowserRouter>
                <Routes> 
                    <Route path="/" element={<Home />}/> {/* utillizar esse Route para definir as rotas de cada servico */}
                    <Route path="/ProjetoSocial" element={<Social />}/>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
