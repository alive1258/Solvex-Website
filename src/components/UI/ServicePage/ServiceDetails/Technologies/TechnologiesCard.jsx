import React from "react";
import SlideLeft from "@/utils/animations/SlideLeft";
import SlideRight from "@/utils/animations/SlideRight";
import Image from "next/image";

const TechnologiesCard = ({ techGroup, delay = 0, index }) => {
  const SlideComponent = index % 2 === 0 ? SlideLeft : SlideRight;
  return (
    <>
      <SlideComponent delay={delay}>
        <div
          key={techGroup?.id}
          className="bg-[#FFF] px-4  py-6 rounded-2xl relative"
        >
          <h5 className="text-[#3B82F6] text-lg font-bold">
            {techGroup?.title}
          </h5>

          <div className="mt-10">
            <>
              <div className="flex  md:gap-x-8  gap-x-3 items-center ">
                {techGroup.items.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white-base shadow-md py-6 px-4 rounded-lg border border-border-base md:flex  justify-center items-center space-x-2 w-full max-w-[184px]"
                  >
                    <div className="md:block flex items-center justify-center">
                      <Image
                        src={item?.icon}
                        alt={item?.name}
                        height={24}
                        width={25}
                      />
                    </div>
                    <p className="text-secondary-base text-lg font-medium md:text-start text-center">
                      {item?.name}
                    </p>
                  </div>
                ))}
              </div>
            </>
          </div>
        </div>
      </SlideComponent>
    </>
  );
};

export default TechnologiesCard;
