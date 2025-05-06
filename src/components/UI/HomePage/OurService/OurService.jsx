import React from "react";
import BadgeLabel from "../../BadgeLabel/BadgeLabel";
import Image from "next/image";
import Link from "next/link";

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
        status === true ? "md:mt-32 mt-[810px]" : "mt-0"
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
        <h1 className="text-2xl font-bold text-primary-base mt-6 text-center w-full md:max-w-[450px] max-w-[230px] mx-auto">
          Our Expertise in Web Development
        </h1>
        <p className="text-[16px] font-medium text-[#71717A] mt-6 text-center">
          We provide full-cycle web development solutions to <br /> bring your
          vision to life.
        </p>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-x-6 gap-y-8 mt-14 place-items-center">
          {displayedServices?.map((service) => (
            <div
              key={service.id}
              className="cursor-pointer group w-full max-w-[312px]"
            >
              <div
                className={`bg-white-base py-6 px-4 rounded-2xl group-hover:border border border-transparent  group-hover:border-[${service.borderColor}]`}
              >
                <div
                  style={{ backgroundColor: service.bgColor }}
                  className=" w-fit p-7  rounded-tl-[8px] rounded-tr-[8px] rounded-bl-[8px]  rounded-br-[32px]"
                >
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={40}
                    height={40}
                  />
                </div>
                <h4
                  className={`text-lg  font-bold group-hover:text-[${service.borderColor}] mt-6`}
                >
                  {service.title}
                </h4>
                <p className="text-[#71717A] font-medium text-[16px] mt-6">
                  {service.description}
                </p>
                <Link
                  href={`/service/${service?.id}`}
                  className={`flex items-center gap-x-2 mt-6 border-b hover:border-[${service.borderColor}]  border-[#71717A] w-fit`}
                >
                  <span
                    className={`text-[#71717A] uppercase font-bold text-sm hover:text-[${service.borderColor}]`}
                  >
                    get in touch
                  </span>
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
                      className={`stroke-[#71717A] group-hover:stroke-[${service.borderColor}] transition-all duration-300 ease-in-out`}
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurService;
