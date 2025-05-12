import AnimatedText from "@/components/common/AnimatedText";
import BadgeLabel from "@/components/UI/BadgeLabel/BadgeLabel";
import SlideUp from "@/utils/animations/SlideUp";
import { designProcessData } from "@/utils/fakeData/designPorcessData";
import Image from "next/image";
import React from "react";
import DesignProcessCard from "./DesignProcessCard";

const DesignProcess = () => {
  return (
    <div className="container mt-24">
      <BadgeLabel text="design process " />
      <AnimatedText
        lines={["From Concept to Conversion — A Strategic Design Journey"]}
        className="animated-header"
      />
      <SlideUp>
        <p className="text-[16px] font-medium text-[#71717A] mt-6 text-center w-full max-w-[420px] mx-auto">
          Our design process blends creativity, data, and user insights —
          crafting a seamless shopping experience for TechStore Inc.’s
          e-commerce platform.
        </p>
      </SlideUp>

      <div className="mt-16 space-y-24 ">
        {designProcessData?.map((feature, idx) => (
          <DesignProcessCard
            key={feature.id}
            feature={feature}
            idx={idx}
            delay={idx * 0.4}
          />
        ))}
      </div>

      <div className="mt-24 grid lg:grid-cols-2 grid-cols-1 gap-10">
        <div className="col-span-2">
          <Image
            className="object-cover w-full h-full md:min-h-[480px] rounded-2xl"
            src="/images/portfolio/festure1.png"
            alt="festure1.png"
            width={500}
            height={400}
          />
        </div>

        <div className="col-span-2 grid lg:grid-cols-2 grid-cols-1 gap-10">
          <Image
            className="object-cover w-full h-full md:max-h-[480px] rounded-2xl"
            src="/images/portfolio/festure1.png"
            alt="festure1.png"
            width={500}
            height={400}
          />
          <Image
            className="object-cover w-full h-full md:min-h-[480px] rounded-2xl"
            src="/images/portfolio/festure1.png"
            alt="festure1.png"
            width={500}
            height={400}
          />
        </div>
      </div>
    </div>
  );
};

export default DesignProcess;
