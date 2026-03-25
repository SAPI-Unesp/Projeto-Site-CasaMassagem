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
    <S.SwiperContainer
      modules={[EffectCoverflow, Navigation]}
      effect="coverflow"
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={'auto'} 
      loop={true}
      loopAdditionalSlides={3}
      coverflowEffect={{
        rotate: 0,     
        stretch: 0, 
        depth: 300,    
        modifier: 1,
        slideShadows: false,
      }}
      navigation={true}
    >
      {items.map((item, index) => (
        <SwiperSlide key={index}>
          <BorderedImage 
            src={item.src} 
            alt={item.alt || item.title} 
            borderRadius={borderRadius}
            height="100%" 
          />
          {item.title && <S.SlideCaption>{item.title}</S.SlideCaption>}
        </SwiperSlide>
      ))}
    </S.SwiperContainer>
  );
}