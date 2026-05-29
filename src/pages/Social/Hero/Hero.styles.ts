import styled from 'styled-components';

import HeroBackgroundSVG from '../../../assets/backgroundSocialHero.svg?react';

export const HeroContainer = styled.section`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const StyledHeroBackground = styled(HeroBackgroundSVG).attrs(() => ({
  preserveAspectRatio: "xMidYMid meet"
}))`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 0;
  /* opacity: 0.77; */
`;

export const LogoContainer = styled.div`
  position: absolute;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10%;
`;

export const LogoImage = styled.img`
  width: 80vw;
  max-width: 80%;
  height: auto;
  object-fit: contain;
`;
