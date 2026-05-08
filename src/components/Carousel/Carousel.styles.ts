import styled from "styled-components";
import { Swiper } from "swiper/react";
interface SwiperContainerProps {
  slideWidth: string;
  slideHeight: string;
  slideBorderRadius: string;
}

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 100%;
`;

export const SwiperContainer = styled(Swiper)<SwiperContainerProps>`
  width: 100%;
  padding: 40px 0;

  -webkit-mask-image: linear-gradient(
        to right,
        transparent 0%,
        black 15%,
        black 85%,
        transparent 100%
      );
      mask-image: linear-gradient(
        to right,
        transparent 0%,
        black 15%,
        black 85%,
        transparent 100%
      );

  .swiper-slide {
    width: min(${({ slideWidth }) => slideWidth}, calc(100vw - 56px));
    height: clamp(260px, 52vw, ${({ slideHeight }) => slideHeight});
    border-radius: ${({ slideBorderRadius }) => slideBorderRadius};
    opacity: 0.95;
    transition:
      opacity 0.7s ease,
      transform 0.85s cubic-bezier(0.22, 1, 0.36, 1),
      border-radius 0.7s ease;
    transform: scale(0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    white-space: pre-line;
  }

//mais fidedigno ao figma
  .swiper-slide::after {
  content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.5); 
    transition: background 0.7s ease;
    border-radius: inherit;
    z-index: 5;
  }

  .swiper-slide-active::after {
    background: rgba(0, 0, 0, 0); 
  } 
// -----

  .swiper-slide-active {
    opacity: 1;
    transform: scale(1);
    
    & > div {
      overflow: hidden; 
      box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.3);
    }
  }

  .swiper-slide > div {
    overflow: hidden; 
    border-radius: inherit;
  }

  .swiper-slide > div img,
  .swiper-slide > div::after {
    border-radius: inherit;
  }

  .swiper-slide h3 {
    opacity: 0.4;
    transition:
      opacity 0.7s ease,
      filter 0.7s ease;
    filter: blur(2px);
  }

  .swiper-slide-active h3 {
    opacity: 1;
    filter: none;
  }

  @media (max-width: 768px) {
    padding: 30px 0;

    -webkit-mask-image: linear-gradient(
      to right,
      transparent 0%,
      black 8%,
      black 92%,
      transparent 100%
    );
    mask-image: linear-gradient(
      to right,
      transparent 0%,
      black 8%,
      black 92%,
      transparent 100%
    );

    .swiper-slide {
      width: calc(100vw - 72px);
      height: clamp(230px, 66vw, 330px);
      border-radius: 40px;
    }

    .swiper-slide-active {
      & > div {
        box-shadow: none;
      }
    }
  }

  @media (max-width: 480px) {
    padding: 24px 0;

    .swiper-slide {
      width: calc(100vw - 56px);
      height: 230px;
      border-radius: 32px;
    }
  }
`;

export const SlideCaption = styled.h3`
  position: absolute;
  bottom: 30px;
  width: 100%;
  text-align: center;
  z-index: 10;
  margin: 0;
  color: ${({ theme }) => theme.colors.branco2};
  font-family: ${({ theme }) => theme.fontsStyles.Cinzel};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: 2.75rem;
  text-transform: uppercase;
  text-shadow: 0px 4px 10px rgba(0, 0, 0, 0.9);
  pointer-events: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1.08;
  padding: 0 18px;
  box-sizing: border-box;

  span {
    display: block;
    max-width: 100%;
    overflow-wrap: anywhere;
  }

  @media (max-width: 768px) {
    bottom: 24px;
    font-size: clamp(1.7rem, 7.6vw, 2.25rem);
  }

  @media (max-width: 480px) {
    bottom: 20px;
    font-size: 1.5rem;
  }
`;

export const NavContainer = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1000;

  pointer-events: none;

  .swiper-button-next,
  .swiper-button-prev {
    font-size: 30px;
    pointer-events: all;
    color: ${({ theme }) => theme.colors.branco1};
    font-weight: bold;

    transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  .swiper-button-next:hover,
  .swiper-button-prev:hover {
    transform: scale(1.12);
    filter: brightness(1.2);
  }

  @media (max-width: 768px) {
    .swiper-button-next,
    .swiper-button-prev {
      display: none;
    }
  }
`;
