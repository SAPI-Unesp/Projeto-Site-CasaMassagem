import styled from "styled-components";
import { Swiper } from "swiper/react";

export const SwiperContainer = styled(Swiper)`
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
    width: 50% !important;
    height: 400px;
    opacity: 0.4;
    transition: all 0.5s ease-in-out;
    transform: scale(0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

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

  .swiper-button-next, .swiper-button-prev {
    color: ${({ theme }) => theme.colors.branco1}; 
    z-index: 100;
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
  font-size: 2.5rem;
  text-transform: uppercase;
  text-shadow: 0px 4px 10px rgba(0, 0, 0, 0.9);
  pointer-events: none;
`;