'use client'

import Button from '@/components/Button'
import router from 'next/router';
import React, { useState } from 'react'

export default function Page() {
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({ name: '', message: '', rating: 0, success: '', error: ''});
  
  async function rateMessage() {
    try {
      setIsLoading(true)

      if (!data.name) {
        setError('Name is required.');
        throw new Error('Name is required.');
      }

      if (!data.message) {
        setError('Message is required.');
        throw new Error('Message is required.');
      }
  
      var messageParams = {
        name: data.name,
        rating: data.rating,
        quote: data.message
      };
  
      // send post message to the route
      console.log('Message Params: ', messageParams);

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

      console.log('Response: ', response);

      const responseData = await response.json();
      console.log('Response Data: ', responseData);
      setIsLoading(false)
      setSuccess('Thank you for your feedback !')

      // redirect to home page
      window.location.href = '/'
    } catch {
      setIsLoading(false)
      console.log('Error in providing feedback !!!')
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
                {error && <div className='p-2 text-center text-red-600 dark:text-red-600 text-sm'>{error}</div>}
                {success && <div className='p-2 text-center text-green-600 dark:text-green-600 text-sm'>{success}</div>}
                <div className='py-2 md:py-4'>
                <Button 
                  type='button'
                  title='Submit'
                  variant='btn_transparent_yellow w-full'
                  onClick={rateMessage}
                  isLoading={isLoading}
                />
                </div>
              </form>
            </div>
        </div>
      </section>
    </>
  )
}
