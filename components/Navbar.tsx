import { EB_Garamond } from 'next/font/google';

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
        <li className='transition hover:text-third hover:scale-105'>About</li>
        <li className='transition hover:text-third hover:scale-105'>Projects</li>
        <li className='transition hover:text-third hover:scale-105'>Resume</li>
        <li className='transition hover:text-third hover:scale-105'>Contact</li>
      </ul>
    </div>
  );
}

export default NavBar;