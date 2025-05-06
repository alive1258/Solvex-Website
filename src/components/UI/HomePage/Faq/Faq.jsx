import React from "react";
import BadgeLabel from "../../BadgeLabel/BadgeLabel";
import Button from "../../Button/Button";
import AccordionList from "./AccordionList";

const Faq = () => {
  return (
    <div className="container md:my-14 mt-12">
      <BadgeLabel text="frequently asked questions" />
      <h1 className="text-2xl font-bold text-primary-base mt-6 text-center">
        Got Questions? We’ve Got Answers!
      </h1>
      <p className="text-[16px] font-medium text-[#71717A] w-full max-w-[420px] mx-auto mt-6 text-center">
        Have questions about our services? Find quick answers below! If you need
        further assistance, feel free to contact us.
      </p>
      <div className="mt-14 grid md:grid-cols-3 gap-8">
        <div className="col-span-1 h-fit border border-border-base rounded-lg bg-[#F4F4F5] px-4 py-6 md:w-full w-[385px]">
          <div className=" flex justify-center ">
            <div className="flex md:w-[172px] w-[148px] md:h-[172px] h-[148px] p-[14px] items-center gap-[8px] rounded-full bg-[linear-gradient(357deg,_#FFF_2.79%,_#D9E2FF_97.39%)]">
              <div className="flex md:w-[144px] w-[116px] md:h-[144px] h-[116px] py-[48px] justify-center items-center shrink-0 rounded-full border border-white bg-[linear-gradient(85deg,_#2154FF_0%,_#5079FF_100%)]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="48"
                  viewBox="0 0 32 48"
                  fill="none"
                >
                  <g clipPath="url(#clip0_199_1018)">
                    <circle
                      cx="4.71415"
                      cy="42.8577"
                      r="20.1429"
                      fill="white"
                    />
                    <circle
                      cx="24.6432"
                      cy="1.92787"
                      r="22.0714"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_199_1018">
                      <rect
                        width="30.8571"
                        height="48"
                        fill="white"
                        transform="translate(0.428711)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </div>

          <h3 className="text-secondary-base mt-10 font-bold text-2xl text-center">
            Ask a Questions
          </h3>
          <p className="text-tertiary-base mt-8 font-medium text-[16px] text-center">
            Have questions about our services? Find quick answers below! If you
            need further assistance, feel free to contact us.
          </p>
          <div className="mt-8 flex justify-center uppercase">
            <Button content="ask any question" />
          </div>
        </div>
        <div className="col-span-2">
          <AccordionList />
        </div>
      </div>
    </div>
  );
};

export default Faq;
