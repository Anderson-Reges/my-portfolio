import { EB_Garamond } from 'next/font/google';

const inter = EB_Garamond({
  subsets: ['latin'],
  weight: ['400']
});

const NavBar: React.FC = () => {
  return (
    <div className='flex justify-around py-[1.2em]'>
      <h1 className={`text-4xl ${inter.className} w-[50%] text-center`}>A.R</h1>
      <ul className='flex gap-[3em] items-center w-[50%] justify-center'>
        <li>About</li>
        <li>Projects</li>
        <li>Resume</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}

export default NavBar;