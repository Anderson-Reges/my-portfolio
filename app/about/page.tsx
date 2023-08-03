import NavBar from "@/components/Navbar";
import {
  BiLogoGit, BiLogoTypescript, BiLogoCss3, BiLogoTailwindCss, BiLogoReact, BiLogoPython
} from 'react-icons/bi';
import { FaGithub, FaDocker } from 'react-icons/fa';
import { RiJavascriptFill } from 'react-icons/ri';
import { AiFillHtml5 } from 'react-icons/ai';
import { DiSass } from 'react-icons/di';
import { TbBrandRedux } from 'react-icons/tb';
import {
  SiNodedotjs, SiExpress, SiSequelize,
  SiMysql, SiMongodb, SiJest, SiPytest, SiMocha,
  SiTestinglibrary
} from 'react-icons/si';
import Footer from "@/components/footer";

const about: React.FC = () => {
  return (
    <>
      <NavBar />
      <div
        className="mt-[16px]"
      >
        <section
          className="mx-[225px] pl-[2rem] pr-[2rem]"
        >
          <article>
            <header>
              <h1 className="text-second text-4xl font-bold">About Me</h1>
            </header>
            <p className="text-second text-lg my-[1.112em]">
              Hello! My name is Anderson Reges, I'm currently studying web development and I'm open to new offers to make a difference.
            </p>
            <h1 className="text-second text-4xl font-bold mt-[64px] mb-[32px]">Me</h1>
            <p className="text-second text-lg my-[1.112em]">
              I am extremely curious and passionate about technology. Since I was a child, my passion
              through technology led me to explore the infinite possibilities that a computer
              offers. As a technology enthusiast, I'm always looking for new ways to apply the
              technologies I know in different areas beyond the web. My goal is to expand my
              knowledge and apply those skills in future projects.
            </p>
            <h1 className="text-second text-4xl font-bold mt-[64px] mb-[32px]">My Background</h1>
            <p className="text-second text-lg my-[1.112em]">
              I recently made a career transition, but I was lucky enough to have
              a mentor friend who guided me in this
              process. I have 1 year and 3 months of practical experience in software development and with some projects on Github.
            </p>
            <h1 className="text-second text-4xl font-bold mt-[64px] mb-[32px]">Stuff I Work On</h1>
            <div className="inline-grid grid-cols-7 gap-[2em] w-full">
              <div className="flex flex-col items-center gap-[0.5em]">
                <BiLogoGit className='transition text-second hover:text-third hover:scale-110' size="45px" />
                <p className="text-second">Git</p>
              </div>
              <div className="flex flex-col items-center gap-[0.5em]">
                <FaGithub className='transition text-second hover:text-third hover:scale-110' size="45px" />
                <p className="text-second">Git</p>
              </div>
              <div className="flex flex-col items-center gap-[0.5em]">
                <RiJavascriptFill className='transition text-second hover:text-third hover:scale-110' size="45px" />
                <p className="text-second">JavaScript</p>
              </div>
              <div className="flex flex-col items-center gap-[0.5em]">
                <BiLogoTypescript className='transition text-second hover:text-third hover:scale-110' size="45px" />
                <p className="text-second">TypeScript</p>
              </div>
              <div className="flex flex-col items-center gap-[0.5em]">
                <AiFillHtml5 className='transition text-second hover:text-third hover:scale-110' size="45px" />
                <p className="text-second">HTML5</p>
              </div>
              <div className="flex flex-col items-center gap-[0.5em]">
                <BiLogoCss3 className='transition text-second hover:text-third hover:scale-110' size="45px" />
                <p className="text-second">CSS3</p>
              </div>
              <div className="flex flex-col items-center gap-[0.5em]">
                <DiSass className='transition text-second hover:text-third hover:scale-110' size="45px" />
                <p className="text-second">Sass</p>
              </div>
              <div className="flex flex-col items-center gap-[0.5em]">
                <BiLogoTailwindCss className='transition text-second hover:text-third hover:scale-110' size="45px" />
                <p className="text-second">TailwindCSS</p>
              </div>
              <div className="flex flex-col items-center gap-[0.5em]">
                <BiLogoReact className='transition text-second hover:text-third hover:scale-110' size="45px" />
                <p className="text-second">React</p>
              </div>
              <div className="flex flex-col items-center gap-[0.5em]">
                <TbBrandRedux className='transition text-second hover:text-third hover:scale-110' size="45px" />
                <p className="text-second">Redux</p>
              </div>
              <div className="flex flex-col items-center gap-[0.5em]">
                <SiNodedotjs className='transition text-second hover:text-third hover:scale-110' size="45px" />
                <p className="text-second">Node.js</p>
              </div>
              <div className="flex flex-col items-center gap-[0.5em]">
                <SiExpress className='transition text-second hover:text-third hover:scale-110' size="45px" />
                <p className="text-second">Express.js</p>
              </div>
              <div className="flex flex-col items-center gap-[0.5em]">
                <SiSequelize className='transition text-second hover:text-third hover:scale-110' size="45px" />
                <p className="text-second">Python</p>
              </div>
              <div className="flex flex-col items-center gap-[0.5em]">
                <BiLogoPython className='transition text-second hover:text-third hover:scale-110' size="45px" />
                <p className="text-second">Express.js</p>
              </div>
              <div className="flex flex-col items-center gap-[0.5em]">
                <SiMysql className='transition text-second hover:text-third hover:scale-110' size="45px" />
                <p className="text-second">MySQL</p>
              </div>
              <div className="flex flex-col items-center gap-[0.5em]">
                <SiMongodb className='transition text-second hover:text-third hover:scale-110' size="45px" />
                <p className="text-second">MongoDB</p>
              </div>
              <div className="flex flex-col items-center gap-[0.5em]">
                <SiJest className='transition text-second hover:text-third hover:scale-110' size="45px" />
                <p className="text-second">Jest</p>
              </div>
              <div className="flex flex-col items-center gap-[0.5em]">
                <SiTestinglibrary className='transition text-second hover:text-third hover:scale-110' size="45px" />
                <p className="text-second text-center">Testing Library</p>
              </div>
              <div className="flex flex-col items-center gap-[0.5em]">
                <SiPytest className='transition text-second hover:text-third hover:scale-110' size="45px" />
                <p className="text-second">PyTest</p>
              </div>
              <div className="flex flex-col items-center gap-[0.5em]">
                <SiMocha className='transition text-second hover:text-third hover:scale-110' size="45px" />
                <p className="text-second">Mocha.js</p>
              </div>
              <div className="flex flex-col items-center gap-[0.5em]">
                <FaDocker className='transition text-second hover:text-third hover:scale-110' size="45px" />
                <p className="text-second">Docker</p>
              </div>
            </div>
            <h1 className="text-second text-4xl font-bold mt-[64px] mb-[32px]">Thanks</h1>
            <p className="text-second text-lg my-[1.112em]">
              I always love feedback, so if you want to chat, need help with your projects, feel free to contact me.
            </p>
            <p className="text-second text-lg my-[1.112em]">
              Thanks for reading!
            </p>
            <p className="text-second text-lg my-[1.112em]">
              Follow on LinkedIn
            </p>
          </article>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default about;