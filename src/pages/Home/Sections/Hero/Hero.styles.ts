import styled from 'styled-components';

export const HeroContainer = styled.section<{ $backgroundImage: string }>`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-image: url(${({ $backgroundImage }) => $backgroundImage});
  background-size: cover;
  background-position: center top;
  background-repeat: no-repeat;
  background-attachment: fixed;

  @media (max-width: 768px) {
    height: 100svh;
    min-height: 100svh;
    background-attachment: scroll;
    background-position: center center;
  }
`;

export const LogoContainer = styled.div<{ $logoImage: string }>`
  --hero-logo-offset: clamp(4.25rem, 13.5vh, 8.75rem);

  position: absolute;
  inset: 0;
  z-index: 2;
  pointer-events: none;

  @media (min-width: 1200px) {
    --hero-logo-offset: clamp(6rem, 17vh, 11rem);
  }

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: radial-gradient(
      ellipse,
      rgba(0, 0, 0, 0.4) 0 70%,
      rgba(0, 0, 0, 0) 71%
    );
    background-size: min(95vw, 720px) min(45vw, 400px);
    background-position: center calc(50% + var(--hero-logo-offset));
    background-repeat: no-repeat;
    background-attachment: fixed;
    filter: blur(40px);
    z-index: 0;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background-image: url(${({ $logoImage }) => $logoImage});
    background-size: min(95vw, 720px) auto;
    background-position: center calc(50% + var(--hero-logo-offset));
    background-repeat: no-repeat;
    background-attachment: fixed;
    z-index: 1;
  }

  @media (max-width: 768px) {
    &::before,
    &::after {
      background-attachment: scroll;
      background-position: center center;
    }

    &::before {
      background-size: min(92vw, 560px) min(48vw, 320px);
      filter: blur(30px);
    }

    &::after {
      background-size: min(92vw, 560px) auto;
    }
  }
`;
