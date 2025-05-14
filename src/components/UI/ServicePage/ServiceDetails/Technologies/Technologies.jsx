import { technologiesData } from "@/utils/fakeData/technologiesData";
import Image from "next/image";
import React from "react";
import TechnologiesCard from "./TechnologiesCard";
import AnimatedText from "@/components/common/AnimatedText";

const Technologies = () => {
  return (
    <div className="bg-[#F4F4F5] w-full relative overflow-hidden">
      <div className="bottom-gradient-line"></div>
      <div className="custom-gradient-line"></div>
      <div className="container py-14">
        <AnimatedText
          lines={[" Technologies We Master"]}
          className="md:text-[40px] text-[34px] font-bold  md:text-start text-center text-secondary-base"
        />
        <div className="mt-12 grid lg:grid-cols-2 grid-cols-1 gap-6">
          {technologiesData?.map((techGroup, index) => (
            <TechnologiesCard
              techGroup={techGroup}
              delay={index * 0.4}
              key={index}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technologies;
