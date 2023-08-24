import NavMobChildren from "@/interfaces/NavMobChildren";
import Link from "next/link";

const NavigationMob: React.FC<NavMobChildren> = ({ isOpen, setIsOpen }) => {
  return (
    <div
    className={`absolute top-0 left-0 h-screen w-screen bg-primary transform ${isOpen ? "-translate-y-0" : "-translate-y-full"} transition-transform duration-300 ease-in-out filter  `}
    >
      <ul
        className="flex flex-col justify-center items-center h-full gap-[3em] font-bold text-second"
      >
        <Link href="/" onClick={() => setIsOpen(false)}>
          <li className='transition hover:text-third hover:scale-105 desktop:flex'>Home</li>
        </Link>
        <Link href="/about" onClick={() => setIsOpen(false)}>
          <li className='transition hover:text-third hover:scale-105 desktop:flex'>About</li>
        </Link>
        <Link href="/projects" onClick={() => setIsOpen(false)}>
          <li className='transition hover:text-third hover:scale-105 desktop:flex'>Projects</li>
        </Link>
        <Link href="/resume" onClick={() => setIsOpen(false)}>
          <li className='transition hover:text-third hover:scale-105 desktop:flex'>Resume</li>
        </Link>
      </ul>
    </div>
  );
}

export default NavigationMob;