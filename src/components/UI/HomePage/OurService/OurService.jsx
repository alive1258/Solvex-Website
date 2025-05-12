import React from "react";
import BadgeLabel from "../../BadgeLabel/BadgeLabel";
import Image from "next/image";
import Link from "next/link";
import AnimatedText from "@/components/common/AnimatedText";
import AnimatedParagraph from "@/components/common/AnimatedParagraph";
import ServiceCard from "./ServiceCard";
import SlideUp from "@/utils/animations/SlideUp";
import { servicesData } from "@/utils/fakeData/servicesData";

const OurService = ({ status = false }) => {
  // decide how many services to show
  const displayedServices = status ? servicesData?.slice(0, 4) : servicesData;
  return (
    <div
      className={`bg-[#F4F4F5] ${
        status === true ? "md:mt-40 mt-[1050px]" : "mt-0"
      }   relative`}
    >
      <div
        style={{
          width: "594px",
          height: "4px",
          right: "0px",
          bottom: "0px",
          background:
            "linear-gradient(85deg, #2154FF 0%, rgba(255, 255, 255, 0.00) 100%)",
        }}
      ></div>

      <div className="container md:py-16 py-12">
        <BadgeLabel text="Our Services" />
        <AnimatedText
          lines={[" Our Expertise in Web Development"]}
          className="animated-header"
        />

        <SlideUp>
          <p className="primary-paragraph">
            We provide full-cycle web development solutions to bring your vision
            to life. We provide full-cycle web development solutions to bring
            your vision to life.
          </p>
        </SlideUp>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-x-6 gap-y-8 mt-14 place-items-center">
          {displayedServices?.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              delay={index * 0.4}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurService;
