import Link from "next/link";
import React from "react";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaPhone,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa6";

// reused styles
const label = "text-fz_black_2/60 font-bold text-[12px] mb-2";
const input =
  "border-b border-solid border-fz_black bg-transparent p-2 pl-0 w-full font-outfit";

const Contact = () => {
  return (
    <>
      <section className="w-full bg-fz_maroon_light">
        <div className="w-full container mx-auto px-[20px] py-[32px] lg:p-[100px]">
          <div className="flex flex-col lg:flex-row lg:gap-[100px] font-outfit">
            <div className="flex-1">
              <p className="section_title">Contact Us</p>
              <h2 className="text-fz_black text-[32px] lg:text-[56px] font-bold leading-[120%] mb-4">
                We&apos;d love to hear from you
              </h2>
              <p className="text-[#1D2130]/70 leading-[160%] text-[13px] lg:text-base mb-6">
                Have any question in mind or want to enquire? Please feel free
                to contact us through the form or the following details.
              </p>
            </div>
            <div className="flex-1">
              <div className="flex flex-col gap-[20px] lg:gap-[32px]">
                <div>
                  <h6 className="text-[#1D2130] text-[20px] lg:text-[24px] font-bold mb-[10px]">
                    Let&apos;s talk!{" "}
                  </h6>
                  <div className="flex flex-col lg:flex-row gap-3 lg:gap-5 justify-start items-start lg:items-center text-fz_text_grey text-[14px] lg:text-base">
                    <div className="flex items-center gap-2">
                      <FaPhone />
                      <Link href={"tel:8180746707"}>+234(818) 074 6704</Link>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaEnvelope />
                      <Link href={"mailto:mail.com"}>
                        admin@frontidazoisinitiative.org
                      </Link>
                    </div>
                  </div>
                </div>
                <div>
                  <h6 className="text-[#1D2130] text-[20px] lg:text-[24px] font-bold mb-[10px]">
                    Head Office
                  </h6>
                  <p className="text-[14px] lg:text-base text-fz_text_grey">
                    8 Brewery Drive, Lagos, Nigeria.
                  </p>
                </div>
                <div>
                  <h6 className="text-[#1D2130] text-[20px] lg:text-[24px] font-bold mb-[10px]">
                    Branch Office
                  </h6>
                  <p className="text-[14px] lg:text-base text-fz_text_grey">
                    Opp Opolo round about, Yenagoa, Bayelsa, Nigeria
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-5">
                    <Link href="#">
                      <FaFacebook />
                    </Link>
                    <Link href="#">
                      <FaTwitter />
                    </Link>
                    <Link href="#">
                      <FaInstagram />
                    </Link>
                    <Link href="#">
                      <FaWhatsapp />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="form bg-white">
        <div className="w-full lg:w-[65%] container mx-auto px-[20px] py-[32px] lg:p-[100px]">
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
            <div className="w-full flex flex-col lg:flex-row items-center lg:gap-5 mb-6">
              <div className="w-full flex-1 mb-6 lg:mb-0">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className={input}
                />
              </div>
              <div className="w-full flex-1">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className={input}
                />
              </div>
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
      </section>
      <section className="w-full h-[350px] lg:h-[500px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3956.2974929237753!2d3.9175446!3d7.4322955!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1039ed51c6f2bf8f%3A0x2baa9ae9082a5ea0!2sGlory%20Tabernacle%20Ministry!5e0!3m2!1sen!2sng!4v1678534932864!5m2!1sen!2sng"
          width="100%"
          height="100%"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"></iframe>
      </section>
    </>
  );
};

export default Contact;
