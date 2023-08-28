'use client'

import Link from 'next/link';
import React from 'react';
import { MenuContext } from '@/context/MenuProvider';
import NavigationMob from './NavigationMob';


const NavBar: React.FC = () => {
  const { isOpen, setIsOpen } = React.useContext(MenuContext);

  return (
    <div className='flex bg-primary justify-around desktop:py-[2em] mobile:py-[2em] grow'>
      <NavigationMob isOpen={isOpen} setIsOpen={setIsOpen} />
      <h1 className={`text-lg desktop:w-[50%] text-center text-second font-bold mobile:text-[16px]`}>
        <Link href="/" className='hover:text-third transition'>
          ANDERSON REGES
        </Link>
      </h1>
      <ul
        className='flex gap-[3em] desktop:w-[50%] justify-center
        font-bold text-second items-start'
      >
        <Link href="/about" className='mobile:hidden desktop:flex'>
          <li className='transition hover:text-third hover:scale-105 desktop:flex'>About</li>
        </Link>
        <Link href="/projects" className='mobile:hidden desktop:flex'>
          <li className='transition hover:text-third hover:scale-105 desktop:flex'>Projects</li>
        </Link>
        <Link href="/resume" className='mobile:hidden desktop:flex'>
          <li className='transition hover:text-third hover:scale-105 desktop:flex'>Resume</li>
        </Link>
        <div
          className={`group z-50 w-8 h-6 cursor-pointer
          flex-col justify-between items-center flex
          "relative" ${isOpen ? "fixed" : "absolute"} desktop:hidden`}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <span className={`h-1 w-full bg-second rounded-lg cursor-pointer transform transition duration-300 ease-in-out ${isOpen ? "rotate-45 translate-y-2.5" : ""}`} />
          <span className={`h-1 w-full bg-second rounded-lg cursor-pointer transition-all duration-300 ease-in-out ${isOpen ? "hidden" : "w-full"}`} />
          <span className={`h-1 w-full bg-second rounded-lg cursor-pointer transform transition duration-300 ease-in-out ${isOpen ? "-rotate-45 -translate-y-2.5" : ""}`} />
        </div>

      </ul>
    </div>
  );
}

export default NavBar;