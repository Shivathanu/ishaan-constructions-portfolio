import Link from '@/components/Link'
import Tag from '@/components/Tag'
import Image from 'next/image'
import siteMetadata from '@/data/siteMetadata'
import Button from '@/components/Button'

const MAX_DISPLAY = 5

export default function Home() {
  return (
    <>
      {/* <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Latest
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
          </p>
        </div>
      </div> */}

      {/* <div className='max-container padding-container flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover hero-map'>
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]' />
      <div className='p-5 text-white z-[2] mt-[-10rem]'>
        <h2 className='text-5xl font-bold'>Hi!!</h2>
        <p className='py-5 text-xl'>There</p>
        <button className='px-8 py-2 border'>Book</button>
      </div>
      </div> */}

    <div className='max-container padding-container flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover hero-map'>
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/60 z-[2]'/>
      <div className='relative z-[2] flex flex-1 flex-col xl:w-1/2 ml-10 mt-20 text-white'>
        <Image 
          src="/static/images/camp.svg"
          alt="camp"
          width={50}
          height={50}
          className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
        />
        <h1 className="bold-52 lg:bold-88">Building Dreams into Reality</h1>
        <p className="regular-16 mt-6 text-white xl:max-w-[520px]">
          We want to be on each of your journeys seeking the satisfaction of seeing the incorruptible beauty of nature. We can help you on an adventure around the world in just one app
        </p>

        <div className="flex flex-col w-full py-10 gap-3 sm:flex-row">
          <Button type='button' title='Contact Us' variant='btn_yellow' />
        </div>
      </div>
    </div>
    </>
  )
}
