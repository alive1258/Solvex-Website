"use client";
import { motion } from "framer-motion";
import React from "react";
import Button from "../../Button/Button";
import AnimatedText from "@/components/common/AnimatedText";

const WhyChoose = () => {
  return (
    <div className="bg-[#18181B]">
      <div className="py-20 container lg:grid lg:grid-cols-2 grid-cols-1 gap-12">
        <div className="md:mt-8">
          <div className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="20"
              viewBox="0 0 13 20"
              fill="none"
            >
              <g clipPath="url(#clip0_314_2064)">
                <circle cx="1.78544" cy="17.8572" r="8.39286" fill="#3B82F6" />
                <circle cx="10.089" cy="0.803606" r="9.19643" fill="#3B82F6" />
              </g>
              <defs>
                <clipPath id="clip0_314_2064">
                  <rect width="12.8571" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <h6 className="text-[#FAFAFA] text-[16px] font-medium">
              Why Choose Solvex?
            </h6>
          </div>
          <AnimatedText
            lines={["Creative Solutions, Powered by Innovation"]}
            className="text-[#FAFAFA] text-[32px] font-black mt-8"
          />
          <div className="flex mt-8  space-x-2">
            <AnimatedText
              lines={["Solvex Brings"]}
              className="text-[#3B82F6] text-[32px] font-black "
            />
            <AnimatedText
              lines={["Your Vision to Life"]}
              className="text-[#FAFAFA] text-[32px] font-black "
            />
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
            className="md:mt-14 mt-10  uppercase"
          >
            <Button content=" Get Started" />
          </motion.div>
        </div>

        <div className="lg:grid lg:grid-cols-2 grid-cols-1 md:mt-0 mt-10 md:space-y-0 space-y-6">
          {/* card 1  */}
          <motion.div
            initial={{ opacity: 0, x: -100 }} // Starts lower
            whileInView={{
              opacity: 1,
              x: 0, // Moves up
              transition: {
                duration: 0.8,
                ease: "easeInOut",
                delay: 0.3,
              },
            }}
            viewport={{ once: false }}
            className="md:border-r border-b border-[#27272A] p-6"
          >
            <div className="flex  items-center space-x-3">
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
              <h1 className="text-[#FAFAFA] text-lg font-bold">
                Innovation at Our Core
              </h1>
            </div>
            <div
              style={{
                background:
                  "linear-gradient(90deg, #818181 -0.2%, rgba(0, 0, 0, 0.00) 101.03%)",
              }}
              className="h-1 w-2/4 mt-4"
            ></div>
            <p className="text-white mt-4">
              We stay ahead of design trends and technology, ensuring every
              project is modern, impactful, and future-proof.
            </p>
          </motion.div>
          {/* card 2 */}
          <motion.div
            initial={{ opacity: 0, x: 100 }} // Starts lower
            whileInView={{
              opacity: 1,
              x: 0, // Moves up
              transition: {
                duration: 0.8,
                ease: "easeInOut",
                delay: 0.3,
              },
            }}
            viewport={{ once: false }}
            className="border-b border-[#27272A] p-6"
          >
            <div className="flex  items-center space-x-3">
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
              <h1 className="text-[#FAFAFA] text-lg font-bold">
                Human-Centered Design
              </h1>
            </div>
            <div
              style={{
                background:
                  "linear-gradient(90deg, #818181 -0.2%, rgba(0, 0, 0, 0.00) 101.03%)",
              }}
              className="h-1 w-2/4 mt-4"
            ></div>
            <p className="text-white my-4">
              Our user-first approach means your brand connects deeply with its
              audience — blending creativity with functionality.
            </p>
          </motion.div>
          {/* card 3  */}
          <motion.div
            initial={{ opacity: 0, x: -100 }} // Starts lower
            whileInView={{
              opacity: 1,
              x: 0, // Moves up
              transition: {
                duration: 0.8,
                ease: "easeInOut",
                delay: 0.3,
              },
            }}
            viewport={{ once: false }}
            className="md:border-r border-b border-[#27272A] p-6"
          >
            <div className="flex  items-center space-x-3">
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
              <h1 className="text-[#FAFAFA] text-lg font-bold">
                Results-Driven Solutions
              </h1>
            </div>
            <div
              style={{
                background:
                  "linear-gradient(90deg, #818181 -0.2%, rgba(0, 0, 0, 0.00) 101.03%)",
              }}
              className="h-1 w-2/4 mt-4"
            ></div>
            <p className="text-white mt-4">
              Design without strategy is just art. We create with purpose —
              focused on boosting engagement, conversions, and growth.
            </p>
          </motion.div>
          {/* card 4 */}
          <motion.div
            initial={{ opacity: 0, x: 100 }} // Starts lower
            whileInView={{
              opacity: 1,
              x: 0, // Moves up
              transition: {
                duration: 0.8,
                ease: "easeInOut",
                delay: 0.3,
              },
            }}
            viewport={{ once: false }}
            className=" border-b border-[#27272A] p-6"
          >
            <div className="flex  items-center space-x-3">
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
              <h1 className="text-[#FAFAFA] text-lg font-bold">
                Collaborative Partnership
              </h1>
            </div>
            <div
              style={{
                background:
                  "linear-gradient(90deg, #818181 -0.2%, rgba(0, 0, 0, 0.00) 101.03%)",
              }}
              className="h-1 w-2/4 mt-4"
            ></div>
            <p className="text-white my-4">
              Your vision + our expertise = extraordinary outcomes. We work
              hand-in-hand with clients to craft tailor-made solutions.
            </p>
          </motion.div>
          {/* card 5  */}
          <motion.div
            initial={{ opacity: 0, x: -100 }} // Starts lower
            whileInView={{
              opacity: 1,
              x: 0, // Moves up
              transition: {
                duration: 0.8,
                ease: "easeInOut",
                delay: 0.3,
              },
            }}
            viewport={{ once: false }}
            className="md:border-r md:border-b-0 border-b  border-[#27272A] p-6"
          >
            <div className="flex  items-center space-x-3">
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
              <h1 className="text-[#FAFAFA] text-lg font-bold">
                Global Reach, Local Impact
              </h1>
            </div>
            <div
              style={{
                background:
                  "linear-gradient(90deg, #818181 -0.2%, rgba(0, 0, 0, 0.00) 101.03%)",
              }}
              className="h-1 w-2/4 mt-4"
            ></div>
            <p className="text-white mt-4">
              With clients in 15+ countries, we design globally but customize
              every solution to reflect your brand’s unique story.
            </p>
          </motion.div>
          {/* card 6 */}
          <motion.div
            initial={{ opacity: 0, x: 100 }} // Starts lower
            whileInView={{
              opacity: 1,
              x: 0, // Moves up
              transition: {
                duration: 0.8,
                ease: "easeInOut",
                delay: 0.3,
              },
            }}
            viewport={{ once: false }}
            className="   border-[#27272A] p-6"
          >
            <div className="flex  items-center space-x-3">
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
              <h1 className="text-[#FAFAFA] text-lg font-bold">
                Proven Track Record
              </h1>
            </div>
            <div
              style={{
                background:
                  "linear-gradient(90deg, #818181 -0.2%, rgba(0, 0, 0, 0.00) 101.03%)",
              }}
              className="h-1 w-2/4 mt-4 "
            ></div>
            <p className="text-white my-4">
              50+ successful projects, 98% client satisfaction, and 10+ awards —
              our work speaks louder than words.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
