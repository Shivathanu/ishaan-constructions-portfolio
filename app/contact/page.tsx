import Button from '@/components/Button'
import React from 'react'

export default function Page() {
  return (
    <>
      <div className='max-container padding-container flex items-center justify-center h-screen bg-fixed bg-center bg-cover contact-us'>
        {/* Overlay */}
        <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]' />
        <div className='p-5 text-white z-[2]'>
          <span className="bold-52 lg:bold-88 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600">Let's work together</span>
          <form className='max-w-[600px] mt-5 m-auto'>
              <div className='grid grid-cols-2 gap-2'>
                  <input className='border shadow-lg p-3' type="text" placeholder='Name' />
                  <input className='border shadow-lg p-3' type="email" placeholder='Email' />
              </div>
              <input className='border shadow-lg p-3 w-full my-2' type="text" placeholder='Subject' />
              <textarea className='border shadow-lg p-3 w-full' cols={30} rows={10} placeholder='Message'></textarea>
              <div className='mt-4'>
                <Button 
                    type='button'
                    title='Submit'
                    variant='btn_transparent_yellow w-full'
                />
              </div>
          </form>
        </div>
      </div>
    </>
  )
}
