'use client'

import Image from 'next/image';
import React, { useState } from 'react';
import { SliderData } from '../data/sliderData';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Projects = ({ slides }) => {
  return (
    <section className='relative max-container padding-container bg-neutral-50 w-full pt-50 text-center'>
      <h1 className='bold-32 md:bold-50 py-10 md:py-10 text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-yellow-400'>Featured Works</h1>
      <div className='flexCenter rounded-xl max-w-[40rem] mx-auto bg-gray-800 w-50 max-h-100 overflow-hidden shadow-md'>
        <Swiper
          spaceBetween={40}
          centeredSlides={true}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="w-full h-[38rem] rounded-xl"
        >
          {SliderData.map((image, index) => (
            <SwiperSlide key={index}>
                  <Image
                    src={image.image}
                    alt={`image_${index}`}
                    className='block object-cover h-[30rem] rounded-t-xl'
                    width={800}
                    height={800}
                  />
                  <div className="p-5 bg-gray-800">
                    <div>
                      <h5 className="pb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{image.title}</h5>
                    </div>
                    <p className="pb-10 font-normal text-gray-700 dark:text-gray-400">{image.description}</p>
                  </div>
            </SwiperSlide>
          ))}

          <FaArrowCircleLeft className="swiper-button-prev" />
          <FaArrowCircleRight className="swiper-button-next" />
        </Swiper>
      </div>
      <div className='pb-10' />
    </section>
  )
};

export default Projects;
