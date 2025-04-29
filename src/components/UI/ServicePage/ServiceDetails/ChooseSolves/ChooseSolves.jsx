import React from "react";

const ChooseSolves = () => {
  return (
    <div className="bg-[#18181B] mt-14">
      <div className="container py-14">
        <h1 className="text-[40px] font-bold text-[#FFF] max-w-[532px] mx-auto text-center">
          {" "}
          Why Choose Solvex for Web Development
        </h1>

        <div className="mt-14 md:flex items-center md:space-x-6 md:space-y-0 space-y-6 relative">
          {/* Card */}
          <div className="relative flex w-full max-w-[312px] p-8 flex-col items-center gap-10 rounded-lg border border-[#27272A] bg-[rgba(39,39,42,0.3)] text-white">
            {/* Top Gradient Line */}
            <div className="absolute top-0  left-1/2 transform -translate-x-1/2 w-1/2 h-[2px] bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />

            {/* Lower Gradient Line at 290px */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-[2px] bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />

            <h3 className="text-xl font-semibold">Card Title</h3>
            <p className="text-center text-sm text-gray-300">
              This is some description inside the card. It’s centered and clean.
            </p>
            <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded text-white transition">
              Action
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseSolves;
