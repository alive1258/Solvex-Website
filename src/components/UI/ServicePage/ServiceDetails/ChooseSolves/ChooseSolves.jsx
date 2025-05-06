import React from "react";

const ChooseSolves = () => {
  return (
    <div className="bg-[#18181B] mt-14">
      <div className="container py-14">
        <h1 className="md:text-[40px] text-[32px] font-bold text-[#FFF] max-w-[532px] mx-auto text-center">
          {" "}
          Why Choose Solvex for Web Development
        </h1>

        <div className="mt-14 flex flex-col items-center justify-center space-y-6 md:flex-row md:space-x-6 md:space-y-0">
          {/* Card 1*/}
          <div className="relative flex w-full max-w-[312px] py-8 px-4 flex-col items-center gap-6 rounded-lg border border-[#27272A] bg-[rgba(39,39,42,0.3)] text-white-base">
            {/* Top Gradient Line */}
            <div className="absolute top-0  left-1/2 transform -translate-x-1/2 w-1/2 h-[2px] bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />

            {/* Lower Gradient Line at 290px */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-[2px] bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />

            <div
              style={{ background: "rgba(234, 179, 8, 0.10)" }}
              className="border border-[#EAB308] rounded-full size-16 flex justify-center items-center"
            >
              <span className="text-2xl font-bold text-[#EAB308]">01</span>
            </div>
            <h2 className="text-2xl font-bold text-[#FFF] ">
              Full-Stack Expertise
            </h2>
            <p className="text-center text-[16px] font-medium text-[#D4D4D8]">
              We handle both front-end and back-end development — ensuring
              seamless integration.
            </p>
          </div>
          {/* Card 2*/}
          <div className="relative flex w-full max-w-[312px] py-8 px-4 flex-col items-center gap-6 rounded-lg border border-[#27272A] bg-[rgba(39,39,42,0.3)] text-white-base">
            {/* Top Gradient Line */}
            <div className="absolute top-0  left-1/2 transform -translate-x-1/2 w-1/2 h-[2px]  bg-[linear-gradient(90deg,_rgba(0,_0,_0,_0)_0%,_#F43F5E_50%,_rgba(0,_0,_0,_0)_100%)]" />

            {/* Lower Gradient Line at 290px */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-[2px] bg-[linear-gradient(90deg,_rgba(0,_0,_0,_0)_0%,_#F43F5E_50%,_rgba(0,_0,_0,_0)_100%)]" />

            <div
              style={{ background: "rgba(244, 63, 94, 0.10)" }}
              className="border border-[#F43F5E] rounded-full size-16 flex justify-center items-center"
            >
              <span className="text-2xl font-bold text-[#F43F5E]">01</span>
            </div>
            <h2 className="text-2xl font-bold text-[#FFF] ">
              Scalable Solutions
            </h2>
            <p className="text-center text-[16px] font-medium text-[#D4D4D8]">
              From small business websites to enterprise-level platforms, we
              build with growth in mind.
            </p>
          </div>
          {/* Card 3*/}
          <div className="relative flex w-full max-w-[312px] py-8 px-4 flex-col items-center gap-6 rounded-lg border border-[#27272A] bg-[rgba(39,39,42,0.3)] text-white-base">
            {/* Top Gradient Line */}
            <div className="absolute top-0  left-1/2 transform -translate-x-1/2 w-1/2 h-[2px] bg-[linear-gradient(90deg,rgba(0,0,0,0)_0%,#84CC16_50%,rgba(0,0,0,0)_100%)]" />

            {/* Lower Gradient Line at 290px */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-[2px] bg-[linear-gradient(90deg,rgba(0,0,0,0)_0%,#84CC16_50%,rgba(0,0,0,0)_100%)]" />

            <div
              style={{ background: "rgba(132, 204, 22, 0.10)" }}
              className="border border-[#84CC16] rounded-full size-16 flex justify-center items-center"
            >
              <span className="text-2xl font-bold text-[#84CC16]">01</span>
            </div>
            <h2 className="text-2xl font-bold text-[#FFF] ">Security First</h2>
            <p className="text-center text-[16px] font-medium text-[#D4D4D8]">
              We implement the latest security measures to protect your data and
              users
            </p>
          </div>
          {/* Card 4*/}
          <div className="relative flex w-full max-w-[312px] py-8 px-4 flex-col items-center gap-6 rounded-lg border border-[#27272A] bg-[rgba(39,39,42,0.3)] text-white-base">
            {/* Top Gradient Line */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/2 h-[2px] bg-[linear-gradient(90deg,rgba(0,0,0,0)_0%,#3B82F6_50%,rgba(0,0,0,0)_100%)]" />

            {/* Lower Gradient Line at 290px */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-[2px] bg-[linear-gradient(90deg,rgba(0,0,0,0)_0%,#3B82F6_50%,rgba(0,0,0,0)_100%)]" />

            <div
              style={{ background: "rgba(59, 130, 246, 0.10)" }}
              className="border border-[#3B82F6] rounded-full size-16 flex justify-center items-center"
            >
              <span className="text-2xl font-bold text-[#3B82F6]">01</span>
            </div>
            <h2 className="text-2xl font-bold text-[#FFF] ">
              SEO & Speed Optimized
            </h2>
            <p className="text-center text-[16px] font-medium text-[#D4D4D8]">
              We build clean, SEO-optimized code for better search rankings and
              fast loading times
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseSolves;
