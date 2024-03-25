'use client'

import Image from 'next/image';
import React from 'react';
import { SliderData } from '../data/sliderData';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

const Projects = ({ slides }) => {
  return (
    <section className='relative max-container padding-container bg-neutral-50 w-full mt-50 text-center'>
      <h1 className='bold-32 md:bold-50 pt-10 md:pt-10 text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-yellow-500'>Our Projects</h1>
      <div className='py-2 md:py-10 flexCenter'>
        <Swiper
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          pagination={{ type: 'fraction' }}
          modules={[EffectCoverflow, Navigation, Pagination]}
          onSwiper={swiper => console.log(swiper)}
          className='h-96 w-full rounded-lg'
        >
          {SliderData.map((image, index) => (
            <SwiperSlide key={index}>
              <div className='flex h-full w-full items-center justify-center'>
                <Image
                  src={image.image}
                  alt={`image_${index}`}
                  className='block object-cover rounded-lg'
                  width={800}
                  height={100}
                />
              </div>
            </SwiperSlide>
          ))}

          <FaArrowCircleLeft className="swiper-button-prev"/>
          <FaArrowCircleRight className="swiper-button-next"/>
        </Swiper>
    </div>
    </section>
  )
};

export default Projects;
