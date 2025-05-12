import AnimatedText from "@/components/common/AnimatedText";
import Button from "@/components/UI/Button/Button";
import WorkGallery from "@/components/UI/HomePage/WorkGallery/WorkGallery";
import SlideUp from "@/utils/animations/SlideUp";
import React from "react";

const CustomSolutions = () => {
  return (
    <div>
      <div className="relative bg-[#FAFAFA] w-full md:h-[924px] overflow-hidden">
        {/* Bottom Gradient Line */}
        <div
          className="absolute md:block hidden"
          style={{
            width: "594px",
            height: "4px",
            left: "0px",
            bottom: "0px",
            background:
              "linear-gradient(85deg, rgba(255, 255, 255, 0.00) 0%, #2154FF 100%)",
          }}
        ></div>
        {/* Blue blurred circle background (left) */}
        <div
          className="absolute"
          style={{
            width: "672px",
            height: "672px",
            borderRadius: "672px",
            background: "#3B82F6",
            opacity: 0.6,
            filter: "blur(175px)",
            top: "-228px",
            left: "-461px",
          }}
        ></div>

        {/* Emerald blurred circle background (right) */}
        <div
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
        ></div>

        {/* White triangle SVG (centered) */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1225"
          height="924"
          viewBox="0 0 1225 924"
          fill="none"
          className="absolute left-1/2 -translate-x-1/2"
        >
          <path d="M0 0H1225L612.5 924L0 0Z" fill="white" />
        </svg>

        {/* Text Content */}
        <div className="relative z-10 md:mt-14 mt-12 h-full">
          <div className="flex justify-center">
            <AnimatedText
              lines={[
                " Custom Web Development Solutions",
                "For Modern Businesses",
              ]}
              className="md:text-[56px] text-[32px] font-extrabold max-w-[954px] w-full text-center text-gray-900"
            />
          </div>
          <SlideUp>
            <p className="max-w-[600px] mx-auto mt-10 w-full text-center ">
              From dynamic websites to complex web applications — we develop
              solutions that scale with your growth.
            </p>
          </SlideUp>
          <SlideUp delay={0.6}>
            <div className="md:mt-20 mt-12 flex justify-center uppercase">
              <Button content=" Let’s Build Your Website" />
            </div>
          </SlideUp>
          <div className="md:mt-[120px] mt-10">
            <WorkGallery />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomSolutions;
