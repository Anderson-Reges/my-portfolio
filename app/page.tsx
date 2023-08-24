import Image from "next/image";
import Link from "next/link";
import profileImg from '@/public/profile.jpg'
import NavBar from "@/components/Navbar";
import { FaGithub, FaLinkedin, FaCoffee } from 'react-icons/fa';
import { MdAlternateEmail } from 'react-icons/md';
import { RiWhatsappFill } from 'react-icons/ri';
import DiscordHover from "@/components/DiscordHover";
import Footer from "../components/Footer";

const HomePage: React.FC = () => {
  return (
    <main className="flex flex-col bg-primary h-screen justify-between mobile:h-screen">
      <NavBar />
      <div className="flex flex-col justify-between items-center gap-[1em]">
        <Image
          src={profileImg}
          alt="profile-picture"
          className="rounded-full mobile:w-[150px] desktop:w-[200px]"
        />
        <h1 className="text-second font-bold desktop:text-3xl mobile:text-2xl">Anderson Reges</h1>
        <h1 className="text-second font-bold desktop:text-2xl mobile:text-xl mobile:text-center">Full Stack Web Developer and Technology Enthusiast</h1>
        <div
          className="flex desktop:gap-[2.3em] h-[48px] desktop:w-[40%] justify-center mobile:gap-[1em] mobile:w-full"
        >
          <Link href="https://github.com/Anderson-Reges">
            <FaGithub className='transition text-second hover:text-third hover:scale-110' size="32px" />
          </Link>
          <Link href="https://www.linkedin.com/in/anderson-reges/">
            <FaLinkedin className='transition text-second hover:text-third hover:scale-110' size="32px" />
          </Link>
          <DiscordHover />
          <Link href="mailto:andersonreges76@gmail.com">
            <MdAlternateEmail className='transition text-second hover:text-third hover:scale-110' size="32px" />
          </Link>
          <Link href="https://www.buymeacoffee.com/andersonreges">
            <FaCoffee className='transition text-second hover:text-third hover:scale-110' size="32px" />
          </Link>
          <Link href="https://wa.me/5588993408548">
            <RiWhatsappFill className='transition text-second hover:text-third hover:scale-110' size="32px" />
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default HomePage;