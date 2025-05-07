import React from "react";
import BadgeLabel from "../../BadgeLabel/BadgeLabel";
import Button from "../../Button/Button";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const TrustedBrands = ({ status = false }) => {
  const brands = [
    { id: 1, name: "CloudSync", img: "/images/brands/brand1.png" },
    { id: 2, name: "CodeCrafters", img: "/images/brands/brand2.png" },
    { id: 3, name: "TechStore", img: "/images/brands/brand3.png" },
    { id: 4, name: "TrendyWear", img: "/images/brands/brand4.png" },
    { id: 5, name: "HealthTrack", img: "/images/brands/brand5.png" },
    { id: 6, name: "GreenGadget", img: "/images/brands/brand6.png" },
  ];
  const duplicatedBrands = [...brands, ...brands]; // duplicate the list for smooth looping

  return (
    <div className="bg-[#F4F4F5] h-[600px]  relative overflow-hidden">
      <div
        className={`absolute ${status === true ? "md:block" : "hidden"}`}
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

      <div className="container md:mr-96   md:px-32 md:flex md:py-0  pb-12">
        <div className="">
          <div className="relative top-1/6">
            <div className="md:max-w-[456px] ">
              <p className="text-[#3B82F6] text-sm md:text-start text-center font-medium">
                We Work With the Best
              </p>
              <h1 className="md:text-start text-center text-tertiary-base mt-6 text-2xl font-bold">
                Trusted by Leading Brands & Businesses
              </h1>
              <p className="text-[#71717A] md:text-start text-center mt-6 text-[16px] font-medium">
                We’ve had the privilege of working with some of the world’s most
                innovative companies, helping them scale with cutting-edge
                digital solutions.
              </p>
              <div className="md:mt-14 my-14 md:block flex justify-center  uppercase">
                <Button content="Get a Free Consultation" />
              </div>
            </div>
          </div>
          <div className="flex flex-row space-x-6">
            <div className="w-[240px] ">
              <Marquee direction="up" speed={100}>
                <div className="space-y-3">
                  {brands.map((brand, index) => (
                    <div
                      key={index}
                      className="bg-[#FFF]  w-full max-w-[224px]  rounded-lg flex items-center space-x-2 border border-border-base p-4"
                    >
                      <Image
                        src={brand?.img}
                        alt={brand?.name}
                        height={32}
                        width={32}
                      />
                      <h5 className="text-tertiary-base font-bold md:text-[28px] text-[18px]">
                        {brand?.name}
                      </h5>
                    </div>
                  ))}
                </div>
              </Marquee>
            </div>
            <div className="w-[240px] ">
              <Marquee direction="down" speed={100}>
                <div className="space-y-3">
                  {brands.map((brand, index) => (
                    <div
                      key={index}
                      className="bg-[#FFF] w-full max-w-[224px] space-y-2.5 rounded-lg flex items-center space-x-2 border border-border-base p-4"
                    >
                      <Image
                        src={brand?.img}
                        alt={brand?.name}
                        height={32}
                        width={32}
                      />
                      <h5 className="text-tertiary-base font-bold md:text-[28px] text-[18px]">
                        {brand?.name}
                      </h5>
                    </div>
                  ))}
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustedBrands;
