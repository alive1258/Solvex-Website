"use client";
import { motion } from "framer-motion";

const BadgeLabel = ({ text }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.8,
          delay: 0,
          ease: "easeInOut",
        },
      }}
      viewport={{ once: false }}
      className="border border-[#D4D4D8] bg-white py-2 pl-2 pr-4 rounded-full w-fit mx-auto"
    >
      <div className="flex items-center gap-x-2">
        <div className="border border-[#3B82F6] bg-[#BFDBFE] flex justify-center items-center rounded-full size-7">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="9"
            height="14"
            viewBox="0 0 9 14"
            fill="none"
          >
            <g clipPath="url(#clip0_128_154)">
              <circle
                cx="1.25"
                cy="12.5"
                r="5.875"
                fill="url(#paint0_linear_128_154)"
              />
              <circle
                cx="7.0625"
                cy="0.5625"
                r="6.4375"
                fill="url(#paint1_linear_128_154)"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_128_154"
                x1="-4.625"
                y1="18.375"
                x2="8.01424"
                y2="17.3246"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#2154FF" />
                <stop offset="1" stopColor="#5079FF" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_128_154"
                x1="0.625"
                y1="7"
                x2="14.4744"
                y2="5.84898"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#2154FF" />
                <stop offset="1" stopColor="#5079FF" />
              </linearGradient>
              <clipPath id="clip0_128_154">
                <rect width="9" height="14" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <p className="text-[#71717A] text-sm uppercase font-medium">{text}</p>
      </div>
    </motion.div>
  );
};

export default BadgeLabel;
