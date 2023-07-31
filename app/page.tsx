import Image from "next/image";
import profileImg from '@/public/1690833020210.jpg'
import NavBar from "@/components/Navbar";

const HomePage: React.FC = () => {
  return (
    <main className="bg-primary h-screen">
      <NavBar />
      <div className="flex flex-col justify-center items-center gap-[1em]">
        <Image
          src={profileImg}
          alt="profile-picture"
          width={250}
          className="rounded-full"
        />
        <h1 className="text-second font-bold text-3xl">Anderson Reges</h1>
        <h1 className="text-second font-bold text-2xl">Full Stack Web Developer and Technology Enthusiast</h1>
      </div>
    </main>
  );
}

export default HomePage;