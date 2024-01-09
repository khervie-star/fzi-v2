import Link from "next/link";
import Image from "next/image";
import React from "react";

const subtitle_header =
  "text-base lg:text-[18px] text-white font-semibold mb-3 lg:mb-3";

const sub_item = "text-base[14px] lg:text-base text-white/70 font-normal";

export const Footer = () => {
  return (
    <footer className="bg-fz_black_2 w-full text-white">
      <div className="container mx-auto lg:p-[100px] px-[20px] py-[32px]">
        <div className="flex flex-col gap-[20px] font-outfit">
          <div className="w-full flex flex-col-reverse lg:flex-row lg:justify-between mb-4 lg:mb-12">
            <div className="flex-1 grid grid-cols-3 lg:grid-cols-4 items-start gap-[28px] font-outfit">
              <Link href="#" className="-m-1.5 p-1.5 hidden lg:block">
                <span className="sr-only">Frontida Zois Initiative</span>
                <Image
                  className="h-[100px] w-auto"
                  src={"/assets/logo.jpeg"}
                  width={80}
                  height={80}
                  alt=""
                />
              </Link>
              <div className="">
                <ul className="flex flex-col gap-3">
                  <p className={subtitle_header}>Home</p>
                  <li className={sub_item}>
                    <Link href={"/about"}>About us</Link>
                  </li>
                  <li className={sub_item}>
                    <Link href={"/about#team"}>Team</Link>
                  </li>
                  <li className={sub_item}>What we do</li>
                  <li className={sub_item}>
                    <Link href={"/contact"}>Contact</Link>
                  </li>
                </ul>
              </div>
              <div className="">
                <ul className="flex flex-col gap-3">
                  <p className={subtitle_header}>More</p>
                  <li className={sub_item}>Projects</li>
                  <li className={sub_item}>Events</li>
                  <li className={sub_item}>
                    <Link href={"/donate"}>Donate</Link>
                  </li>
                  <li className={sub_item}>
                    <Link href={"#"}>Blog</Link>
                  </li>
                </ul>
              </div>
              <div className="">
                <ul className="flex flex-col gap-3">
                  <p className={subtitle_header}>Connect</p>
                  <li className={sub_item}>
                    <Link target="_blank" href={"https://fb.me/FZInitiative"}>
                      Facebook
                    </Link>
                  </li>
                  <li className={sub_item}>
                    <Link
                      target="_blank"
                      href={"https://twitter.com/FZ_Initiative"}>
                      Twitter
                    </Link>
                  </li>
                  <li className={sub_item}>
                    <Link
                      target="_blank"
                      href={"https://instagram.com/fz_initiative"}>
                      Instagram
                    </Link>
                  </li>
                  <li className={sub_item}>
                    <Link
                      target="_blank"
                      href={
                        "https://www.youtube.com/@frontidazoisinitiative7159"
                      }>
                      YouTube
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex-1 flex lg:justify-end mb-8 lg:mb-0">
              <div>
                <h2 className="w-full lg:w-[440px] text-[21px] lg:text-[40px] font-bold mb-4 lg:mb-8 leading-[1]">
                  Subscribe to get latest updates
                </h2>
                <div className="relative w-full lg:w-[500px] h-[40px] lg:h-[64px]">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your email"
                    className="relative h-full w-full px-4 bg-transparent border border-solid border-[rgba(235,240,249,0.3)] rounded-[4px] placeholder:font-nunito_sans placeholder:text-[14px] lg:placeholder:text-base placeholder:font-normal placeholder:text-[#EBF0F94D]"
                  />
                  <button className="absolute top-0 right-0 h-full w-fit bg-white text-fz_black rounded-[4px] text-[14px] lg:text-base backdrop-blur-2xl px-6 py-3 lg:px-8 lg:py-4">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center text-white/80">
            <p>
              &copy; 2023 -{" "}
              <Link href={"/"} className="font-bold">
                Frontida Zois Initiative
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
