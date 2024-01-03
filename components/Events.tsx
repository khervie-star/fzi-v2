import React from "react";
import { FaArrowRightFromBracket, FaArrowRightLong } from "react-icons/fa6";

const event_card =
  "w-full bg-[#C44B6B] px-10 py-8 rounded-[20px] flex items-center justify-between gap-[20px]";

export const Events = () => {
  return (
    <>
      <section className="w-full bg-white">
        <div className="container mx-auto px-5 py-8 lg:p-[100px]">
          <div className="flex gap-4 items-center mb-8">
            <p className="text-[40px] text-fz_black_2 font-outfit font-medium">
              Our Events
            </p>
            <div className="flex-1 w-full h-[1px] bg-[#E5E5E5]" />
          </div>
          <div className="grid gap-4 lg:gap-8 md:grid-cols-2">
            <div className={event_card}>
              <div className="flex gap-5 items-start">
                <div className="flex flex-col text-fz_black_2 font-medium font-nunito_sans">
                  <p className="text-[32px]">13</p>
                  <p className="text-base">Apr</p>
                </div>
                <div className="flex flex-col text-fz_black_2 font-medium">
                  <p className="text-fz_black_2 font-nunito_sans uppercase font-semibold">
                    Next Events
                  </p>
                  <h2 className="text-[28px] font-bold text-fz_black_2 font-outfit">
                    A day with our wonderful children{" "}
                  </h2>
                </div>
              </div>
              <div>
                <div className="w-14 h-14 rounded-full bg-white flex justify-center items-center text-[18px] cursor-pointer">
                  <FaArrowRightLong />
                </div>
              </div>
            </div>
            <div className={event_card}>
              <div className="flex gap-5 items-start">
                <div className="flex flex-col text-fz_black_2 font-medium font-nunito_sans">
                  <p className="text-[32px]">25</p>
                  <p className="text-base">Jun</p>
                </div>
                <div className="flex flex-col text-fz_black_2 font-medium">
                  <p className="text-fz_black_2 font-nunito_sans uppercase font-semibold">
                    Next Events
                  </p>
                  <h2 className="text-[28px] font-bold text-fz_black_2 font-outfit">
                    Seminar: Caring for children with autism
                  </h2>
                </div>
              </div>
              <div>
                <div className="w-14 h-14 rounded-full bg-white flex justify-center items-center text-[18px] cursor-pointer">
                  <FaArrowRightLong />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
