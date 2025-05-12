import SlideRight from "@/utils/animations/SlideRight";
import Image from "next/image";
import React from "react";

const JobDescriptionCard = ({ item, delay = 0 }) => {
  return (
    <SlideRight delay={delay}>
      <div className="flex items-center space-x-4">
        <Image
          src="/images/career/icons/checkBox.svg"
          alt="check"
          width={24}
          height={24}
        />
        <p className="text-[20px] font-medium text-tertiary-base">{item}</p>
      </div>
    </SlideRight>
  );
};

export default JobDescriptionCard;
