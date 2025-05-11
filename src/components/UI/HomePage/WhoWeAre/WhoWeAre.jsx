"use client";
import React from "react";
import BadgeLabel from "../../BadgeLabel/BadgeLabel";
import Image from "next/image";
import Button from "../../Button/Button";
import AnimatedText from "@/components/common/AnimatedText";
import AnimatedParagraph from "@/components/common/AnimatedParagraph";
import { motion } from "framer-motion";
import FeatureCard from "./FeatureCard";
import SlideUp from "@/utils/animations/SlideUp";
import { features } from "@/utils/fakeData/featuresData";
import ZoomIn from "@/utils/animations/ZoomIn";

const WhoWeAre = () => {
  return (
    <div className="relative md:mt-14 mt-12 md:overflow-hidden">
      {/* Blurred Blue Circle */}
      <div
        className="absolute md:block hidden"
        style={{
          width: "455px",
          height: "455px",
          right: "-87px",
          bottom: "-134px",
          borderRadius: "455px",
          opacity: 0.16,
          background: "var(--blue-500, #3B82F6)",
          filter: "blur(100px)",
        }}
      ></div>

      {/* Bottom Gradient Line */}
      <div
        className="absolute md:block hidden"
        style={{
          width: "594px",
          height: "4px",
          left: "0px",
          bottom: "0px",
          background:
            "linear-gradient(85deg, rgba(255, 255, 255, 0.00) 0%, #2154FF 100%)",
        }}
      ></div>

      <div className="container md:px-20 px-5">
        <BadgeLabel text="Who We Are" />
        <AnimatedText
          lines={["A Passionate Team of Innovators & Developers."]}
          className="animated-header"
        />

        <SlideUp>
          <p className="primary-paragraph">
            We are a team of dedicated professionals committed to building
            digital solutions that help businesses thrive. With years of
            experience, we deliver cutting-edge websites, applications, and
            UI/UX
          </p>
        </SlideUp>

        <div className="my-14 grid md:grid-cols-2 gap-x-6">
          <ZoomIn>
            <Image
              className="rounded-2xl w-full md:h-[469px]"
              src="/images/workGallery/team.png"
              alt="workGallery1"
              height={459}
              width={536}
            />
          </ZoomIn>
          <div className="grid md:mt-0 mt-10 md:grid-cols-2 grid-cols-1 gap-x-5 md:gap-y-5 gap-y-10">
            {features?.map((feature, index) => (
              <FeatureCard
                key={feature.id}
                feature={feature}
                delay={index * 0.3}
              />
            ))}

            <SlideUp className="pt-1 uppercase md:block  flex  justify-center">
              <Button content="get started now" />
            </SlideUp>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
