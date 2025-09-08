import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const VisualMainWrapper = styled.div`
  max-width: 100%;
  margin: 0 auto;
`;

const StyledSwiper = styled(Swiper)`
  .swiper-button-prev,
  .swiper-button-next {
    color: #2b4228;
  }
  .swiper-button-prev {
    left: 100px;
  }
  .swiper-button-next {
    right: 100px;
  }
  .swiper-pagination-bullet {
    background: #ffffffff;
    opacity: 0.7;
    width: 10px;
    height: 10px;
  }
  .swiper-pagination-bullet-active {
    width: 30px;
    background: #2b4228;
    opacity: 1;
    border-radius: 10px;
  }
`;

const SlideImage = styled.img`
  width: 100%;
  display: block;
`;

function VisualMain() {
  return (
    <VisualMainWrapper>
      <StyledSwiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        loop={true}
        speed={800}
        spaceBetween={30}
        slidesPerView={1}
        effect="fade"
        fadeEffect={{ crossFade: true }}
      >
        <SwiperSlide>
          <SlideImage src={process.env.PUBLIC_URL + "/images/visual1.jpg"} alt="비주얼 이미지 1" />
        </SwiperSlide>
        <SwiperSlide>
          <SlideImage src={process.env.PUBLIC_URL + "/images/visual2.jpg"} alt="비주얼 이미지 2" />
        </SwiperSlide>
      </StyledSwiper>
    </VisualMainWrapper>
  );
}

export default VisualMain;
