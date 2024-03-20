'use client'

import Image from 'next/image';
import React, { useState } from 'react';
import { SliderData } from '../data/sliderData';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';

const Projects = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div id='gallery' className='max-container padding-container w-full bg-neutral-50 text-black py-20'>
      <h1 className='text-3xl font-bold text-center p-4'>Our Projects</h1>
      <div className='relative flex justify-center p-4'>

      {SliderData.map((slide, index) => {
        return (
          <div
            key={index}
            className={
              index === current
                ? 'opacity-[1] ease-in duration-100'
                : 'opacity-0'
            }
          >
              <FaArrowCircleLeft
                onClick={prevSlide}
                className='absolute top-[50%] left-[30px] text-black/70 cursor-pointer select-none z-[2]'
                size={50}
              />
              {index === current && (
                <Image
                  src={slide.image}
                  alt='/'
                  width='800'
                  height='100'
                />
              )}
              <FaArrowCircleRight
                onClick={nextSlide}
                className='absolute top-[50%] right-[30px] text-black/70 cursor-pointer select-none z-[2]'
                size={50}
              />
            </div>
        );
      })}
      </div>
    </div>
  );
};

export default Projects;
