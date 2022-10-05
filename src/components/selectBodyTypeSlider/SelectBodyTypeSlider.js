import React, { useState, useEffect } from 'react';
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import SwiperCore, { Navigation, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Navigation]);

const SelectBodyTypeSlider = ({
  bodyTypes,
  setBodyTypeValue,
  activeIndex = 1
}) => {
  return (
    <Swiper
      className="sizeMeCustomSwiper"
      // modules={[Navigation, Pagination]}
      // pagination={{
      //   clickable: true,
      //   renderBullet: function (index, className) {
      //     return `<span class=${className}>${bodyTypes.types[index].value}</span>`;
      //   }
      // }}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      onSlideChange={(swiper) => {
        console.log(swiper.activeIndex + 1);
        setBodyTypeValue(swiper.activeIndex + 1);
      }}
      initialSlide={activeIndex - 1}
      onSwiper={(swiper) => {
        console.log(swiper.activeIndex);
      }}
    >
      {bodyTypes.types.map((item) => (
        <SwiperSlide key={item.value} className="sizemeSwiperSlide">
          <img src={item.imageSource} className="selectBodyTypeImage" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SelectBodyTypeSlider;