"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
const FeatureCard = ({ feature, delay = 0 }) => {
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
      className="flex gap-x-4"
    >
      <div
        className={`rounded px-[22px] pt-[22px] pb-[59px] w-fit h-fit bg-gradient-to-b ${feature?.gradient}`}
      >
        <Image src={feature?.img} alt={feature?.title} height={48} width={48} />
      </div>
      <div>
        <h4 className="text-secondary-base text-lg font-bold">
          {feature?.title}
        </h4>
        <p className="text-[#71717A] text-sm font-medium mt-2">
          {feature?.description}
        </p>
      </div>
    </motion.div>
  );
};

export default FeatureCard;
