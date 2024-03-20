'use client';

import Image from 'next/image'
import Button from '@/components/Button'
import { TypeAnimation } from 'react-type-animation';
import { genPageMetadata } from './seo';

export const metadata = genPageMetadata({ title: 'Home' })

export default function Home() {
  return (
    <>
      <div className='max-container padding-container flex items-center justify-center h-screen pt-20 md:pt-24 pb-12 bg-fixed bg-center bg-cover hero-map'>
        <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/60 z-[2]'/>
        <div className='relative z-[2] flex flex-1 flex-col xl:w-1/2 ml-10 pt-20 text-gray-200'>
          <Image 
            src="/static/images/camp.svg"
            alt="camp"
            width={50}
            height={50}
            className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
          />
          <span className="bold-40 md:bold-52 lg:bold-88 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600">From Vision to Reality</span>
          <TypeAnimation
            sequence={[
              'Crafting Spaces, Inspiring Futures',
              2000,
              'Building Dreams, Brick by Brick',
              2000,
              `Crafting Tomorrow's Landscapes`,
              2000
            ]}
            wrapper="span"
            speed={50}
            style={{
              fontSize: '1.5em',
              display: 'inline-block',
              fontWeight: 'bold',
            }}
            repeat={Infinity}
          />
          <p className="regular-18 text-2xl mt-6 text-gray-400 xl:max-w-[520px]">
            We&apos;re committed to joining you on each step of your construction journey, seeking the satisfaction of witnessing the timeless beauty of architectural craftsmanship. With our expertise, we can guide you through your construction project, transforming your vision into reality.
          </p>

          <div className="flex flex-col w-full py-10 gap-3 sm:flex-row">
            <Button 
              type='button' 
              title='Contact Us' 
              variant='btn_yellow' 
              onClick={() => (window.location.href = '/contact')}
            />
          </div>
        </div>
      </div>
    </>
  )
}
