import { SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { BorderedImage } from "../BorderedImage/BorderedImage";
import * as S from "./SingleCarousel.styles";

import "swiper/swiper-bundle.css";

interface CarouselItem {
  src: string;
  alt?: string;
}

interface SingleCarouselProps {
  items: CarouselItem[];
  imageBorderRadius?: string;
  initialIndex?: number;
}

export function CarouselSingle({
  items,
  imageBorderRadius = "60px",
  initialIndex = 0,
}: SingleCarouselProps) {
  return (
    <S.Wrapper>
      <S.SwiperContainer
        modules={[Navigation]}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        slidesPerView={1}
        centeredSlides
        loop
        autoHeight
        initialSlide={initialIndex}
        grabCursor
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <S.SingleSlide>
              <BorderedImage
                src={item.src}
                alt={item.alt || `Imagem ${index + 1}`}
                borderRadius={imageBorderRadius}
                objectFit="contain"
                mode="intrinsic"
              />
            </S.SingleSlide>
          </SwiperSlide>
        ))}
      </S.SwiperContainer>

      <S.NavContainer>
        <div className="swiper-button-prev custom-prev" />
        <div className="swiper-button-next custom-next" />
      </S.NavContainer>
    </S.Wrapper>
  );
}