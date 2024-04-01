import { FOOTER_CONTACT_INFO, SOCIALS } from '../constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SocialIcon from './social-icons'

const Footer = () => {
  return (
    <footer className="flexCenter bg-blue-900 text-gray-400 pt-20 mb-24">
      <div className="padding-container max-container flex w-full flex-col gap-14">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
          <Link href="/" className="pb-10">
            <Image style={{ color: `white` }} src='/static/favicons/logo.png' alt='logo' width={94} height={40} />
          </Link>

          <div className='flex flex-wrap gap-10 sm:justify-between'>
            <div className="flex flex-col flex-wrap gap-5">
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((link) => (
                  <div
                    key={link.label}
                    className="flex gap-4 md:flex-col lg:flex-row"
                  >
                    <p className="whitespace-nowrap">
                      {link.label}:
                    </p>
                    <p className="medium-18 text-gray-300 pt-[1px]">
                      {link.value}
                    </p>
                  </div>
                ))}
              </FooterColumn>
            </div>

            <div className="flex flex-col gap-5">
              <FooterColumn title={SOCIALS.title}>
                <ul className="regular-14 flex gap-4 text-gray-400">
                  {SOCIALS.links.map((link: any, index) => (
                    <SocialIcon key={index} kind={link.label} href={link.href} size={6} />
                  ))}
                </ul>
              </FooterColumn>
            </div>
          </div>
        </div>

        <div className="border bg-black" />
        <p className="regular-14 w-full text-center text-gray-30 mb-24">{`© ${new Date().getFullYear()}`} Ishaan Infra Projects | All rights reserved</p>
      </div>
    </footer>
  )
}

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
}

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className='flex flex-col gap-5'>
      <h4 className='bold-18 whitespace-nowrap'>{title}</h4>
      {children}
    </div>
  )
}

export default Footer
