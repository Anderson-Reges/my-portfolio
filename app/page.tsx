import Image from "next/image";
import profileImg from '@/public/1690833020210.jpg'
import NavBar from "@/components/Navbar";
import { FaGithub, FaLinkedin, FaCoffee } from 'react-icons/fa';
import { IoLogoDiscord } from 'react-icons/io5'
import { MdAlternateEmail } from 'react-icons/md';
import { RiWhatsappFill } from 'react-icons/ri';
import BuyMeACoffe from "@/components/BuyMeACoffe";

const HomePage: React.FC = () => {
  return (
    <main className="flex flex-col bg-primary h-screen justify-between">
      <NavBar />
      <div className="flex flex-col justify-between items-center gap-[1em]">
        <Image
          src={profileImg}
          alt="profile-picture"
          width={200}
          className="rounded-full"
        />
        <h1 className="text-second font-bold text-3xl">Anderson Reges</h1>
        <h1 className="text-second font-bold text-2xl">Full Stack Web Developer and Technology Enthusiast</h1>
        <div className="flex gap-[2em]">
          <FaGithub className='transition text-second hover:text-third hover:scale-110' size="32px" />
          <FaLinkedin className='transition text-second hover:text-third hover:scale-110' size="32px" />
          <IoLogoDiscord className='transition text-second hover:text-third hover:scale-110' size="32px" />
          <MdAlternateEmail className='transition text-second hover:text-third hover:scale-110' size="32px" />
          <FaCoffee className='transition text-second hover:text-third hover:scale-110' size="32px" />
          <RiWhatsappFill className='transition text-second hover:text-third hover:scale-110' size="32px" />
        </div>
          <BuyMeACoffe />
      </div>
      <div className="flex justify-center h-[80px] items-center">
        <p className="text-second font-extralight">© 2022 - 2023 Anderson Reges · </p>
      </div>
    </main>
  );
}

export default HomePage;