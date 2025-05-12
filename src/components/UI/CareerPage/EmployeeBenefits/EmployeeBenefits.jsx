import React from "react";
import BadgeLabel from "../../BadgeLabel/BadgeLabel";
import { employeeBenefitsData } from "@/utils/fakeData/employeeBenefitsData";
import SlideUp from "@/utils/animations/SlideUp";
import AnimatedText from "@/components/common/AnimatedText";
import BenefitCard from "./BenefitCard";

const EmployeeBenefits = () => {
  return (
    <div className="bg-[#F4F4F5] mt-14">
      <div className="container py-12">
        <BadgeLabel text="Employee Benefits" />

        <AnimatedText
          lines={[" Employee Benefits at Solvex — Empowering You to Thrive"]}
          className="animated-header"
        />
        <SlideUp>
          <p className="text-[16px] w-full max-w-[560px] mx-auto font-medium text-[#71717A] mt-6 text-center">
            At Solvex, we believe that happy employees create exceptional work.
            That’s why we provide a competitive, flexible, and rewarding
            benefits package designed to support your growth, well-being, and
            work-life balance.
          </p>
        </SlideUp>
        {/* card section  */}
        <div className="mt-14 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-6">
          {employeeBenefitsData?.map((benefit, index) => (
            <BenefitCard benefit={benefit} key={index} delay={index * 0.4} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmployeeBenefits;
