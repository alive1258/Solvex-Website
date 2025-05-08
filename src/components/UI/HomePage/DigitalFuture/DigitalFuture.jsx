"use client";
import { motion } from "framer-motion";
import AnimatedText from "@/components/common/AnimatedText";
import Image from "next/image";
import React from "react";
import AnimatedParagraph from "@/components/common/AnimatedParagraph";

const DigitalFuture = ({ status = false }) => {
  return (
    <div className="bg-[#EFF6FF]  relative">
      {/* Bottom Gradient Line */}
      <div
        className={`absolute ${status === true ? "md:block" : "hidden"}`}
        style={{
          width: "594px",
          height: "4px",
          left: "0px",
          bottom: "0px",
          background:
            "linear-gradient(85deg, rgba(255, 255, 255, 0.00) 0%, #2154FF 100%)",
        }}
      ></div>
      <div className="py-12 container mx-auto">
        <div
          style={{
            borderRadius: "16px",
            background: "linear-gradient(85deg, #2154FF 0%, #5079FF 100%)",
          }}
          className="md:p-8 px-6 overflow-hidden text-white relative"
        >
          {/* Image positioned to top right */}
          <div className="absolute md:block hidden  top-0 right-0">
            <Image
              className="rounded-2xl"
              src="/images/degitalFuture/decorativeElements.png"
              alt="workGallery1"
              height={455}
              width={402}
            />
          </div>

          {/* Text Content */}
          <div className="flex justify-center md:py-20 py-16">
            <div className="text-white-base text-center ">
              <div className="md:text-[32px] text-2xl font-black">
                {status === true ? (
                  <AnimatedText
                    lines={[
                      "Work With Solvex - Let’s Build Your Digital Future!",
                    ]}
                    className="text-[#FAFAFA] text-[32px] font-black m"
                  />
                ) : (
                  <AnimatedText
                    lines={["Your Vision + Our Team = Digital Magic"]}
                    className="text-[#FAFAFA] text-[32px] font-black "
                  />
                )}
              </div>
              <div className="mt-5 font-medium text-[16px] w-full max-w-[430px] mx-auto">
                {status === true ? (
                  <AnimatedParagraph
                    text=" Your business deserves a winning digital solution. Let's  collaborate and  create something extraordinary"
                    duration={0.8}
                    yOffset={100}
                  />
                ) : (
                  <AnimatedParagraph
                    text="Let’s connect and create something groundbreaking. Join forces with Solvex today."
                    once={false}
                    duration={0.8}
                    yOffset={100}
                  />
                )}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 100 }} // Starts lower
                whileInView={{
                  opacity: 1,
                  y: 0, // Moves up
                  transition: {
                    duration: 0.8,
                    ease: "easeInOut",
                    delay: 0.3,
                  },
                }}
                viewport={{ once: false }}
                className="mt-12 flex justify-center items-center"
              >
                <button className="inline-flex uppercase font-medium text-[16px] cursor-pointer h-14 px-6  py-4 justify-center items-center gap-1 rounded-full bg-[#000] text-white-base hover:opacity-90 focus:ring-4 focus:outline-none">
                  Schedule a Free Consultation
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M6.4 18L16 8.4V17H18V5H6V7H14.6L5 16.6L6.4 18Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalFuture;
