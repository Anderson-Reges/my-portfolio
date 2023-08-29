import Footer from "../../components/footer";
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
          className="desktop:mx-[100px] laptop:mx-[100px] px-[2em]"
        >
          <article className="mobile:w-full flex flex-col items-center">
            <div>
              <header className="desktop:mx-[225px]">
                <h1 className="text-4xl font-bold">Projects</h1>
              </header>
              <p className="text-lg my-[1.112em] desktop:mx-[225px]">
                These are some projects that I developed or are still developing.
              </p>
            </div>
            <ProjectCards />
          </article>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default projects;