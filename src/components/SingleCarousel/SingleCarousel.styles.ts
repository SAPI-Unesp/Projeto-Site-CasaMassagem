import styled from "styled-components";
import { Swiper } from "swiper/react";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const SwiperContainer = styled(Swiper)`
  width: 100%;
  height: auto;

  .swiper-wrapper {
    align-items: center;
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100% !important;
    height: auto !important;
  }
`;

export const SingleSlide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;

  img {
    display: block;

    max-width: 100%;
    max-height: 80vh;

    width: auto;
    height: auto;

    object-fit: contain;
  }
`;

export const NavContainer = styled.div`
  position: absolute;
  inset: 0;
  z-index: 10;

  display: flex;
  justify-content: space-between;
  align-items: center;

  pointer-events: none;
  padding: 0 20px;

  .swiper-button-next,
  .swiper-button-prev {
    pointer-events: all;

    color: ${({ theme }) => theme.colors.branco1};
    font-size: 30px;
    font-weight: bold;

    transition: transform 0.25s ease, filter 0.25s ease;
  }

  .swiper-button-next:hover,
  .swiper-button-prev:hover {
    transform: scale(1.15);
    filter: brightness(1.2);
  }
`;