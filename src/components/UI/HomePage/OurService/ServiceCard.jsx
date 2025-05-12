import Image from "next/image";
import React from "react";

import SlideUp from "@/utils/animations/SlideUp";
import Link from "next/link";
const ServiceCard = ({ service, delay = 0 }) => {
  return (
    <SlideUp delay={delay} className="cursor-pointer  w-full max-w-[312px]">
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
        <div className="group">
          <div
            className={`flex transition-transform duration-300 ease-in-out group-hover:translate-x-2 items-center gap-x-2 mt-6 border-b group-hover:border-[#3B82F6]  border-[#71717A] w-fit`}
          >
            <Link href={`/service/${service.id}`}>
              <span
                className={`text-[#71717A] group-hover:text-[#3B82F6] uppercase font-bold text-sm `}
              >
                get in touch
              </span>
            </Link>
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
                className={`stroke-[#71717A] group-hover:stroke-[#3B82F6] group-hover:stroke-[${service.borderColor}] transition-all duration-300 ease-in-out`}
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </SlideUp>
  );
};

export default ServiceCard;
