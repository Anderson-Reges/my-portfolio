import Footer from "../../components/footer";
import NavBar from "@/components/Navbar";

const resume: React.FC = () => {
  return (
    <div
      className="
      flex flex-col text-second bg-primary justify-between
      desktop:h-screen mobile:h-screen mobile:landscape:h-full
      tablet:h-screen desktop:landscape:h-screen laptop:landscape:h-screen"
    >
      <NavBar />
      <div
        className="mt-[16px]"
      >
        <section
          className="desktop:mx-[225px] px-[2rem]"
        >
          <article>
            <header>
              <h1 className="text-4xl font-bold">Resume</h1>
            </header>
            <p className="text-second text-lg my-[1.112em]">
              I still don't have professional experience as a developer, but I'm open to new opportunities. if you found my profile interesting, don't be shy, send me a message.
            </p>
            <h1 className="text-second text-3xl font-bold mt-[64px] mb-[32px]">Experiences</h1>
            <table className="text-second border-2 border-second landscape:mb-[30px]">
              <thead>
                <tr className="border-2 border-second">
                  <th 
                    className="border-2 desktop:p-[16px] mobile:p-[2px] landscape:p-[16px] tablet:p-[16px]"
                  >
                    Company
                  </th>
                  <th 
                    className="border-2 desktop:p-[16px] mobile:p-[2px] landscape:p-[16px] tablet:p-[16px]"
                  >
                    Position
                  </th>
                  <th 
                    className="border-2 desktop:p-[16px] mobile:p-[2px] landscape:p-[16px] tablet:p-[16px]"
                  >
                    Sector
                  </th>
                  <th 
                    className="border-2 desktop:p-[16px] mobile:p-[2px] landscape:p-[16px] tablet:p-[16px]"
                  >
                    Year
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-2 border-second">
                  <td 
                    className="border-2 desktop:p-[16px] mobile:p-[2px] landscape:p-[16px] tablet:p-[16px]"
                  >
                    Nosso Atacarejo
                  </td>
                  <td 
                    className="border-2 desktop:p-[16px] mobile:p-[2px] landscape:p-[16px] tablet:p-[16px]"
                  >
                    Store attendant
                  </td>
                  <td 
                    className="border-2 desktop:p-[16px] mobile:p-[2px] landscape:p-[16px] tablet:p-[16px]"
                  >
                    Retail and wholesale
                  </td>
                  <td 
                    className="border-2 desktop:p-[16px] mobile:p-[2px] landscape:p-[16px] tablet:p-[16px]"
                  >
                    2021 - 2022
                  </td>
                </tr>
                <tr className="border-2 border-second">
                  <td 
                    className="border-2 desktop:p-[16px] mobile:p-[2px] landscape:p-[16px] tablet:p-[16px]"
                  >
                    Supermercado Nova Opção
                  </td>
                  <td 
                    className="border-2 desktop:p-[16px] mobile:p-[2px] landscape:p-[16px] tablet:p-[16px]"
                  >
                    Store attendant
                  </td>
                  <td 
                    className="border-2 desktop:p-[16px] mobile:p-[2px] landscape:p-[16px] tablet:p-[16px]"
                  >
                    Retail and wholesale
                  </td>
                  <td 
                    className="border-2 desktop:p-[16px] mobile:p-[2px] landscape:p-[16px] tablet:p-[16px]"
                  >
                    2020 - 2021
                  </td>
                </tr>
              </tbody>
            </table>
          </article>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default resume;