import SlideRight from "@/utils/animations/SlideRight";
import Image from "next/image";
import React from "react";

const Points = ({ point, delay = 0 }) => {
  return (
    <>
      <SlideRight delay={delay} className="flex items-center space-x-4">
        <Image
          src="/images/career/icons/checkBox.svg"
          alt="check"
          width={24}
          height={24}
        />
        <p className="text-[20px] font-medium text-tertiary-base">{point}</p>
      </SlideRight>
    </>
  );
};

export default Points;
