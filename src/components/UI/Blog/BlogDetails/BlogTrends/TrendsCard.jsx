import React from "react";
import SlideLeft from "@/utils/animations/SlideLeft";
import SlideRight from "@/utils/animations/SlideRight";
import Image from "next/image";
import Points from "./Points";

const TrendsCard = ({ index, delay = 0, trend }) => {
  return (
    <div>
      <div key={trend?.id} className={`mt-${index === 0 ? "24" : "14"}`}>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
          {!trend?.reverse ? (
            <>
              <SlideLeft delay={delay} className="md:col-span-2">
                <Image
                  className="w-full h-full md:max-h-[480px] rounded-2xl"
                  src={trend?.images[0]}
                  alt="trend image 1"
                  width={500}
                  height={500}
                />
              </SlideLeft>
              <SlideRight delay={delay} className="md:col-span-1">
                <Image
                  className="w-full h-full md:max-h-[480px] rounded-2xl"
                  src={trend?.images[1]}
                  alt="trend image 2"
                  width={500}
                  height={500}
                />
              </SlideRight>
            </>
          ) : (
            <>
              <SlideLeft delay={delay} className="md:col-span-1">
                <Image
                  className="w-full h-full md:max-h-[480px] rounded-2xl"
                  src={trend?.images[0]}
                  alt="trend image 1"
                  width={500}
                  height={500}
                />
              </SlideLeft>
              <SlideRight delay={delay} className="md:col-span-2">
                <Image
                  className="w-full h-full md:max-h-[480px] rounded-2xl"
                  src={trend?.images[1]}
                  alt="trend image 2"
                  width={500}
                  height={500}
                />
              </SlideRight>
            </>
          )}
        </div>

        <div className="mt-11">
          <SlideRight>
            <h1 className="text-2xl text-primary-base font-bold">
              {trend?.title}
            </h1>
          </SlideRight>

          <div className="mt-6 space-y-4">
            {trend?.points?.map((point, index) => (
              <Points point={point} key={index} delay={index * 0.4} />
            ))}
          </div>
          <div className="mt-14">
            <p className="text-[20px] font-medium text-tertiary-base">
              {trend?.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendsCard;
