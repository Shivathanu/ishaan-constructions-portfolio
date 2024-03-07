'use client';
import headerNavLinks from '@/data/headerNavLinks'
import Image from 'next/image'
import Link from 'next/link'
import Button from './Button'
import { useEffect, useState } from 'react'
import { FaPenAlt } from "react-icons/fa";

export default function Header() {
    const [color, setColor] = useState('transparent')
    const [textColor, setTextColor] = useState('white')
    const [linkColor, setLinkColor] = useState('yellow')
    const [btnColor, setBtnColor] = useState('btn_transparent_yellow')

    useEffect(() => {
        const changeColor = () => {
          if (window.scrollY >= 90) {
            setColor('white');
            setTextColor('black');
            setLinkColor('black');
            setBtnColor('btn_yellow');
          } else {
            setColor('transparent');
            setTextColor('white');
            setLinkColor('yellow');
            setBtnColor('btn_transparent_yellow');
          }
        };
        window.addEventListener('scroll', changeColor);
      }, []);

  return (
    <>
        <nav style={{ backgroundColor: `${color}` }} className='fixed left-0 top-0 w-full flexBetween max-container padding-container z-10 mx-25 py-5 ease-in duration-300'>
            <Link href='/'>
                <Image style={{ color: `${textColor}` }} src='/hilink-logo.svg' alt='logo' width={74} height={30} />
            </Link>
            <ul className='hidden h-full gap-12 sm:flex'>
                {headerNavLinks.map((link) => (
                    <Link 
                        href={link.href} 
                        key={link.title}
                        className={`regular-18 text-${linkColor} flexCenter cursor-pointer pb-1.5
                        transition-all hover:font-bold hover:text-${linkColor}-500 hover:border-b-10 hover:border-${linkColor}-10`}
                    >
                        {link.title}
                    </Link>
                ))}
            </ul>
            <div className='lg:flexCenter hidden'>
                <Button 
                    type='button'
                    title='Get a Quote'
                    variant={btnColor}
                    reactIcon={FaPenAlt}
                />
            </div>
        </nav>
    </>
  )
}