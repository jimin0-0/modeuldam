import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { Link } from 'react-router-dom';

const banners = [
  {
    id: 1,
    image: '/images/banner1.jpg',
    linkTo: '/products', 
  },
  {
    id: 2,
    image: '/images/banner2.jpg',
    linkTo: '/reviews', 
  },
];

const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: 250px;
  margin-bottom : 130px;

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
`;

const SlideLink = styled(Link)`
  display: block;
  width: 100%;
  height: 100%;
`;

const SlideImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

function Banner() {
  return (
    <StyledSwiper
      modules={[Navigation, EffectFade]}
      navigation
      loop={true}
      effect="fade"
      fadeEffect={{ crossFade: true }}
      speed={500}
    >
      {banners.map((b) => (
        <SwiperSlide key={b.id}>
          <SlideLink to={b.linkTo}>
            <SlideImage src={process.env.PUBLIC_URL + b.image} alt={`배너${b.id}`} />
          </SlideLink>
        </SwiperSlide>
      ))}
    </StyledSwiper>
  );
}

export default Banner;
