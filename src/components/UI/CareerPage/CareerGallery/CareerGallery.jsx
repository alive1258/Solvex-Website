import SlideLeft from "@/utils/animations/SlideLeft";
import SlideRight from "@/utils/animations/SlideRight";
import { careerGalleryData } from "@/utils/fakeData/careerGalleryData";
import Image from "next/image";
import React from "react";

const CareerGallery = () => {
  return (
    <div className="mt-14 overflow-hidden">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-5 relative container">
        {/* Glow Effects */}
        <div
          className="absolute rounded-full opacity-50 blur-[175px] z-0"
          style={{
            width: "364px",
            height: "364px",
            left: "140px",
            top: "20px",
            backgroundColor: "#84CC16",
          }}
        />
        <div
          className="absolute rounded-full opacity-50 blur-[175px] z-0"
          style={{
            width: "364px",
            height: "364px",
            right: "140px",
            top: "20px",
            backgroundColor: "#D946EF",
          }}
        />

        {/* Left Section */}
        <div className="md:grid-cols-2 grid-cols-1 grid gap-5 z-50 overflow-hidden">
          {careerGalleryData?.left?.map((item, index) => (
            <SlideLeft
              delay={index * 0.4}
              key={index}
              className={item.rowSpan === 2 ? "row-span-2" : ""}
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={500}
                height={200}
                className="w-full h-full max-h-[268px] md:max-h-[590px] object-cover rounded-lg"
              />
            </SlideLeft>
          ))}
        </div>

        {/* Right Section */}
        <div className="md:grid-cols-2 grid-cols-1 grid gap-5 w-full z-50">
          {careerGalleryData?.right?.map((item, index) => (
            <SlideRight
              delay={index * 0.4}
              key={index}
              className={item.colSpan === 2 ? "md:col-span-2" : ""}
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={500}
                height={200}
                className="w-full h-full max-h-[268px] md:max-h-[296px] object-cover rounded-lg"
              />
            </SlideRight>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CareerGallery;
