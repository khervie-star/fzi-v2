import Image from "next/image";
import React from "react";
import { Tab } from "@headlessui/react";
import { FaCopy } from "react-icons/fa6";

const Donate = () => {
  return (
    <>
      <section className="w-full bg-fz_maroon_light">
        <div className="w-full container mx-auto px-[20px] py-[32px] lg:p-[100px]">
          <div className="flex justify-between items-center lg:gap-[100px] font-outfit">
            <div className="flex-1">
              <p className="section_title">Donate</p>
              <h2 className="text-fz_black text-[56px] font-bold leading-[120%] mb-4">
                Making a donation for our children.
              </h2>
              <p className="text-[#1D2130]/70 leading-[160%]">
                Frontida Zois Initiative projects are laudable but also cost
                effective. We are hereby soliciting your support (Financial and
                material resources) to execute our programs.
              </p>
            </div>
            <div className="flex-1">
              <div className="flex flex-col gap-[20px] lg:gap-[32px]">
                <Image src="" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="form bg-white">
        <div className="w-full container mx-auto px-[20px] py-[32px] lg:p-[100px]">
          <div className="flex justify-between items-start lg:gap-[100px] font-outfit">
            <div className="flex-1">
              <h2 className="font-bold text-[50px]">How you can contribute</h2>

              <p className="text-fz_text_grey font-light">
                We accept donations by transfer into our official bank account
              </p>
              <div className="grid grid-cols-2 gap-6 mt-10">
                <div>
                  <p className="font-bold text-[20px]">Bank Name</p>
                  <div className="flex items-center gap-2">
                    <p>Sterling Bank</p>
                    <FaCopy className="text-[#2a952ab1] cursor-pointer" />
                  </div>
                </div>
                <div>
                  <p className="font-bold text-[20px]">Bank Account Number</p>
                  <div className="flex items-center gap-2">
                    <p>0501618615</p>
                    <FaCopy className="text-[#2a952ab1] cursor-pointer" />
                  </div>
                </div>
                <div>
                  <p className="font-bold text-[20px]">Account Name</p>
                  <div className="flex items-center gap-2">
                    <p>Frontida Zois Initiative </p>
                    <FaCopy className="text-[#2a952ab1] cursor-pointer" />
                  </div>
                </div>
                <div>
                  <p className="font-bold text-[20px]">Bank Account Type</p>
                  <div className="flex items-center gap-2">
                    <p>Current</p>
                    <FaCopy className="text-[#2a952ab1] cursor-pointer" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <h2 className="font-bold text-[50px]">What you get</h2>
              <p>A sponsor stands the benefit of the following:</p>
              <ul className="text-fz_text_grey font-nunito_sans flex flex-col gap-4 list-disc list-inside mt-8">
                <li>Named after a sponsored project.</li>
                <li>
                  Feature in FZI Award Summit- Show case special documentaries
                  and/or videos of your institution’s/company’s/orgainsation’s
                  work as a way of advertising/marketing what you do (on your
                  approval).
                </li>
                <li>
                  Feature your program/work in FZI publications, News Letter and
                  Journal on your approval
                </li>
                <li>
                  Showcase on approval you/your institution as{" "}
                  <span className="font-bold text-fz_black">
                    “TECHNICAL PARTNER”
                  </span>{" "}
                  in the alleviation of poverty, hunger and illiteracy in the
                  society.
                </li>
              </ul>
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

export default Donate;
