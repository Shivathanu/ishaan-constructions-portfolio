'use client';
import Image from 'next/image';
import React from 'react'
import { IconType } from 'react-icons';
import { FaPenAlt } from 'react-icons/fa';

type ButtonProps = {
    type: 'button' | 'submit';
    title: string;
    icon?: string;
    reactIcon?: IconType;
    variant: string;
    onClick?: () => any;
    isLoading?: boolean;
}

const Button = ({ type, title, icon, variant, reactIcon, onClick, isLoading = false }: ButtonProps) => {
  return (
    <button
        className={`flexCenter gap-3 py-2 px-4 border transition-all ${variant} width-fit-content rounded-4xl cursor-pointer focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 hover:shadow-md hover:bg-opacity-90`}
        type={type}
        onClick={onClick}
    >
        {icon && <Image src={icon} alt={title} width={20} height={20} />}
        {reactIcon && <FaPenAlt />}
        {isLoading && <div className='border-black border-solid rounded-full mx-1'>Submitting...</div>}
        {!isLoading && <label className="bold-16 whitespace-nowrap">{title}</label>}
    </button>
  )
}

export default Button;
