'use client'

import { useEffect, useState } from 'react'
import Link from './Link'
import headerNavLinks from '@/data/headerNavLinks'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const MobileNav = ({ menuColor }) => {
  const [navShow, setNavShow] = useState(false)

  const onToggleNav = () => {
    setNavShow(!navShow)
  }

  return (
    <>
      {/* Mobile Button */}
      <div onClick={onToggleNav} className='block lg:hidden z-10'>
          {navShow ? (
            <AiOutlineClose size={20} style={{ color: menuColor }} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: menuColor }} />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            navShow
              ? 'lg:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
              : 'lg:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex gap-5 justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
          }
        >
          <ul>
          {headerNavLinks.map((link) => (
            <Link 
                onClick={onToggleNav}
                href={link.href} 
                key={link.title}
                className={`regular-20 text-white flexCenter cursor-pointer pb-1.5 p-4
                transition-all hover:font-bold hover:text-white-500 hover:border-b-10 hover:border-white-10`}
            >
                {link.title}
            </Link>
          ))}
          </ul>
        </div>
    </>
  )
}

export default MobileNav
