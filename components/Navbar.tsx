import { EB_Garamond } from 'next/font/google';
import Link from 'next/link';

const inter = EB_Garamond({
  subsets: ['latin'],
  weight: ['400']
});

const NavBar: React.FC = () => {
  return (
    <div className='flex justify-around py-[1.2em]'>
      <h1 className={`text-4xl ${inter.className} w-[50%] text-center text-second`}>A.R</h1>
      <ul
        className='flex gap-[3em] items-center w-[50%] justify-center
        font-bold text-second'
      >
        <Link href="/about">
          <li className='transition hover:text-third hover:scale-105'>About</li>
        </Link>
        <Link href="/projects">
          <li className='transition hover:text-third hover:scale-105'>Projects</li>
        </Link>
        <Link href="/resume">
          <li className='transition hover:text-third hover:scale-105'>Resume</li>
        </Link>
        <Link href="/contact">
          <li className='transition hover:text-third hover:scale-105'>Contact</li>
        </Link>
      </ul>
    </div>
  );
}

export default NavBar;