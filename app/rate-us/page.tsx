'use client'

import Button from '@/components/Button'
import Rating from '@/components/Rating';
import router from 'next/router';
import React, { useState } from 'react'
import emailjs, { send } from '@emailjs/browser'

export default function Page() {
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({ name: '', message: '', rating: 0, success: '', error: ''});

  const [ratingValue, setRatingValue] = useState(undefined);

  const handleRatingChange = (value) => {
    setRatingValue(value);
  }
  
  async function rateMessage() {
    try {
      setIsLoading(true)

      if (!data.name) {
        setError('Name, please!');
        throw new Error('Name is required.');
      }

      if (!data.message) {
        setError('No feedback, no fun! Tell us what you think.');
        throw new Error('Message is required.');
      }

      if (!ratingValue) {
        setError('Please take a moment to rate our services and help us serve you better.');
        throw new Error('Please rate our services.');
      }

      if (data.message.length > 400) {
        setError('Message should be less than 1000 characters long.');
        throw new Error('Message should be less than 1000 characters long.');
      }
  
      var messageParams = {
        name: data.name,
        rating: ratingValue,
        quote: data.message
      };
  
      // send post message to the route
      const response = await fetch('/api/rate-us', {
        method: 'POST',
        body: JSON.stringify(messageParams),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Something went wrong!' + response.status);
      }

      const responseData = await response.json();
      // console.log('Response Data:', responseData);
      setIsLoading(false)
      setSuccess('Thank you for your valuable feedback !')
      setTimeout(() => {
        window.location.href = '/'
      }, 2000);

      emailjs.init({
        publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLICKEY,
      });
  
      emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICEID ?? '', 
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATEID ?? '', 
        {
          from_name: data.name,
          to_name: 'Admin',
          message: `${data.message} | rating: ${ratingValue}`
        }
      ).then(
        function (response) {
          setIsLoading(false)
          setSuccess('Thank you for your valuable feedback !')
        },
        function (err) {
          console.log('FAILED...', err)
          setIsLoading(false)
          setError('Some error occured. Please send me a direct email found in the footer below.')
        },
      );

      // redirect to home page
    } catch (error) {
      setIsLoading(false)
      console.log('Error in providing feedback !!!', error)
    }
  }

  const handleChange = (data: any) => {
    setSuccess('')
    setError('')
    setData({ ...data, success: '', error: ''})
  }

  return (
    <>
      <section className='relative max-container padding-container flex items-center justify-center h-screen bg-fixed bg-center bg-cover rate-us'>
        {/* Overlay */}
        <div className='absolute inset-0 top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]' />
        <div className='text-black z-[2] pt-10 md:pt-20 sm:pt-30'>
          <p className="bold-20 xs:bold:10 sm:bold-20 md:bold-52 lg:bold-80 text-transparent text-center bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600">Tell Us What You Think</p>
          <p className='bold-4 md:bold-12 text-gray-300 py-4 text-center'>Your Opinion Matters. Help Us Improve.</p>
            <div className='flex flex-wrap'>
              <form className='max-w-xs md:max-w-[600px] m-auto w-full'>
                <div className='grid grid-cols-1 gap-2 py-2'>
                  <input className='border shadow-lg p-3' type="text" placeholder='Your Name Here' onChange={(e) => handleChange({ ...data, name: e.target.value })} required/>
                </div>
                <textarea 
                  className='border shadow-lg p-3 w-full' 
                  cols={30}
                  rows={5}
                  placeholder='Leave Us Your Feedback Here'
                  onChange={(e) => handleChange({ ...data, message: e.target.value })}
                  required
                >
                </textarea>
                <div className='py-2 md:py-4'>
                <div className='flex flex-row'>
                  <span className='font-white text-yellow-50 pt-1'>Rate our services: </span>
                  <div className='pt-0 pl-3'>
                  <Rating
                    iconSize="l"
                    showOutOf={true}
                    enableUserInteraction={true}
                    onClick={handleRatingChange}
                    ratingInPercent={100}
                  />
                  </div>
                </div>
                <div className='py-2 md:py-4' />
                <Button 
                  type='button'
                  title='Submit'
                  variant='btn_transparent_yellow w-full'
                  onClick={rateMessage}
                  isLoading={isLoading}
                />
                {error && <div className='p-2 text-center text-red-600 dark:text-red-600 text-sm'>{error}</div>}
                {success && <div className='p-2 text-center text-green-600 dark:text-green-600 text-sm'>{success}</div>}
                </div>
              </form>
            </div>
        </div>
      </section>
    </>
  )
}
