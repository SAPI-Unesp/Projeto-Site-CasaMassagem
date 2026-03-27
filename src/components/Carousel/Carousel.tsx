import { SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation} from "swiper/modules";
import { BorderedImage } from "../BorderedImage/BorderedImage"; // Ajuste o caminho conforme sua pasta
import * as S from "./Carousel.styles";

import 'swiper/swiper-bundle.css';

interface CarouselItem {
  src: string;
  title?: string;
  alt?: string;
}

interface CarouselProps {
  items: CarouselItem[];
  borderRadius?: string;
}

export function Carousel({ items, borderRadius = "40px" }: CarouselProps) {
  
  return (
    <S.Wrapper>
      <S.SwiperContainer
        modules={[EffectCoverflow, Navigation]}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'} 
        loop={true}
        loopAdditionalSlides={3}
        spaceBetween={15}
        coverflowEffect={{
          rotate: 0,     
          stretch: 0, 
          depth: 300,    
          modifier: 1,
          slideShadows: false,
        }}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <BorderedImage 
              src={item.src} 
              alt={item.alt || item.title} 
              borderRadius={borderRadius}
              height="100%" 
            />
            {item.title && (
              <S.SlideCaption>
                {item.title.split(" ").slice(0, 2).join(" ")}
                <br />
                {item.title.split(" ").slice(2).join(" ")}
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