import Footer from "@/components/Footer";
import NavBar from "@/components/Navbar";
import ProjectCards from "@/components/ProjectCards";

const projects: React.FC = () => {
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
              <h1 className="text-4xl font-bold">Projects</h1>
            </header>
            <p className="text-lg my-[1.112em]">
              These are some projects that I developed or are still developing.
            </p>
            <ProjectCards />
          </article>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default projects;