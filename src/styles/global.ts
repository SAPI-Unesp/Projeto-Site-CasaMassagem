// src/styles/global.ts

import { createGlobalStyle } from 'styled-components';
import '@fontsource/cinzel/400.css';
import '@fontsource/cormorant/400.css';

import BackgroundImage from '../assets/backgroundImage.png';

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
    padding: 0;
  }
  
  :root {
    --global-bg: url(${BackgroundImage});
    --global-color-green: rgba(151, 167, 103, 0.77);
    --global-color-brown: #6b4d3a; 
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
    background-image: var(--global-bg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: relative;
    background-attachment: fixed;
  }
`;