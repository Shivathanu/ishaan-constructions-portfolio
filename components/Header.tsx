'use client';
import headerNavLinks from '@/data/headerNavLinks'
import Image from 'next/image'
import Link from 'next/link'
import Button from './Button'
import { useEffect, useState } from 'react'
import { FaPenAlt } from "react-icons/fa";
import MobileNav from './MobileNav';

export default function Header() {
    const [color, setColor] = useState('transparent')
    const [textColor, setTextColor] = useState('white')
    const [linkColor, setLinkColor] = useState('yellow')
    const [btnColor, setBtnColor] = useState('btn_transparent_yellow')
    const [menuColor, setMenuColor] = useState('white')

    useEffect(() => {
        const changeColor = () => {
          if (window.scrollY >= 90) {
            setColor('white');
            setTextColor('black');
            setLinkColor('black');
            setBtnColor('btn_yellow');
            setMenuColor('black');
          } else {
            setColor('transparent');
            setTextColor('gray-100');
            setLinkColor('yellow');
            setBtnColor('btn_transparent_yellow');
            setMenuColor('white');
          }
        };
        window.addEventListener('scroll', changeColor);
      }, []);

  return (
    <>
        <nav style={{ backgroundColor: `${color}` }} className='fixed left-0 top-0 w-full flexBetween max-container padding-container z-10 mx-25 pb-1 ease-in duration-300'>
            <Link href='/'>
                <Image style={{ color: `white` }} src='/static/favicons/logo.png' alt='logo' width={74} height={30} />
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
                    onClick={() => (window.location.href = '/contact')}
                />
            </div>
            <MobileNav menuColor={menuColor} />
        </nav>
    </>
  )
}