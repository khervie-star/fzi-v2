import Image from "next/image";
import React from "react";
import { FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa6";

const About = () => {
  return (
    <>
      <section className="w-full bg-white">
        <div className="container mx-auto px-[20px] py-[32px] lg:p-[100px]">
          <div className="flex lg:gap-[100px] font-outfit">
            <div className="w-2/3">
              <p className="section_title">Know About Us</p>
              <h2 className="text-fz_black text-[56px] font-bold leading-[120%] mb-4">
                We are a non-governmental organization
              </h2>
            </div>
            <div className="w-1/3">
              <p className="text-fz_black font-bold text-[20px] mb-2">
                Our Objectives
              </p>
              <ul className="text-fz_black/70 flex flex-col gap-3 list-disc">
                <li>
                  To enhance economic empowerment of communities where the
                  organization operates
                </li>
                <li>
                  To foster peace and mange conflict in communities of
                  operation.
                </li>
                <li>
                  To engage evolving best practices in disciplines related to
                  the organization’s vision and domesticate such in communities
                  of interest.
                </li>
                <li>
                  To provide advocacy on health related matters to individual
                  and communities of operation.
                </li>
                <li>
                  To build partnership with bodies and stakeholders with
                  relevant expertise in area of interest of the organization
                  both at local and international platform.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-fz_maroon_light">
        <div className="container mx-auto px-[20px] py-[32px] lg:p-[100px]">
          <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-[100px] font-outfit">
            <div className="">
              <p className="text-fz_black font-bold text-[20px] mb-2">
                Our Vision
              </p>
              <p className="text-fz_black/70">
                To combat hunger, poverty and illiteracy in communities.
              </p>
            </div>
            <div className="">
              <p className="text-fz_black font-bold text-[20px] mb-2">
                Our Mission
              </p>
              <p className="text-fz_black/70">
                To empower, educate and conduct researches to sustainably
                enhance the lives people in the household and communities as
                well as tackle critical social issues, promote peace and foster
                economic growth.
              </p>
            </div>
            <div className="">
              <p className="text-fz_black font-bold text-[20px] mb-2">
                Our Goal
              </p>
              <p className="text-fz_black/70">
                To boost human productivity, enhance peace process among
                families and promote development of communities through
                dialogue, advocacy, sensitization, technology, arts, sports,
                culture and data driven approaches.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="container mx-auto px-[20px] py-[32px] lg:p-[100px]">
          <div className="w-full h-full bg-fz_maroon text-white rounded-[20px]  lg:p-16 flex items-center lg:gap-12">
            <div className="flex-1">
              <h6 className="text-[20px] font-semibold mb-3 font-outfit">
                The Context of our Work
              </h6>
              <p className="leading-[160%] font-nunito_sans">
                Frontida Zois Initiative got its name from Greek origin, meaning
                Life Care- Initiative. It is a community based non-governmental
                charity organization, founded in 2019 and registered with
                Nigeria Corporate Affairs Commission (CAC) in March 6th 2020
                with incorporated trustees&apos; number 145337. FZI is governed
                by a board of trustees, managed by an executive committee
                supported by staff and volunteers who implement programs and
                projects. The organization works in Nigeria. The catchment areas
                consist of mix urban, suburban and rural settings.
              </p>
            </div>
            <div className="flex-1 relative h-[350px] w-full rounded-[20px]">
              <Image
                src=""
                alt=""
                fill
                className="h-[350px] w-full rounded-[20px]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
          <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-fz_black_2 font-outfit dark:text-white">
              Meet our team
            </h2>
            <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam,
              itaque illum! Voluptates aut dolor quibusdam a maxime, dolorem,
            </p>
          </div>
          <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
            <div className="text-center text-gray-500 dark:text-gray-400">
              <img
                className="mx-auto mb-4 w-36 h-36 rounded-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                alt="Bonnie Avatar"
              />
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">Petra O. Ogunfowokan</a>
              </h3>
              <p className="font-outfit">CEO/Founder</p>
              <ul className="flex justify-center mt-4 space-x-4 text-fz_black_2/80 text-[21px]">
                <li>
                  <a href="#" className="hover:text-fz_black_2">
                    <FaFacebook />
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-fz_black_2">
                    <FaLinkedin />
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-fz_black_2">
                    <FaWhatsapp />
                  </a>
                </li>
              </ul>
            </div>
            <div className="text-center text-gray-500 dark:text-gray-400">
              <img
                className="mx-auto mb-4 w-36 h-36 rounded-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                alt="Bonnie Avatar"
              />
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">Emmanuel Taiwo Oladipo</a>
              </h3>
              <p className="font-outfit">
                Monitoring, Evaluation, Accountability & Learning (MEAL) Officer
              </p>
              <ul className="flex justify-center mt-4 space-x-4 text-fz_black_2/80 text-[21px]">
                <li>
                  <a href="#" className="hover:text-fz_black_2">
                    <FaFacebook />
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-fz_black_2">
                    <FaLinkedin />
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-fz_black_2">
                    <FaWhatsapp />
                  </a>
                </li>
              </ul>
            </div>
            <div className="text-center text-gray-500 dark:text-gray-400">
              <img
                className="mx-auto mb-4 w-36 h-36 rounded-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                alt="Bonnie Avatar"
              />
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">Olatunji Folashade Janet</a>
              </h3>
              <p className="font-outfit">FInance Officer</p>
              <ul className="flex justify-center mt-4 space-x-4 text-fz_black_2/80 text-[21px]">
                <li>
                  <a href="#" className="hover:text-fz_black_2">
                    <FaFacebook />
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-fz_black_2">
                    <FaLinkedin />
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-fz_black_2">
                    <FaWhatsapp />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16 mt-32">
            <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-fz_black_2 font-outfit dark:text-white">
              Volunteers
            </h2>
          </div>
          <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 font-nunito_sans">
            <div className="text-center text-gray-500 dark:text-gray-400">
              <h3 className="mb-1 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">Oloyede Tobiloba</a>
              </h3>
            </div>
            <div className="text-center text-gray-500 dark:text-gray-400">
              <h3 className="mb-1 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">Usman Popoola</a>
              </h3>
            </div>
            <div className="text-center text-gray-500 dark:text-gray-400">
              <h3 className="mb-1 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">Emmanuel Kwesi Hervie</a>
              </h3>
            </div>
            <div className="text-center text-gray-500 dark:text-gray-400">
              <h3 className="mb-1 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">Karen Hervie</a>
              </h3>
            </div>
            <div className="text-center text-gray-500 dark:text-gray-400">
              <h3 className="mb-1 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">Esther Olutomisin Faloore</a>
              </h3>
            </div>
            <div className="text-center text-gray-500 dark:text-gray-400">
              <h3 className="mb-1 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">Ajala Toluwanimi Mc-Daniel</a>
              </h3>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="container mx-auto px-[20px] py-[32px] lg:p-[100px]">
          <div className="relative w-full h-[350px] lg:h-[500px] bg-donate_cta bg-no-repeat bg-center bg-cover rounded-[20px] font-outfit lg:p-16 flex items-center lg:gap-12">
            <div className="overlay absolute w-full h-full top-0 left-0 bg-[rgba(0,0,0,0.75)] rounded-[20px]" />
            <div className="relative w-full h-full flex justify-center items-center text-center">
              <div>
                <h6 className="text-[48px] text-white font-bold font-outfit mb-3 w-[75%] mx-auto">
                  You can contribute to provide a place for children with
                  special needs!
                </h6>
                <div className="w-full flex justify-center gap-6 mt-10">
                  <button className="rounded-md px-4 lg:px-7 py-3 bg-fz_maroon text-white font-semibold">
                    Join as a volunteer
                  </button>
                  <button className="rounded-md px-4 lg:px-7 py-3 bg-white text-fz_maroon font-semibold">
                    Donate
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
