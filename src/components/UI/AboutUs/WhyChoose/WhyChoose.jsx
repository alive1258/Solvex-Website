import React from "react";
import Button from "../../Button/Button";
import Image from "next/image";
import SlideUp from "@/utils/animations/SlideUp";
import SlideLeft from "@/utils/animations/SlideLeft";
import { features } from "@/utils/fakeData/featuresData";
import ChooseCard from "./ChooseCard";

const WhyChoose = () => {
  return (
    <div className="bg-[#18181B]">
      <div className="py-20 container lg:grid lg:grid-cols-2 grid-cols-1 gap-12">
        <div className="md:mt-8">
          <div className="flex items-center space-x-2">
            <Image
              src="/images/footer/footerLogo.png"
              alt="logo"
              width={13}
              height={20}
            />
            <h6 className="text-[#FAFAFA] text-[16px] font-medium">
              Why Choose Solvex?
            </h6>
          </div>
          <SlideLeft>
            <h1 className="text-[#FAFAFA] text-start text-[32px] max-w-[600px] font-black mt-8">
              Creative Solutions, Powered by Innovation{" "}
              <span className="text-blue-base">--Solvex</span> Brings Your
              Vision to Life
            </h1>
          </SlideLeft>

          <SlideUp className="md:mt-14 mt-10">
            <Button content=" Get Started" />
          </SlideUp>
        </div>

        <div className="lg:grid lg:grid-cols-2 grid-cols-1 md:mt-0 mt-10 md:space-y-0 space-y-6">
          {features?.map((feature, index) => (
            <ChooseCard
              key={feature.id}
              feature={feature}
              delay={index * 0.4}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
