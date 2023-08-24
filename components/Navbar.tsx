'use client'

import Link from 'next/link';
import React from 'react';
import { MenuContext } from '@/context/MenuProvider';
import { EB_Garamond } from 'next/font/google';
import NavigationMob from './NavigationMob';

const inter = EB_Garamond({
  subsets: ['latin'],
  weight: ['400']
});

const NavBar: React.FC = () => {
  const { isOpen, setIsOpen } = React.useContext(MenuContext);
  console.log(isOpen)
  return (
    <div className='flex bg-primary justify-around desktop:py-[1.2em] mobile:py-[1.3em]'>
      <NavigationMob isOpen={ isOpen } setIsOpen={ setIsOpen } />
      <h1 className={`text-4xl ${inter.className} desktop:w-[50%] text-center text-second`}>
        <Link href="/" className='hover:text-third transition'>
          A.R
        </Link>
      </h1>
      <ul
        className='flex gap-[3em] items-center desktop:w-[50%] justify-center
        font-bold text-second '
      >
        <Link href="/about">
          <li className='transition hover:text-third hover:scale-105 mobile:hidden desktop:flex'>About</li>
        </Link>
        <Link href="/projects">
          <li className='transition hover:text-third hover:scale-105 mobile:hidden desktop:flex'>Projects</li>
        </Link>
        <Link href="/resume">
          <li className='transition hover:text-third hover:scale-105 mobile:hidden desktop:flex'>Resume</li>
        </Link>
        <li>
          <div className="flex justify-end items-center desktop:hidden">
            <div className="group z-50 relative w-8 h-6 cursor-pointer flex-col justify-between items-center flex" onClick={() => {
              setIsOpen(!isOpen)
            }}>
              <span className={`h-1 w-full bg-second rounded-lg cursor-pointer transform transition duration-300 ease-in-out ${isOpen ? "rotate-45 translate-y-2.5" : ""}`} />
              <span className={`h-1 w-full bg-second rounded-lg cursor-pointer transition-all duration-300 ease-in-out ${isOpen ? "hidden" : "w-full"}`} />
              <span className={`h-1 w-full bg-second rounded-lg cursor-pointer transform transition duration-300 ease-in-out ${isOpen ? "-rotate-45 -translate-y-2.5" : ""}`} />
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;