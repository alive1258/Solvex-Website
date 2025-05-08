import React from "react";
import BadgeLabel from "../../BadgeLabel/BadgeLabel";
import Image from "next/image";
import Link from "next/link";
import AnimatedText from "@/components/common/AnimatedText";
import AnimatedParagraph from "@/components/common/AnimatedParagraph";
import ServiceCard from "./ServiceCard";

const OurService = ({ status = false }) => {
  // 8 Cards Data
  const servicesData = [
    {
      id: 1,
      icon: "/images/services/service1.svg",
      bgColor: "#EDE9FE",
      borderColor: "#0EA5E9",
      title: "Custom Website Development",
      description:
        "We build tailor-made websites with the latest technologies to meet your business needs.",
    },
    {
      id: 2,
      icon: "/images/services/service2.svg",
      bgColor: "#E0F2FE",
      borderColor: "#0EA5E9",
      title: "E-Commerce Solutions",
      description:
        "Scalable, high-performance online stores with secure payment gateways and seamless UX.",
    },
    {
      id: 3,
      icon: "/images/services/service3.svg",
      bgColor: "#FFE4E6",
      borderColor: "#0EA5E9",
      title: "UI/UX Design & Prototyping",
      description:
        "Crafting intuitive, engaging, and modern UI designs that effortlessly enhance user experience.",
    },
    {
      id: 4,
      icon: "/images/services/service4.svg",
      bgColor: "#DCFCE7",
      borderColor: "#0EA5E9",
      title: "Web App Development",
      description:
        "Robust and feature-rich web applications designed for optimal performance and scalability.",
    },
    {
      id: 5,
      icon: "/images/services/service5.svg",
      bgColor: "#FCE7F3",
      borderColor: "#0EA5E9",
      title: "Mobile App Development",
      description:
        "Building responsive, high-performance mobile applications for iOS and Android platforms.",
    },
    {
      id: 6,
      icon: "/images/services/service6.svg",
      bgColor: "#ECFCCB",
      borderColor: "#0EA5E9",
      title: "API Development & Integration",
      description:
        "Secure, scalable APIs and third-party integrations to supercharge your applications.",
    },
    {
      id: 7,
      icon: "/images/services/service7.svg",
      bgColor: "#FEF3C7",
      borderColor: "#0EA5E9",
      title: "CMS Development",
      description:
        "Custom Content Management Systems (CMS) that give you control over your website with ease.",
    },
    {
      id: 8,
      icon: "/images/services/service8.svg",
      bgColor: "#E0E7FF",
      borderColor: "#0EA5E9",
      title: "Maintenance & Support",
      description:
        "Reliable maintenance and support services to ensure your website and apps run smoothly.",
    },
  ];
  // decide how many services to show
  const displayedServices = status ? servicesData.slice(0, 4) : servicesData;
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
      <div
        className={`absolute ${status === true ? "md:block" : "hidden"}`}
        style={{
          width: "594px",
          height: "4px",
          left: "0px",
          top: "0px",
          background:
            " linear-gradient(85deg, rgba(255, 255, 255, 0.00) 0%, #2154FF 100%)",
        }}
      ></div>

      <div className="container md:py-16 py-12">
        <BadgeLabel text="Our Services" />
        <AnimatedText
          lines={[" Our Expertise in Web Development"]}
          className="text-2xl font-bold text-primary-base mt-6 text-center w-full md:max-w-[450px] max-w-[230px] mx-auto"
        />
        <AnimatedParagraph
          text="  We provide full-cycle web development solutions to  bring your
          vision to life.   We provide full-cycle web development solutions to  bring your
          vision to life."
          className="text-center w-full max-w-[550px] mx-auto mt-6 text-[16px] font-medium text-primary-base"
          once={false}
          duration={0.8}
          yOffset={100}
        />

        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-x-6 gap-y-8 mt-14 place-items-center">
          {displayedServices?.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              delay={index * 0.3}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurService;
