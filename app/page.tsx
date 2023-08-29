import Image from "next/image";
import Link from "next/link";
import profileImg from '@/public/profile.jpg'
import NavBar from "@/components/Navbar";
import { FaGithub, FaLinkedin, FaCoffee } from 'react-icons/fa';
import { MdAlternateEmail } from 'react-icons/md';
import { RiWhatsappFill } from 'react-icons/ri';
import DiscordHover from "@/components/DiscordHover";
import Footer from "../components/footer";

const HomePage: React.FC = () => {
  return (
    <main
      className="flex flex-col bg-primary desktop:landscape:h-screen
      mobile:h-screen mobile:landscape:h-full laptop:landscape:h-screen"
    >
      <NavBar />
      <div className="flex flex-col items-center box-content mt-[16px] mb-[32px] px-5 grow">
        <Image
          src={profileImg}
          alt="profile-picture"
          className="rounded-full mobile:w-[100px] desktop:w-[200px]"
        />
        <h1
          className="text-second font-bold desktop:text-3xl mobile:text-2xl mt-[20px] mb-[5px]"
        >
          Anderson Reges
        </h1>
        <h1
          className="text-second font-bold desktop:text-2xl mobile:text-xl mobile:text-center mt-[10px] mb-[5px]"
        >
          Full Stack Web Developer and Technology Enthusiast
        </h1>
        <ul
          className="flex mobile:flex-wrap desktop:gap-[2.3em] h-[48px]
          desktop:w-[40%] justify-center mobile:gap-[1.2em] mobile:w-full
          mt-[30px] mb-[10px]"
        >
          <li>
            <Link href="https://github.com/Anderson-Reges">
              <FaGithub className='transition text-second hover:text-third hover:scale-110' size="40px" />
            </Link>
          </li>
          <li>
            <Link href="https://www.linkedin.com/in/anderson-reges/">
              <FaLinkedin className='transition text-second hover:text-third hover:scale-110' size="40px" />
            </Link>
          </li>
          <li>
            <DiscordHover />
          </li>
          <li>
            <Link href="mailto:andersonreges76@gmail.com">
              <MdAlternateEmail className='transition text-second hover:text-third hover:scale-110' size="40px" />
            </Link>
          </li>
          <li>
            <Link href="https://www.buymeacoffee.com/andersonreges">
              <FaCoffee className='transition text-second hover:text-third hover:scale-110' size="40px" />
            </Link>
          </li>
          <li>
            <Link href="https://wa.me/5588993408548">
              <RiWhatsappFill className='transition text-second hover:text-third hover:scale-110' size="40px" />
            </Link>
          </li>
        </ul>
      </div>
      <Footer />
    </main>
  );
}

export default HomePage;