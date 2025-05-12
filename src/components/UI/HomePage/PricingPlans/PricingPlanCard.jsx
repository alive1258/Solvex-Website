import SlideUp from "@/utils/animations/SlideUp";
import { RiArrowRightUpLine } from "@remixicon/react";
import Link from "next/link";

const PricingPlanCard = ({ item, index, delay = 0 }) => {
  return (
    <SlideUp delay={delay}>
      <div
        key={item?.id}
        className="border border-[#D4D4D8] rounded-2xl bg-white-base h-full"
      >
        <div className="bg-[#F4F4F5] rounded-t-2xl p-6">
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-secondary-base text-2xl">
              {item?.title}
            </h3>
            {index === 1 && (
              <div className="border rounded-[99px] bg-[#DBEAFE] border-[#3B82F6] px-3 py-1.5 shadow-[-5px_5px_0px_0px_rgba(33,84,255,0.4),-10px_10px_0px_0px_rgba(46,100,240,0.3),-15px_15px_0px_0px_rgba(46,114,240,0.2),-20px_20px_0px_0px_rgba(46,141,240,0.1),-25px_25px_0px_0px_rgba(46,148,240,0.05)]">
                <p className="text-[#3B82F6] text-sm font-medium">
                  Most Popular
                </p>
              </div>
            )}
          </div>

          <div className="mt-6 flex items-center ">
            <h1 className="font-bold text-secondary-base text-[32px]">
              ${item?.price}
            </h1>
            <div className="font-medium text-primary-base text-[16px] mt-4 flex space-x-0.5">
              <span> /</span>
              <div className="lowercase">
                <span>per </span>
                {item?.category}
              </div>
            </div>
          </div>
          <p className="font-medium text-secondary-base text-lg mt-6 ">
            {item?.des}
          </p>
          <div className="mt-12 flex justify-center items-center">
            <Link className="w-full" href="/contact">
              <button
                type="button"
                className={`group relative inline-flex w-full uppercase font-medium text-[16px] cursor-pointer h-14 px-6 py-4 justify-center items-center gap-1 rounded-full text-white-base overflow-hidden transition-all duration-300 focus:ring-4 focus:outline-none ${
                  index === 1
                    ? "bg-gradient-to-r from-[#2154FF] to-[#5079FF]"
                    : "bg-[#000]"
                }`}
              >
                {index !== 1 && (
                  <span className="absolute inset-0 bg-gradient-to-r from-[#2154FF] to-[#5079FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full z-0" />
                )}
                <span className="relative z-10 flex items-center gap-1">
                  get started
                  <RiArrowRightUpLine
                    className="transform transition-all duration-300 ease-in-out group-hover:rotate-45"
                    size={24}
                  />
                </span>
              </button>
            </Link>
          </div>
        </div>
        <div className=" p-6">
          <h5 className="text-secondary-base font-bold text-lg">
            {item?.plan_title}
          </h5>
          <div className="mt-4 space-y-4">
            {item?.plan?.map((pla) => (
              <div key={pla?.id} className="flex items-center gap-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 21C13.1819 21 14.3522 20.7672 15.4442 20.3149C16.5361 19.8626 17.5282 19.1997 18.364 18.364C19.1997 17.5282 19.8626 16.5361 20.3149 15.4442C20.7672 14.3522 21 13.1819 21 12C21 10.8181 20.7672 9.64778 20.3149 8.55585C19.8626 7.46392 19.1997 6.47177 18.364 5.63604C17.5282 4.80031 16.5361 4.13738 15.4442 3.68508C14.3522 3.23279 13.1819 3 12 3C9.61305 3 7.32387 3.94821 5.63604 5.63604C3.94821 7.32387 3 9.61305 3 12C3 14.3869 3.94821 16.6761 5.63604 18.364C7.32387 20.0518 9.61305 21 12 21ZM11.768 15.64L16.768 9.64L15.232 8.36L10.932 13.519L8.707 11.293L7.293 12.707L10.293 15.707L11.067 16.481L11.768 15.64Z"
                    fill="url(#paint0_linear_224_141)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_224_141"
                      x1="3"
                      y1="21"
                      x2="22.3622"
                      y2="19.3908"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#2154FF" />
                      <stop offset="1" stopColor="#5079FF" />
                    </linearGradient>
                  </defs>
                </svg>
                <p className="text-primary-base font-medium text-[16px]">
                  {pla?.plan_des1}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SlideUp>
  );
};

export default PricingPlanCard;
