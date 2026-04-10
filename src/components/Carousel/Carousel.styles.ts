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
    /* width: 50% !important; */
    width: ${({ slideWidth }) => slideWidth};
    height: ${({ slideHeight }) => slideHeight};
    border-radius: ${({ slideBorderRadius }) => slideBorderRadius};
    opacity: 0.95;
    transition: all 0.5s ease-in-out;
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
    transition: all 0.5s ease;
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
  }

  .swiper-slide h3 {
    opacity: 0.4;
    transition: all 0.5s ease;
    filter: blur(2px);
  }

  .swiper-slide-active h3 {
    opacity: 1;
    filter: none;
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
`;

