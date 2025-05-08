"use client";
import React from "react";
import BadgeLabel from "../../BadgeLabel/BadgeLabel";
import Image from "next/image";
import Button from "../../Button/Button";
import AnimatedText from "@/components/common/AnimatedText";
import AnimatedParagraph from "@/components/common/AnimatedParagraph";
import { motion } from "framer-motion";
import FeatureCard from "./FeatureCard";

const WhoWeAre = () => {
  const features = [
    {
      id: 1,
      title: "10+ Years of Experience",
      description:
        "We prioritize customer needs, providing tailor-made solutions and transparent communication.",
      iconColor: "#E0F2FE",
      gradient: "from-[#E0F2FE] to-transparent",
      img: "/images/features/feature1.svg",
    },
    {
      id: 2,
      title: "Expert Team of Developers & Designers",
      description:
        "A decade of experience in building web solutions for diverse industries.",
      iconColor: "#FFF1F2",
      gradient: "from-[#FFF1F2] to-transparent",
      img: "/images/features/feature2.svg",
    },
    {
      id: 3,
      title: "Client-Centric Approach",
      description:
        "Commitment to delivering high-quality services with ongoing support and improvements.",
      iconColor: "#ECFCCB",
      gradient: "from-[#ECFCCB] to-transparent",
      img: "/images/features/feature3.svg",
    },
    {
      id: 4,
      title: "100% Satisfaction Guarantee",
      description:
        "A skilled team proficient in modern technologies, frameworks, and design principles.",
      iconColor: "#DCFCE7",
      gradient: "from-[#DCFCE7] to-transparent",
      img: "/images/features/feature4.svg",
    },
    {
      id: 5,
      title: "Client-Centric Approach",
      description:
        "Creative and strategic thinking to solve complex problems efficiently.",
      iconColor: "#F4F4F5",
      gradient: "from-[#F4F4F5] to-transparent",
      img: "/images/features/feature5.svg",
    },
    {
      id: 6,
      title: "100% Satisfaction Guarantee",
      description:
        "Future-proof, scalable architecture tailored for business growth.",
      iconColor: "#FFEDD5",
      gradient: "from-[#FFEDD5] to-transparent",
      img: "/images/features/feature6.svg",
    },
  ];
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
          className="text-2xl font-bold text-primary-base mt-6 text-center w-full md:max-w-[450px] max-w-[230px] mx-auto"
        />
        <AnimatedParagraph
          text="We are a team of dedicated professionals committed to building digital
          solutions that help businesses thrive.  With years of
          experience, we deliver cutting-edge websites, applications, and UI/UX"
          className="text-center w-full max-w-[550px] mx-auto mt-6 text-[16px] font-medium text-primary-base"
          once={false}
          duration={0.8}
          yOffset={100}
        />

        <div className="my-14 grid md:grid-cols-2 gap-x-6">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{
              opacity: 1,

              scale: 1,
              transition: {
                duration: 0.8,
                ease: "easeInOut",
              },
            }}
            viewport={{ once: false }}
          >
            <Image
              className="rounded-2xl w-full md:h-[469px]"
              src="/images/workGallery/team.png"
              alt="workGallery1"
              height={459}
              width={536}
            />
          </motion.div>
          <div className="grid md:mt-0 mt-10 md:grid-cols-2 grid-cols-1 gap-x-5 md:gap-y-5 gap-y-10">
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.id}
                feature={feature}
                delay={index * 0.3}
              />
            ))}

            <motion.div
              initial={{ opacity: 0, y: 100 }} // Starts lower
              whileInView={{
                opacity: 1,
                y: 0, // Moves up
                transition: {
                  duration: 0.8,
                  ease: "easeInOut",
                  delay: 0.7,
                },
              }}
              viewport={{ once: false }}
              className="pt-1 uppercase md:block  flex  justify-center"
            >
              <Button content="get started now" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
