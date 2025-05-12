import React from "react";
import Marquee from "react-fast-marquee";
import FooterLinkSection from "./FooterLinkSection";
import {
  RiDribbbleLine,
  RiFacebookFill,
  RiFacebookLine,
  RiInstagramLine,
  RiLinkedinFill,
  RiLinkedinLine,
  RiTwitterXLine,
} from "@remixicon/react";
import Image from "next/image";
import { services } from "@/utils/fakeData/serviceList";

const Footer = () => {
  return (
    <div>
      <div className="bg-[#3B82F6] py-4  uppercase">
        {/* service 1  */}
        <Marquee direction="left" pauseOnHover={true} speed={90}>
          {services?.map((service, index) => (
            <div key={index} className="mx-4 flex space-x-3">
              <Image
                src="/images/footer/serviceIcon.png"
                alt="logo"
                width={21}
                height={32}
              />
              <span className="text-white-base text-[20px] font-bold">
                {service}
              </span>
            </div>
          ))}
        </Marquee>
      </div>

      {/* Footer  */}
      <div className="bg-[#18181B]">
        <div className="container py-14 grid md:grid-cols-12 grid-cols-1 gap-6 text-white w-full">
          <div className=" md:col-span-5 ">
            <div className="flex items-center space-x-4">
              <Image
                src="/images/footer/footerLogo.png"
                alt="logo"
                width={26}
                height={40}
              />
              <Image
                src="/images/footer/webFooter.png"
                alt="logo"
                width={92}
                height={40}
              />
            </div>
            <div className="mt-10">
              <p className="text-[#FAFAFA] font-medium text-[16px] w-full max-w-[410px]">
                Solvex is a digital agency dedicated to creating innovative,
                user-centered designs for startups and businesses. We turn your
                vision into reality with engaging, responsive, and modern
                design.
              </p>
              <div className="mt-10">
                <h4 className="w-fit  border-b pb-3 border-border-base">
                  Follow Us
                </h4>

                <div className="mt-6 flex items-center space-x-3">
                  <div className="footer-social-icon">
                    <RiFacebookFill size={20} />
                  </div>
                  <div className="footer-social-icon">
                    <RiInstagramLine size={20} />
                  </div>
                  <div className="footer-social-icon">
                    <RiLinkedinFill size={20} />
                  </div>
                  <div className="footer-social-icon">
                    <RiTwitterXLine size={20} />
                  </div>
                  <div className="footer-social-icon">
                    <RiDribbbleLine size={20} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Special links  */}
          <div className=" md:col-span-2  md:mt-0 mt-10">
            <FooterLinkSection
              title="Special links"
              links={[
                "Case Studies",
                "Client Testimonials",
                "Blogs",
                "Careers",
                "Privacy Policy",
                "Terms & Conditions",
              ]}
            />
          </div>
          {/* quick links  */}
          <div className=" md:col-span-2 md:mt-0 mt-10">
            <FooterLinkSection
              title="Quick links"
              links={[
                "Home",
                "Services",
                "Portfolio",
                "Contact Us",
                "About Us",
                "Support",
              ]}
            />
          </div>
          {/* Subscribe newsletter  */}
          <div className=" md:col-span-3 md:mt-0 mt-10">
            <h2 className="text-[#FAFAFA] font-bold text-lg w-fit border-b pb-1 uppercase border-[#3B82F6]">
              Subscribe newsletter
            </h2>

            <div className="mt-10 space-y-4">
              <div className="bg-[#27272A] h-14 border border-[#3F3F46] w-full max-w-[334px] flex items-center justify-between px-2 py-2 rounded-lg">
                <input
                  type="email"
                  placeholder="Email address"
                  className="bg-transparent text-[#A1A1AA] text-[16px] font-medium placeholder-[#A1A1AA] outline-none "
                />
                <button className="bg-[#3B82F6] px-4 py-2 rounded-lg uppercase text-[#FFF] font-medium">
                  Sign Up
                </button>
              </div>
            </div>

            <div className="mt-10">
              <h4 className="text-[#FAFAFA] md:text-start text-center uppercase font-bold text-[16px]">
                we are available{" "}
              </h4>
              <p className="mt-1 text-[#D4D4D8] md:text-start text-center font-medium text-sm">
                Mon-sat - 9.00 am to 7.00 pm{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="">
          <p className="text-[#D4D4D8] border-t border-[#3F3F46] py-6 text-sm font-medium text-center">
            © 2025 Solvex. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
