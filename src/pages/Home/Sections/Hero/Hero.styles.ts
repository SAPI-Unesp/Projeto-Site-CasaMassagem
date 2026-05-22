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
  --hero-logo-y: 80%;
  --hero-logo-size: min(95vw, 720px);
  --hero-glow-height: min(45vw, 400px);

  position: absolute;
  inset: 0;
  z-index: 2;
  pointer-events: none;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: radial-gradient(
      ellipse,
      rgba(0, 0, 0, 0.4) 0 70%,
      rgba(0, 0, 0, 0) 71%
    );
    background-size: var(--hero-logo-size) var(--hero-glow-height);
    background-position: center var(--hero-logo-y);
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
    background-size: var(--hero-logo-size) auto;
    background-position: center var(--hero-logo-y);
    background-repeat: no-repeat;
    background-attachment: fixed;
    z-index: 1;
  }

  @media (max-width: 768px) {
    --hero-logo-y: 69.5%;
    --hero-logo-size: min(92vw, 560px);
    --hero-glow-height: min(48vw, 320px);

    &::before,
    &::after {
      background-attachment: scroll;
    }

    &::before {
      filter: blur(30px);
    }
  }
`;
