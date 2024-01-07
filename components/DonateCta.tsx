import React from "react";

export const DonateCta = () => {
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
                <button className="w-fit rounded-md px-4 lg:px-7 py-3 bg-fz_maroon text-white font-semibold">
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
  );
};
