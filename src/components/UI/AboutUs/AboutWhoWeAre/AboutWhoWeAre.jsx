import React from "react";
import BadgeLabel from "../../BadgeLabel/BadgeLabel";
import Image from "next/image";

const AboutWhoWeAre = () => {
  return (
    <div className="container my-14">
      <BadgeLabel text="Who We Are" />
      <h1 className="text-2xl font-bold text-primary-base mt-6 text-center">
        A Passionate Team of Innovators & Developers.
      </h1>
      <p className="text-[16px] font-medium text-[#71717A] mt-6 text-center w-full max-w-[520px] mx-auto">
        We are a team of dedicated professionals committed to building digital
        solutions that help businesses thrive. With years of experience, we
        deliver cutting-edge websites, applications, and UI/UX designs tailored
        to our clients' needs.
      </p>
      <div className="mt-14">
        <div className=" ">
          <Image
            src="/images/workGallery/team.png"
            alt="workGallery1"
            width={500}
            height={500}
            className="object-cover w-full md:h-[550px] rounded-2xl"
          />
        </div>
      </div>
      <div className="mt-14 ">
        <div className="md:flex items-start space-x-6 md:space-y-0 space-y-12">
          {/* card 1 */}
          <div className="w-full md:text-start text-center">
            <h2 className="text-[#18181B] md:text-[48px] text-[40px] font-black">
              130+
            </h2>
            <h3 className="text-secondary-base md:text-[20px] text-lg font-bold uppercase mt-4">
              Successful Projects
            </h3>
            <p className="text-[#71717A] text-sm font-medium  mt-4">
              From sleek websites to innovative apps — each project is a blend
              of strategy, design, and impact.
            </p>
          </div>
          {/* This thin div acts like the gradient border */}
          <div
            className="w-1 h-48 mt-4 md:block hidden"
            style={{
              background:
                "linear-gradient(180deg, #27272A 0%, rgba(0, 0, 0, 0) 100%)",
            }}
          ></div>
          {/* card 2 */}
          <div className="w-full md:text-start text-center  md:ml-10">
            <h2 className="text-[#18181B] md:text-[48px] text-[40px] font-black">
              45+
            </h2>
            <h3 className="text-secondary-base md:text-[20px] text-lg font-bold uppercase mt-4">
              Creative Minds
            </h3>
            <p className="text-[#71717A] text-sm font-medium  mt-4">
              From sleek websites to innovative apps — each project is a blend
              of strategy, design, and impact.
            </p>
          </div>
          {/* This thin div acts like the gradient border */}
          <div
            className="w-1 h-48 mt-4 md:block hidden"
            style={{
              background:
                "linear-gradient(180deg, #27272A 0%, rgba(0, 0, 0, 0) 100%)",
            }}
          ></div>
          {/* card 3 */}
          <div className="w-full md:text-start text-center md:ml-10">
            <h2 className="text-[#18181B] md:text-[48px] text-[40px] font-black">
              15+
            </h2>
            <h3 className="text-secondary-base md:text-[20px] text-lg font-bold uppercase mt-4">
              Countries Served
            </h3>
            <p className="text-[#71717A] text-sm font-medium  mt-4">
              From sleek websites to innovative apps — each project is a blend
              of strategy, design, and impact.
            </p>
          </div>
          <div
            className="w-1 h-48 mt-4 md:block hidden"
            style={{
              background:
                "linear-gradient(180deg, #27272A 0%, rgba(0, 0, 0, 0) 100%)",
            }}
          ></div>
          {/* card 4 */}
          <div className="w-full md:text-start text-center md:ml-10">
            <h2 className="text-[#18181B] md:text-[48px] text-[40px] font-black">
              98+
            </h2>
            <h3 className="text-secondary-base md:text-[20px] text-lg font-bold uppercase mt-4">
              Client Satisfaction
            </h3>
            <p className="text-[#71717A] text-sm font-medium  mt-4">
              From sleek websites to innovative apps — each project is a blend
              of strategy, design, and impact.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutWhoWeAre;
