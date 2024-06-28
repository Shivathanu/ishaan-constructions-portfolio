'use client'

import Button from '@/components/Button'
import React, { useState } from 'react'
import emailjs, { send } from '@emailjs/browser'

export default function Page() {
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({ name: '', email: '', message: '', success: '', error: ''});
  const [emailError, setEmailError] = useState('');
  
  const sendEmail = () => {
    try {
      setIsLoading(true)
      if (!data.email) {
        setError('Email is required.');
        throw new Error('Email is required.');
      } else if (!/\S+@\S+\.\S+/.test(data.email)) {
        setError('Invalid email format.');
        throw new Error('Invalid email format');
      }

      if (!data.name) {
        setError('Name is required.');
        throw new Error('Name is required.');
      }

      if (!data.message) {
        setError('Message is required.');
        throw new Error('Message is required.');
      }
  
      var templateParams = {
        from_name: data.email,
        to_name: 'Admin',
        message: data.message
      };
  
      emailjs.init({
        publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLICKEY,
      });
  
      emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICEID ?? '', 
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATEID ?? '', 
        templateParams
      ).then(
        function (response) {
          setIsLoading(false)
          setSuccess('Your message has been sent successfully. We will get back to you soon.')
        },
        function (err) {
          console.log('FAILED...', err)
          setIsLoading(false)
          setError('Some error occured. Please send me a direct email found in the footer below.')
        },
      );
    } catch {
      setIsLoading(false)
      console.log('Error in sending email!!!')
    }
  }

  const handleChange = (data: any) => {
    setSuccess('')
    setError('')
    setData({ ...data, success: '', error: ''})
  }

  return (
    <>
      <section className='relative max-container padding-container flex items-center justify-center h-screen bg-fixed bg-center bg-cover contact-us'>
        {/* Overlay */}
        <div className='absolute inset-0 top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]' />
        <div className='text-black z-[2] pt-10 md:pt-20'>
          <p className="bold-40 md:bold-52 lg:bold-80 text-transparent text-center bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600">Let&apos;s work together</p>
          <p className='bold-4 md:bold-12 text-gray-300 py-4 text-center'>Ready to bring your construction project to life?</p>
          <p className='bold-4 md:bold-12 text-gray-300 pb-4 text-center'>Contact us today to discuss your vision and discover how we can help.</p>
            <div className='flex flex-wrap'>
              <form className='max-w-xs md:max-w-[600px] m-auto w-full'>
                <div className='grid grid-cols-2 gap-2 py-6'>
                  <input className='border shadow-lg p-3' type="text" placeholder='Your Name Here' onChange={(e) => handleChange({ ...data, name: e.target.value })} required/>
                  <input className='border shadow-lg p-3' type="email" id="email" name="email" placeholder='Email Address' onChange={(e) => handleChange({ ...data, email: e.target.value })} required/>
                  {emailError && <div className='p-2 text-center text-red-600 dark:text-red-600 text-sm'>{emailError}</div>}
                </div>
                <textarea 
                  className='border shadow-lg p-3 w-full' 
                  cols={30} 
                  rows={5}
                  placeholder='Message: Describe the services you require...'
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
                  onClick={sendEmail}
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
