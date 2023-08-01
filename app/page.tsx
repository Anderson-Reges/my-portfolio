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
    <main className="bg-primary h-screen">
      <NavBar />
      <div className="flex flex-col justify-center items-center gap-[1em]">
        <Image
          src={profileImg}
          alt="profile-picture"
          width={200}
          className="rounded-full"
        />
        <h1 className="text-second font-bold text-3xl">Anderson Reges</h1>
        <h1 className="text-second font-bold text-2xl">Full Stack Web Developer and Technology Enthusiast</h1>
        <div className="flex gap-[1em]">
          <FaGithub className='text-second' size="32px" />
          <FaLinkedin className='text-second' size="32px" />
          <IoLogoDiscord className='text-second' size="32px" />
          <MdAlternateEmail className='text-second' size="32px" />
          <FaCoffee className='text-second' size="32px" />
          <RiWhatsappFill className='text-second' size="32px" />
        </div>
        <BuyMeACoffe />
      </div>
    </main>
  );
}

export default HomePage;