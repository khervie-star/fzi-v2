"use client";

import React, { Fragment } from "react";
import Link from "next/link";
import { Dialog, Transition } from "@headlessui/react";
import { FaXmark } from "react-icons/fa6";

const input =
  "border-b border-solid border-fz_black bg-transparent p-2 pl-0 w-full font-outfit";

export const DonateCta = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <section className="w-full bg-white">
      <div className="container mx-auto px-[20px] py-[32px] lg:p-[100px]">
        <div className="relative w-full h-[350px] lg:h-[500px] bg-donate_cta bg-no-repeat bg-center bg-cover rounded-[20px] font-outfit lg:p-16 flex items-center lg:gap-12">
          <div className="overlay absolute w-full h-full top-0 left-0 bg-[rgba(0,0,0,0.75)] rounded-[20px]" />
          <div className="relative w-full h-full flex justify-center items-center text-center">
            <div>
              <h6 className="text-[24px] lg:text-[48px] text-white font-bold font-outfit mb-3 w-[75%] mx-auto">
                You can contribute to provide a place for children with special
                needs!
              </h6>
              <div className="w-full flex-col lg:flex-row flex justify-center items-center gap-6 mt-10">
                <button
                  className="w-fit rounded-md px-4 lg:px-7 py-3 bg-fz_maroon text-white font-semibold"
                  onClick={() => setIsOpen(true)}>
                  Join as a volunteer
                </button>
                <Link
                  className="rounded-md px-4 lg:px-7 py-3 bg-white text-fz_maroon font-semibold"
                  href={"/donate"}>
                  Donate
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50">
        {/* The backdrop, rendered as a fixed sibling to the panel container */}
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

        {/* Full-screen container to center the panel */}
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          {/* The actual dialog panel  */}
          <Dialog.Panel className="mx-auto w-[640px] max-h-full rounded-[8px] bg-white p-6 lg:p-8">
            <Dialog.Title
              className={"w-full flex items-center justify-between mb-4"}>
              <h2 className="text-[24px] lg:text-[40px] font-bold text-fz_black_2 leading-[140%] font-outfit">
                Join as a volunteer
              </h2>

              <button
                className="w-8 h-8 rounded-[4px] bg-fz_maroon text-white flex items-center justify-center border-none"
                onClick={() => setIsOpen(false)}>
                <FaXmark />
              </button>
            </Dialog.Title>
            <p className="text-[14px] font-nunito_sans text-[#525560] mb-9">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspen
              varius enim in eros elementum tristique.{" "}
            </p>
            <div>
              <form>
                <div className="w-full flex flex-col lg:flex-row items-center lg:gap-5 mb-6">
                  <div className="w-full flex-1 mb-6 lg:mb-0">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      className={input}
                    />
                  </div>
                  <div className="w-full flex-1">
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      className={input}
                    />
                  </div>
                </div>
                <div className="w-full flex-1 mb-6 lg:mb-0">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className={input}
                  />
                </div>
                <div className="flex flex-col lg:flex-row items-center lg:gap-5 mb-6">
                  <textarea
                    name="message"
                    placeholder="Message"
                    className={input}
                    rows={4}
                  />
                </div>
                <div className="w-full text-center">
                  <button className="bg-fz_maroon rounded-md px-4 lg:px-6 py-2 text-white font-outfit  mt-6">
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            {/* ... */}
          </Dialog.Panel>
        </div>
      </Dialog>
    </section>
  );
};
