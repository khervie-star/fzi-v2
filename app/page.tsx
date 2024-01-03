import Image from "next/image";
import { ArrowDownIcon } from "../public/assets/Icons";
import { FaCirclePlay, FaInstagram, FaTwitter } from "react-icons/fa6";
import iita from "../public/assets/Images/iita.png";
import qct from "../public/assets/Images/qct.png";
import harvest_plus from "../public/assets/Images/harvest_plus.png";
import oyo from "../public/assets/Images/oyo.png";
import aovc from "../public/assets/Images/aovc.png";

const partner_logo =
  "relative w-24 h-auto aspect-[1] object-contain text-center mx-auto";

export default function Home() {
  return (
    <main>
      <section className="flex flex-col h-full lg:h-[70vh] box-border bg-white bg-hero bg-no-repeat bg-center bg-cover relative font-outfit">
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
      <section className="w-full container mx-auto px-[20px] lg:px-[100px]">
        <div className="my-8 flex items-center gap-6">
          <p className="font-nunito_sans font-bold leading-[normal] tracking-[2px] uppercase text-[#1D2130]">
            Our partners
          </p>
          <div className="flex-1 h-[1px] bg-[#E5E5E5]" />
        </div>
        <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
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
    </main>
  );
}
