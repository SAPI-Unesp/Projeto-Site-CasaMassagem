import styled from 'styled-components';

export const HeroContainer = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const BackgroundImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  z-index: 1;
`;

export const LogoContainer = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translateY(clamp(3.5rem, 12vh, 7.5rem));

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 100%; 
    height: 100%; 

    background-color: rgba(0, 0, 0, 0.4); 
    
    border-radius: 50%;
    filter: blur(40px); 
    
    z-index: -1; 
  }
`;

export const HeroLogo = styled.img`
  width: 95%;
  max-width: 720px;
  height: auto;
  /* Certifique-se de que não há "filter: drop-shadow" aqui */
`;
