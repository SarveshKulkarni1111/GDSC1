import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import Homecard1 from './Homecard1.png';
import Homecard2 from './Homecard2.png';
import Homecard3 from './Homecard3.png';
import ImageSlider1 from './ImageSlider1.css';
import arrowBackOutline from './arrowBackOutline.svg';
import arrowForwardOutline from './arrowForwardOutline.svg';
import {Link} from "react-router-dom";


function ImageSlider() {
  return (
    <div className="container">
      <br/><br/><h1 className="heading">WHAT DO WE DO?</h1><br/>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
        <Link as={Link} to="/events"><img src={Homecard1} alt="slide_image" height={10} width={5} /></Link>

          {/* <img src={Homecard1} alt="slide_image" height={10} width={5} /> */}
        </SwiperSlide>
        <SwiperSlide>
        <Link as={Link} to="/projects"><img src={Homecard2} alt="slide_image" height={10} width={5} /></Link>
          {/* <img src={Homecard2} alt="slide_image" height={10} width={5}/> */}
        </SwiperSlide>
        <SwiperSlide>
        <Link as={Link} to="/podcast"><img src={Homecard3} alt="slide_image" height={10} width={5} /></Link>
          {/* <img src={Homecard3} alt="slide_image" height={10} width={5}/> */}
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"><img src = {arrowBackOutline} height={30} width={25} ></img></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"><img src = {arrowForwardOutline} height={30} width={25} ></img></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default ImageSlider;

{/* <img src = {left_chevron}></img> */}