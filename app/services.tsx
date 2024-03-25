import ServicesIcon from '@/components/services-icons'
import Image from 'next/image'
import React from 'react'

const Services = () => {
  return (
    <section className='max-container padding-container mx-auto pb-10'>
      <div className='flex flex-col gap-3 font-bold items-center'>
        <h1 className='text-3xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-r pt-10 from-yellow-600 to-gray-400 text-center'>What do we offer?</h1>
        <p className='md:w-1/2 text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-gray-400 py-5'>Whether you&apos;re looking to build your dream home, renovate your office space, or undertake a large-scale commercial project, we have the skills and resources to bring your vision to life.</p>
      </div>
      <div className='flex flex-row gap-4 flex-wrap justify-center'>

        <div className='w-full lg:w-4/12 bg-yellow-500 shadow-xl p-10 md:my-10 flex flex-col items-center'>
          <ServicesIcon kind="architectureDesign" size={10} />
          <h1 className='text-black font-medium text-2xl pt-4 text-center'>Custom Home Construction</h1>
          <ul className='text-black font-semibold items-start mt-5 list-disc pl-5'>
            <li className='pb-5'>From initial design concepts to final construction, we specialize in building custom homes that meet your unique needs and preferences.</li>
            <li className='pb-5'>Our experienced team works closely with you every step of the way to ensure your dream home becomes a reality, reflecting your style, functionality, and budget.</li>
          </ul>
        </div>

        <div className='w-full lg:w-4/12 bg-yellow-500 shadow-xl p-10 md:my-10 flex flex-col items-center'>
          <ServicesIcon kind="buildingPlans" size={10} />
          <h1 className='text-black font-medium text-2xl pt-4 text-center'>Home Renovations and Additions</h1>
          <ul className='text-black font-semibold items-start mt-5 list-disc pl-5'>
            <li className='pb-5'>Transform your existing home into your dream space with our renovation and addition services.</li>
            <li className='pb-5'>Whether you&#39;re looking to update your kitchen, expand your living space, or add a new room, we have the expertise to enhance your home&#39;s beauty, functionality, and value.</li>
          </ul>
        </div>

        <div className='w-full lg:w-4/12 bg-yellow-500 shadow-xl p-10 md:my-10 flex flex-col items-center'>
        <ServicesIcon kind="estimates" size={10} />
          <h1 className='text-black font-medium text-2xl pt-4 text-center'>Interior Remodeling</h1>
          <ul className='text-black font-semibold items-start mt-5 list-disc pl-5'>
            <li className='pb-5'>Give your home a fresh new look and feel with our interior remodeling services.</li>
            <li className='pb-5'>From minor updates to complete overhauls, we specialize in renovating kitchens, bathrooms, basements, and more, creating spaces that are stylish, comfortable, and functional.</li>
          </ul>
        </div>

        <div className='w-full lg:w-4/12 bg-yellow-500 shadow-xl p-10 md:my-10 flex flex-col items-center'>
          <ServicesIcon kind="renovation" size={10} />
          <h1 className='text-black font-medium text-2xl pt-4 text-center'>Exterior Improvements</h1>
          <ul className='text-black font-semibold items-start mt-5 list-disc pl-5'>
            <li className='pb-5'>Enhance your home&#39;s curb appeal and outdoor living spaces with our exterior improvement services.</li>
            <li className='pb-5'>We offer a range of services, including siding replacement, roof repairs, deck construction, landscaping, and more, to beautify and protect your home&#39;s exterior.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Services
