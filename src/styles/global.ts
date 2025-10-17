// src/styles/global.ts

import { createGlobalStyle } from 'styled-components';
import '@fontsource/cinzel/400.css';
import '@fontsource/cormorant/400.css';

import BackgroundImage from '../assets/backgroundImage.png';

export const GlobalStyles = createGlobalStyle`
  //agora os estilos globais vão funcionar

  :root {
    font-family: 'Cinzel', serif;
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

    background-image: url(${BackgroundImage});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
  }
`;