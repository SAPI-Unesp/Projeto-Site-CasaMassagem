import { createGlobalStyle } from 'styled-components';
import '@fontsource/cinzel/400.css';
import '@fontsource/cormorant/400.css'; //adicionar mais pesos se for preciso
export const GlobalStyles = createGlobalStyle`

//adicionar styles globais;  

:root {
    font-family: cinzel;
    background-color: #242424;

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    margin: 0;
    display: flex;
    flex-direction: column; 
    justify-content: center; 
    align-items: center;
    min-width: 320px;
    min-height: 100vh;
  }
`;
