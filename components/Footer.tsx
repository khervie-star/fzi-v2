import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-fz_black w-full text-white">
      <div className="container mx-auto lg:p-[100px] px-[20px] py-[32px]">
        <div className="flex flex-col gap-[20px]">
          <div className="w-full flex flex-col-reverse lg:flex-row">
            <div className="flex-1 grid grid-cols-1 lg:grid-cols-4 items-start gap-[28px]">
              <div>LOGO</div>
              <div className="">
                <ul>
                  <p>Home</p>
                  <li>About us</li>
                  <li>Team</li>
                  <li>What we do</li>
                  <li>Contact</li>
                </ul>
              </div>
              <div className="">
                <ul>
                  <p>More</p>
                  <li>Projects</li>
                  <li>Events</li>
                  <li>Donate</li>
                  <li>Blog</li>
                </ul>
              </div>
              <div className="">
                <ul>
                  <p>Connect</p>
                  <li>Facebook</li>
                  <li>Twitter</li>
                  <li>Instagram</li>
                  <li>WhatsApp</li>
                </ul>
              </div>
            </div>
            <div className="flex-1">
              <h2 className="w-full lg:w-[440px] mb-8 text-[40px] font-bold">
                Subscribe to get latest updates
              </h2>
            </div>
          </div>
          <div>
            <Link href={"/"}></Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
