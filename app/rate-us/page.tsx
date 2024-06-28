'use client'

import Button from '@/components/Button'
import Rating from '@/components/Rating';
import router from 'next/router';
import React, { useState } from 'react'

export default function Page() {
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({ name: '', message: '', rating: 0, success: '', error: ''});

  const [ratingValue, setRatingValue] = useState(undefined);
  
  async function rateMessage(value) {
    try {
      setRatingValue(value);
      setIsLoading(true)

      if (!data.name) {
        setError('Name is required.');
        throw new Error('Name is required.');
      }

      if (!data.message) {
        setError('Message is required.');
        throw new Error('Message is required.');
      }

      console.log('Message Length:', data.message.length);

      if (data.message.length > 1000) {
        setError('Message should be less than 1000 characters long.');
        throw new Error('Message should be less than 1000 characters long.');
      }
  
      var messageParams = {
        name: data.name,
        rating: value,
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
      setIsLoading(false)
      setSuccess('Thank you for your valuable feedback !')
      setTimeout(() => {
        window.location.href = '/'
      }, 2000);

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
        <div className='text-black z-[2] pt-10 md:pt-20'>
          <p className="bold-40 md:bold-52 lg:bold-80 text-transparent text-center bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600">Tell Us What You Think</p>
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
                <Rating
                  iconSize="l"
                  showOutOf={true}
                  enableUserInteraction={true}
                  onClick={rateMessage}
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
