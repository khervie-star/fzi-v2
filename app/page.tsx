import Image from "next/image";
import { ArrowDownIcon } from "../public/assets/Icons";
import {
  FaArrowRightLong,
  FaCirclePlay,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa6";
import iita from "../public/assets/Images/iita.png";
import qct from "../public/assets/Images/qct.png";
import harvest_plus from "../public/assets/Images/harvest_plus.png";
import oyo from "../public/assets/Images/oyo.png";
import aovc from "../public/assets/Images/aovc.png";
import { DonateCta } from "../components";

const partner_logo =
  "relative w-24 h-auto aspect-[1] object-contain text-center mx-auto";

const programmes = [
  {
    title: "Agriculture and Livelihoods Zero Hunger Project ",
    time: "Every first sunday of the month",
    img: "",
  },
  {
    title: "Education and Employability",
    time: "Sunday, 9am - 11:30am",
    img: "",
  },
  {
    title: "Care and support for the Vulnerable",
    time: "Sunday, 8am - 9am",
    img: "",
  },
];

export default function Home() {
  return (
    <main>
      <section className="flex flex-col h-full lg:h-[80vh] box-border bg-white bg-hero bg-no-repeat bg-center bg-cover relative font-outfit">
        <div className="w-full h-full flex items-center container mx-auto px-[20px] py-[32px] lg:p-[100px]">
          <div className="overlay absolute w-full h-full top-0 left-0 bg-[rgba(0,0,0,0.75)]" />
          <div className="relative lg:w-[600px]">
            <h2 className="font-bold text-[32px] lg:text-[64px] leading-[120%] text-white mb-4 lg:mb-4">
              &quot;The outcry of the poor cannot wait...&quot;
            </h2>
            <p className="font-light text-white text-[13px] lg:text-base lg:leading-[180%] mb-4 lg:mb-4">
              As an organization, we understand that response to the “outcry of
              the poor cannot wait”, and through our programs, Frontida Zois
              Initiative operates to eliminate the short and long terms costs of
              inaction.
            </p>
            <div className="flex items-center gap-3 lg:gap-8 mt-8">
              <button className="bg-white border-none rounded-md px-4 lg:px-6 py-2 font-medium">
                Learn more{" "}
              </button>
              <button className="bg-transparent text-white flex gap-2 items-center border-none rounded-md \px-4 lg:px-6 py-2 font-medium">
                <FaCirclePlay />
                Play video
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full container mx-auto px-[20px] py-[32px] lg:p-[100px]">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="w-full lg:w-3/5">
            <p className="section_title">Know About Us</p>
            <h2></h2>
            <p className="font-light font-outfit mb-10 text-[13px] md:text-base">
              Hunger, poverty and illiteracy appear very glaring as you move
              from urban to rural communities in Nigeria. All these became more
              intensified with Covid-19 Pandemic, Economic Melt-down Natural
              Disasters like flood overflow, Insurgencies and other emergencies
              in the society. All of these amount to overwhelming pressure on
              the well-being of the poor and vulnerable.
              <br />
              <br />
              Resulting from low response to the needs of the poor and
              vulnerable- we are responding to cost of inaction resulting to
              problems such as hooliganism, human trafficking, smuggling of
              migrants, Drug Abuse, insurgencies, kidnapping, arm robbery,
              fraud, and other social ills in Nigeria.
              <br />
              <br />
              Ultimately, at Frontida Zois Initiative we aim to enable the
              future of Nigeria and Africa at large to be well cared for,
              protected and empowered to nurture economic and productive
              citizens of tomorrow by equipping the future today.
            </p>
            <button className="bg-fz_maroon text-white border-none rounded-md px-6 py-2 font-medium">
              Learn more{" "}
            </button>
          </div>
          <div className="w-full lg:w-2/5">
            <div className="w-full lg:w-[90%] h-[350px] lg:h-[580px] rounded-[20px] relative">
              <div className="overlay absolute w-full h-full top-0 left-0 bg-[rgba(0,0,0,0.75)] rounded-[20px]" />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full container mx-auto px-[20px] py-8 lg:p-[100px]">
        <div className="my-8 flex items-center gap-6">
          <p className="font-nunito_sans font-bold leading-[normal] tracking-[2px] uppercase text-[#1D2130]">
            Our partners
          </p>
          <div className="flex-1 h-[1px] bg-[#E5E5E5]" />
        </div>
        <div className="grid gap-6 lg:gap-16 grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
          <Image src={iita} alt="IITA" className={partner_logo} />
          <Image
            src={qct}
            alt="Queen's Commonwealth Trust"
            className={partner_logo}
          />
          <Image
            src={harvest_plus}
            alt="Harvest Plus"
            className={partner_logo}
          />

          <Image src={oyo} alt="Oyo State" className={partner_logo} />

          <Image
            src={aovc}
            alt="Assocition of Orphans and Vulnerable Children"
            className={partner_logo}
          />
          <Image src={iita} alt="IITA" className={partner_logo} />
        </div>
      </section>

      <section className="w-full bg-fz_maroon_light">
        <div className="container mx-auto px-[20px] lg:p-[100px]">
          <div className="mb-8">
            <p className="font-nunito_sans font-bold leading-[normal] tracking-[2px] uppercase text-[#1D2130]">
              What We Do{" "}
            </p>
          </div>
          <div className="w-full flex flex-col lg:flex-row lg:gap-[50px]">
            <div className="w-full lg:w-2/3">
              <h2 className="text-[48px] text-fz_black_2 font-bold mb-4 font-nunito_sans">
                Thematic Areas
              </h2>
              <p className="text-[#525560] mb-8 font-nunito_sans">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Quidem, aliquid animi, odit itaque corporis architecto harum
                reprehenderit saepe expedita omnis praesentium maiores sint eum!
                Tempore itaque voluptatum at ad incidunt.
              </p>
              <ul className="flex flex-col gap-6">
                <li className="flex items-center gap-6">
                  <Image
                    src={"/assets/Icons/family.svg"}
                    alt=""
                    width={24}
                    height={24}
                  />
                  <div className="flex flex-col gap-2">
                    <p className="text-[20px] lg:text-[24px] font-bold text-fz_black_2 font-outfit">
                      Agriculture and livelihoods
                    </p>
                    <p className="font-nunito_sans text-[#525560]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros.
                    </p>
                  </div>
                </li>
                <li className="flex items-center gap-6">
                  <Image
                    src={"/assets/Icons/family.svg"}
                    alt=""
                    width={24}
                    height={24}
                  />
                  <div className="flex flex-col gap-2">
                    <p className="text-[20px] lg:text-[24px] font-bold text-fz_black_2 font-outfit">
                      Education and Employability
                    </p>
                    <p className="font-nunito_sans text-[#525560]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros.
                    </p>
                  </div>
                </li>
                <li className="flex items-center gap-6">
                  <Image
                    src={"/assets/Icons/family.svg"}
                    alt=""
                    width={24}
                    height={24}
                  />
                  <div className="flex flex-col gap-2">
                    <p className="text-[20px] lg:text-[24px] font-bold text-fz_black_2 font-outfit">
                      Care and Support for the Vulnerable
                    </p>
                    <p className="font-nunito_sans text-[#525560]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros.
                    </p>
                  </div>
                </li>
                <li className="flex items-center gap-6">
                  <Image
                    src={"/assets/Icons/family.svg"}
                    alt=""
                    width={24}
                    height={24}
                  />
                  <div className="flex flex-col gap-2">
                    <p className="text-[20px] lg:text-[24px] font-bold text-fz_black_2 font-outfit">
                      Health & Well-being
                    </p>
                    <p className="font-nunito_sans text-[#525560]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros.
                    </p>
                  </div>
                </li>
                <li className="flex items-center gap-6">
                  <Image
                    src={"/assets/Icons/family.svg"}
                    alt=""
                    width={24}
                    height={24}
                  />
                  <div className="flex flex-col gap-2">
                    <p className="text-[20px] lg:text-[24px] font-bold text-fz_black_2 font-outfit">
                      Organisational Development, Systems Strengthening and
                      Capacity Building
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="w-1/3"></div>
          </div>
        </div>
      </section>

      <section className="w-full container mx-auto px-[20px] py-[32px] lg:p-[100px]">
        <div className="mb-8">
          <p className="section_title">Projects</p>
        </div>
        <h2 className="text-[24px] lg:text-[48px] text-fz_black_2 font-bold mb-4 font-nunito_sans w-full lg:w-[600px] lg:mb-8">
          We are creating a place where children with special needs can thrive
        </h2>
        <div className="grid lg:grid-cols-3 gap-6 md:gap-12">
          {programmes.map((programme, i) => (
            <a
              key={i}
              className="group relative block rounded-xl dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              href="#"
              data-aos="zoom-in-up">
              <div className="flex-shrink-0 relative w-full rounded-xl overflow-hidden h-[350px] before:absolute before:inset-x-0 before:w-full before:h-full before:bg-gradient-to-t before:from-gray-900/[.7] before:z-[1]">
                <Image
                  className="w-full h-full absolute top-0 start-0 object-cover"
                  src={programme.img}
                  alt="Image Description"
                />
              </div>

              <div className="absolute top-0 inset-x-0 z-10">
                <div className="p-4 flex flex-col h-full sm:p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      {/* <Image
                      className="h-[2.875rem] w-[2.875rem] border-2 border-white rounded-full"
                      src={logo}
                      alt="Image Description"
                    /> */}
                    </div>
                    {/* <div className="ms-2.5 sm:ms-4">
                        <h4 className="font-semibold text-white">Gloria</h4>
                        <p className="text-xs text-white/[.8]">Jan 09, 2021</p>
                      </div> */}
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 inset-x-0 z-10">
                <div className="flex flex-col h-full p-4 sm:p-6">
                  <h3 className="text-lg sm:text-3xl font-semibold text-white group-hover:text-white/[.8] font-outfit">
                    {programme.title}
                  </h3>
                  <p className="mt-2 text-white/[.8] font-nunito_sans">
                    {programme.time}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
        <div className="w-full flex justify-center items-center">
          <button className="flex items-center gap-3 border border-fz_maroon border-solid rounded-[8px] text-fz_maroon font-medium font-outfit px-6 py-2 mt-[40px] hover:bg-fz_maroon hover:text-white transition-all duration-300">
            <span>More projects</span>
            <FaArrowRightLong />{" "}
          </button>
        </div>
      </section>
      <DonateCta />
    </main>
  );
}
