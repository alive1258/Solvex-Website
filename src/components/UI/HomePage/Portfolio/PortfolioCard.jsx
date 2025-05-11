import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const PortfolioCard = ({ item, idx, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }} // Starts lower
      whileInView={{
        opacity: 1,
        y: 0, // Moves up
        transition: {
          duration: 0.8,
          ease: "easeInOut",
          delay,
        },
      }}
      viewport={{ once: false }}
      className="bg-[#F5F5F4] p-6 my-8 grid md:grid-cols-2 grid-cols-1 gap-8 rounded-2xl"
    >
      {/* IMAGE SIDE */}
      <div className={`${idx % 2 !== 0 ? "md:order-2" : "md:order-1"}`}>
        <Image
          className="rounded-2xl w-full h-full"
          src={item?.image}
          alt={item?.company}
          height={384}
          width={500}
        />
      </div>

      {/* TEXT SIDE */}
      <div className={`${idx % 2 !== 0 ? "md:order-1" : "md:order-2"}`}>
        <div className="flex items-center gap-x-4 mt-8">
          <Image
            className="size-10"
            src={item?.logo}
            alt={item?.logo}
            height={40}
            width={40}
          />
          <h4 className="text-secondary-base md:text-2xl text-[20px] font-bold">
            {item?.company}
          </h4>
        </div>
        <h1 className="text-primary-base md:text-[32px] text-2xl mt-10 font-bold">
          {item?.title}
        </h1>
        <p className="text-[#71717A] text-[16px] mt-6 font-medium">
          {item?.description}
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          {item?.tags?.map((tag, idx) => (
            <span
              key={idx}
              className="border cursor-pointer transition-all duration-300 ease-in-out text-tertiary-base hover:text-[#3B82F6] rounded-3xl hover:border-[#3B82F6] border-[#71717A] px-4 py-2 text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
  <div className="group mt-9 w-fit">
  <div className="flex items-center transition-transform duration-300 ease-in-out group-hover:translate-x-2 gap-x-2 border-b border-[#71717A] group-hover:border-[#3B82F6]">
    <p className="text-[#71717A] uppercase font-bold cursor-pointer text-sm group-hover:text-[#3B82F6]">
      View Live Project
    </p>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className="cursor-pointer"
    >
      <path
        d="M14 16L18 12M18 12L14 8M18 12H6"
        className="stroke-[#71717A] group-hover:stroke-[#3B82F6] transition-all duration-300 ease-in-out"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
</div>

      </div>
    </motion.div>
  );
};

export default PortfolioCard;
