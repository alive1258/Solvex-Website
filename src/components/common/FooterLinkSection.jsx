import React from "react";
import { RiArrowRightLine } from "@remixicon/react";
const FooterLinkSection = ({ title, links }) => {
  return (
    <div className="md:col-span-1 md:mt-0 mt-10">
      <h2 className="text-[#FAFAFA] font-bold text-lg w-3/4 border-b pb-1 uppercase border-[#3B82F6]">
        {title}
      </h2>
      <div className="mt-10 space-y-4">
        {links.map((text, index) => (
          <div key={index} className="group cursor-pointer">
            <div className="flex items-center gap-2 ">
              <RiArrowRightLine
                size={18}
                className="fill-[#D4D4D8] group-hover:fill-[#3B82F6] transition-transform duration-300 ease-in-out group-hover:translate-x-1"
              />

              <p className="text-[#D4D4D8] group-hover:text-[#3B82F6] text-[16px] font-medium">
                {text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FooterLinkSection;
