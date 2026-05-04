import { SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Navigation } from "swiper/modules";
import { BorderedImage } from "../BorderedImage/BorderedImage";
import * as S from "./Carousel.styles";

import 'swiper/swiper-bundle.css';


interface CarouselItem {
  src: string;
  title?: string;
  alt?: string;
  serviceId?: string;
}

interface CarouselProps {
  items: CarouselItem[];
  imageBorderRadius?: string;
  initialIndex?: number;
  slideWidth?: string;
  slideHeight?: string;
  slideBorderRadius?: string;
  imageFit?: "cover" | "contain";
  onActiveChange?: (serviceId: string) => void;
}

function getTitleLines(title: string) {
  const words = title.split(" ");

  if (words.length <= 2) {
    return words;
  }

  return [
    words.slice(0, 2).join(" "),
    words.slice(2).join(" "),
  ].filter(Boolean);
}

export function Carousel({
  items,
  imageBorderRadius = "60px",
  initialIndex = 0,
  slideWidth = "600px",
  slideHeight = "400px",
  slideBorderRadius = "60px",
  imageFit = "cover",
  onActiveChange,
}: CarouselProps) {
  return (
    <S.Wrapper>
      <S.SwiperContainer
        initialSlide={initialIndex}
        slideWidth={slideWidth}
        slideHeight={slideHeight}
        slideBorderRadius={slideBorderRadius}
        modules={[Autoplay, EffectCoverflow, Navigation]}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        loop={true}
        loopAdditionalSlides={3}
        spaceBetween={15}
        speed={850}
        autoplay={{
          delay: 3200,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 300,
          modifier: 1,
          slideShadows: false,
        }}
        onSlideChange={(swiper) => {
        const active = items[swiper.realIndex];
        if (active?.serviceId) onActiveChange?.(active.serviceId);
        }}
        onSwiper={(swiper) => {
            const active = items[swiper.realIndex];
            if (active?.serviceId) onActiveChange?.(active.serviceId);
        }}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}> 
            <BorderedImage
              src={item.src}
              alt={item.alt || item.title}
              borderRadius={imageBorderRadius}
              height="100%"
              objectFit={imageFit}
            />

            {item.title && (
              <S.SlideCaption>
                {getTitleLines(item.title).map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </S.SlideCaption>
            )}
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
