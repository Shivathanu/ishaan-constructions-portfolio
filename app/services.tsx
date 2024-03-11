import Image from 'next/image'
import React from 'react'

const Services = () => {
  return (
    <div className='max-container padding-container mx-auto'>
      <div className='flex flex-col gap-3 font-bold items-center'>
        <h1 className='text-3xl mt-10'>Services</h1>
        <h1 className='text-4xl mt-5 text-gray-200'>What do we offer?</h1>
        <p className='w-1/2 text-center text-gray-400 mt-5'>We offer a wide range of services tailored to meet the diverse needs of our clients. Whether you're looking to build your dream home, renovate your office space, or undertake a large-scale commercial project, we have the skills and resources to bring your vision to life.</p>
      </div>
      <div className='p-5 flex flex-wrap justify-center items-center'>
        <div className='w-full md:w-3/12 bg-yellow-500 mr-5 shadow-xl p-10 my-3 md:my-10 flex flex-col items-center'>
          <Image className='w-10' src='' alt='card-img-1'/>
          <h1 className='text-black font-medium text-2xl text-center'>Architectural Design</h1>
          <p className='text-black font-semibold w-1/2 text-center mt-5'>Our team of architects specializes in creating unique and functional designs that reflect our clients vision and style.</p>
        </div>


        <div className='w-full md:w-3/12 bg-yellow-500 mr-5 shadow-xl p-10 my-3 md:my-10 flex flex-col items-center'>
          <Image className='w-10' src='' alt='card-img-2'/>
          <h1 className='text-black font-medium text-2xl text-center'>Building Plans</h1>
          <p className='text-black font-semibold w-1/2 text-center mt-5'>We specialize in creating customized building plans that reflect your unique requirements tailored to your needs.</p>
        </div>

        <div className='w-full md:w-3/12 bg-yellow-500 mr-5 shadow-xl p-10 my-3 md:my-10 flex flex-col items-center'>
          <Image className='w-10' src='' alt='card-img-3'/>
          <h1 className='text-black font-medium text-2xl text-center'>Estimates</h1>
          <p className='text-black font-semibold w-1/2 text-center mt-5'>Our estimates are based on a comprehensive evaluation of all project elements, including materials, labor, equipment, and timeline.</p>
        </div>

        <div className='w-full md:w-3/12 bg-yellow-500 mr-5 shadow-xl p-10 my-3 md:my-10 flex flex-col items-center'>
          <Image className='w-10' src='' alt='card-img-5'/>
          <h1 className='text-black font-medium text-2xl text-center'>Renovation Projects</h1>
          <p className='text-black font-semibold w-1/2 text-center mt-5'>Whether it's updating an existing space or transforming it into something entirely new we have the expertise to handle projects of any scale.</p>
        </div>

        <div className='w-full md:w-3/12 bg-yellow-500 mr-5 shadow-xl p-10 my-3 md:my-10 flex flex-col items-center'>
          <Image className='w-10' src='' alt='card-img-5'/>
          <h1 className='text-black font-medium text-2xl text-center'>Construction</h1>
          <p className='text-black font-semibold w-1/2 text-center mt-5'>With our commitment to professionalism, we believe in a construction process that is transparent, efficient, and cost-effective.</p>
        </div>

        <div className='w-full md:w-3/12 bg-yellow-500 mr-5 shadow-xl p-10 my-3 md:my-10 flex flex-col items-center'>
          <Image className='w-10' src='' alt='card-img-6'/>
          <h1 className='text-black font-medium text-2xl text-center'>Consulting Services</h1>
          <p className='text-black font-semibold w-1/2 text-center mt-5'>We offer consulting services to help clients navigate the complexities of the construction process, providing expert advice and guidance every step of the way.</p>
        </div>

      </div>
    </div>
  )
}

export default Services
