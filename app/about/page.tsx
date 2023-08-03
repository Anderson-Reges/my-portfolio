import NavBar from "@/components/Navbar";
import { BiLogoGit } from 'react-icons/bi'

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
            <div className="grid">
              
            </div>
          </article>
        </section>
      </div>
    </>
  );
}

export default about;