import styled from 'styled-components';

import HeroBackgroundSVG from '../../assets/backgroundSocialHero.svg?react';

export const HeroContainer = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const StyledHeroBackground = styled(HeroBackgroundSVG).attrs(() => ({
  preserveAspectRatio: "xMidYMid slice" 
}))`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  opacity: 0.77;
`;

export const LogoContainer = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10%;
`;

export const LogoImage = styled.img`
  width: 600px;
  max-width: 80%;
  height: auto;
  object-fit: contain;
`;
