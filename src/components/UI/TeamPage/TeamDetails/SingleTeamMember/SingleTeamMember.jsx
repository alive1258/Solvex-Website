import {
  RiDribbbleLine,
  RiFacebookFill,
  RiInstagramLine,
  RiLinkedinFill,
  RiTwitterXLine,
} from "@remixicon/react";
import Image from "next/image";
import React from "react";

const SingleTeamMember = () => {
  const features = [
    "User Interface Design",
    "User Experience Research",
    "Prototyping (Figma, Adobe XD)",
    "Wireframing & Interaction Design",
  ];
  return (
    <div className="relative overflow-hidden w-full">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="371"
        height="883"
        viewBox="0 0 371 683"
        fill="none"
        className="absolute hidden md:block"
        style={{
          width: "312px",
          height: "989px",
          transform: "rotate(5deg)",
          position: "absolute",
          right: "0px",
          top: "-250px",
          fill: "white",
          opacity: 0.3,
          zIndex: 0,
        }}
      >
        <path
          opacity="0.3"
          d="M306.5 -167L576.7 -11L0.564062 682.897L306.5 -167Z"
          fill="white"
        />
      </svg>
      <div
        className="hidden md:block"
        style={{
          width: "672px",
          height: "672px",
          position: "absolute",
          right: "-400px",
          top: "100px",
          borderRadius: "672px",
          opacity: 0.6,
          background: "#3B82F6",
          filter: "blur(175px)",
          zIndex: -1,
        }}
      ></div>
      {/* <div
        className="absolute"
        style={{
          width: "672px",
          height: "672px",
          borderRadius: "672px",
          background: "#10B981",
          opacity: 0.6,
          filter: "blur(175px)",
          top: "-135px",
          right: "-478px",
        }}
      ></div> */}

      <div className="container py-14 grid md:grid-cols-2 grid-cols-1 gap-6">
        <div className="relative inline-block">
          {/* Frame background */}
          <div
            className="absolute mt-4 left-4/12 top-4/12 -translate-x-1/2 -translate-y-1/2 w-[297px] h-[462px] bg-no-repeat bg-cover bg-center z-0"
            style={{ backgroundImage: "url('/images/team/frame.png')" }}
          ></div>
          {/* Foreground image */}
          <Image
            className="rounded-2xl relative z-10"
            src="/images/team/singleTeam.png"
            alt="singleTeam"
            width={536}
            height={598}
          />
        </div>

        <div>
          <h1 className="text-[32px] font-bold text-primary-base">Sarah Lee</h1>
          <p className="text-lg font-medium text-primary-base">
            Lead UI/UX Designer
          </p>
          <p className="text-[16px] font-medium text-[#71717A] mt-8">
            Sarah is a creative powerhouse with over 6 years of experience in
            designing intuitive user interfaces and seamless user experiences.
            She specializes in turning complex ideas into clean, user-centric
            designs that drive engagement and conversions.
          </p>

          <div className="mt-12 space-y-7">
            {features.map((title, index) => (
              <div key={index} className="flex items-center space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="20"
                  viewBox="0 0 13 20"
                  fill="none"
                >
                  <g clipPath="url(#clip0_314_2010)">
                    <circle
                      cx="1.78568"
                      cy="17.8572"
                      r="8.39286"
                      fill="#3B82F6"
                    />
                    <circle
                      cx="10.0893"
                      cy="0.803606"
                      r="9.19643"
                      fill="#3B82F6"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_314_2010">
                      <rect width="12.8571" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <h1 className="text-primary-base text-lg font-bold">{title}</h1>
              </div>
            ))}
          </div>
          <div className="mt-16">
            <h2 className="text-lg font-bold text-primary-base">Social Link</h2>
            <div
              className="absolute w-full mt-4 h-[2px] max-w-[617px]"
              style={{
                background:
                  "linear-gradient(85deg, #2154FF 0%, rgba(255, 255, 255, 0.00) 100%)",
              }}
            ></div>

            <div className="mt-6 flex items-center space-x-3">
              <div className="team-social-icon group">
                <RiFacebookFill
                  className="text-gray-800 group-hover:text-white"
                  size={20}
                />
              </div>
              <div className="team-social-icon group">
                <RiInstagramLine
                  className="text-gray-800 group-hover:text-white"
                  size={20}
                />
              </div>
              <div className="team-social-icon group">
                <RiLinkedinFill
                  className="text-gray-800 group-hover:text-white"
                  size={20}
                />
              </div>
              <div className="team-social-icon group">
                <RiTwitterXLine
                  className="text-gray-800 group-hover:text-white"
                  size={20}
                />
              </div>
              <div className="team-social-icon group">
                <RiDribbbleLine
                  className="text-gray-800 group-hover:text-white"
                  size={20}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTeamMember;
