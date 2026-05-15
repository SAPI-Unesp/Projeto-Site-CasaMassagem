// src/styles/global.ts

import { createGlobalStyle } from 'styled-components';
import '@fontsource/cinzel/400.css';
import '@fontsource/cinzel/700.css'; 
import '@fontsource/cormorant/400.css';
import '@fontsource/cormorant/700.css'; 

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
    background-color: red;
    --global-color-green: rgba(151, 167, 103, 0.77);
    --global-color-brown: #6b4d3a; 
    font-family: 'Cinzel', serif;
    font-weight: normal;
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
    background-attachment: fixed;
  }

  #root {
    width: 100%;
    max-width: 1600px; 
    min-height: 600px; 
    background-color: rgba(167, 148, 120, 0.15);
    box-shadow: 0px 16px 10px 12px rgba(0, 0, 0, 0.25);

    display: flex;
    flex-direction: column;
  }
`;