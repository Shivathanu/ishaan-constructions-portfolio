import { ReactNode } from 'react'
import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'

interface Props {
  content: any
}

export default function AuthorLayout({ content }: Props) {
  const { name, image, occupation, company, email, twitter, linkedin, github } = content

  return (
    <>
      <div className="main-container padding-container pt-10 divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-20 md:space-y-5">
          <span className="bold-52 lg:bold-88 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600">About</span>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center space-x-2 pt-8">
            {image && (
              <Image
                src={image}
                alt="image"
                width={192}
                height={192}
                className="h-48 w-48 rounded-full"
              />
            )}
            <h3 className="pb-2 pt-4 text-2xl font-bold leading-8 tracking-tight">{name}</h3>
            <div className="text-gray-500 dark:text-gray-400">{occupation}</div>
            <div className="text-gray-500 dark:text-gray-400">{company}</div>
            <div className="mb-3 mt-3 flex space-x-4">
              <SocialIcon kind="mail" href={`mailto:${email}`} size={6} />
              <SocialIcon kind="linkedin" href={linkedin} size={6} />
            </div>
          </div>
          <div className="prose max-w-none pb-8 pt-8 dark:prose-invert xl:col-span-2">
            <p>A strategic professional with 30 years of extensive experience in Project Planning & Management in the Construction sector. His experience mostly involves planning, coordinating and executing complex infrastructure projects at scale.</p>
            <p>His most significant works involves the construction of a water treatment plant at Abu Dhabi, with the state-of-the-art infrastructure. Has Comprehensive experience in civil construction, undertaking operations related to Cost Estimation & Budgeting, Design Reviewing, Procurement & Material Management, Client Interaction and MEP Trade Estimation. He has completed certification in civil work that showcases his broad range of skillsets he possess at his profile. </p>
            <p> His work showcased in this portfolio, proves a testament to his capabilities in his field of work.</p>
          </div>
        </div>
      </div>
    </>
  )
}
